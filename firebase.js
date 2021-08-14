import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfkO-ETtCrYRAoe8wkLLmA8HbCXjZ42Ao",
  authDomain: "facebook-clone-9be29.firebaseapp.com",
  projectId: "facebook-clone-9be29",
  storageBucket: "facebook-clone-9be29.appspot.com",
  messagingSenderId: "218115947405",
  appId: "1:218115947405:web:b50097fe23136270319bc4",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
