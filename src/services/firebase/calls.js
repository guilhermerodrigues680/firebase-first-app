import { firestoreDatabase } from "./database";
import { collection, addDoc, onSnapshot, doc, getDoc, updateDoc } from "firebase/firestore";
// import { addDoc, doc } from "firebase/firestore";

const callsCollectionName = "calls";
const offerSubCollectionName = "offerCandidates";
const answerSubCollectionName = "answerCandidates";

async function createCall() {
  const callsRef = collection(firestoreDatabase, callsCollectionName);
  const docRef = await addDoc(callsRef, {});
  const callId = docRef.id;
  return callId;
}

async function createOffer(callId, offerSdp, offerType, answeredCallback, answeredICECallback) {
  const callDocRef = doc(firestoreDatabase, callsCollectionName, callId);
  const offer = {
    sdp: offerSdp,
    type: offerType,
  };
  await updateDoc(callDocRef, { offer });

  // Aqui e um documento
  const unsub = onSnapshot(callDocRef, (doc) => {
    console.debug("onSnapshot");
    const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
    const data = doc.data();
    console.log(source, " data: ", data, doc);
    if (data?.answer) {
      answeredCallback && answeredCallback(data.answer);
    }
  });
  // TODO: Fazer o que com o unsub?
  unsub;

  // When answered, add candidate to peer connection
  const answerDocSubRef = collection(callDocRef, answerSubCollectionName);
  // Aqui e uma colecao
  const unsub2 = onSnapshot(answerDocSubRef, (snapshot) => {
    console.debug(snapshot);
    if (snapshot.empty) {
      return;
    }

    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        const data = change.doc.data();
        console.debug("onSnapshot answerDocSubRef", data);
        answeredICECallback && answeredICECallback(data);
      }
    });
  });
  unsub2;

  return {
    callId,
  };
}

async function getOffer(callId) {
  const callDocRef = doc(firestoreDatabase, callsCollectionName, callId);
  const callDocSnap = await getDoc(callDocRef);

  if (!callDocSnap.exists()) {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    throw new Error("No such document!");
  }

  const callData = callDocSnap.data();
  console.log("Document data:", callData);
  return callData.offer;
}

async function answerCall(callId, answerType, answerSdp, offerICECallback) {
  const callDocRef = doc(firestoreDatabase, callsCollectionName, callId);
  const answer = {
    type: answerType,
    sdp: answerSdp,
  };

  await updateDoc(callDocRef, { answer });

  const offerDocSubRef = collection(callDocRef, offerSubCollectionName);
  onSnapshot(offerDocSubRef, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      console.debug("offerDocSubRef.onSnapshot", change);
      if (change.type === "added") {
        let data = change.doc.data();
        offerICECallback && offerICECallback(data);
      }
    });
  });

  return;
}

async function pushIceOffer(callId, ice) {
  const callDocRef = doc(firestoreDatabase, callsCollectionName, callId);
  const offerDocSubRef = collection(callDocRef, offerSubCollectionName);
  const docRef1 = await addDoc(offerDocSubRef, ice);
  const iceOfferId = docRef1.id;
  console.log("Document written with ID (iceOfferId): ", iceOfferId);
}

async function pushIceAnswer(callId, ice) {
  const callDocRef = doc(firestoreDatabase, callsCollectionName, callId);
  const answerDocSubRef = collection(callDocRef, answerSubCollectionName);
  const docRef1 = await addDoc(answerDocSubRef, ice);
  const iceAnswerId = docRef1.id;
  console.log("Document written with ID (iceAnswerId): ", iceAnswerId);
}

export default {
  createCall,
  createOffer,
  getOffer,
  answerCall,
  pushIceOffer,
  pushIceAnswer,
};
