import { useState } from 'react'
import './Collapse.scss'
import ArrowCollapse from '../../assets/arrow-collapse.svg'

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <div className="collapse__title">
        {title}
        <button className="collapse__arrow-button" 
        onClick={() => setIsOpen(!isOpen)} 
        aria-label={isOpen ? 'Fermer' : 'Ouvrir'} 
        >
            <img
                src={ArrowCollapse}
                alt=""
                className={`collapse__arrow ${isOpen ? 'collapse__arrow--open' : ''}`}
            />
        </button>
      </div>
      <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}> 
        {children} 
      </div>
    </div>
  )
}

export default Collapse