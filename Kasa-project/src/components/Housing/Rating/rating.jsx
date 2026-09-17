import "./Rating.scss";
import StarFull from "../../../assets/star-full.svg";
import StarEmpty from "../../../assets/star-empty.svg";

const Rating = ({ rating }) => {
    return (
        <div className="housing-rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <div className="star" key={star} >
                <img 
                    src={star <= Number(rating) ? StarFull : StarEmpty}
                    alt=""
                />
                </div>
            ))}
        </div>
    );
};

export default Rating;