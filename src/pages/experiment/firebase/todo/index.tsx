import firebase from "firebase/app";
import { ChangeEvent, useEffect, useRef, useState } from "react";

import type { MyFirebaseRef } from "@/lib/firestore";
import { addData, deleteData, updateData, useCollection, useDocsWithOnSnapshot } from "@/lib/firestore";
import { Task, TaskStatus } from "@/types/todo";

/**
 * タスクを削除する
 *
 * @param ref collectionへの参照
 * @param documentId 削除するdocumentのID
 */
const deleteTask = (ref: MyFirebaseRef, documentId: string) => {
  deleteData(ref, documentId);
};

/**
 * タスクのステータスを変更する
 * @param ref collectionへの参照
 * @param documentId ドキュメントのID
 * @param nextStatus 新しいステータス
 */
const changeTaskStatus = (ref: MyFirebaseRef, documentId: string, nextStatus: TaskStatus, task: Task) => {
  task.status = nextStatus;
  updateData(ref, documentId, task);
};

/**
 * タスクを追加する。
 *
 * @param ref collectionへの参照
 * @param title タスクのタイトル
 */
const addTask = (ref: MyFirebaseRef, title: string) => {
  const task: Task = {
    title: title,
    status: TaskStatus.NotStarted,
    timestamp: firebase.firestore.Timestamp.now(),
  };
  addData(ref, task);
};

type IdAndTask = { id: string } & Task;

type TaskStatusBarProps = {
  status: TaskStatus;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const TaskStatusBar = ({ status, onChange = () => {} }: TaskStatusBarProps) => {
  return (
    <select value={status} onChange={onChange}>
      {Object.values(TaskStatus).map((status) => (
        <option value={status} key={status}>
          {status}
        </option>
      ))}
    </select>
  );
};

export default function ExperimentFirebase() {
  const todosRef = useCollection("todos");
  const [todos, setTodos] = useState<IdAndTask[]>([]);
  const { docs: docsSnapshot } = useDocsWithOnSnapshot(todosRef.orderBy("timestamp"));
  const taskTitleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const _todos = docsSnapshot.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Task),
    }));
    setTodos(_todos);
  }, [docsSnapshot]);

  return (
    <>
      <div>firebase todo</div>
      <div>
        {todos.map((todo: IdAndTask) => (
          <div key={todo.id}>
            {todo.title}|
            <TaskStatusBar
              status={todo.status}
              onChange={(event) => {
                const status = event.target.value as TaskStatus;
                changeTaskStatus(todosRef, todo.id, status, todo);
              }}
            />
            <button onClick={() => deleteTask(todosRef, todo.id)}>delete</button>
          </div>
        ))}
      </div>
      <input ref={taskTitleRef}></input>
      <button onClick={() => addTask(todosRef, taskTitleRef.current!.value)}>Add</button>
    </>
  );
}
