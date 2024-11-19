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
                  <img src="assets/images/portfolio/tiga.png" alt="portfolio image" />
                  <div className="isotope-overlay">
                    <a href="#">
                      ui/ux design
                    </a>
                  </div>{/* /.isotope-overlay */}
                </div>{/* /.item */}
                <div className="item">
                  <img src="assets/images/portfolio/empat.png" alt="portfolio image" />
                  <div className="isotope-overlay">
                    <a href="#">
                      ui/ux design
                    </a>
                  </div>{/* /.isotope-overlay */}
                </div>{/* /.item */}
              </div>{/* /.col */}
              <div className="col-sm-4">
                <div className="item">
                  <img src="assets/images/portfolio/dua.png" alt="portfolio image" />
                  <div className="isotope-overlay">
                    <a href="#">
                      Perancangan Sistem
                    </a>
                  </div>{/* /.isotope-overlay */}
                </div>{/* /.item */}
              </div>{/* /.col */}
              <div className="col-sm-4">
                <div className="item">
                  <img src="assets/images/portfolio/satu.png" alt="portfolio image" />
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