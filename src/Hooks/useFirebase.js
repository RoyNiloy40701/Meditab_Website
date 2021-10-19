import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
    },[])

    const logOut=()=>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=>setIsLoading(false))
    }
    const signInUsingGoogle=()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const RegisterUsingPassword=(name,email,password)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            console.log(result.user);
            setUserName(name);
        })
        .finally(()=>setIsLoading(false))
        

    }
    const setUserName=(name)=>{
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
          })
    }
    const processLogin =(email,password)=>{

        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            console.log(result.user);
            setUser(result.user);

        })
    }
    return {
        RegisterUsingPassword,
        signInUsingGoogle,
        user,
        processLogin,
        logOut,
        isLoading
        }
}
export default useFirebase;