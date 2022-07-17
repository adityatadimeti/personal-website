import Navbar from '../components/Navbar';
import {Link } from "react-router-dom";
function Posts() {
  return (
    <div>
        <Navbar />
        <div class = "text">
            <h2>Posts</h2>

            <Link class = "textlink" to="/Posts/CourseReviews"> A Review of Stanford Courses (June 6, 2022)</Link>
        </div>
        
      
    </div>
  );
}

export default Posts;

