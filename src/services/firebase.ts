// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";

// Your web app's Firebase configuration
// IMPORTANT: In production, these values should be stored in environment variables
// For development, you need to replace these with your actual Firebase config values
// from the Firebase console (https://console.firebase.google.com/)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "wealth-weave.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "wealth-weave",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "wealth-weave.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "000000000000",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:000000000000:web:0000000000000000000000"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to save user data to Firestore
export const saveUserData = async (userData: any) => {
  try {
    const userDataWithTimestamp = {
      ...userData,
      createdAt: Timestamp.now()
    };
    
    const docRef = await addDoc(collection(db, "users"), userDataWithTimestamp);
    console.log("User data saved with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error saving user data: ", error);
    return { success: false, error };
  }
};

// Function to save email signup for newsletter/basic contact
export const saveEmailSignup = async (email: string, source: string = "homepage") => {
  try {
    const docRef = await addDoc(collection(db, "leads"), {
      email,
      source,
      createdAt: Timestamp.now()
    });
    console.log("Lead saved with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error saving lead: ", error);
    return { success: false, error };
  }
};

export default db; 