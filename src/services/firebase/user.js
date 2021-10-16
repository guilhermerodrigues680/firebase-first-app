import database from "./database";
import { ref, set, get, push, child } from "firebase/database";

const usersPath = "users/";

/**
 *
 * @param {*} userId
 * @param {*} name
 * @param {*} email
 * @throws {Error} Lança uma exceção se não consegui salvar os dados
 */
async function writeUserData(name, email) {
  const userRef = ref(database, usersPath);
  const pushUserRef = push(userRef);
  const userId = pushUserRef.key;
  console.debug(userId);
  await set(pushUserRef, {
    userId,
    username: name,
    email: email,
  });
}

/**
 *
 * @param {*} userId
 * @throws {Error} Lança uma exceção se não consegui recuperar os dados
 */
async function readUserData(userId) {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, `${usersPath}${userId}`));
  if (snapshot.exists()) {
    console.debug("snapshot.exists");
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}

/**
 *
 * @param {*} email
 * @throws {Error} Lança uma exceção se não consegui recuperar os dados
 */
async function readUserDataByEmail(email) {
  email;
  const dbRef = ref(database);
  child(dbRef, usersPath).orderByChild();
  console.debug(dbRef);
  database.ref;
  // const snapshot = await get(child(dbRef, `${usersPath}${userId}`));
  // if (snapshot.exists()) {
  // console.debug("snapshot.exists");
  // console.log(snapshot.val());
  // } else {
  // console.log("No data available");
  // }
}

export default {
  writeUserData,
  readUserData,
  readUserDataByEmail,
};
