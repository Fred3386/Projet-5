import './Banner.scss'

const Banner = ({ image, title, overlay = true, className = '' }) => {
  return (
    <div
      className={`banner ${overlay ? 'banner--overlay' : ''} ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1>{title}</h1>
    </div>
  )
}

export default Banner