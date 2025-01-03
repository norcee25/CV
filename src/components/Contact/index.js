import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect,useState } from "react";

const Contact = () => {
  const [Contact, setContact ] = useState ({})
  useEffect (() => {
      const db = getDatabase();
      const ContactRef = ref(db, "Contact");
      onValue(ContactRef, (snapshot) => {
          const data = snapshot.val();
          setContact(data);
      });
    }, []);
    return (
        <section id="contact" className="contact">
    <div className="section-heading text-center">
      <h2>{Contact.title}</h2>
    </div>
    <div className="container">
      <div className="contact-content">
        <div className="row">
          <div className="col-md-offset-1 col-md-5 col-sm-6">
            <div className="bsingle-contact-box">
              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="col-sm-6 col-xs-12">
                      <div className="form-group">
                        <input type="text" className="form-control" id="name" placeholder="Name*" name="name" />
                      </div>{/*/.form-group*/}
                    </div>{/*/.col*/}
                    <div className="col-sm-6 col-xs-12">
                      <div className="form-group">
                        <input type="email" className="form-control" id="email" placeholder="Email*" name="email" />
                      </div>{/*/.form-group*/}
                    </div>{/*/.col*/}
                  </div>{/*/.row*/}
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input type="text" className="form-control" id="subject" placeholder="Subject" name="subject" />
                      </div>{/*/.form-group*/}
                    </div>{/*/.col*/}
                  </div>{/*/.row*/}
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea className="form-control" rows={8} id="comment" placeholder="Message" defaultValue={""} />
                      </div>{/*/.form-group*/}
                    </div>{/*/.col*/}
                  </div>{/*/.row*/}
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="single-contact-btn">
                        <a className="contact-btn" href="#" role="button">submit</a>
                      </div>{/*/.single-single-contact-btn*/}
                    </div>{/*/.col*/}
                  </div>{/*/.row*/}
                </form>{/*/form*/}
              </div>{/*/.contact-form*/}
            </div>{/*/.single-contact-box*/}
          </div>{/*/.col*/}
          <div className="col-md-offset-1 col-md-5 col-sm-6">
            <div className="single-contact-box">
              <div className="contact-adress">
                <div className="contact-add-head">
                  <h3>{Contact.nama}</h3>
                </div>
                <div className="contact-add-info">
                  <div className="single-contact-add-info">
                    <h3>{Contact.phone}</h3>
                    <p>{Contact.nmr}</p>
                  </div>
                  <div className="single-contact-add-info">
                    <h3>{Contact.email}</h3>
                    <p>{Contact.ad}</p>
                  </div>
                  <div className="single-contact-add-info">
                    <h3>{Contact.website}</h3>
                    <p>{Contact.ww}</p>
                  </div>
                </div>
              </div>{/*/.contact-adress*/}
              <div className="hm-foot-icon">
                <ul>
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>{/*/li*/}
                  <li><a href="#"><i className="fa fa-dribbble" /></a></li>{/*/li*/}
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>{/*/li*/}
                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>{/*/li*/}
                  <li><a href="#"><i className="fa fa-instagram" /></a></li>{/*/li*/}
                </ul>{/*/ul*/}
              </div>{/*/.hm-foot-icon*/}
            </div>{/*/.single-contact-box*/}
          </div>{/*/.col*/}
        </div>{/*/.row*/}
      </div>{/*/.contact-content*/}
    </div>{/*/.container*/}
  </section>
    )
}
export default Contact;