
import './App.css';
import Navbar from './components/Navbar';
import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import resume from '/Users/adityatadimeti/Desktop/PersonalWebsite/personal-website/src/Aditya_Tadimeti_Resume.pdf';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/entry.webpack";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


console.log(resume);

function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Navbar />
      <div class="text">
        <h2 >Aditya Tadimeti</h2>
        <p>
          I'm an incoming third year student at <Link class="textlink" to="/Portfolio/Stanford">Stanford University</Link>  studying Computer Science and Math.
        </p>

        <p>
          I like to do impactful work in meaningful spaces. I'm broadly interested in NLP, Computer Systems, and Sustainability.
          {/* I'm interested in leveraging state-of-the-art technology to work on  */}
        </p>

        <p >
          Contact me at tadimeti [at] stanford [dot] edu.
        </p>

        <p >
          <a href="https://www.linkedin.com/in/adityatadimeti/" target="_blank">LinkedIn</a> {"| "}
          <a href="https://github.com/adityatadimeti/" target="_blank">GitHub</a> {"| "}
          <a href="https://drive.google.com/file/d/1Mrp_bl65Cjd39E4Bs3AUTgTHadgmpNkV/view?usp=drive_link" target="_blank">Resume</a> 


        </p>
      </div>

      <Outlet />
    </div>
  );
}

export default App;

