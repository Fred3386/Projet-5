import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ logement }) => {
  return (
    <Link to={`/housing/${logement.id}`} className="card">
      <article className="card">
        <img src={logement.cover} alt={logement.title} />
        <h2>{logement.title}</h2>
      </article>
    </Link>
  )
}

export default Card