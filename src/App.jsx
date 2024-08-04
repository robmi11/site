import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountriesContext from "./context/countries/CountriesContext";

const App = () => {
  const { fetchAllUsers } = useContext(CountriesContext);

  useEffect(() => {
    fetchAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="dark:bg-verydarkblue">
      <Navbar />
      <main className="container mx-auto px-4">
        <Outlet />
      </main>
    </div>
  );
};
export default App;
