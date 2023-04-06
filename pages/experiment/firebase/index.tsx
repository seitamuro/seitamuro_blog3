import { useData, useDocs } from "@/lib/firestore"
import { useEffect, useState } from "react"

export default function ExperimentFirebase() {
  const data = useData("todos", "J5wZ91clVmDUE7Nqfbwj");
  const [docs, isLoading] = useDocs("todos")

  useEffect(() => {
    console.log(`docs: ${JSON.stringify(docs)} ${isLoading}`)
  }, [docs])

  useEffect(() => {
    console.log(`data: ${JSON.stringify(data)}`)
  }, [data])

  return (
    <>
      <div>firebase example</div>
      {isLoading.current ? <div>Loading...</div> : <div>{JSON.stringify(docs)}</div>}
    </>
  )
}