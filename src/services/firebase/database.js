import app from "./app";

// Add SDKs for Firebase products that you want to use
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// Get a reference to the database service
const firestoreDatabase = getFirestore();
const realTimeDatabase = getDatabase(app);

export { realTimeDatabase, firestoreDatabase };
