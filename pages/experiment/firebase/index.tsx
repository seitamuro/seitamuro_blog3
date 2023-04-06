import { getFirestore, getRef, getDoc, useData } from "@/lib/firestore"
import { useEffect, useState } from "react"

export default function ExperimentFirebase() {
  const data = useData("todos", "J5wZ91clVmDUE7Nqfbwj");
  const db = getFirestore()
  const [unsubscribe, setUnsubscribe] = useState<any>([])

  useEffect(() => {
    db.collection("todos").get().then(
      query => {
        const docs = query.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setUnsubscribe(docs)
      }
    )
    console.log("a")
  }, [])

  useEffect(() => {
    console.log(`${JSON.stringify(unsubscribe)}`)
  }, [unsubscribe])

  useEffect(() => {
    console.log(`data: ${JSON.stringify(data)}`)
  }, [data])

  return (
    <>
      <div>firebase example</div>
    </>
  )
}