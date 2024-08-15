import { useLocation } from "react-router-dom";
import RegionSelect from "./RegionSelect";
import SearchBox from "./SearchBox";

function Header() {
  const location = useLocation();
  if (location.pathname.includes("details")) {
    return;
  }
  return (
    <header>
      <div className="container flex flex-col gap-8 md:flex-row min-h-24 w-11/12 items-center justify-between px-10 py-30">
        <SearchBox />
        <RegionSelect />
      </div>
    </header>
  );
}
export default Header;
