import firebase from "firebase/app";
import "firebase/auth"
import { useState, useEffect } from "react"
import { setupFirebase } from "./firebase";

setupFirebase()

/**
 * 現在ログインしているユーザーのuidを取得する
 * @returns ユーザーの情報
 */
export const useUser = () => {
  const [userId, setUserId] = useState<string>()

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid)
      }
    })
  }, [])

  return { userId: userId }
}
