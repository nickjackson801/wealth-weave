// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcu1kr4CBvlTnutUfBAlrz4-unvbI72uk",
  authDomain: "wealthweave-818bd.firebaseapp.com",
  projectId: "wealthweave-818bd",
  storageBucket: "wealthweave-818bd.firebasestorage.app",
  messagingSenderId: "686072498692",
  appId: "1:686072498692:web:fe087a78cdc0c9f0038351",
  measurementId: "G-P1DMHR0214"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to save user data to Firestore
export const saveUserData = async (userData: any) => {
  try {
    console.log("Attempting to save user data:", userData);
    
    // Validate that we have a Firestore instance
    if (!db) {
      console.error("Firestore instance is not initialized");
      return { success: false, error: "Firestore not initialized" };
    }
    
    const userDataWithTimestamp = {
      ...userData,
      createdAt: Timestamp.now()
    };
    
    // Log the collection reference
    const usersCollection = collection(db, "users");
    console.log("Users collection reference:", usersCollection);
    
    const docRef = await addDoc(usersCollection, userDataWithTimestamp);
    console.log("User data saved with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error saving user data: ", error);
    // Log more details about the error
    if (error instanceof Error) {
      console.error("Error name:", error.name);
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return { success: false, error };
  }
};

// Function to save email signup for newsletter/basic contact
export const saveEmailSignup = async (email: string, source: string = "homepage") => {
  try {
    console.log("Attempting to save email lead:", email, "from source:", source);
    
    // Validate that we have a Firestore instance
    if (!db) {
      console.error("Firestore instance is not initialized");
      return { success: false, error: "Firestore not initialized" };
    }
    
    // Log the collection reference
    const leadsCollection = collection(db, "leads");
    console.log("Leads collection reference:", leadsCollection);
    
    const docRef = await addDoc(leadsCollection, {
      email,
      source,
      createdAt: Timestamp.now()
    });
    console.log("Lead saved with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error saving lead: ", error);
    // Log more details about the error
    if (error instanceof Error) {
      console.error("Error name:", error.name);
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return { success: false, error };
  }
};

export default db; 