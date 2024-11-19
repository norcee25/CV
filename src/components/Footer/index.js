import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect,useState } from "react";

const Footer=() => {
  const [Footer, setFooter ] = useState ({})
  useEffect (() => {
      const db = getDatabase();
      const FooterRef = ref(db, "Footer");
      onValue(FooterRef, (snapshot) => {
          const data = snapshot.val();
          setFooter(data);
      });
    }, []);
    return(
        <footer id="footer-copyright" className="footer-copyright">
    <div className="container">
      <div className="hm-footer-copyright text-center">
        <p>
          {Footer.satu} <a href="https://www.themesine.com/"> {Footer.dua}</a>
        </p>{/*/p*/}
      </div>{/*/.text-center*/}
    </div>{/*/.container*/}
    <div id="scroll-Top">
      <div className="return-to-top">
        <i className="fa fa-angle-up " id="scroll-top" />
      </div>
    </div>{/*/.scroll-Top*/}
  </footer>
    )
}

export default Footer;