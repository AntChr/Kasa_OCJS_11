import { Navigate, useParams } from "react-router-dom";
import logements from '../assets/logements.json'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Collapse from "../components/Collapse";
import "../style/components/_logement.scss"
import Rating from "../components/Rating";
import Slideshow from "../components/Slideshow";


function Logement() {
  const params = useParams();
  const logementID = logements.find(x => x.id === params.id);
    return (
      <>
      { logementID ? (
        <div>
          <Header />
          <main>
            <Slideshow slides={logementID.pictures} />
            <div className="container__description">
              <div className="container__description__tiloctag">
              <div className="container__description__tiloctag__tiloc">
                <div className="container__description__tiloctag__tiloc__title">
                    <h2>{logementID.title}</h2>
                </div>
                <div className="container__description__tiloctag__tiloc__location">
                    <p>{logementID.location}</p>
                </div> 
            </div>
                    <div className="container__description__tiloctag__tag">
                      <ul className="container__description__tiloctag__tag__list">
                        {logementID.tags.map((tag, t) => {
                          return (            
                          <li className="container__description__tiloctag__tag__list__elt" key={t}>
                              {tag}
                          </li>)})
                          }
                      </ul>
                    </div>
                  </div>
                <div className="container__description__hostrating">
                <div className="logement__host">
            <h3>{logementID.host.name}</h3> 
            <div className="logement__host__picture">
                <img src={logementID.host.picture} alt="profile du propriétaire" />
            </div>
        </div>
                  <Rating rating={logementID.rating} />
                </div>
              </div>
            <div className="container__DE">
                <Collapse titre="Description" description={logementID.description}/>
                <Collapse titre="Équipements" description=
                  {logementID.equipments.map((eqpt,t) => {
                    return (
                    <li key={t}>{eqpt}</li> )})}/>
            </div>

          </main>
          <Footer />
        </div>
    ) : <Navigate replace to="/Error/" />
  } </>
  ) 
}

  export default Logement;