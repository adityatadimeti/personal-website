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

      <div class="sub">
        Education
        <ul>
          <li>
            <Link class="textlink" to="/Portfolio/Stanford">Stanford University (September '21 —)</Link>
          </li>

          <li>
            <Link class="textlink" to="/Portfolio/Harker">The Harker School (August '17 — May '21)</Link>
          </li>

        </ul>
      </div>

      <div class="sub">
        Experience
        <ul>
          <li>
            <Link class="textlink" to="/Portfolio/Oracle">Oracle (June '22 — September '22)</Link>
          </li>

          <li>
            <Link class="textlink" to="/Portfolio/Ronin">Project Ronin (May '22 — June '22, September '22) </Link>
          </li>

        </ul>
      </div>

      <div class="sub">
        Projects
        <ul>
          <li>
            <Link class="textlink" to="/Portfolio/PhotoSharing">Photo Sharing App  (March '22 — June '22) </Link>
          </li>
          {/* <li>
            <Link class="textlink" to="/Portfolio/huffman">Huffman Encoder (November '21)</Link>
          </li> */}
{/* 
          <li>
            <Link class="textlink" to="/Portfolio/neuralnetwork">Neural Network from Scratch (January '20 — May '20) </Link>
          </li> */}

          <li>
            <a href="https://github.com/adityatadimeti/personal-website" target="_blank" class="textlink"> This website! </a>
          </li>
        </ul>

      </div>

      <div class="sub">
        Research

        <ul>
          <li>
            <Link class="textlink" to="/Portfolio/nlpgroup">Stanford NLP Group (October '21 — January '22)</Link>
          </li>

          <li>
            <Link class="textlink" to="/Portfolio/wildfire">Computational Wildfire Prediction (April '19 — June '21)</Link>
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

