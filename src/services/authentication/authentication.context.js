import React, { useState, createContext } from 'react';
import { getAuth } from 'firebase/auth';

import { loginRequest } from './authentication.service.js';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children, firebaseApp }) => {
   const [isLoading, setIsLoading] = useState(false);
   const [user, setUser] = useState(null);
   const [error, setError] = useState([]);

   const auth = getAuth(firebaseApp);

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
   return (
      <AuthenticationContext.Provider
         value={{ isAuthenticated: !!user, user, isLoading, error, onLogin }}
      >
         {children}
      </AuthenticationContext.Provider>
   );
};
