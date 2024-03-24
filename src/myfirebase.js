import { initializeApp } from 'firebase/app'
import { getDatabase, ref } from "firebase/database";
import { getAuth } from "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAaoqIQyL3gQY75wvjJIOs0xfDNhTdArDM",
    authDomain: "schooldb-9a633.firebaseapp.com",
    databaseURL: "https://schooldb-9a633.firebaseio.com",
    projectId: "schooldb-9a633",
    storageBucket: "schooldb-9a633.appspot.com",
    messagingSenderId: "992347550068",
    appId: "1:992347550068:web:f45f21d8d4d78a5e"
  };
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
let myref = function(path) {
  return ref(db, path);
}
export { db, auth, myref };
