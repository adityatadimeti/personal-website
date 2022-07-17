import Navbar from '../components/Navbar';
import {Link } from "react-router-dom";
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

            <p>
                The John Near and Mitra Family Humanities Research program is a selection-based humanities research program at The Harker School.
                I researched the role of fire in indigenous-European relations and settlement in Australia for a little over a year. The process
                culminated in a 30-page paper that was published in the Harker School's journal, and I presented the work at 
                the end of year conference featuring faculty, students, and administration. 
            </p>
            
            <p>
                Read the paper <a href="https://issuu.com/theharkerschool/docs/2021_mitra_tadimeti_final" target = "_blank" class = "textlink">here</a>, 
                and read more about the program  <a href="https://www.harker.org/student-research/humanities" target = "_blank" class = "textlink">here</a>. 
            </p>

            <h4>
                Irish Identity and Intellectualism: Surveying James Joyce (May '21) 
            </h4>

            <p>
                I researched some of James Joyce's work, primarily focusing on <i>A Portrait of the Artist as a Young Man</i>, and the influence of Ireland's
                historical context in the works' themes. 
            </p>
            
            <p>
                Read the paper <a href="https://docs.google.com/document/d/1G6KHZPQSzE7ZWIBT1WXV8ukrv25i7Pkmhlsowo0S0kU/edit?usp=sharing" target = "_blank" class = "textlink">here</a>. 
                
            </p>

        </div>
        
      
    </div>
  );
}

export default Writing;

