import { useUser } from "@/lib/auth"

export default function ExperimentFirebase() {
  const { userId } = useUser()
  return <div>
    <div>firebase bbs</div>
    <div>{userId ?? "未ログイン"}</div>
  </div>
}