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
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => {
    auth.signInWithPopup(provider).then((res) => {
      console.log(res.user)
    }).catch((error) => {
      console.log(error.message)
    })
  }
  export default firebase;




//   <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyDLL5hXq32Zh99_6iM6l-Vmf0N9hV0FC5I",
//     authDomain: "social-media-react-1b495.firebaseapp.com",
//     projectId: "social-media-react-1b495",
//     storageBucket: "social-media-react-1b495.appspot.com",
//     messagingSenderId: "676243178717",
//     appId: "1:676243178717:web:ce818374c2253a68900734",
//     measurementId: "G-E8QYHVHQ7X"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>