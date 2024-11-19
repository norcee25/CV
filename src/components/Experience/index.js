import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect,useState } from "react";


const Experience= () => {
  const [Experience, setExperience] = useState ({})
    useEffect (() => {
        const db = getDatabase();
        const ExperienceRef = ref(db, "Experience");
        onValue(ExperienceRef, (snapshot) => {
            const data = snapshot.val();
            setExperience(data);
        });
      }, []);
    return(
        <section id="experience" className="experience">
    <div className="section-heading text-center">
      <h2>{Experience.title}</h2>
    </div>
    <div className="container">
      <div className="experience-content">
        <div className="main-timeline">
          <ul>
            <li>
              <div className="single-timeline-box fix">
                <div className="row">
                  <div className="col-md-5">
                    <div className="experience-time text-right">
                      <h2>{Experience.year1}</h2>
                      <h3>{Experience.sa}</h3>
                    </div>{/*/.experience-time*/}
                  </div>{/*/.col*/}
                  <div className="col-md-offset-1 col-md-5">
                    <div className="timeline">
                      <div className="timeline-content">
                        <h4 className="title">
                          <span><i className="fa fa-circle" aria-hidden="true" /></span>
                          {Experience.csa}
                        </h4>
                        <h5>{Experience.papua}</h5>
                        <p className="description">
                        {Experience.desc1}
                        </p>
                      </div>{/*/.timeline-content*/}
                    </div>{/*/.timeline*/}
                  </div>{/*/.col*/}
                </div>
              </div>{/*/.single-timeline-box*/}
            </li>
            <li>
              <div className="single-timeline-box fix">
                <div className="row">
                  <div className="col-md-offset-1 col-md-5 experience-time-responsive">
                    <div className="experience-time">
                      <h2>
                        <span><i className="fa fa-circle" aria-hidden="true" /></span>
                        {Experience.year2}
                      </h2>
                      <h3>{Experience.al}</h3>
                    </div>{/*/.experience-time*/}
                  </div>{/*/.col*/}
                  <div className="col-md-5">
                    <div className="timeline">
                      <div className="timeline-content text-right">
                        <h4 className="title">
                          {Experience.unklab}
                        </h4>
                        <h5>{Experience.alamat}</h5>
                        <p className="description">
                        {Experience.desc2}
                        </p>
                      </div>{/*/.timeline-content*/}
                    </div>{/*/.timeline*/}
                  </div>{/*/.col*/}
                  <div className="col-md-offset-1 col-md-5 experience-time-main">
                    <div className="experience-time">
                      <h2>
                        <span><i className="fa fa-circle" aria-hidden="true" /></span>
                        {Experience.year3}
                      </h2>
                      <h3>{Experience.al}</h3>
                    </div>{/*/.experience-time*/}
                  </div>{/*/.col*/}
                </div>
              </div>{/*/.single-timeline-box*/}
            </li>
            <li>
              <div className="single-timeline-box fix">
                <div className="row">
                  <div className="col-md-5">
                    <div className="experience-time text-right">
                      <h2>{Experience.year4}</h2>
                      <h3>{Experience.pr}</h3>
                    </div>{/*/.experience-time*/}
                  </div>{/*/.col*/}
                  <div className="col-md-offset-1 col-md-5">
                    <div className="timeline">
                      <div className="timeline-content">
                        <h4 className="title">
                          <span><i className="fa fa-circle" aria-hidden="true" /></span>
                          {Experience.ikm}
                        </h4>
                        <h5>{Experience.unklab}</h5>
                        <p className="description">
                       {Experience.desc4}
                        </p>
                      </div>{/*/.timeline-content*/}
                    </div>{/*/.timeline*/}
                  </div>{/*/.col*/}
                </div>
              </div>{/*/.single-timeline-box*/}
            </li>
            <li>
              <div className="single-timeline-box fix">
                <div className="row">
                  <div className="col-md-offset-1 col-md-5 experience-time-responsive">
                    <div className="experience-time">
                      <h2>
                        <span><i className="fa fa-circle" aria-hidden="true" /></span>
                        {Experience.year5}
                      </h2>
                      <h3>{Experience.filkom}</h3>
                    </div>{/*/.experience-time*/}
                  </div>{/*/.col*/}
                  <div className="col-md-5">
                    <div className="timeline">
                      <div className="timeline-content text-right">
                        <h4 className="title">
                          {Experience.pic}
                        </h4>
                        <h5>{Experience.unklab}</h5>
                        <p className="description">
                        {Experience.desc5}
                        </p>
                      </div>{/*/.timeline-content*/}
                    </div>{/*/.timeline*/}
                  </div>{/*/.col*/}
                </div>
              </div>{/*/.single-timeline-box*/}
            </li>
            
          </ul>
        </div>{/*.main-timeline*/}
      </div>{/*.experience-content*/}
    </div>
  </section>
    )
}
export default Experience;