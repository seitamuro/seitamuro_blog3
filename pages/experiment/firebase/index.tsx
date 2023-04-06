import { useCollection, useDocs, useDocsWithOnSnapshot } from "@/lib/firestore"
import { useEffect, useState } from "react"

export default function ExperimentFirebase() {
  const todosRef = useCollection("todos");
  const { docs, isLoading } = useDocs(todosRef)
  const [todos, setTodos] = useState<any>()
  const [todos2, setTodos2] = useState<any>()
  const { docs: docsSnapshot } = useDocsWithOnSnapshot(todosRef)

  useEffect(() => {
    const _todos = docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    setTodos(_todos)

    todosRef.add({
      task: "addTask"
    })
  }, [docs])

  useEffect(() => {
    const _todos = docsSnapshot.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    setTodos2(_todos)
  }, [docsSnapshot])

  return (
    <>
      <div>firebase example</div>
      <div>{isLoading.current ? "Loading..." : JSON.stringify(todos)}</div>
      <br></br>
      <div>{JSON.stringify(todos2)}</div>
    </>
  )
}