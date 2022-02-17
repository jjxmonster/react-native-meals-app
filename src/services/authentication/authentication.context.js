import React, { useState, createContext } from 'react';
import {
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signOut,
} from 'firebase/auth';

import { loginRequest } from './authentication.service.js';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children, firebaseApp }) => {
   const [isLoading, setIsLoading] = useState(false);
   const [user, setUser] = useState(null);
   const [error, setError] = useState(null);

   const auth = getAuth(firebaseApp);

   onAuthStateChanged(auth, usr => {
      if (usr) {
         setUser(usr);
         setIsLoading(false);
      } else {
         setIsLoading(false);
      }
   });

   const onRegister = (email, password, repeatedPassword) => {
      setIsLoading(true);
      if (password !== repeatedPassword) {
         setError('FirebaseError: Firebase: Passwords do not match');
         return;
      }
      createUserWithEmailAndPassword(auth, email, password)
         .then(user => {
            setUser(user);
            setIsLoading(false);
         })
         .catch(e => {
            setIsLoading(false);
            setError(e.toString());
         });
   };

   const onLogin = (email, password) => {
      setIsLoading(true);
      loginRequest(email, password, auth)
         .then(user => {
            setUser(user);
            setIsLoading(false);
         })
         .catch(e => {
            setIsLoading(false);
            setError(e.toString());
         });
   };

   const onLogout = () => {
      setUser(null);
      signOut(auth);
   };
   return (
      <AuthenticationContext.Provider
         value={{
            isAuthenticated: !!user,
            user,
            isLoading,
            error,
            onLogin,
            onRegister,
            onLogout,
         }}
      >
         {children}
      </AuthenticationContext.Provider>
   );
};
