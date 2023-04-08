import { useUser, loginWithGoogleOAuth, signOut } from "@/lib/auth"

export default function ExperimentFirebase() {
  const { user } = useUser()

  return <div>
    <div>firebase bbs</div>
    {!user?.uid ? <button onClick={() => loginWithGoogleOAuth()}>ログイン</button> : <button onClick={() => signOut()}>ログアウト</button>}
    <div>{user?.uid ?? "未ログイン"}</div>
  </div>
}