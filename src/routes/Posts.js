import Navbar from '../components/Navbar';
import {Link } from "react-router-dom";
function Posts() {
  return (
    <div>
        <Navbar />
        <div class = "text">
            <h2>Posts</h2>

            <p>
              <Link class = "textlink" to="/Posts/CourseReviews"> A Review of Stanford Courses (June 6, 2022)</Link>
            </p>
            
            <p>
              <Link class = "textlink" to="/Posts/Writing"> Collection of Writing (July 17, 2022)</Link>
            </p>
            
        </div>
        
      
    </div>
  );
}

export default Posts;

