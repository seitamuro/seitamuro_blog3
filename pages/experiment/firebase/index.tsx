import { useCollection, useDocs } from "@/lib/firestore"
import { useEffect, useState } from "react"

export default function ExperimentFirebase() {
  const todosRef = useCollection("todos");
  const { docs, isLoading } = useDocs(todosRef)
  const [todos, setTodos] = useState<any>()

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

  return (
    <>
      <div>firebase example</div>
      <div>{isLoading.current ? "Loading..." : JSON.stringify(todos)}</div>
    </>
  )
}