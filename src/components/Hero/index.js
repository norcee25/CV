import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect,useState } from "react";

const Hero = () => {
  const [Hero, setHero ] = useState ({})
  useEffect (() => {
      const db = getDatabase();
      const HeroRef = ref(db, "Hero");
      onValue(HeroRef, (snapshot) => {
          const data = snapshot.val();
          setHero(data);
      });
    }, []);
    return(
        <section id="welcome-hero" className="welcome-hero">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="header-text">
            <h2> {Hero.title1} <br /> {Hero.title2}<span></span> </h2>
            <p> {Hero.desc} </p>
            <a href="assets/download/Norce Shoudick Tanaty, CV[1].pdf" download>{Hero.dw}</a>
          </div>{/*/.header-text*/}
        </div>{/*/.col*/}
      </div>{/* /.row*/}
    </div>{/* /.container*/}
  </section>
    )
}
export default Hero;