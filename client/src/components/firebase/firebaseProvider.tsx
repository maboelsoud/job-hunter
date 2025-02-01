import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { AuthCheck, useAuth } from "@react-firebase/auth";
import { AuthProvider } from "@react-firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth, app } from "./firebaseConfig";
import { StyledFirebaseAuth } from "react-firebaseui";
import { useNavigate } from "react-router-dom";


const db = getFirestore(app);

export function FirebaseLoginProvider() {
  const navigate = useNavigate();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userRef = doc(db, "users", user.uid);
                const userSnap = await getDoc(userRef);
                if (userSnap.exists()){
                    console.log("User exists", userSnap.data());
                } else {
                    console.log("New user");
                }
                navigate("/main");
            } else {
                navigate("/");
            }
        });
        return unsubscribe;
    }, []);

  return (
    <main>
        {/* <AuthCheck fallback={<div>Loading</div>} > */}
            <div>
                <AuthCheck fallback={<div>Loading</div>}>
                    <div>Main App</div>
                </AuthCheck>
            </div>
        {/* </AuthCheck> */}
    </main>
  );
}
