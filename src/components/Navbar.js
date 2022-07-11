import { Outlet, Link } from "react-router-dom";
import './Navbar.css';
export default function Navbar() {
    return (
        <div class = "header">
        
            <Link class = "link" to="/">Home</Link>  
            <Link class = "link" to="/Projects">Projects</Link> 
            <Link class = "link" to="/Posts">Posts</Link>
        </div>
    );
}
