import firebase from "firebase/app";
import "firebase/auth"
import { useState, useEffect } from "react"
import { setupFirebase } from "./firebase";

setupFirebase()

/**
 * 現在ログインしているユーザーを返す
 * @returns ユーザーの情報
 */
export const useUser = () => {
  const [user, setUser] = useState<firebase.User>()
  const unsubscribe = firebase.auth().onAuthStateChanged((_user) => {
    if (_user) {
      setUser(_user)
      unsubscribe()
    }
  })
  return { user: user }
}

export const loginWithGoogleOAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => { })
    .catch(() => { })
}