import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

let firebaseConfig = {
    apiKey: "AIzaSyC-pNpm8PNZTd4ggvB1JD23QlcRzDWYbiQ",
    authDomain: "trailblazers-c3544.firebaseapp.com",
    databaseURL: "https://trailblazers-c3544-default-rtdb.firebaseio.com",
    projectId: "trailblazers-c3544",
    storageBucket: "trailblazers-c3544.appspot.com",
    messagingSenderId: "525562086553",
    appId: "1:525562086553:web:587b3b45b7f1b6a28aa408",
    measurementId: "G-5HF0LNE9VX"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db
