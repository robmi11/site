import { useContext } from "react";
import CountriesContext from "../context/countries/CountriesContext";

function RegionPage() {
  const {} = useContext(CountriesContext);
  return <section className="min-h-screen">RegionPage</section>;
}
export default RegionPage;
