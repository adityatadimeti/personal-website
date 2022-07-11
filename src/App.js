import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
        <Navbar />
        <h2>Aditya Tadimeti</h2>
        <p>
            I'm a second year student at Stanford University studying Computer Science and Math. 
        </p>

        <p>
            I like to do impactful work in meaningful spaces. I'm broadly interested in NLP, Crypto, Neuroscience, and Sustainability. 
            {/* I'm interested in leveraging state-of-the-art technology to work on  */}
        </p>

        <p>
            Contact me at tadimeti [at] stanford [dot] edu.
        </p>
      
      <Outlet />
    </div>
  );
}

export default App;

