import vectorup from '../images/vectorup.png';
import vectordown from '../images/vectordown.png';
import { useState} from 'react'
import '../style/components/_collapseapp.scss'



const CollapseApp = ({titre, description}) => {
    const [isOpen, setIsOpen] = useState(true)

    return isOpen ? (
        <div>
                <div className={`collapseapp__${titre}`}>
                    <div className={`collapseapp__${titre}__title`}>
                        <h2>{titre}</h2>
                        <span className={`collapseapp__vector__${isOpen}`} onClick={() => setIsOpen(!isOpen)}>
                        <img src={vectordown} alt='flèche bas' />
                        </span>
                    </div>
                </div>
        </div>
     ) : (
        <div>
            <div className={`collapseapp__${titre}`}>
                <div className={`collapseapp__${titre}__title`}>
                    <h2 >{titre}</h2>
                    <span className={`collapseapp__vector__${isOpen}`} onClick={() => setIsOpen(!isOpen)}>
                    <img src={vectorup} alt='flèche haut' />
                    </span>
                </div>
                <div className={`collapseapp__${titre}__txt`}>
                    <p>{description}</p>
                    </div>
            </div>
        </div>
     )
}

export default CollapseApp

