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
                    Below is a video demo of the photo sharing app I created. This was my final project for the CS142 class
                    at Stanford. The Github repository is private as the instructor requested
                    I take it down as the same structure of the project is used with each iteration of the class. 
                   
                </p>

                <p>
                    Here is a demo: <a class="textlink" target="_blank" href="https://www.youtube.com/watch?v=dZ_N4hJVq6Q"> Link</a>
                </p>

                <p>
                    Tech Stack: Javascript, React, Express.js, MongoDB, HTML/CSS
                </p>


            </div>


        </div>
    );
}

export default PhotoSharing;

