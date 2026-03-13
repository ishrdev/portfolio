//import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full sticky z-20 mx-auto flex items-center justify-between px-8 py-4">
      <div>
          <h2>Ishara Musippaththu</h2>
      </div>
      <div>
        {/*<NavLink to="/Home">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Work">Work</NavLink>
        <NavLink to="/Contact">Contact</NavLink>*/}
        <ul className="flex flex-row w-min justify-between items-center gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;