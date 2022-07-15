import * as firebase from 'firebase'
const firebaseConfig={
    apiKey: "AIzaSyD3FYP_lUMY9-lZp6wNhdRvU0NA79zok_0",
    authDomain: "auth-5bd29.firebaseapp.com",
    projectId: "auth-5bd29",
    storageBucket: "auth-5bd29.appspot.com",
    messagingSenderId: "447167960577",
    appId: "1:447167960577:web:44d82d1ab7898b749cd200"
}
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default {firebase}