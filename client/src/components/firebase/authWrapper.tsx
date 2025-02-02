
import { Navigate, Outlet } from "react-router";

// import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

import { onAuthStateChanged } from "firebase/auth";
import { auth, AuthContext, useAuth } from "./firebaseConfig";
import { useEffect, useState } from "react";
import React from "react";



export function PublicRoute({defaultPath = "/"} : {defaultPath?: string}) {

    const { signedIn } = useAuth();
    console.log("🚀 ~ PublicRoute ~ auth:", auth)

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
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setSignedIn(true);
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
      <AuthContext.Provider value={{ signedIn, authLoading: loading }}>
        {children}
      </AuthContext.Provider>
    );
  };