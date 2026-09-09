import './About.scss'
import Banner from '../../components/Banner'
import bannerAbout from '../../assets/banner-about.svg'
import Collapse from '../../components/Collapse/Collapse'

function About() {
  return (
    <main>
        <Banner
            image={bannerAbout}
            title=""
            overlay={false}
        />
        <Collapse title="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrementvérifiées par nos équipes</p>
        </Collapse>
        <Collapse title="Respect">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme</p>
        </Collapse>
        <Collapse title="Service">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale.</p>
        </Collapse>
        <Collapse title="Sécurité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale.</p>
        </Collapse>
    </main>
  )
}

export default About