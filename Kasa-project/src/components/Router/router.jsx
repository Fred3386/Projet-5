import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/home'
import About from '../../pages/About/about'
import Housing from '../../pages/Housing/housing'
import Error from '../../pages/Error/error'

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="*" element={<Error />} />
      </Routes>
  )
}

export default Router