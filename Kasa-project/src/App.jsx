import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Router from './components/Router/router'
import Banner from './components/Banner/banner'

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Router />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App