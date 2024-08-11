import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-min bg-oxford-200 text-oxford-950 dark:bg-oxford-950 dark:text-oxford-200">
      <Navbar />
      <main className="container w-11/12 mt-10">
        <Outlet />
      </main>
    </div>
  );
}
export default App;
