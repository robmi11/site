import ColorModeToggler from "./ColorModeToggler";
import Logo from "./Logo";

function Navbar() {
  return (
    <header className="bg-oxford-200 text-oxford-950 shadow-md dark:bg-oxford-900 dark:text-oxford-200 dark:shadow-xl">
      <div className="container flex min-h-24 w-11/12 items-center justify-between">
        <Logo title="Where in the World?" />
        <ColorModeToggler />
      </div>
    </header>
  );
}
export default Navbar;
