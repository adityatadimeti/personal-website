import Navbar from '../components/Navbar';
import {Link } from "react-router-dom";
import './Writing.css';

function Writing() {
  return (
    <div>
        <Navbar />
        <div class = "text">
            <h2>Writing</h2>
            

            Here's a collection of works I've written over the years. Since most of my writing is in the form of academic essays
            written for class, locked away in Google Drive folders, I figured I'd showcase some of them here on this website. 
            
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
                Read the paper <a href="https://issuu.com/theharkerschool/docs/2021_mitra_tadimeti_final" target = "_blank" class = "textlink">here</a>, 
                and read more about the program  <a href="https://www.harker.org/student-research/humanities" target = "_blank" class = "textlink">here</a>. 
            </p>







            <h4>
                Irish Identity and Intellectualism: Surveying James Joyce (May '21) 
            </h4>

            <p className='workstext'>
                I researched some of James Joyce's work, primarily focusing on <i>A Portrait of the Artist as a Young Man</i>, and the influence of Ireland's
                historical context in the works' themes. 
            </p>
            
            <p className='workstext'>
                <a href="https://docs.google.com/document/d/1G6KHZPQSzE7ZWIBT1WXV8ukrv25i7Pkmhlsowo0S0kU/edit?usp=sharing" target = "_blank" class = "textlink">Link</a>. 
            </p>

            <h4>
                Other Works
            </h4>

            Computer Science
            <p className = "workstext">
                

                <p>
                    <a href="https://docs.google.com/document/d/1pJb57ZYIZKJbD57g9IiGuxpfKn7_A2LDVJ1vI_gDwF8/edit?usp=sharing" target="_blank" class="textlink"> Self-Driving Cars: An Application of PDP in the 21st century (March '20) </a>
                </p>

                <p>
                    <a href="https://docs.google.com/document/d/1nh6MgjHjOWBXjsvUf6V-8Dn2lJ07ojDq6MZdrnCKhnM/edit?usp=sharing" target="_blank" class="textlink"> History of PDP: An Analysis of McCulloch, Pitts, Rosenblatt, Minsky, and Papert (February '20) </a>
                    </p>

            </p>

            Literature
            <p className = "workstext">
                  <p>
                      <a href="https://docs.google.com/document/d/19PvPO-73atnw4pFT2MRWNKpBlzo0Wz5ZnDvRzE6SWj8/edit?usp=sharing" target="_blank" class="textlink">Viewing the Maginot Line as a Model of Self-Reliant Behavior in The Bluest Eye (April '20)</a>
                  </p>

                  <p>
                      <a href="https://docs.google.com/document/d/1ijseFZMqmJw4ok4geYBgNuM5E_S-HR3vMr3Z55EIP8E/edit?usp=sharing" target="_blank" class="textlink"> The Great Gatsby and Time: Embracing the Present (March '20) </a>
                  </p>

                  <p>
                      <a href="https://docs.google.com/document/d/11kAviu7Vta_lxSWrHolWd25ZsMNpVgjBbKOZJ-airv0/edit?usp=sharing" target="_blank" class="textlink">Marxism and <i>The Scarlet Letter</i> (January '20) </a>
                  </p>

                  <p>
                      <a href="https://docs.google.com/document/d/1NYk_26sJoe6mzc5h4NoCXZledMA6IsknYYVb-D3_rCI/edit" target="_blank" class="textlink"> Thoreau's “Solitude” and Transcendentalism (October '19) </a>
                  </p>

            </p>


            

        </div>
        
      
    </div>
  );
}

export default Writing;

