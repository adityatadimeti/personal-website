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
                            that I generally felt had low practical utility). Mendel Rosenblum does post all his past exams, which was 
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
                            Utility: 3/5
                        </li>

                        <li>
                            Difficulty: 3/5
                        </li>

                        <li>
                            Enjoyment: 4/5
                        </li>

                        <li>
                            This was my favorite class of Spring quarter. The instruction was pretty stellar and I 
                            established a solid proof writing foundation. The content was also entirely different from 
                            anything I'd seen in the past. The course was a lot more focused on the theoretical foundations of 
                            computing. I think theory courses inherently suffer from a lower utility compared to coding-based CS courses, 
                            but as an intro to CS theory I really enjoyed the course.
                        </li>
                      </ul>
                    </li>

                    <li>
                      PWR 1: Numbers, Metrics, and Counting: The Rhetoric of Quantitative Thinking

                      <ul>
                       

                        <li>
                            Utility: 3/5
                        </li>

                        <li>
                            Difficulty: 1.5/5
                        </li>

                        <li>
                            Enjoyment: 2.5/5
                        </li>

                        <li>
                            Required writing class. Among the more chill PWR classes with instruction that avoided lecture heavy classes, which I appreciated. 
                            My writing skills probably improved through the workshops / required essays. If you're looking to learn about numbers 
                            and metrics, this probably isn't what you're expecting, as the bulk of the learning comes through the research 
                            you do for the essays.  
                        </li>
                      </ul>
                    </li>

                    <li>
                      CS 198: Teaching Computer Science

                      <ul>

                        <li>
                            Utility: 5/5
                        </li>

                        <li>
                            Difficulty: 0/5
                        </li>

                        <li>
                            Enjoyment: 3.5/5
                        </li>

                        <li>
                            Series of workshops for new Section Leaders. The teaching simulations were pretty helpful and helped 
                            ease my nerves before my first section. Great community to work with. No real homeworks or anything, 
                            just maybe ~2 hours ish of quizzes / writeups. 
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
                            Utility: 5/5
                        </li>

                        <li>
                            Difficulty: 3/5
                        </li>

                        <li>
                            Enjoyment: 5/5
                        </li>

                        <li>
                            Extremely foundational course. The content was very clear and the instruction was fantastic — 
                            really enjoyed Chris Piech's enthusiasm during lectures. The assignments were a mix of 
                            probability problems and coding, which was really great to directly see probability applied. The 
                            final was pretty rough but that was to remedy the inflated averaged after an easy-ish midterm. 
                        </li>
                      </ul>
                    </li>

                    <li>
                      CS 107: Computer Organization and Systems

                      <ul>

                        <li>
                            Utility: 4/5
                        </li>

                        <li>
                            Difficulty: 5/5
                        </li>

                        <li>
                            Enjoyment: 3.5/5
                        </li>

                        <li>
                            Another foundational course. This course was hard — famously known as the weed-out course
                            in the CS department — but I made it through thanks to some late nights in 
                            weeks 7-10. Chris Gregg was a great instructor who was understanding and accomodative. The final 
                            assignment, building a heap allocator, took nearly 4 full days to complete. This was the first 
                            college course to really push me (I'm sure the first of many). 
                        </li>
                      </ul>
                    </li>

                    <li>
                      SPANLANG 2: First-Year Spanish, Second Quarter

                      <ul>

                        <li>
                            Utility: 1-5/5 
                        </li>

                        <li>
                            Difficulty: 1/5
                        </li>

                        <li>
                            Enjoyment: 3/5
                        </li>

                        <li>
                            Required course to fulfill my language credits. Fully virtual, but met every day for 1 hour. Pretty low
                            workload, and Juan Valdez was a really enjoyable instructor to learn from. I wasn't expecting to like 
                            the class, but the emphasis on projects and learning over stringent assignments was really great. 
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
                            Utility: 5/5
                        </li>

                        <li>
                            Difficulty: 2.5/5
                        </li>

                        <li>
                            Enjoyment: 5/5
                        </li>

                        <li>
                            Iconic intro CS course. Made lots of friends through this and got a rigorous introduction to C++. 
                            The content was presented in an interesting and engaging way. Also taught me time management: 
                            this was my first ever class where assignments were due weekly instead of daily (much different
                            than my high school experiences). 
                            
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
                            Met some cool people, but the classes week to week were pretty disjoint. The content we learned was interesting, but it was more surface level than I expected (though adequate for 1 unit class). One of the 
                            Dynamic Programming concepts we covered did help me secure an internship freshman summer, though, so that was nice. 
                        </li>
                      </ul>
                    </li>

                    <li>
                      CS 106L: Standard C++ Programming Laboratory

                      <ul>
                        <li>
                            106B uses their own modified version of C++, which is why 106L was a great complement. Really low workload 
                            and the lectures were pretty clear. Would recommend to anyone wanting to learn C++ beyond the handholding
                            Stanford does. Fair warning though, it was super easy to get by this course without paying attention to lectures.
                            You get out what you put in, which is consistent with a lot of courses here.  
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
                            Utility: 4/5
                        </li>

                        <li>
                            Difficulty: 0/5
                        </li>

                        <li>
                            Enjoyment: 3.5/5
                        </li>

                        <li>
                            I wanted to like this course more than I did, but I thought it offered a fresh perspective on what 
                            the benefits of college are. Inspired me a bit to diversify my studying here and the biggest takeaway 
                            I got was that complementing your intended major with unrelated courses is beneficial to your overall
                            intellectual journey. 
                        </li>
                      </ul>
                    </li>

                    <li>
                      MATH 51: Linear Algebra, Multivariable Calculus, and Modern Applications

                      <ul>

                        <li>
                            Utility: 5/5
                        </li>

                        <li>
                            Difficulty: 4/5
                        </li>

                        <li>
                            Enjoyment: 3/5
                        </li>

                        <li>
                            Fairly decent introduction to linear algebra and multivariable calculus. The instruction was great but 
                            fast-paced, and the 2nd midterm + final were pretty challenging. Overall good intro to what a 
                            lecture based college class looks like, and I was able to make some of my best friends through this course. 
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

