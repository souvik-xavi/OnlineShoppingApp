// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrybqZsOiP9N_J5R2eDt6FUB7AS_IyPu0",
  authDomain: "shoppingapp-dev.firebaseapp.com",
  projectId: "shoppingapp-dev",
  storageBucket: "shoppingapp-dev.appspot.com",
  messagingSenderId: "347865402446",
  appId: "1:347865402446:web:bf6a71b078419d1e93c71f"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);