import RegionSelect from "./RegionSelect";
import SearchBox from "./SearchBox";

function Header() {
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
