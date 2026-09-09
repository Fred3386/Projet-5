import Card from '../Card'
import './CardList.scss'

const CardList = ({ logements }) => {
  return (
    <section className = "gallery">
      {logements.map((logement) => (
        <Card
          key={logement.id}
          logement={logement}
        />
      ))}
    </section>
  )
}

export default CardList