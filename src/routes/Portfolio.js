import Navbar from '../components/Navbar';
import './Portfolio.css';
import { Outlet, Link } from "react-router-dom";

function Portfolio() {
  return (
    <div>
      <Navbar />

      <div class="text">
        <h2>Portfolio</h2>
      </div>

      <div class = "sub">
        Education
        <ul>
          <li>
            <Link class = "textlink"  to="/Portfolio/Stanford">Stanford University (September '21 —)</Link> 
          </li>

          <li>
          <Link class = "textlink"  to="/Portfolio/Harker">The Harker School (August '17 — May '21)</Link>
          </li>

        </ul>
      </div>

      <div class = "sub">
        Experience
        <ul>
          <li>
            <Link class = "textlink"  to="/Portfolio/Oracle">Oracle (June '22 — September '22)</Link> 
          </li>

          <li>
            <Link class = "textlink"  to="/Portfolio/Ronin">Project Ronin (May '22 — June '22) </Link>
          </li>
          
        </ul>
      </div>

      <div class = "sub">
        Projects 
        <ul>
          <li>
            Photo Sharing App
          </li>
          <li>
            Huffman Encoder
          </li>

          <li>
            Neural Network from Scratch
          </li>

          <li>
            <a href="https://github.com/adityatadimeti/personal-website" target="_blank" class="textlink"> This website! </a>
          </li>
        </ul>

      </div>

      <div class = "sub">
        Research

        <ul>
          <li>
            NLP Social Media Analysis
          </li>

          <li>
            Computational Wildfire Prediction
          </li>

          {/* <li>
            Degradation of Plastic [MOVE THIS TO HARKER]
          </li> */}
          
        </ul>
      </div>

    </div>
  );
}

export default Portfolio;

