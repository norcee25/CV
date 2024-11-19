import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect,useState } from "react";

const Skills= () => {
    const [Skills, setSkills ] = useState ({})
    useEffect (() => {
        const db = getDatabase();
        const SkillsRef = ref(db, "Skills");
        onValue(SkillsRef, (snapshot) => {
            const data = snapshot.val();
            setSkills(data);
        });
      }, []);
    return(
        <section id="skills" className="skills">
    <div className="skill-content">
      <div className="section-heading text-center">
        <h2>{Skills.title}</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="single-skill-content">
              <div className="barWrapper">
                <span className="progressText">{Skills.ui}</span>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={10} aria-valuemax={100} style={{}}>
                    </div>
                  </div>
                  <h3>{Skills.sp}</h3>	
                </div>
              </div>{/* /.barWrapper */}
              <div className="barWrapper">
                <span className="progressText">{Skills.fe}</span>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={10} aria-valuemax={100} style={{}}>
                    </div>
                  </div>
                  <h3>{Skills.dl}</h3>	
                </div>
              </div>{/* /.barWrapper */}
              <div className="barWrapper">
                <span className="progressText">{Skills.tm}</span>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div className="progress-bar" role="progressbar" aria-valuenow={97} aria-valuemin={10} aria-valuemax={100} style={{}}>
                    </div>
                  </div>
                  <h3>{Skills.st}</h3>	
                </div>
              </div>{/* /.barWrapper */}
              <div className="barWrapper">
                <span className="progressText">{Skills.cr}</span>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={10} aria-valuemax={100} style={{}}>
                    </div>
                  </div>
                  <h3>{Skills.sp}</h3>	
                </div>
              </div>{/* /.barWrapper */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="single-skill-content">
              <div className="barWrapper">
                <span className="progressText">{Skills.is}</span>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={10} aria-valuemax={100} style={{}}>
                    </div>
                  </div>
                  <h3>{Skills.sp}</h3>	
                </div>
              </div>{/* /.barWrapper */}
              <div className="barWrapper">
                <span className="progressText">{Skills.pr}</span>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={10} aria-valuemax={100} style={{}}>
                    </div>
                  </div>
                  <h3>{Skills.dl}</h3>	
                </div>
              </div>{/* /.barWrapper */}
              <div className="barWrapper">
                <span className="progressText">{Skills.cm}</span>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div className="progress-bar" role="progressbar" aria-valuenow={97} aria-valuemin={10} aria-valuemax={100} style={{}}>
                    </div>
                  </div>
                  <h3>{Skills.st}</h3>	
                </div>
              </div>{/* /.barWrapper */}
              <div className="barWrapper">
                <span className="progressText">{Skills.cr}</span>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={10} aria-valuemax={100} style={{}}>
                    </div>
                  </div>
                  <h3>{Skills.sp}</h3>	
                </div>
              </div>{/* /.barWrapper */}
            </div>
          </div>
        </div>{/* /.row */}
      </div>	{/* /.container */}		
    </div>{/* /.skill-content*/}
  </section>
    )
  }
  
  export default Skills;