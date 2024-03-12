import Star from '../images/Star.png';
import Starempty from '../images/Starempty.png';
import PropTypes from 'prop-types';


const Rating = ({rating}) => {
    const stars =[];
    for (let i =0; i < rating; i++) {
        stars.push(<img src={Star} alt="étoiles" key={i} />);
    }
    const starsempty =[];
    for (let i =0; i < (5-rating); i++) {
        starsempty.push(<img src={Starempty} alt="étoiles vides" key={i} />);
    }
    return (
        <div className="logement__rating">
                {stars}
                {starsempty}
        </div>
    )
}
Rating.propTypes = {
    rating: PropTypes.string.isRequired,
};
export default Rating
