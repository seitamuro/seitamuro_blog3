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
  const userId = firebase.auth().currentUser

  return { userId: userId }
}
