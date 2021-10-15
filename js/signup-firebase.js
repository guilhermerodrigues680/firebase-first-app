// https://firebase.google.com/docs/web/setup?hl=pt-br
// https://firebase.google.com/docs/database/web/start?hl=pt-br#web-version-9

console.debug("signup-firebase");
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhGCNmt7bI44RHoVHTlrrKtX55wyohfOY",
  authDomain: "tis1puc.firebaseapp.com",
  projectId: "tis1puc",
  databaseURL: "https://tis1puc-default-rtdb.firebaseio.com", // Realtime Database
  storageBucket: "tis1puc.appspot.com",
  messagingSenderId: "259785152988",
  appId: "1:259785152988:web:42475483c13a738aaad719",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
console.debug(app);

// auth
const auth = getAuth();
auth.languageCode = "pt-BR";

window.recaptchaVerifier = new RecaptchaVerifier(
  "recaptcha-container",
  {
    size: "normal",
    callback: (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      console.debug("reCAPTCHA solved");
      authenticate();
    },
    "expired-callback": () => {
      // Response expired. Ask user to solve reCAPTCHA again.
      console.debug("Response expired");
    },
  },
  auth
);

recaptchaVerifier.render().then((widgetId) => {
  console.debug("window.recaptchaWidgetId", window.recaptchaWidgetId);
  window.recaptchaWidgetId = widgetId;
  console.debug("window.recaptchaWidgetId", window.recaptchaWidgetId, widgetId);
});

// const phoneNumber = getPhoneNumberFromUserInput();
const phoneNumber = "+5538992537665";
const appVerifier = window.recaptchaVerifier;

function authenticate() {
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.debug("confirmationResult", confirmationResult);
    })
    .catch((error) => {
      // Error; SMS not sent
      // ...
      console.debug("Error; SMS not sent", error);
    });
}

console.debug({ authenticate });

// auth fim

// Get a reference to the database service
const database = getDatabase(app);
console.debug(database);

async function writeUserData(userId, name, email, imageUrl) {
  console.debug("Salvando...");
  const a = ref(database, "users/" + userId);
  console.debug(a);
  try {
    const b = await set(a, {
      username: name,
      email: email,
      profile_picture: imageUrl,
    });

    console.debug("Salvo!");
    console.debug(a, b);
  } catch (error) {
    console.debug("Erro");
    console.debug(error);
  }
}

async function readUserData() {
  // const starCountRef = ref(db, 'posts/' + postId + '/starCount');
  const starCountRef = ref(database, "users/gui");
  const a = onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    // updateStarCount(postElement, data);
    console.debug(data);
  });
  console.debug(a);
}

(async () => {
  await writeUserData("gui", "Guilherme", "Guilherme@email.com", "https://url@url.com");
  await readUserData();
})();
