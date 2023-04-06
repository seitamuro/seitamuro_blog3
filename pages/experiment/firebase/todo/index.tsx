import { useCollection, addData, useDocsWithOnSnapshot } from "@/lib/firestore"
import { useEffect, useState, useRef } from "react"
import firebase from "firebase/app"

import { Task, TaskStatus } from "@/types/todo";
import type { MyFirebaseRef } from "@/lib/firestore";

/**
 * タスクを追加する。
 * 
 * @param ref collectionへの参照
 * @param title タスクのタイトル
 */
const addTask = (
  ref: MyFirebaseRef,
  title: string,
) => {
  const task: Task = {
    title: title,
    status: TaskStatus.NotStarted,
    timestamp: firebase.firestore.Timestamp.now()
  }
  addData(ref, task);
}

/**
 * 指定されたdocumentIdのタスクを削除する
 * 
 * @param ref collectionへの参照
 * @param documentId ドキュメントID
 */
const deleteTask = async (
  ref: MyFirebaseRef,
  documentId: string,
) => {
  await ref.doc(documentId).delete()
}

export default function ExperimentFirebase() {
  const todosRef = useCollection("todos");
  const [todos, setTodos] = useState<any>([])
  const { docs: docsSnapshot } = useDocsWithOnSnapshot(todosRef.orderBy("timestamp"))
  const taskTitleRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const _todos = docsSnapshot.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    setTodos(_todos)
  }, [docsSnapshot])

  return (
    <>
      <div>firebase todo</div>
      <div>{todos.map((todo: any) => (<div key={todo.id}>{todo.title}|{todo.status}<button onClick={() => deleteTask(todosRef, todo.id)}>delete</button></div>))}</div>
      <input ref={taskTitleRef}></input>
      <button onClick={() => addTask(todosRef, taskTitleRef.current!.value)}>Add</button>
    </>
  )
}
