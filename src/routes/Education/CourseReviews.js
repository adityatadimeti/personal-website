import Navbar from "../../components/Navbar";
import { Outlet, Link } from "react-router-dom";
import "../../components/Navbar.css";
function CourseReviews() {
  return (
    <div>
        <Navbar />
        <div class = "text">
            <h2>Stanford Course Reviews</h2>

            <p>
                Here are my personal reviews on the courses I've taken at Stanford. Note that this purely reflects my experiences — <a href="https://dictionary.cambridge.org/us/dictionary/english/ymmv#:~:text=Meaning%20of%20YMMV%20in%20English,better%2C%20but%20of%20course%20YMMV." target = "_blank" class = "textlink">YMMV</a>.
            </p>

            <h4>
              Freshman Year (September '21 — June '22) 
            </h4>

              <ul>
                <li>
                  Spring 2022

                  <ul>

                    <li>
                      CS 142: Web Applications

                      <ul>

                        <li>
                            Utility: 3.5/5
                        </li>

                        <li>
                            Difficulty: 5/5
                        </li>

                        <li>
                            Enjoyment: 1.5/5
                        </li>

                        <li>
                            This class was... a lot. Carta reviews were pretty cautionary: unclear instruction coupled with esoteric exams and vague 
                            assignment specs make for an overall negative experience. My experiences were largely similar. I would say 
                            that I thought the Photo Sharing assignments were where I learned the most. The lectures are usually unrelated
                            to the current assignment, but they're directly related to exam content (which covered entirely theoretical material
                            that I generally felt had low practical utility). Professor Rosenblum does post all his past exams, which was 
                            transparent and useful, so you know what to expect. I took it alone, and looking back I wish I had more friends to collaborate with 
                            during the later weeks as the assignments became increasingly challenging. The course's open internet / Stack Overflow policy was 
                            a blessing. 

                            <p>
                                Utility of 3.5 because the assignments were directly relevant to web development skills, but I felt the lecture/exam content was 
                                too theoretical to be useful. Probably would take again, but only if I had more friends to lean on.
                                
                            </p>
                        </li>
                      </ul>
                      
                    </li>

                    <li>
                      CS 103: Mathematical Foundations of Computing

                      <ul>
                        <li>
                            ASDF
                        </li>

                        <li>
                            Utility: 3/5
                        </li>

                        <li>
                            Difficulty: 3/5
                        </li>

                        <li>
                            Enjoyment: 4/5
                        </li>
                      </ul>
                    </li>

                    <li>
                      PWR 1: Numbers, Metrics, and Counting: The Rhetoric of Quantitative Thinking

                      <ul>
                        <li>
                            ASDF
                        </li>

                        <li>
                            Utility: 3/5
                        </li>

                        <li>
                            Difficulty: 1.5/5
                        </li>

                        <li>
                            Enjoyment: 3/5
                        </li>
                      </ul>
                    </li>

                    <li>
                      CS 198: Teaching Computer Science

                      <ul>
                        <li>
                            ASDF
                        </li>

                        <li>
                            Utility: 5/5
                        </li>

                        <li>
                            Difficulty: 0/5
                        </li>

                        <li>
                            Enjoyment: 3.5/5
                        </li>
                      </ul>
                    </li>

                  </ul>
                </li>

                <li>
                  Winter 2022

                  <ul>

                    <li>
                      CS 109: Probability for Computer Scientists

                      <ul>
                        <li>
                            ASDF
                        </li>

                        <li>
                            Utility: 5/5
                        </li>

                        <li>
                            Difficulty: 3/5
                        </li>

                        <li>
                            Enjoyment: 5/5
                        </li>
                      </ul>
                    </li>

                    <li>
                      CS 107: Computer Organization and Systems

                      <ul>
                        <li>
                            ASDF
                        </li>

                        <li>
                            Utility: 4/5
                        </li>

                        <li>
                            Difficulty: 5/5
                        </li>

                        <li>
                            Enjoyment: 3.5/5
                        </li>
                      </ul>
                    </li>

                    <li>
                      SPANLANG 2: First-Year Spanish, Second Quarter

                      <ul>
                        <li>
                            ASDF
                        </li>

                        <li>
                            Utility: 1-5/5 
                        </li>

                        <li>
                            Difficulty: 1/5
                        </li>

                        <li>
                            Enjoyment: 3/5
                        </li>
                      </ul>
                    </li>

                  </ul>
                </li>

                <li>
                  Fall 2021

                  <ul>

                    <li>
                      CS 106B: Programming Abstractions

                      <ul>
                        <li>
                            ASDF
                        </li>

                        <li>
                            Utility: 5/5
                        </li>

                        <li>
                            Difficulty: 2.5/5
                        </li>

                        <li>
                            Enjoyment: 5/5
                        </li>
                      </ul>
                    </li>

                    <li>
                      CS 106M: Enrichment Adventures in Programming Abstractions

                      <ul>

                        <li>
                            Utility: 1.5/5
                        </li>

                        <li>
                            Difficulty: 1/5
                        </li>

                        <li>
                            Enjoyment: 3/5
                        </li>
                        <li>
                            met some cool people, but the classes were pretty disjoint. the stuff we learned was interesting, but it was more surface level than i expected (though adequate for 1 unit class). one of teh 
                            dp concepts we covered did help me secure an internship freshman summer, though, so that was nice. 
                        </li>
                      </ul>
                    </li>

                    <li>
                      CS 106L: Standard C++ Programming Laboratory

                      <ul>
                        <li>
                            ASDF
                        </li>

                        <li>
                            Utility: 5/5
                        </li>

                        <li>
                            Difficulty: 1/5
                        </li>

                        <li>
                            Enjoyment: 3.5/5
                        </li>
                      </ul>
                    </li>

                    <li>
                      COLLEGE 101: Why College? Your Education and the Good Life

                      <ul>
                        <li>
                            ASDF
                        </li>

                        <li>
                            Utility: 4/5
                        </li>

                        <li>
                            Difficulty: 0/5
                        </li>

                        <li>
                            Enjoyment: 3.5/5
                        </li>
                      </ul>
                    </li>

                    <li>
                      MATH 51: Linear Algebra, Multivariable Calculus, and Modern Applications

                      <ul>
                        <li>
                            ASDF
                        </li>

                        <li>
                            Utility: 5/5
                        </li>

                        <li>
                            Difficulty: 4/5
                        </li>

                        <li>
                            Enjoyment: 3/5
                        </li>
                      </ul>
                    </li>

                  </ul>
                </li>
              </ul>

           
        </div>
        
      
    </div>
  );
}

export default CourseReviews;

