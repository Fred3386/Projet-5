import "./Rating.scss";
import starFull from "../../../assets/star-full.svg";
import starEmpty from "../../../assets/star-empty.svg";

const Rating = ({ rating }) => {
    return (
        <div className="housing-rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <div className="star" >
                <img 
                    key={star}
                    src={star <= Number(rating) ? starFull : starEmpty}
                    alt=""
                />
                </div>
            ))}
        </div>
    );
};

export default Rating;