import React from 'react';
import './resume.css';
import { Link } from "react-router-dom";


const Resume = () => {
  // Replace these with your actual FILE_ID
  const previewUrl = "https://drive.google.com/file/d/1_aesY03jzNwBsSYj3NE86tqnSsfyuP_j/preview";
  const downloadUrl = "https://drive.google.com/file/d/1_aesY03jzNwBsSYj3NE86tqnSsfyuP_j/view?usp=sharing";

  return (
    <div className="resume-container">

      {/* Embed / Preview via iframe */}
      <iframe
        src={previewUrl}
        width="100%"
        height="600"
        allow="autoplay"
        title="Resume PDF Viewer"
      />

      {/* Download button */}
      <div className="download-btn">
        <Link
          to={downloadUrl}
          target="_blank" // Optional: Opens in a new tab
          download
          className="btn btn-moving-gradient btn-moving-gradient--blue"
        >
          Download Resume
        </Link>
      </div>
    </div>
  );
};

export default Resume;
