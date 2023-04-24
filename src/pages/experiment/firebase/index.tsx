import { useEffect, useState } from "react";

import { addData, useCollection, useDocsWithOnSnapshot } from "@/lib/firestore";

export default function ExperimentFirebase() {
  const todosRef = useCollection("todos");
  const [todos2, setTodos2] = useState<any>();
  const { docs: docsSnapshot } = useDocsWithOnSnapshot(todosRef);

  useEffect(() => {
    const _todos = docsSnapshot.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setTodos2(_todos);
  }, [docsSnapshot]);

  return (
    <>
      <div>firebase example</div>
      <div>{JSON.stringify(todos2)}</div>
    </>
  );
}
