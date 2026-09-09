import { useState } from 'react'
import './Collapse.scss'

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <button
        className="collapse__title"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>

      {isOpen && (
        <div className="collapse__content">
          {children}
        </div>
      )}
    </div>
  )
}

export default Collapse