import { initializeApp, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFWBjspPB_xEStdJPLpJlFg-SIUXD5bec",
  authDomain: "restaurant-e0f87.firebaseapp.com",
  projectId: "restaurant-e0f87",
  storageBucket: "restaurant-e0f87.appspot.com",
  messagingSenderId: "505733975965",
  appId: "1:505733975965:web:9a6903fe9bbfb628c86974"
};
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const storage = getStorage(app);
const db = getFirestore(app);
export {app, auth, db, storage};