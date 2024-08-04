import ColorModeToggler from "./ColorModeToggler";

function Navbar() {
  return (
    <nav className="flex justify-between px-5 mb-3 shadow-md bg-verylightgray dark:bg-darkblue">
      <h1 className="text-verydarkblue dark:text-verylightgray text-xl font-extrabold flex items-center">
        Where in the World?
      </h1>

      <ColorModeToggler />
    </nav>
  );
}
export default Navbar;
