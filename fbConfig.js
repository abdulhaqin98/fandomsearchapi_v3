var firebaseConfig = {
  apiKey: "AIzaSyDbJ-LQJ5V7WbfjehM-2surHsUvywxADsQ",
  authDomain: "mag1000gre.firebaseapp.com",
  databaseURL: "https://mag1000gre-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mag1000gre",
  storageBucket: "mag1000gre.appspot.com",
  messagingSenderId: "259516125647",
  appId: "1:259516125647:web:8066111dcd5b2821ca82ba"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
const auth = firebase.auth();