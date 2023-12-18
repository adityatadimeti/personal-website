import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div>
      <Navbar />
      <div className="textInfo">
        <h2>Assorted writings</h2>

        {/* Post Entry */}
        <div className="postEntry">
          <div className="postMonth">Apr '21</div>
          <div>
            <h4 style={{ marginTop: '0', marginBottom: '0'}}>
              <a  href="https://issuu.com/theharkerschool/docs/2021_mitra_tadimeti_final" target="_blank" className="textlink">Fighting Fire with Fire: How Indigenous Fire Shaped European Settlement and Frontier Conflict in Australia</a>
            </h4>
            <p>
              A 30-page paper resulting from a year-long, <a href="https://www.harker.org/student-research/humanities" target="_blank" className="textlink">grant-based</a> research project.
            </p>
          </div>
        </div>

        {/* Post Entry */}
        <div className="postEntry">
          <div className="postMonth">Mar '20</div>
          <div>
            <h4 style={{ marginTop: '0', marginBottom: '0'}}>
              <a href="https://docs.google.com/document/d/1pJb57ZYIZKJbD57g9IiGuxpfKn7_A2LDVJ1vI_gDwF8/edit?usp=sharing" target="_blank" className="textlink">Self-Driving Cars: An Application of PDP in the 21st century</a>
            </h4>
            <p>
              An analysis of self-driving cars as an application of the PDP model of cognition.
            </p>
          </div>
        </div>

        {/* Post Entry */}
        <div className="postEntry">
          <div className="postMonth">Feb '20</div>
          <div>
            <h4 style={{ marginTop: '0', marginBottom: '0'}}>
              <a href="https://docs.google.com/document/d/1nh6MgjHjOWBXjsvUf6V-8Dn2lJ07ojDq6MZdrnCKhnM/edit?usp=sharing" target="_blank" className="textlink">History of PDP: An Analysis of McCulloch, Pitts, Rosenblatt, Minsky, and Papert</a>
            </h4>
            <p>
              A short history of 20th century perceptron models.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Posts;

// import Navbar from '../components/Navbar';
// import { Link } from "react-router-dom";
// function Posts() {
//   return (
//     <div>
//       <Navbar />
//       <div class="textInfo">
//         <h2>Assorted writings</h2>

//         <h4>
//         April '21 <a href="https://issuu.com/theharkerschool/docs/2021_mitra_tadimeti_final" target="_blank" class="textlink">Fighting Fire with Fire: How Indigenous Fire Shaped European Settlement</a>
//         </h4>

//         <p class="workstext">
//             A 30-page paper resulting from a year-long, <a href="https://www.harker.org/student-research/humanities" target="_blank" class="textlink">grant-based</a> research project.
//         </p>

//         <h4 style={{ marginTop: '50px' }}>
//         March '20 <a href="https://docs.google.com/document/d/1pJb57ZYIZKJbD57g9IiGuxpfKn7_A2LDVJ1vI_gDwF8/edit?usp=sharing" target="_blank" class="textlink"> Self-Driving Cars: An Application of PDP in the 21st century </a>
//         </h4>

//         <p class="workstext">
//             An analysis of self-driving cars as an application of the PDP model of cognition.
//         </p>

//         <h4 style={{ marginTop: '50px' }}>
//         February '20 <a href="https://docs.google.com/document/d/1nh6MgjHjOWBXjsvUf6V-8Dn2lJ07ojDq6MZdrnCKhnM/edit?usp=sharing" target="_blank" class="textlink"> History of PDP: An Analysis of McCulloch, Pitts, Rosenblatt, Minsky, and Papert (February '20) </a>
//         </h4>

//         <p class="workstext">
//         A short history of the perceptrons in the 20th century.
//         </p>

        

//       </div>


//     </div>
//   );
// }

// export default Posts;

