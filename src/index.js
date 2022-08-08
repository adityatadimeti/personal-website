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

import Stanford from './routes/Education/Stanford';
import CourseReviews from './routes/Education/CourseReviews';
import Harker from './routes/Education/Harker';
import Writing from './routes/Writing';

import Oracle from './routes/Experience/Oracle';
import Ronin from './routes/Experience/Ronin';

import NLPGroup from './routes/Research/NLPGroup';
import Wildfire from './routes/Research/Wildfire';

import PhotoSharing from './routes/Projects/PhotoSharing';
import Huffman from './routes/Projects/Huffman';
import NeuralNetwork from './routes/Projects/NeuralNetwork';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <Router basename='/'>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="posts" element={<Posts />} />
      <Route path="posts/coursereviews" element={<CourseReviews />} />
      <Route path="posts/writing" element={<Writing />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="portfolio/stanford" element={<Stanford />} />
      <Route path="portfolio/harker" element={<Harker />} />

      <Route path="portfolio/oracle" element={<Oracle />} />
      <Route path="portfolio/ronin" element={<Ronin />} />

      <Route path="portfolio/photosharing" element={<PhotoSharing />} />
      <Route path="portfolio/huffman" element={<Huffman />} />
      <Route path="portfolio/neuralnetwork" element={<NeuralNetwork />} />

      <Route path="portfolio/nlpgroup" element={<NLPGroup />} />
      <Route path="portfolio/wildfire" element={<Wildfire />} />

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

