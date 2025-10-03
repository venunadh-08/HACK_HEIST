// Import the functions you need from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: Replace the following with your app's Firebase project configuration
// This is the object you will get from the Firebase console.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase with your configuration
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and export it so other parts of your app can use it
export const db = getDatabase(app);