const Skills= () => {
    return(
        <section id="skills" className="skills">
    <div className="skill-content">
      <div className="section-heading text-center">
        <h2>skills</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="single-skill-content">
              <div className="barWrapper">
                <span className="progressText">ui/ux</span>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={10} aria-valuemax={100} style={{}}>
                    </div>
                  </div>
                  <h3>90%</h3>	
                </div>
              </div>{/* /.barWrapper */}
              <div className="barWrapper">
                <span className="progressText">Front End</span>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={10} aria-valuemax={100} style={{}}>
                    </div>
                  </div>
                  <h3>85%</h3>	
                </div>
              </div>{/* /.barWrapper */}
              <div className="barWrapper">
                <span className="progressText">Teaching and Mentoring</span>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div className="progress-bar" role="progressbar" aria-valuenow={97} aria-valuemin={10} aria-valuemax={100} style={{}}>
                    </div>
                  </div>
                  <h3>97%</h3>	
                </div>
              </div>{/* /.barWrapper */}
              <div className="barWrapper">
                <span className="progressText">Creativity</span>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={10} aria-valuemax={100} style={{}}>
                    </div>
                  </div>
                  <h3>90%</h3>	
                </div>
              </div>{/* /.barWrapper */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="single-skill-content">
              <div className="barWrapper">
                <span className="progressText">Interpersonal Skills</span>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={10} aria-valuemax={100} style={{}}>
                    </div>
                  </div>
                  <h3>90%</h3>	
                </div>
              </div>{/* /.barWrapper */}
              <div className="barWrapper">
                <span className="progressText">Public Relation</span>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={10} aria-valuemax={100} style={{}}>
                    </div>
                  </div>
                  <h3>85%</h3>	
                </div>
              </div>{/* /.barWrapper */}
              <div className="barWrapper">
                <span className="progressText">communication</span>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div className="progress-bar" role="progressbar" aria-valuenow={97} aria-valuemin={10} aria-valuemax={100} style={{}}>
                    </div>
                  </div>
                  <h3>97%</h3>	
                </div>
              </div>{/* /.barWrapper */}
              <div className="barWrapper">
                <span className="progressText"> creativity</span>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={10} aria-valuemax={100} style={{}}>
                    </div>
                  </div>
                  <h3>90%</h3>	
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