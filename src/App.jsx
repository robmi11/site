import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="relative font-nunito bg-verylightgray dark:bg-verydarkblue min-h-screen">
      <Navbar />
      <Search />

      <main className="container mx-auto my-8">
        <Outlet />
      </main>
    </div>
  );
};
export default App;
