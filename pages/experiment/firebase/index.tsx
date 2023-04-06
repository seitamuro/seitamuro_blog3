import { useData, useDocs, getFirestore } from "@/lib/firestore"
import { useEffect, useState } from "react"

export default function ExperimentFirebase() {
  const data = useData("todos", "J5wZ91clVmDUE7Nqfbwj");
  const { docs, isLoading } = useDocs("todos")
  const [todos, setTodos] = useState<any>([])

  useEffect(() => {
    console.log(`docs: ${JSON.stringify(docs)} ${isLoading.current}`)
    const _todos = docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    setTodos(_todos)
  }, [docs])

  useEffect(() => {
    console.log(`data: ${JSON.stringify(data)}`)
  }, [data])

  return (
    <>
      <div>firebase example</div>
      {isLoading.current ? <div>Loading...</div> : <div>{JSON.stringify(todos)}</div>}
    </>
  )
}