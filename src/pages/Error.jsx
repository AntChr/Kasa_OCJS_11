import { Link } from "react-router-dom";
import '../style/components/_error.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'


//Structure de la page Error
function Error () {
    return (
      <div>
        <Header />
            <div className="block_error">
            <h1 className="Error__title"> 404 </h1>
            <h2> Oups! la page que vous demandez n&apos;existe pas </h2>
            <Link className = "Error_Accueil" to ='/'>Retourner sur la page d&apos;accueil</Link>
            </div>
        <Footer />    
      </div>
            )
          }

export default Error
