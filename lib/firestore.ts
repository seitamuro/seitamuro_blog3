import firebase from "firebase/app";
import "firebase/firestore"
import { useState, useEffect } from "react"

const firebaseConfig = {
  apiKey: "AIzaSyCta833k8W1TGbr9tGa60y-uOOpZihd4Zw",
  authDomain: "seitamuro-blog3-experiment.firebaseapp.com",
  projectId: "seitamuro-blog3-experiment",
  storageBucket: "seitamuro-blog3-experiment.appspot.com",
  messagingSenderId: "1061901812373",
  appId: "1:1061901812373:web:9f2ba98b1c1b0bf7b0119c"
};

export const getFirestore = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
  }

  return firebase.firestore()
}

export const getRef = (
  db: firebase.firestore.Firestore,
  collectionName: string
) => {
  return db.collection(collectionName);
}

export const getDoc = async (
  ref: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>,
  docId: string
) => {
  const doc = await ref.doc(docId)
  return doc
}

const db = getFirestore();

export const useData = (
  collectionName: string,
  documentName: string
) => {
  const ref = db.collection(collectionName)
  const [data, setData] = useState<any>([])

  useEffect(() => {
    ref.doc(documentName).get()
      .then(doc => {
        if (doc.exists) {
          setData(doc.data())
        }
      })
      .catch(e => {
        console.error(e)
      })
  }, [])

  return data
}