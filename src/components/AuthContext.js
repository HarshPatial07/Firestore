import { useContext, createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, firestore } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";
const AuthContext = createContext()
const firestoreUserCollection = collection(firestore, "users");
export const AuthContextProvider = ({ children }) => {
    const [user, setuser] = useState({})
    const logOut = () => {
        signOut(auth)
    }
    const facebookSignIn = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const { user } = result;
                if (user) {
                    const { uid, displayName, email } = user;
                    const userDocRef = doc(firestoreUserCollection, uid);
                    const userData = { displayName, email };
                    setDoc(userDocRef, userData, { merge: true })
                        .then(() => {
                            console.log("User data stored in Firestore");
                        })
                        .catch((error) => {
                            console.error("Error storing user data in Firestore: ", error);
                        });
                }
            })
            .catch((error) => {
                console.error("Facebook sign-in error: ", error);
            });
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser);
            console.log('User', currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    return (
        <AuthContext.Provider value={{ facebookSignIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    )
}
export const UserAuth = () => {
    return useContext(AuthContext)
}