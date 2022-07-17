import Navbar from "../../components/Navbar";
import { Outlet, Link } from "react-router-dom";
import "../../components/Navbar.css";
function Harker() {
  return (
    <div>
        <Navbar />
        <div class = "text">
            <h2>The Harker School</h2>

            <p>
                I attended Harker for 7 years, between 6th and 12th grade. 
            </p>
            <p>
              Awards
                <ul>
                    <li>
                        2x Regional Science Fair 1st place (<a class = "textlink" target = "_blank" href="https://science-fair.org/database/project_awards.php?schoolname=Harker+School-Upper+Campus&school_year=1819&school_year=1819">2019</a>,  
                        <a class = "textlink" target = "_blank" href=" https://science-fair.org/database/project_awards.php?schoolname=Harker+School-Upper+Campus&school_year=1920&school_year=1920"> 2020</a>)
                        
                       
                    </li>
                    <li>
                        2x California Science and Engineering Fair Finalist (<a class = "textlink" target = "_blank" href="https://csef.usc.edu/History/2019/Projects/S1124.pdf">2019</a>, <a class = "textlink" target = "_blank" href="https://csef.usc.edu/History/2020/Quals.html">2020</a>)

                        
                    </li>
                    <li>
                          4th National Rank, United
                          States Earth Science Olympiad (2020)
                    </li>

                    <li>
                        Scholarship — Teen and Recreation Services, California Parks and Rec Society (2019)
                    </li>

                    <li>
                    <a class = "textlink" target = "_blank" href="https://harkeraquila.com/12332/news/students-react-to-new-awards-system/">Love of Learning</a>, National Merit Finalist, National AP Scholar 
                    </li>

                    

                    
                </ul>
            </p>

            <p>
              Organizations

              <ul>

                <li>
                    Mitra Family Humanities Research Scholar 
                </li>
             
                <li>
                  Varsity Golf (<a class = "textlink" target = "_blank" href="https://harkeraquila.com/59249/uncategorized/boys-and-girls-golf-teams-win-ccs-championships/">CCS Champions</a>) 
                </li>


                <li>
                  Speech and Debate (Captain)
                </li>

                <li>
                  Palo Alto Youth Council (<a class = "textlink" target = "_blank" href="https://www.mitchellparkteenservices.org/payc">Representative</a>) 
                  
                </li>

                <li>
                  Green Team (Treasurer)
                </li>

                

              </ul>
            </p>
        </div>
        
      
    </div>
  );
}

export default Harker;

