import Navbar from "../../components/Navbar";
import { Outlet, Link } from "react-router-dom";
import "../../components/Navbar.css";
function Wildfire() {
    return (
        <div>
            <Navbar />
            <div class="text">
                <h2>Computational Wildfire Research</h2>

                <p>
                    I joined the Global Environmental Change Lab at UC Davis as a Machine Learning intern during my sophomore year of high school.
                    I worked with Professor Erwan Monier for a little over two years to develop ML models to predict the size of wildfires prior to ignition. I presented
                    the research at the AGU Fall Meeting in 2019 and <Link class="textlink" to="/Portfolio/Harker">won some awards</Link> with the research.
                </p>

                <p>
                    ‎
                </p>

                <p>
                    Tech Stack: R, Python
                </p>


            </div>


        </div>
    );
}

export default Wildfire;

