import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { HashRouter as Router } from 'react-router-dom'
import App from './App';
import Posts from './routes/Posts';
import Portfolio from './routes/Portfolio';
import reportWebVitals from './reportWebVitals';

import Writing from './routes/Writing';

import Oracle from './routes/Experience/Oracle';
import Ronin from './routes/Experience/Ronin';


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <Router basename='/'>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="posts" element={<Posts />} />
      <Route path="writing" element={<Writing />} />
      <Route path="posts/writing" element={<Writing />} />
      <Route path="portfolio" element={<Portfolio />} />

      <Route path="portfolio/oracle" element={<Oracle />} />
      <Route path="portfolio/ronin" element={<Ronin />} />


      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </Router>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

