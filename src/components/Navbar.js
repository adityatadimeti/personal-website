import { Outlet, Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div>
        
            <Link to="/">Home</Link> | {" "}
            <Link to="/Projects">Projects</Link> |{" "}
            <Link to="/Posts">Posts</Link>
        </div>
    );
}
