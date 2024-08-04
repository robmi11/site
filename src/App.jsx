import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="font-nunito bg-verylightgray dark:bg-verydarkblue min-h-screen">
      <Navbar />
      <main className="container mx-auto my-8">
        <Outlet />
      </main>
    </div>
  );
};
export default App;
