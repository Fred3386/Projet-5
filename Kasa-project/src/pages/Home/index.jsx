import logements from '../../data/logements.json'
import CardList from '../../components/CardList/CardList'
import './Home.scss'
import bannerHome from '../../assets/banner-home.svg'
import Banner from '../../components/Banner'

function Home() {
  return (
    <main>
      <Banner
        image={bannerHome}
        title="Chez vous, partout et ailleurs"
      />
      <CardList logements={logements} />
    </main>
  )
}

export default Home
