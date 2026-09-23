import { useParams, Navigate } from "react-router-dom";
import Logements from "../../data/logements.json";
import Gallery from "../../components/Housing/Gallery/gallery";
import Title from "../../components/Housing/Title/title";
import Location from "../../components/Housing/Location/location";
import Tags from "../../components/Housing/Tags/tags";
import Host from "../../components/Housing/Host/host";
import Rating from "../../components/Housing/Rating/rating";
import Collapse from "../../components/Collapse/collapse";
import "./Housing.scss";


const Housing = () => {
    const { id } = useParams();
    const logement = Logements.find((logement) => logement.id === id);

    if (!logement) {
        return <Navigate to="/error" />;
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
            <div className="housing-collapse">
                <Collapse title="Description">
                    <p>{logement.description}</p>
                </Collapse>
                <Collapse title="Équipements">
                    <ul className="equipment-list">
                        {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </main>
    );
}

export default Housing;