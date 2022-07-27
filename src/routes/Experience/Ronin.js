import Navbar from "../../components/Navbar";
import { Outlet, Link } from "react-router-dom";
import "../../components/Navbar.css";
function Ronin() {
  return (
    <div>
        <Navbar />
        <div class = "text">
            <h2>Project Ronin</h2>

            <p>
                I worked full time as an NLP intern for Project Ronin in the Data Science team between May and June 2022. I worked 
                sporadically as a part time contractor after that, and will return full time in September. 
            </p>

            <p>
                I analyzed the performance of the NLP team's NER models for symptom extraction, and am currently in the process of 
                crafting an end to end pipeline for sectionizing oncology clinical notes. This involves annotating notes in 
                John Snow Labs, using rule-based regex tools, and using tools like transformers/Medspacy for the sectionizing process.
            </p>
            
            <p>
            ‎
            </p>


            <p>
              Tech Stack: Python, Databricks
            </p>
            

        </div>
        
      
    </div>
  );
}

export default Ronin;

