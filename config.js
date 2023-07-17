import firebase from "firebase/compat/app";
import {getDatabase} from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyCFPYNMQ9BKVNTMSpoIn94hytbxE_LO01o",
  authDomain: "tvlpolice.firebaseapp.com",
  projectId: "tvlpolice",
  storageBucket: "tvlpolice.appspot.com",
  messagingSenderId: "992004808709",
  appId: "1:992004808709:web:8bf432bd813b3f27ddfc6c",
  measurementId: "G-ZP29HNT0MX"
};
if(firebase.apps.length==0){
    firebase.initializeApp(firebaseConfig);
}

const db =getDatabase();
export{db}