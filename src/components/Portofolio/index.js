const Portofolio = () => {
    return (
        <section id="portfolio" className="portfolio">
    <div className="portfolio-details">
      <div className="section-heading text-center">
        <h2>portfolio</h2>
      </div>
      <div className="container">
        <div className="portfolio-content">
          <div className="isotope">
            <div className="row">
              <div className="col-sm-4">
                <div className="item">
                  <img src="assets/images/portfolio/p1.jpg" alt="portfolio image" />
                  <div className="isotope-overlay">
                    <a href="#">
                      ui/ux design
                    </a>
                  </div>{/* /.isotope-overlay */}
                </div>{/* /.item */}
                <div className="item">
                  <img src="assets/images/portfolio/p2.jpg" alt="portfolio image" />
                  <div className="isotope-overlay">
                    <a href="#">
                      ui/ux design
                    </a>
                  </div>{/* /.isotope-overlay */}
                </div>{/* /.item */}
              </div>{/* /.col */}
              <div className="col-sm-4">
                <div className="item">
                  <img src="assets/images/portfolio/p3.jpg" alt="portfolio image" />
                  <div className="isotope-overlay">
                    <a href="#">
                      web design
                    </a>
                  </div>{/* /.isotope-overlay */}
                </div>{/* /.item */}
              </div>{/* /.col */}
              <div className="col-sm-4">
                <div className="item">
                  <img src="assets/images/portfolio/p4.jpg" alt="portfolio image" />
                  <div className="isotope-overlay">
                    <a href="#">
                      web development
                    </a>
                  </div>{/* /.isotope-overlay */}
                </div>{/* /.item */}
                <div className="item">
                  <img src="assets/images/portfolio/p5.jpg" alt="portfolio image" />
                  <div className="isotope-overlay">
                    <a href="#">
                      web development
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