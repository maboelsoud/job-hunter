
import { Navigate, Outlet } from "react-router";

// import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

import { onAuthStateChanged, User } from "firebase/auth";
import { auth, AuthContext, db, useAuth } from "./firebaseConfig";
import { useEffect, useState } from "react";
import React from "react";
import { doc, getDoc } from "firebase/firestore";



export function PublicRoute({defaultPath = "/"} : {defaultPath?: string}) {

    const { signedIn } = useAuth();
    // console.log("🚀 ~ PublicRoute ~ auth:", auth)

    return (
        !signedIn? <Outlet /> : <Navigate to={defaultPath} />
    )
}

export function PrivateRoute({defaultPath = "/"} : {defaultPath?: string}) {

    const { signedIn } = useAuth();

    return (
        signedIn? <Outlet /> : <Navigate to={defaultPath} />
    )
}

  
  export const AuthProvider = ({ children }: {children: React.JSX.Element}) => {
    const [signedIn, setSignedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [currentUser, setUser] = useState<User | undefined>(undefined);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          setSignedIn(true);
          // const idToken = await user.getIdToken();
          setUser(user);
          console.log("🚀 ~ unsubscribe ~ user:", user)
          // console.log("🚀 ~ unsubscribe ~ idToken:", idToken)
          console.log("🚀 ~ unsubscribe ~ setSignedIn(true):", setSignedIn(true))
        } else {
          console.log("🚀 ~ unsubscribe ~ setSignedIn(false):", setSignedIn(false))
          setSignedIn(false);
        }
        setLoading(false);
      });
  
      return () => unsubscribe();
    }, []);
  
    return (
      <AuthContext.Provider value={{ signedIn, authLoading: loading, currentUser }}>
        {children}
      </AuthContext.Provider>
    );
  };