import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  // Add this import for auth

const firebaseConfig = {
  apiKey: "AIzaSyDn5-KnJGjhHIoGd3npbrD9e_ytoseH8Bk",
  authDomain: "smaz-services.firebaseapp.com",
  projectId: "smaz-services",
  storageBucket: "smaz-services.firebasestorage.app",
  messagingSenderId: "897192827400",
  appId: "1:897192827400:web:75b6674d05fb1c1a354fbd",
  measurementId: "G-M4H3MG9P5E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);  // Initialize auth

export { auth, analytics };  // Export auth and analytics
