import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import logo1 from '../assets/img/logo1.png'; // Adjust the path to your logo image file

// --- Icon Components ---
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const heroPaths = ["/", "/about", "/services", "/team", "/blogs", "/contact"];
  const hasFullScreenHero = heroPaths.includes(location.pathname);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (hasFullScreenHero) {
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(false);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasFullScreenHero]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const headerClasses = hasFullScreenHero
    ? `px-6 py-4 fixed w-full top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-slate-900 shadow-md' : 'bg-transparent'}`
    : 'bg-slate-900 px-6 py-4 sticky top-0 z-50 shadow-md';

  const navTextColor = hasFullScreenHero && !isScrolled ? 'text-white' : 'text-white';
  const underlineColor = hasFullScreenHero && !isScrolled ? 'bg-white' : 'bg-gray-400';

  const navLinks = (
    <>
      {navItems.map(item => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={() => setShowMenu(false)}
          className="relative group py-2"
        >
          {({ isActive }) => (
            <>
              <span className={`transition-colors duration-300 ${isActive ? 'font-bold' : ''} ${navTextColor}`}>
                {item.name}
              </span>
              <span
                className={`
                  absolute bottom-0 left-0 block w-full h-0.5
                  ${underlineColor}
                  transform transition-transform duration-300 ease-in-out
                  origin-left
                  ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                `}
              />
            </>
          )}
        </NavLink>
      ))}
    </>
  );

  return (
    <header className={headerClasses}>
      <nav className="container mx-auto flex justify-between items-center">
        {/* Left Column: Logo and Title */}
        <div className="flex-1 flex items-center space-x-2">
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={logo1} alt="The Tech Space Logo" className="h-15 w-15" />
            <h1 className={`text-lg font-semibold ${navTextColor}`}>The Tech Space</h1>
          </NavLink>
        </div>

        {/* Center Column: Navigation Links */}
        <div className={`hidden md:flex flex-none justify-center space-x-6 items-center ${navTextColor}`}>
          {navLinks}
        </div>

        {/* Right Column: Get Quote Button and Mobile Menu Toggle */}
        <div className="flex-1 flex justify-end items-center space-x-4">
          <button
            className="border border-white px-4 py-2 rounded-md text-white hover:bg-gray-400 hidden md:block"
          >
            Get Quote
          </button>
          <div className="md:hidden">
            <button onClick={toggleMenu} className={`text-2xl ${navTextColor}`}>
              {showMenu ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          showMenu ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div
          className={`flex flex-col items-center space-y-4 rounded-lg p-4 text-center ${
            hasFullScreenHero && !isScrolled ? 'bg-black bg-opacity-80 text-white' : 'bg-slate-900 text-white'
          }`}
        >
          {navLinks}
          <button
            className="border border-white px-4 py-2 rounded-md text-white hover:bg-gray-400"
          >
            Get Quote
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;