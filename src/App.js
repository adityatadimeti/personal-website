
import './App.css';
import Navbar from './components/Navbar';
import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
// import resume from '/Users/adityatadimeti/Desktop/PersonalWebsite/personal-website/src/Aditya_Tadimeti_Resume.pdf';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/entry.webpack";
import twitterLogo from './twitterLogo.png';
import githubLogo from './github-mark.png';
import linkedinLogo from './linkedinLogo.png';
// import { link } from 'fs';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


// console.log(resume);

function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Navbar/>
      <div class="textInfo">
        <h2 >Aditya Tadimeti</h2>
        <p>
          {/* I'm a student at <Link class="textlink" to="/Portfolio/Stanford">Stanford University</Link>  studying Computer Science and Math. */}
          I work at Cohere as a Member of Technical Staff. I'm on leave from Stanford University, where I study Computer Science and Math.
        </p>

        <p>
          I'm driven to engineer solutions to hard, impactful problems. I'm broadly interested in AI/ML and its connections to language, systems, and sustainability.

          {/* Interested in language models, low-level systems, and AI/ML */}
          
          {/* I'm interested in leveraging state-of-the-art technology to work on  */}
        </p>

        <p >
          Contact me at tadimeti [at] stanford [dot] edu.
        </p>

        <p >
          <a href="https://www.linkedin.com/in/adityatadimeti/" target="_blank">
            <img src={linkedinLogo} alt="Linkedin Logo" style={{ width: '23.5185186px', height: '20px', filter: 'grayscale(100%) contrast(10000%) brightness(950%)', marginRight: '20px' }}/>
          </a>

          <a href="https://github.com/adityatadimeti/" target="_blank">
            <img src={githubLogo} alt="GitHub Logo" style={{ width: '20px', height: '20px', filter: 'grayscale(100%) contrast(10000%) brightness(950%)', marginRight: '20px' }}/>
          </a>

          <a href="https://twitter.com/TadimetiAditya" target="_blank">
            <img src={twitterLogo} alt="Twitter Logo" style={{ width: '20px', height: '20.4416666px', filter: 'grayscale(100%) contrast(10000%) brightness(950%)', marginRight: '20px' }}/>
          </a>

        </p>
      </div>

      <Outlet />
    </div>
  );
}

export default App;

