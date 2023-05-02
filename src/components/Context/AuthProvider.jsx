import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])

    // create new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //signin
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signout
    const logOut = () => signOut(auth)

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;