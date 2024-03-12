import Banner from '../components/Banner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import logements from '../assets/logements.json'
import { Link } from 'react-router-dom'
import '../style/components/_card.scss'


function Accueil() {
  const [logementData, setLogementData] = useState([])

  useEffect(() => {
    setLogementData(logements)
  }, [])
  return (
    <div>
          <Header />
          <main className='container__home'>
          <Banner />
          <div className='logement-list'>
            {logementData.map((logement) => (
            <div key={logement.id} className='logement-list_card'>
              <Link  to={`/logement/${logement.id}`}>
                <div>
                    <img className ='logement-list_img' src={logement.cover} alt={logement.title} />
                    <h2 className="logement-list_txt">{logement.title}</h2>
                    </div>
                </Link>
                </div>
            ))}
        </div>
          </main>
          <Footer />
    </div>
  )
}
export default Accueil;