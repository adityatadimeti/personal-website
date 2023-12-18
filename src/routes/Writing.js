import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";
import './Writing.css';

function Writing() {
    return (
        <div>
            <Navbar />
            <div class="textInfo">
                <h2>Writing</h2>

                Here's a collection of formal works I've written over the years. 

                <h4>
                    Mitra Family Humanities Research (April '20 — May '21)
                </h4>

                <p className='workstext'>
                    The John Near and Mitra Family Humanities Research program is a selection-based humanities research program at The Harker School.
                    I researched the role of fire in indigenous-European relations and settlement in Australia for a little over a year. The process
                    culminated in a 30-page paper that was published in the Harker School's journal, and I presented the work at
                    the end of year conference featuring faculty, students, and administration.
                </p>

                <p className='workstext'>
                    Read the paper <a href="https://issuu.com/theharkerschool/docs/2021_mitra_tadimeti_final" target="_blank" class="textlink">here</a>,
                    and read more about the program  <a href="https://www.harker.org/student-research/humanities" target="_blank" class="textlink">here</a>.
                </p>


                <h4>
                    Other Works
                </h4>

                Computer Science
                <p className="workstext">


                    <p>
                        <a href="https://docs.google.com/document/d/1pJb57ZYIZKJbD57g9IiGuxpfKn7_A2LDVJ1vI_gDwF8/edit?usp=sharing" target="_blank" class="textlink"> Self-Driving Cars: An Application of PDP in the 21st century (March '20) </a>
                    </p>

                    <p>
                        <a href="https://docs.google.com/document/d/1nh6MgjHjOWBXjsvUf6V-8Dn2lJ07ojDq6MZdrnCKhnM/edit?usp=sharing" target="_blank" class="textlink"> History of PDP: An Analysis of McCulloch, Pitts, Rosenblatt, Minsky, and Papert (February '20) </a>
                    </p>

                </p>

            </div>


        </div>
    );
}

export default Writing;

