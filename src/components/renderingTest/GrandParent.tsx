import React from "react"
import Parent from "./Parent"

const GrandParent = React.memo(({ num }: { num: number }) => {
  return (
    <div className="border-2 border-green-500 p-4">GrandParent: {num}
      <Parent />
    </div>
  )
})

export default GrandParent