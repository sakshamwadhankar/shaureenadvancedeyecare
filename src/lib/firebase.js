import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBdJ5ZibBnOnjlyu32arV2MumsYVKwnT-E",
  authDomain: "hospitalv2-booking-app.firebaseapp.com",
  projectId: "hospitalv2-booking-app",
  storageBucket: "hospitalv2-booking-app.firebasestorage.app",
  messagingSenderId: "570861901769",
  appId: "1:570861901769:web:526207c23e26f4cdb3ba18",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
