const Navbar = () => {
  return (
    <nav className="w-full sticky z-20 mx-auto flex items-center justify-between px-32 py-4">
      <div>
          <h2>Ishara Musippaththu</h2>
      </div>
      <div>
        <ul className="flex flex-row w-min justify-between items-center gap-8">
          <li><a href="/">Home</a></li>
          <li><a href="/work">Work</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
