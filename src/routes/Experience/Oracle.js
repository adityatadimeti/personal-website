import Navbar from "../../components/Navbar";
import { Outlet, Link } from "react-router-dom";
import "../../components/Navbar.css";
function Oracle() {
  return (
    <div>
        <Navbar />
        <div class = "text">
            <h2>Oracle</h2>

            <p>
                I'm currently a software engineering intern in Oracle's Cloud Infrastructure group, where I work in the Virtual Cloud Networking (VCN) team. 
            </p>

            <p>
                  I'm working on revamping the internal debugging tool used for identifying and resolving customer related networking issues with connecting to Oracle's cloud services.
            </p>
            
            <p>
            ‎
            </p>



            <p>
              Tech Stack: Java, Git, Docker, Kubernetes
            </p>
            

        </div>
        
      
    </div>
  );
}

export default Oracle;

