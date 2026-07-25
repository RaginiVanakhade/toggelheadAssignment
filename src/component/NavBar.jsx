import { useState } from "react";
import "../style/NavBar.css";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../assets/logoLorem.avif";
import CustomButton from "./custom/CustomBtn";

const navItems = [
  {
    id: 1,
    title: "Qualifications",
    link: "#",
    hasDropdown: true,
  },
  {
    id: 2,
    title: "Organizations",
    link: "#",
    hasDropdown: true,
  },
  {
    id: 3,
    title: "Research & Analysis",
    link: "#",
    hasDropdown: true,
  },
  {
    id: 4,
    title: "Lorem ipsum",
    link: "#",
    hasDropdown: true,
  },
  {
    id: 5,
    title: "Lorem ipsum",
    link: "#",
    hasDropdown: true,
  },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="logo">
  <img src={Logo} alt="Logo" />
</div>

    
        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {navItems.map((item) => (
            <a href={item.link} key={item.id}>
              {item.title}
              {item.hasDropdown && (
                <span className="arrow">
                  <IoIosArrowDown />
                </span>
              )}
            </a>
          ))}

          <span className="search-icon">🔍</span>

          <CustomButton text="Enrolment"/>
        </nav>


        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </div>

      </div>
    </header>
  );
};

export default NavBar;