import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect,useState } from "react";

const Portofolio = () => {
  const [Portofolio, setPortofolio] = useState ({})
    useEffect (() => {
        const db = getDatabase();
        const PortofolioRef = ref(db, "Portofolio");
        onValue(PortofolioRef, (snapshot) => {
            const data = snapshot.val();
            setPortofolio(data);
        });
      }, []);
    return (
        <section id="portfolio" className="portfolio">
    <div className="portfolio-details">
      <div className="section-heading text-center">
        <h2>{Portofolio.title}</h2>
      </div>
      <div className="container">
        <div className="portfolio-content">
          <div className="isotope">
            <div className="row">
              <div className="col-sm-4">
                <div className="item">
                  <img src={Portofolio.img3 || ""} alt="portfolio image" />
                  <div className="isotope-overlay">
                    <a href="#">
                      {Portofolio.ui}
                    </a>
                  </div>{/* /.isotope-overlay */}
                </div>{/* /.item */}
                <div className="item">
                  <img src={Portofolio.img4 || ""} alt="portfolio image" />
                  <div className="isotope-overlay">
                    <a href="#">
                    {Portofolio.ui}
                    </a>
                  </div>{/* /.isotope-overlay */}
                </div>{/* /.item */}
              </div>{/* /.col */}
              <div className="col-sm-4">
                <div className="item">
                  <img src={Portofolio.img2 || ""} alt="portfolio image" />
                  <div className="isotope-overlay">
                    <a href="#">
                     {Portofolio.si}
                    </a>
                  </div>{/* /.isotope-overlay */}
                </div>{/* /.item */}
              </div>{/* /.col */}
              <div className="col-sm-4">
                <div className="item">
                  <img src={Portofolio.img1 || ""} alt="portfolio image" />
                  <div className="isotope-overlay">
                    <a href="#">
                      {Portofolio.web}
                    </a>
                  </div>{/* /.isotope-overlay */}
                </div>{/* /.item */}
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/*/.isotope*/}
        </div>{/*/.gallery-content*/}
      </div>{/*/.container*/}
    </div>{/*/.portfolio-details*/}
  </section>
    )
}

export default Portofolio;