import React from "react";
import "../components-css/Header.css"
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    return ( 
      <div className="Header">
          <nav>
              <ul className="LinkList">
                  <li>
                        <Link 
                        to="/" 
                        className={location.pathname === "/" ? "glow" : undefined}
                        >
                            {location.pathname === "/" ? "[ À propos ]" : "À propos"}
                        </Link>
                  </li>
                  <li>
                        <Link 
                        to="/projects" 
                        className={location.pathname === "/projects" ? "glow" : undefined}
                        >
                            {location.pathname === "/projects" ? "[ Projets ]" : "Projets"}
                        </Link>
                  </li>
                  <li>
                        <Link 
                        to="/experiences" 
                        className={location.pathname === "/experiences" ? "glow" : undefined}
                        >
                            {location.pathname === "/experiences" ? "[ Expériences ]" : "Expériences"}
                        </Link>
                  </li>
                  {/* <li>
                        <Link 
                        to="/resume" 
                        className={location.pathname === "/resume" ? "glow" : undefined}
                        >
                            {location.pathname === "/resume" ? "[ Resume ]" : "Resume"}
                        </Link>
                  </li> */}
              </ul>
          </nav>
      </div>
    );
};

export default Header;