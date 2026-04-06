import axios from 'axios';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import { AuthContext } from './AuthContext';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const[ user, setUser ] = useState( null );
    const [ loading, setLoading ] = useState( true );
    const [ role, setRole ] = useState( null );

    const registerUser = ( email, password ) => {
        setLoading( true );
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = ( email, password ) => {
        setLoading( true );
        return signInWithEmailAndPassword( auth, email, password )
    }

    const signInGoogle = () => {
        setLoading( true );
        return signInWithPopup( auth, googleProvider )
    }

    const logOut = () => {
        setLoading( true );
        return signOut( auth );
    }

    const updateUserProfile = ( profile ) => {
        return updateProfile( auth.currentUser, profile )
    }

    // OBSERVE USER STATE -->

    useEffect(( ) => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                // Fetch user role
                const token = await currentUser.getIdToken();
                axios.get('http://localhost:3000/user/me', {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                .then(res => setRole(res.data.role))
                .catch(err => console.log(err));
            } else {
                setRole(null);
            }
            setLoading( false );
        })
        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {
        user,
        loading,
        role,
        registerUser,
        signInUser,
        signInGoogle,
        logOut,
        updateUserProfile,
        

        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

