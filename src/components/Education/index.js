import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect,useState } from "react";

const Education = () => {
    const [Education, setEducation] = useState ({})
    useEffect (() => {
        const db = getDatabase();
        const EducationRef = ref(db, "Education");
        onValue(EducationRef, (snapshot) => {
            const data = snapshot.val();
            setEducation(data);
        });
      }, []);
    return (
    <section id="education" className="education">
    <div className="section-heading text-center">
      <h2>{Education.title}</h2>
    </div>
    <div className="container">
      <div className="education-horizontal-timeline">
        <div className="row">
          <div className="col-sm-4">
            <div className="single-horizontal-timeline">
              <div className="experience-time">
                <h2>{Education.year1}</h2>
                <h3>{Education.sd}</h3>
              </div>{/*/.experience-time*/}
              <div className="timeline-horizontal-border">
                <i className="fa fa-circle" aria-hidden="true" />
                <span className="single-timeline-horizontal" />
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <h4 className="title">
                    {Education.sd1}
                  </h4>
                  <h5>{Education.alamat}</h5>
                  <p className="description">
                  {Education.desc1}
                  </p>
                </div>{/*/.timeline-content*/}
              </div>{/*/.timeline*/}
            </div>
          </div>
          <div className="col-sm-4">
            <div className="single-horizontal-timeline">
              <div className="experience-time">
                <h2>{Education.year2}</h2>
                <h3>{Education.smp}</h3>
              </div>{/*/.experience-time*/}
              <div className="timeline-horizontal-border">
                <i className="fa fa-circle" aria-hidden="true" />
                <span className="single-timeline-horizontal" />
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <h4 className="title">
                    {Education.smp2}
                  </h4>
                  <h5>{Education.alamat}</h5>
                  <p className="description">
                  {Education.desc2}
                  </p>
                </div>{/*/.timeline-content*/}
              </div>{/*/.timeline*/}
            </div>
          </div>
          <div className="col-sm-4">
            <div className="single-horizontal-timeline">
              <div className="experience-time">
                <h2>{Education.year3}</h2>
                <h3>{Education.sma}</h3>
              </div>{/*/.experience-time*/}
              <div className="timeline-horizontal-border">
                <i className="fa fa-circle" aria-hidden="true" />
                <span className="single-timeline-horizontal spacial-horizontal-line
									" />
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <h4 className="title">
                    {Education.sma2}
                  </h4>
                  <h5>{Education.alamat}</h5>
                  <p className="description">
                  {Education.desc3}
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