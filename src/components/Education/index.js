const Education = () => {
    return (
    <section id="education" className="education">
    <div className="section-heading text-center">
      <h2>education</h2>
    </div>
    <div className="container">
      <div className="education-horizontal-timeline">
        <div className="row">
          <div className="col-sm-4">
            <div className="single-horizontal-timeline">
              <div className="experience-time">
                <h2>2010 - 2016</h2>
                <h3>Elementary <span>of </span> School</h3>
              </div>{/*/.experience-time*/}
              <div className="timeline-horizontal-border">
                <i className="fa fa-circle" aria-hidden="true" />
                <span className="single-timeline-horizontal" />
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <h4 className="title">
                    Unklab Elementary School
                  </h4>
                  <h5>Airmadidi</h5>
                  <p className="description">
                  I completed my elementary education at Unklab Elementary School, where I developed a strong foundation in essential skills and values. This early educational experience instilled in me a love for learning and a commitment to academic excellence, shaping my future educational pursuits. 
                  </p>
                </div>{/*/.timeline-content*/}
              </div>{/*/.timeline*/}
            </div>
          </div>
          <div className="col-sm-4">
            <div className="single-horizontal-timeline">
              <div className="experience-time">
                <h2>2016 - 2019</h2>
                <h3>Junior <span> </span> High School</h3>
              </div>{/*/.experience-time*/}
              <div className="timeline-horizontal-border">
                <i className="fa fa-circle" aria-hidden="true" />
                <span className="single-timeline-horizontal" />
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <h4 className="title">
                    Unklab Junior High School
                  </h4>
                  <h5>Airmadidi</h5>
                  <p className="description">
                  I completed my junior high school education at Unklab Junior High School, where I further developed my academic skills and engaged in various extracurricular activities. This experience fostered my critical thinking and teamwork abilities, laying the groundwork for my future studies.
                  </p>
                </div>{/*/.timeline-content*/}
              </div>{/*/.timeline*/}
            </div>
          </div>
          <div className="col-sm-4">
            <div className="single-horizontal-timeline">
              <div className="experience-time">
                <h2>2019 - 2022</h2>
                <h3>High <span> </span> School</h3>
              </div>{/*/.experience-time*/}
              <div className="timeline-horizontal-border">
                <i className="fa fa-circle" aria-hidden="true" />
                <span className="single-timeline-horizontal spacial-horizontal-line
									" />
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <h4 className="title">
                    Unklab High School
                  </h4>
                  <h5>Airmadidi</h5>
                  <p className="description">
                  I graduated from Unklab Senior High School, where I deepened my knowledge in various subjects and participated in leadership roles within student organizations. This period not only enhanced my academic performance but also prepared me for the challenges of higher education and personal growth.
                  </p>
                </div>{/*/.timeline-content*/}
              </div>{/*/.timeline*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Education;