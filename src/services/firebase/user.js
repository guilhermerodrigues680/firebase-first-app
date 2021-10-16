import { firestoreDatabase } from "./database";
import { collection, addDoc, getDocs, getDoc, doc, query, where } from "firebase/firestore";

const usersCollectionName = "users";

/**
 *
 * @param {*} userId
 * @param {*} name
 * @param {*} email
 * @throws {Error} Lança uma exceção se não consegui salvar os dados
 */
async function writeUserData(username, email) {
  const usersCollectionRef = collection(firestoreDatabase, usersCollectionName);
  const docRef = await addDoc(usersCollectionRef, {
    username,
    email,
  });

  const userId = docRef.id;
  console.log("Document written with ID: ", userId);
  return userId;
}

/**
 *
 * @param {*} userId
 * @throws {Error} Lança uma exceção se não consegui recuperar os dados
 */
async function readUserData(userId) {
  const userDocRef = doc(firestoreDatabase, usersCollectionName, userId);
  const userDocSnap = await getDoc(userDocRef);
  if (userDocSnap.exists()) {
    const userData = userDocSnap.data();
    console.log("Document data:", userData);
    return userData;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
}

/**
 *
 * @param {*} email
 * @throws {Error} Lança uma exceção se não consegui recuperar os dados
 */
async function readUserDataByEmail(email) {
  const usersCollectionRef = collection(firestoreDatabase, usersCollectionName);
  const q = query(usersCollectionRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.size !== 0) {
    querySnapshot.forEach((doc) => {
      console.log("Document id: ", doc.id, " => ", doc.data());
    });
  } else {
    console.log("No such document!");
  }
}

/**
 *
 * @param {*} email
 * @throws {Error} Lança uma exceção se não consegui recuperar os dados
 */
async function readUserDataByUsername(username) {
  const usersCollectionRef = collection(firestoreDatabase, usersCollectionName);
  const q = query(usersCollectionRef, where("username", "==", username));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.size !== 0) {
    if (querySnapshot.size !== 1) {
      console.debug(querySnapshot.size !== 1, { username });
    }
    // querySnapshot.forEach((doc) => {
    //   console.log("Document id: ", doc.id, " => ", doc.data());
    // });
    const doc = querySnapshot.docs[0];
    const docId = doc.id;
    const docData = doc.data();
    console.log("Document id: ", docId, " => ", docData);
    return {
      _id: docId,
      ...docData,
    };
  } else {
    console.log("No such document!");
    return null;
  }
}

export default {
  writeUserData,
  readUserData,
  readUserDataByEmail,
  readUserDataByUsername,
};

console.debug({
  writeUserData,
  readUserData,
  readUserDataByEmail,
  readUserDataByUsername,
});
