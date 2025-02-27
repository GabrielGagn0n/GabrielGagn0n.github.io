import React from "react";
import "../components-css/Resume.css"

const Resume = () => {
  return (
    <div className="section">
        <h4>You are welcome to download my resume</h4>
        <div className="cvs-container">
            <div className="cv-card">
                <p className="description"> Click the button to open my resume in a new page </p>
                <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="download-btn">
                    Open
                </a>
            </div>
        </div>
    </div> 
  );
};

export default Resume;