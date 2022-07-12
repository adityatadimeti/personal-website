
import './App.css';
import Navbar from './components/Navbar';
import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import resume from './resume.pdf';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
        <Navbar />
        <div class = "text">
          <h2 >Aditya Tadimeti</h2>
          <p>
            I'm an incoming second year student at Stanford University studying Computer Science and Math.
          </p>

          <p>
            I like to do impactful work in meaningful spaces. I'm broadly interested in NLP, Crypto, Neuroscience, and Sustainability.
            {/* I'm interested in leveraging state-of-the-art technology to work on  */}
          </p>

          <p >
            Contact me at tadimeti [at] stanford [dot] edu.
          </p>

          <p >
            <a href="https://www.linkedin.com/in/adityatadimeti/" target="_blank">LinkedIn</a> {"| " }
            <a href="https://github.com/adityatadimeti/" target="_blank">GitHub</a> {"| " } 
            <a href={resume} target="_blank">Resume</a>
            {/* <a href="../public/resume.pdf" target="_blank">Resume</a>           */}
          </p>

          {/* <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p> */}
        </div>
      
      <Outlet />
    </div>
  );
}

export default App;

