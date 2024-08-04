import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="dark:bg-verydarkblue">
      <Navbar />
      <main className="container mx-auto px-4 my-5">
        <Outlet />
      </main>
    </div>
  );
};
export default App;
