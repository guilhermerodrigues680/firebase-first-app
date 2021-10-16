import app from "./app";

// Add SDKs for Firebase products that you want to use
import { getDatabase } from "firebase/database";

// Get a reference to the database service
const database = getDatabase(app);
export default database;
