import { firestoreDatabase } from "./database";
import { collection, addDoc, onSnapshot, doc, getDoc, updateDoc } from "firebase/firestore";
// import { addDoc, doc } from "firebase/firestore";

const callsCollectionName = "calls";
const offerSubCollectionName = "offerCandidates";
// const answerSubCollectionName = "answerCandidates";

async function createOffer(offerSdp, offerType, answeredCallback) {
  const callsRef = collection(firestoreDatabase, callsCollectionName);
  // const answerCandidatesRef = collection(firestoreDatabase, callsCollectionName, answerSubCollectionName);

  const offer = {
    sdp: offerSdp,
    type: offerType,
  };

  const docRef = await addDoc(callsRef, { offer });
  const callId = docRef.id;
  console.log("Document written with ID (callId): ", callId);

  const docSubRef = collection(docRef, offerSubCollectionName);
  const docRef1 = await addDoc(docSubRef, offer);
  const offerId = docRef1.id;
  console.log("Document written with ID (offerId): ", offerId);

  // const userDocRef = doc(firestoreDatabase, callsCollectionName, callId);
  // const userDocSnap = await getDoc(userDocRef);

  const unsub = onSnapshot(docRef, (doc) => {
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

  return {
    callId,
    offerId,
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

async function answerCall(callId, answerType, answerSdp) {
  const callDocRef = doc(firestoreDatabase, callsCollectionName, callId);
  const answer = {
    type: answerType,
    sdp: answerSdp,
  };

  await updateDoc(callDocRef, { answer });
  return;
}

export default {
  createOffer,
  getOffer,
  answerCall,
};
