import Navbar from "../../components/Navbar";
import { Outlet, Link } from "react-router-dom";
import "../../components/Navbar.css";
function Stanford() {
  return (
    <div>
      <Navbar />
      <div class="text">
        <h2>Stanford</h2>

        <p>
          I'm majoring in Computer Science and minoring in Math. Within the CS major, I'm concentrating in Systems, and will graduate with a Masters degree in AI.
        </p>
        <p>
          Coursework 
          {/* <Link class="textlink" to="/Posts/CourseReviews"> (Reviews)</Link> */}

          <ul>

            {/* <li>
              Summer 2022

              <ul>

                <li>
                  DeFi Applications
                </li>

              </ul>
            </li> */}

            <li>
              Spring 2023

              <ul>

                <li>
                  ENGR 76: Information Theory
                </li>

                <li>
                  CS 161: Design and Analysis of Algorithms
                </li>

                <li>
                  CS 144: Introduction to Computer Networking
                </li>

                <li>
                  PWR 2: The Stories We Tell: Restorying Possible Futures
                </li>

              </ul>
            </li>
            <li>
              Winter 2023

              <ul>

                <li>
                  CS 224N: Natural Language Processing with Deep Learning
                </li>

                <li>
                  EMED 127: Healthcare Leadership
                </li>

                <li>
                  Math 77Q: Probability and Gambling
                </li>

                <li>
                  Stats 200: Introduction to Statistical Inference
                </li>

              </ul>
            </li>
            <li>
              Fall 2022

              <ul>

                <li>
                  CS 111: Operating Systems Principles
                </li>

                <li>
                  CS 221: Artificial Intelligence: Principles and Techniques
                </li>

                <li>
                  Math 104: Applied Matrix Theory
                </li>

                <li>
                  NBIO 227: Understanding Techniques in Neuroscience
                </li>

              </ul>
            </li>
            <li>
              Spring 2022

              <ul>

                <li>
                  CS 142: Web Applications
                </li>

                <li>
                  CS 103: Mathematical Foundations of Computing
                </li>

                <li>
                  PWR 1: Numbers, Metrics, and Counting: The Rhetoric of Quantitative Thinking
                </li>

                <li>
                  CS 198: Teaching Computer Science
                </li>

              </ul>
            </li>

            <li>
              Winter 2022

              <ul>

                <li>
                  CS 109: Probability for Computer Scientists
                </li>

                <li>
                  CS 107: Computer Organization and Systems
                </li>

                <li>
                  SPANLANG 2: First-Year Spanish, Second Quarter
                </li>

              </ul>
            </li>

            <li>
              Fall 2021

              <ul>

                <li>
                  CS 106B: Programming Abstractions
                </li>

                <li>
                  CS 106M: Enrichment Adventures in Programming Abstractions
                </li>

                <li>
                  CS 106L: Standard C++ Programming Laboratory
                </li>

                <li>
                  COLLEGE 101: Why College?  
                </li>

                <li>
                  MATH 51: Linear Algebra, Multivariable Calculus, and Modern Applications
                  {/* MATH 51: Linear Algebra & Multivariable Calculus */}
                </li>

              </ul>
            </li>
          </ul>
        </p>

        <p>
          Organizations

          <ul>

            <li>
              <a class="textlink" target="_blank" href="https://cs198.stanford.edu/">Section Leading </a> (March 2022 —). I'm a Section Leader for CS106A (Python) and CS106B (C++) in the CS department. Responsibilities include holding weekly discussion sections to review concepts, leading Office Hours, and grading assignments and exams.
            </li>


            <li>
              <a class="textlink" target="_blank" href="https://stanfordclubsports.com/sports/golf">Club Golf </a> (September 2021 —). I'm the Vice President of Stanford's Club Golf team. I helped restart the team along with 3 other friends, and we grew it to 50+ members. We organized (and won!) the inaugral <a class="subtlelink" target="_blank" href="https://stanfordclubsports.com/documents/2022/4/12/The_Axe_Cup_Results.pdf">Axe Cup </a>
              against Berkeley's team, negotiated with the course for weekly tee times for members, and managed a budget of ~$10k. We're planning to compete on the national circuit next year — if you're interested in joining us, please contact me!
            </li>


          </ul>
        </p>
      </div>


    </div>
  );
}

export default Stanford;

