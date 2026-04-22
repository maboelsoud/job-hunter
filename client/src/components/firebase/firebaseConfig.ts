import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, getAuth, sendPasswordResetEmail, User } from "firebase/auth";
import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyAc-l_ZQ9bnnh7UpXr-dGX6rST6sSyGj74",
  authDomain: "job-hunter-448218.firebaseapp.com",
  projectId: "job-hunter-448218",
  storageBucket: "job-hunter-448218.firebasestorage.app",
  messagingSenderId: "614172455862",
  appId: "1:614172455862:web:562ef62b98d480efddc717"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export interface AuthContextProps {
    signedIn: boolean;
    authLoading: boolean;
    currentUser: User | undefined;
  }
  
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);


  
  export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };


export function logIn (email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function signUp (email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function logOut() {
    return signOut(auth);
}

export function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
}

export async function loginWithLinkedIn() {
  alert('not implemented yet');
}

export function forgotPassword(email: string) {
  return sendPasswordResetEmail(auth, email);
}
