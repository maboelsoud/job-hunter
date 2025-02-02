import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, getAuth, sendPasswordResetEmail } from "firebase/auth";
import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export interface AuthContextProps {
    signedIn: boolean;
    authLoading: boolean;
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
