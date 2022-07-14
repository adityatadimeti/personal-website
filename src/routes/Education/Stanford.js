import Navbar from "../../components/Navbar";
import { Outlet, Link } from "react-router-dom";
function Stanford() {
  return (
    <div>
        <Navbar />
        <div class = "text">
            <h2>Stanford</h2>

            <p>
              Coursework

              <ul>
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
                      COLLEGE 101: Why College? Your Education and the Good Life
                    </li>

                    <li>
                      MATH 51: Linear Algebra, Multivariable Calculus, and Modern Applications
                    </li>

                  </ul>
                </li>
              </ul>
            </p>

            <p>
              Organizations
            </p>
        </div>
        
      
    </div>
  );
}

export default Stanford;

