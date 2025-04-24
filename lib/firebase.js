// // Import the functions you need from the Firebase SDKs
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getAnalytics, isSupported } from "firebase/analytics";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
// };

// // Throw error if missing required config in production
// if (process.env.NODE_ENV === 'production') {
//   const missingKeys = Object.entries(firebaseConfig)
//     .filter(([_, value]) => !value)
//     .map(([key]) => key);

//   if (missingKeys.length > 0) {
//     throw new Error(
//       `Missing Firebase config values for: ${missingKeys.join(', ')}. ` +
//       'Please check your environment variables.'
//     );
//   }
// }

// // Initialize Firebase services
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);
// const storage = getStorage(app);

// // Analytics will be initialized client-side only
// let analytics;
// const initAnalytics = async () => {
//   if (typeof window !== 'undefined') {
//     try {
//       const isAnalyticsSupported = await isSupported();
//       if (isAnalyticsSupported) {
//         analytics = getAnalytics(app);
//       }
//     } catch (error) {
//       console.error("Firebase Analytics initialization error", error);
//     }
//   }
// };

// // Initialize analytics in development or production
// if (process.env.NODE_ENV !== 'test') {
//   initAnalytics();
// }

// export { db, auth, storage, analytics };








import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);