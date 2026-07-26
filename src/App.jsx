
import './App.css'
import { Route, Routes } from 'react-router-dom'
// import NavBar from './component/NavBar'
import HomeSection from './component/HomeSection'
import HomeSection2 from './component/custom/HomeSection2'
import CardSlider from './component/CarsSlider'
import StatsSection from './component/StatusSection'
import Faq from './component/Faq'
import Footer from './component/Footer'

// navbar 
import { useState, useEffect, useRef } from "react";
// import "../style/NavBar.css";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "./assets/LogoLorem.avif"
import CustomButton from "./component/custom/CustomBtn"
import MegaMenu from "./component/MegaMenu";
import menuData from "./component/MegaMenu"


const navItems = [
  {
    id: 1,
    title: "Qualifications",
    menuKey: "Qualifications",
    hasDropdown: true,
  },
  {
    id: 2,
    title: "Organizations",
    menuKey: "Organizations",
    hasDropdown: true,
  },
  {
    id: 3,
    title: "Research & Analysis",
    menuKey: "ResearchAnalysis",
    hasDropdown: true,
  },
  {
    id: 4,
    title: "Lorem ipsum",
    menuKey: "Lorem1",
    hasDropdown: true,
  },
  {
    id: 5,
    title: "Lorem ipsum",
    menuKey: "Lorem2",
    hasDropdown: true,
  },
];

function App() {

    const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMenuClick = (menuKey) => {
    setActiveMenu((prev) => (prev === menuKey ? null : menuKey));
  };


  return (
    <>
      <header className="navbar" ref={navRef}>
          <div className="navbar-container">
    
    
        
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
    
         
            <nav className={menuOpen ? "nav-links active" : "nav-links"}>
    
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className={`nav-item ${
                    activeMenu === item.menuKey ? "active" : ""
                  }`}
                  onClick={() => handleMenuClick(item.menuKey)}
                >
                  <span>{item.title}</span>
    
                  {item.hasDropdown && (
                    <span className="arrow">
                      <IoIosArrowDown />
                    </span>
                  )}
                </div>
              ))}
    
              <span className="search-icon">🔍</span>
    
              <CustomButton text="Enrolment" />
    
            </nav>
    
            
            <div
              className="menu-icon"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✖" : "☰"}
            </div>
          </div>
    
      
          {activeMenu && (
            <MegaMenu
              data={menuData[activeMenu]}
              onClose={() => setActiveMenu(null)}
            />
          )}
        </header>
    {/* <NavBar/> */}
    <HomeSection/>
    <HomeSection2/>
    <CardSlider/>
    <StatsSection/>
    <Faq/>
    <Footer/>
     <Routes>
      <Route path='home' element={"hello"}/>
     </Routes>
    </>
  )
}

export default App
