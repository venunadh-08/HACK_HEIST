// Import the functions you need from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: Replace the following with your app's Firebase project configuration
// This is the object you will get from the Firebase console.
const firebaseConfig = {
  apiKey: "AIzaSyC7EPnxkdnIP6G_2LLVthlUdiPhYGBpitg",
  authDomain: "hack-heist-70c4a.firebaseapp.com",
  projectId: "hack-heist-70c4a",
  storageBucket: "hack-heist-70c4a.firebasestorage.app",
  messagingSenderId: "714368783289",
  appId: "1:714368783289:web:c7364e396e7ba4c3d29c68",
  measurementId: "G-N3YBHVTN0P"
};

// Initialize Firebase with your configuration
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and export it so other parts of your app can use it
export const db = getDatabase(app);