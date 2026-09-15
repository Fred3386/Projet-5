import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Gallery from "../../components/Housing/Gallery/gallery";
import Title from "../../components/Housing/Title/title";
import Location from "../../components/Housing/Location/location";
import Tags from "../../components/Housing/Tags/tags";
import Host from "../../components/Housing/Host/host";
import Rating from "../../components/Housing/Rating/rating";
import "./Housing.scss";


const Housing = () => {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    if (!logement) {
        return <h1>Logement introuvable</h1>;
    }

    return (
        <main className="housing">
                <Gallery pictures={logement.pictures} />
            <div className="housing-details">
                <div className="housing-info">
                    <Title title={logement.title} />
                    <Location location={logement.location} />
                    <Tags tags={logement.tags} />
                </div>
                <div className="host-info">
                    <Host host={logement.host} />
                    <Rating rating={logement.rating} />
                </div>
            </div>
        </main>
    );
}

export default Housing;