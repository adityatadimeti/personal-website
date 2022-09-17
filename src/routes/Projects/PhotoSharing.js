import Navbar from "../../components/Navbar";
import { Outlet, Link } from "react-router-dom";
import "../../components/Navbar.css";
function PhotoSharing() {
    return (
        <div>
            <Navbar />
            <div class="text">
                <h2>Photo Sharing</h2>

                <p>
                    Insert Description Here, with links to project.
                </p>

                <p>
                    ‎
                </p>

                <p>
                    Tech Stack: Javascript, React, Express.js, MongoDB, HTML/CSS
                </p>


            </div>


        </div>
    );
}

export default PhotoSharing;

