import React, {useState} from "react";
import "../components-css/Header.css"
import { Link } from "react-router-dom";

const Header = () => {
    const [linkText, setLinkText] = useState({
        home: "[Home]",
        projects: "Projects"
    });

    const handleClick = (link) => {
        const newLinkText = {
            home: "Home",
            projects: "Projects"
        };

        newLinkText[link] = '[' +  link.charAt(0).toUpperCase() + link.slice(1) + ']';

        setLinkText(newLinkText);
    };

    return ( 
      <div className="Header">
          <nav>
              <ul className="LinkList">
                  <li>
                      <Link to="/" onClick={() => handleClick("home")}>{linkText.home}</Link>
                  </li>
                  <li>
                      <Link to="/projects" onClick={() => handleClick("projects")}>{linkText.projects}</Link>
                  </li>
              </ul>
          </nav>
      </div>
    );
};

export default Header;