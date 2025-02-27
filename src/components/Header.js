import React, {useState} from "react";
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
                            {location.pathname === "/" ? "[ Home ]" : "Home"}
                        </Link>
                  </li>
                  <li>
                        <Link 
                        to="/projects" 
                        className={location.pathname === "/projects" ? "glow" : undefined}
                        >
                            {location.pathname === "/projects" ? "[ Projects ]" : "Projects"}
                        </Link>
                  </li>
              </ul>
          </nav>
      </div>
    );
};

export default Header;