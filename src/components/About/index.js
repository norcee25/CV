import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect,useState } from "react";

const About = () => {
  const [About, setAbout ] = useState ({})
  useEffect (() => {
      const db = getDatabase();
      const AboutRef = ref(db, "About");
      onValue(AboutRef, (snapshot) => {
          const data = snapshot.val();
          setAbout(data);
      });
    }, []);
    return(
        <section id="about" className="about">
        <div className="section-heading text-center">
          <h2>{About.title}</h2>
        </div>
        <div className="container">
          <div className="about-content">
            <div className="row">
              <div className="col-sm-6">
                <div className="single-about-txt">
                  <h3>
                  {About.expln}
                  </h3>
                  <p>
                  {About.trnslt}
                  </p>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="single-about-add-info">
                        <h3>{About.phone}</h3>
                        <p>{About.nomor}</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single-about-add-info">
                        <h3>{About.email}</h3>
                        <p>{About.my}</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single-about-add-info">
                        <h3>{About.website}</h3>
                        <p>{About.www}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-offset-1 col-sm-5">
                <div className="single-about-img">
                  <img src={About.img1 || ""} alt="profile_image" />
                  <div className="about-list-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>{/* / li */}
                      <li>
                        <a href="#">
                          <i className="fa fa-dribbble" aria-hidden="true" />
                        </a>
                      </li>{/* / li */}
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>{/* / li */}
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>{/* / li */}
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </li>{/* / li */}
                    </ul>{/* / ul */}
                  </div>{/* /.about-list-icon */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default About;