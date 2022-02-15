import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// const auth = getAuth();

export const loginRequest = (email, password, auth) =>
   signInWithEmailAndPassword(auth, email, password);
