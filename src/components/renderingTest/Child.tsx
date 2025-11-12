import GrandChild from "./GrandChild"

const Child = () => {
  return (
    <div className="border-2 border-blue-400 p-2">Child
      <GrandChild />
    </div>
  )
}
export default Child