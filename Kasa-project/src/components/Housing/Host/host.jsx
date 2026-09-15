import "./Host.scss";

const Host = ({ host }) => {
    return (
        <div className="housing-host">
            <p className="housing-host-name">{host.name}</p>
            <img src={host.picture} alt={`Photo de ${host.name}`} />
        </div>
    );
};

export default Host;
