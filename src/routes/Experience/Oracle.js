import Navbar from "../../components/Navbar";
import { Outlet, Link } from "react-router-dom";
import "../../components/Navbar.css";
function Oracle() {
    return (
        <div>
            <Navbar />
            <div class="text">
                <h2>Oracle</h2>

                <p>
                    I'm currently a software engineering intern in Oracle's Cloud Infrastructure group, where I work in the Virtual Cloud Networking—Control Plane (VCN-CP) team. 
                    I'm working on revamping the internal debugging tool used for identifying and resolving customer related networking issues with connecting to Oracle's cloud services.
                </p>

                <p>
                    I programmatically queried the Networking team's internal key-value storage 
                    containing control-plane specs. I updated backend server queries, modified API calls, and updated frontend UI to add critical search features. 
                    I taught new hires how to modify the debugging tool and presented to the greater Networking team, as the debugging tool's codebase was sparsely 
                    documented and not well understood. 
                </p>

                <p>
                    Estimated to save dozens of hours per week and added features helped resolve customer related outages.
                    Code used in production during internship. 
                </p>

                <p>
                    ‎
                </p>



                <p>
                    Tech Stack: Java, JavaScript, Git, Docker, Kubernetes
                </p>


            </div>


        </div>
    );
}

export default Oracle;

