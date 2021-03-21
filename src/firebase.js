import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDLL5hXq32Zh99_6iM6l-Vmf0N9hV0FC5I",
    authDomain: "social-media-react-1b495.firebaseapp.com",
    projectId: "social-media-react-1b495",
    storageBucket: "social-media-react-1b495.appspot.com",
    messagingSenderId: "676243178717",
    appId: "1:676243178717:web:ce818374c2253a68900734",
    measurementId: "G-E8QYHVHQ7X"
  };


  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  export const signInWithGoogle = () => {
    auth.signInWithPopup(provider).then((res) => {
      // console.log(res.user)
    }).catch((error) => {
      console.log(error.message)
    })
  }
  // export default firebase;


