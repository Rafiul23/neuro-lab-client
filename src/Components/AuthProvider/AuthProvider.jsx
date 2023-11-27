import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './../../firebase/firebase.config';
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
           
            setLoading(false);
        })

       return ()=>{
         return unSubscribe();
       } 
    }, [])



    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        googleSignIn,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;