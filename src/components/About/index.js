const About = () => {
    return(
        <section id="about" className="about">
        <div className="section-heading text-center">
          <h2>about me</h2>
        </div>
        <div className="container">
          <div className="about-content">
            <div className="row">
              <div className="col-sm-6">
                <div className="single-about-txt">
                  <h3>
                  I am an active student at Universitas Klabat, pursuing a degree in
 Information Systems. I am dedicated to my studies and
 continuously strive to enhance my skills and performance in this
 field. My commitment to learning and personal development
 drives me to excel academically and practically, preparing me for
 future challenges and opportunities in the information systems
 domain
                  </h3>
                  <p>
                  Saya adalah mahasiswa aktif di Universitas Klabat, mengambil gelar di bidang Sistem Informasi. Saya berdedikasi pada studi saya dan terus berusaha untuk meningkatkan keterampilan dan kinerja saya di bidang ini. Komitmen saya terhadap pembelajaran dan pengembangan pribadi mendorong saya untuk unggul secara akademis dan praktis, mempersiapkan saya untuk tantangan dan peluang di masa depan dalam prodi sistem informasi.
                  </p>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="single-about-add-info">
                        <h3>phone</h3>
                        <p>08981689711</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single-about-add-info">
                        <h3>email</h3>
                        <p>norce@gmail.com</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single-about-add-info">
                        <h3>website</h3>
                        <p>www.norce.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-offset-1 col-sm-5">
                <div className="single-about-img">
                  <img src="assets/images/about/me.jpg" alt="profile_image" />
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