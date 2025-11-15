import { createFileRoute } from "@tanstack/react-router";
import { Button } from "../components/ui/button";


const App = () => {
  const isLoggin = false;

  return (
    <div className="container">
      <h1 className="text-red-500">Welcome to the App!</h1>

      <h3>login status: {isLoggin ? "YES" : "NO"} </h3>

      <Button className="mt-12 my-4 cursor-pointer">Click Me</Button>

      <div className="mt-20">
        {/*  <RenderingTestProvider>
          <RenderingTest />
          </ RenderingTestProvider> */}
      </div>
    </div>
  );
}
export default App;

export const Route = createFileRoute('/')({
  component: App,
})
