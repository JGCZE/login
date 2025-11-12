import { useState } from "react"
import { Button } from "../ui/button"
import { useRenderingTest } from "./context/context"

const GrandChild = () => {
  const [num, setNum] = useState(0)
  const { count, setCount } = useRenderingTest()

  return (
    <div className="border border-pink-700 p-2">
      GrandChild: {num}
      <Button onClick={() => setNum(num + 1)} className="ml-4">+</Button>

      <Button onClick={() => setCount(count + 1)} className="ml-4">+ Context</Button>
    </div>
  )
}
export default GrandChild