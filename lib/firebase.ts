import firebase from "firebase/app"

export const setupFirebase = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
  }
}

export const firebaseConfig = {
  apiKey: "AIzaSyCta833k8W1TGbr9tGa60y-uOOpZihd4Zw",
  authDomain: "seitamuro-blog3-experiment.firebaseapp.com",
  projectId: "seitamuro-blog3-experiment",
  storageBucket: "seitamuro-blog3-experiment.appspot.com",
  messagingSenderId: "1061901812373",
  appId: "1:1061901812373:web:9f2ba98b1c1b0bf7b0119c"
};