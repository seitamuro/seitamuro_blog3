import "firebase/firestore";

import firebase from "firebase/app";
import { useEffect, useRef, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCta833k8W1TGbr9tGa60y-uOOpZihd4Zw",
  authDomain: "seitamuro-blog3-experiment.firebaseapp.com",
  projectId: "seitamuro-blog3-experiment",
  storageBucket: "seitamuro-blog3-experiment.appspot.com",
  messagingSenderId: "1061901812373",
  appId: "1:1061901812373:web:9f2ba98b1c1b0bf7b0119c",
};

export type MyFirebaseRefOrQuery =
  | firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
  | firebase.firestore.Query<firebase.firestore.DocumentData>;

export type MyFirebaseRef = firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;

/**
 * firestoreへの接続を得る
 *
 * @returns firestoreへの接続
 */
export const getFirestore = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  return firebase.firestore();
};

const db = getFirestore();

/**
 * documentのデータを取得する
 *
 * @param collectionName コレクション名
 * @param documentName ドキュメントID
 * @returns ドキュメントの持つデータ
 */
export const useData = (collectionName: string, documentName: string) => {
  const ref = db.collection(collectionName);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    ref
      .doc(documentName)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setData(doc.data());
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return data;
};

/**
 * collectionのもつdocumentを取得する
 * データの更新を検知しない。
 *
 * @param ref collectionへの参照
 * @returns documentの配列
 */
export const useDocs = (ref: MyFirebaseRefOrQuery) => {
  const [docs, setDocs] = useState<firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>[]>([]);
  const isLoading = useRef(false);

  useEffect(() => {
    if (!isLoading.current) {
      isLoading.current = true;
      ref.get().then((query) => {
        setDocs(query.docs);
        isLoading.current = false;
      });
    }
  }, []);

  return { docs, isLoading };
};

/**
 * collectionへの参照を取得する
 *
 * @param collectionName collection名
 * @returns collectionへの参照
 */
export const useCollection = (collectionName: string) => {
  return db.collection(collectionName);
};

/**
 * collectionのdocumentを取得する。
 * データの変更を検知する。
 *
 * @param ref firebaseのcollectionへの参照
 * @returns {{docs: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>[]}} ドキュメントの配列
 */
export const useDocsWithOnSnapshot = (ref: MyFirebaseRefOrQuery) => {
  const [docs, setDocs] = useState<firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>[]>([]);

  useEffect(() => {
    ref.onSnapshot((snapshot) => {
      setDocs(snapshot.docs);
    });
  }, []);

  return { docs };
};

/**
 * 渡されたcollectionにdocumentを追加する
 * @param ref collectionへの参照
 * @param data  追加するdocument
 */
export const addData = (ref: MyFirebaseRef, data: any) => {
  ref.add(data);
};

/**
 * 渡されたデータでドキュメントを上書きする
 *
 * @param ref collectionへの参照
 * @param documentId documentのID
 * @param data 更新後の値
 */
export const updateData = (ref: MyFirebaseRef, documentId: string, data: any) => {
  ref.doc(documentId).set(data);
};

/**
 * 指定されたdocumentIdのdocumentを削除する
 *
 * @param ref collectionへの参照
 * @param documentId ドキュメントID
 */
export const deleteData = async (ref: MyFirebaseRef, documentId: string) => {
  await ref.doc(documentId).delete();
};
