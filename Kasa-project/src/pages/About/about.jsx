import './About.scss'
import Banner from '../../components/Banner'
import bannerAbout from '../../assets/banner-about.svg'
import Collapse from '../../components/Collapse/collapse'

function About() {
  return (
    <main>
        <Banner
            image={bannerAbout}
            title=""
            overlay={false}
            className="banner--about"
        />
        <section className="about-content">
          <Collapse title="Fiabilité">
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrementvérifiées par nos équipes</p>
          </Collapse>
          <Collapse title="Respect">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme</p>
          </Collapse>
          <Collapse title="Service">
            <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillonsà ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance</p>
          </Collapse>
          <Collapse title="Sécurité">
            <p>La sécurité est la priorité chez Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
          </Collapse>
        </section>
    </main>
  )
}

export default About