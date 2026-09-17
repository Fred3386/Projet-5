import Logements from '../../data/logements.json'
import CardList from '../../components/CardList/CardList'
import './Home.scss'
import BannerHome from '../../assets/banner-home.svg'
import Banner from '../../components/Banner/banner'

function Home() {
  return (
    <main>
      <Banner
        image={BannerHome}
        title="Chez vous, partout et ailleurs"
      />
      <CardList logements={Logements} />
    </main>
  )
}

export default Home
