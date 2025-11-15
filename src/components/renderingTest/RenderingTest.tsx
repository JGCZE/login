import { useState } from "react"
import GrandParent from "./GrandParent"
import { Button } from "../ui/button"
import { useRenderingTest } from "./context/context"

const RenderingTest = () => {
  const [num, setNum] = useState(0)
  const { count, setCount } = useRenderingTest()

  return (
    <div className="border-2 border-amber-400 p-4">
      <div className="p-2">
        RenderingTest:
        {num}

        Context: {count}

        <Button
          className="ml-8"
          onClick={() => setNum(num + 1)}
        >
          +
        </Button>

        <Button
          className="ml-8"
          onClick={() => setCount(count + 1)}
        >
          context
        </Button>
      </div>

      <GrandParent num={num} />
    </div >
  )
}
export default RenderingTest