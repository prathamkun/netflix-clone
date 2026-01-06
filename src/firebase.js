import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCgCd2br2I8ztEMiHb3jTywjgo90MifmU8",
  authDomain: "netflix-clone-ef392.firebaseapp.com",
  projectId: "netflix-clone-ef392",
  storageBucket: "netflix-clone-ef392.firebasestorage.app",
  messagingSenderId: "37948290348",
  appId: "1:37948290348:web:371bcc8a7a5cc3b008e889"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email
    });

    toast.success("Account created successfully 🎉");
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].replaceAll("-", " "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Logged in successfully 🚀");
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].replaceAll("-", " "));
  }
};

const logout = async () => {
  await signOut(auth);
  toast.info("Logged out");
};

export { auth, db, login, signup, logout };
