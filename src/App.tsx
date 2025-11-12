import { RenderingTestProvider } from "./components/renderingTest/context/context";
import RenderingTest from "./components/renderingTest/RenderingTest";
import { Button } from "./components/ui/button";

const App = () => {
  const isLoggin = false;

  return (
    <div className="container space-y-4">
      <h1 className="text-red-500">Welcome to the App!</h1>

      <h3>login status: {isLoggin ? "YES" : "NO"} </h3>

      <Button className="mt-12 my-4 cursor-pointer">Click Me</Button>

      <div className="mt-20">
        <RenderingTestProvider>
          <RenderingTest />
        </ RenderingTestProvider>
      </div>
    </div>
  );
}
export default App;
