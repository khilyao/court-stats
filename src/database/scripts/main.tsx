import { getDatabase } from "firebase/database";
import { firebaseConfig } from "database/scripts/firebaseConfig";
import { initializeApp } from "firebase/app";

export const db = getDatabase();
initializeApp(firebaseConfig);
