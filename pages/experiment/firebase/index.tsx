import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCta833k8W1TGbr9tGa60y-uOOpZihd4Zw",
  authDomain: "seitamuro-blog3-experiment.firebaseapp.com",
  projectId: "seitamuro-blog3-experiment",
  storageBucket: "seitamuro-blog3-experiment.appspot.com",
  messagingSenderId: "1061901812373",
  appId: "1:1061901812373:web:9f2ba98b1c1b0bf7b0119c"
};

export default function ExperimentFirebase() {
  if (firebase.apps.length == 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const db = firebase.firestore();
  const todosRef = db.collection("todos");
  todosRef.doc("J5wZ91clVmDUE7Nqfbwj").get().then(doc => {
    if (doc.exists) {
      console.log(doc.data());
    } else {
      console.log("empty");
    }
  })
  return (
    <>
      <div>firebase example</div>
    </>
  )
}