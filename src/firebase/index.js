import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQvjv5J54Q4o2rlsaNqE6XwTYskB5K7qI",
  authDomain: "photo-95a4a.firebaseapp.com",
  projectId: "photo-95a4a",
  storageBucket: "photo-95a4a.appspot.com",
  messagingSenderId: "748054391188",
  appId: "1:748054391188:web:d91cce2a29d08bcd634781",
  measurementId: "G-6DN7R5RZ54"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default};
