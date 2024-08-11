import ColorModeToggler from "./ColorModeToggler";
import Logo from "./Logo";

function Navbar() {
  return (
    <header className="shadow-md dark:shadow-xl bg-oxford-200 text-oxford-950 dark:bg-oxford-900 dark:text-oxford-200">
      <div className="container w-11/12 min-h-24 flex justify-between items-center">
        <Logo title="Where in the World?" />
        <ColorModeToggler />
      </div>
    </header>
  );
}
export default Navbar;
