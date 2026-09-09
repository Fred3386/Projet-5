import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Router from './components/Router'
import Banner from './components/Banner'

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