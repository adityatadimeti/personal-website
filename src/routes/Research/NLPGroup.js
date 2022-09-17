import Navbar from "../../components/Navbar";
import { Outlet, Link } from "react-router-dom";
import "../../components/Navbar.css";
function NLPGroup() {
    return (
        <div>
            <Navbar />
            <div class="text">
                <h2>Stanford NLP Group</h2>

                <p>
                    I joined the Stanford NLP group my first quarter at Stanford. I shadowed a PhD and learned some NLP fundamentals. I did a bit of
                    data analysis for the project my team worked on: analying social media data to gauge public sentiment regarding
                    climate policies. I ended my work in January 2022, though I plan to return to the NLP group in the near future.
                </p>

                <p>
                    ‎
                </p>

                <p>
                    Tech Stack: Python
                </p>


            </div>


        </div>
    );
}

export default NLPGroup;

