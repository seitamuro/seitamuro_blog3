import { useUser, loginWithGoogleOAuth } from "@/lib/auth"
import { useEffect } from "react"

export default function ExperimentFirebase() {
  const { user } = useUser()

  return <div>
    <div>firebase bbs</div>
    <button onClick={() => loginWithGoogleOAuth()}>ログイン</button>
    <div>{user?.uid ?? "未ログイン"}</div>
  </div>
}