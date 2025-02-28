import React from "react";
import "../components-css/Home.css"

const Home = () => {
  return ( 
    <div className="section">
      <h4>Bonjour et Bienvenue</h4>
      <p className="home-description">
        Je suis Gabriel Gagnon, diplômé de l'Université Laval en Génie Logiciel. 
        Mon intérêt pour les sciences m’a naturellement dirigé vers ce domaine, car la conception et le développement de logiciels permettent un apprentissage 
        constant dans de nombreux secteurs.
      </p>
      
      <p className="home-description">
        Ma spécialité se situe dans le développement back-end des logiciels, mais je suis toujours avide d’apprendre de nouvelles compétences 
        et de relever des défis dans divers domaines de la technologie.
      </p>

      <p className="home-description">
        Si vous avez des questions ou des commentaires, n'hésitez pas à me contacter via les liens ci-dessous !
      </p>
      <div>
        <ul className="social-btn">
          <li>
              <p className="home-description">Quelques façons de me rejoindre : </p>
          </li>
          <li>
              <a href="mailto:gabriel.gagnon97@gmail.com">
              <img
                src="assets/email.png"
                alt="eMail"
                className="image-social-home"
                title="Mon email : gabriel.gagnon97@gmail.com"
              />
          </a>
          </li>
          <li>
            <a href="https://github.com/GabrielGagn0n">
            <img
              src="assets/github.png" 
              alt="Github"
              className="image-social-home"
              title="Mon Github : GabrielGagn0n"
            />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/gabriel-gagnon-8673b9210">
            <img
              src="assets/linkedin.png"
              alt="LinkedIn"
              className="image-social-home"
              title="Mon LinkedIn"
            />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;