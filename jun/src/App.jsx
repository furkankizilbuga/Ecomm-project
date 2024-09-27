import './App.css'
import Footer from './layout/Footer'
import Header from './layout/Header'
import PageContent from './layout/PageContent'
import { BrowserRouter } from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <PageContent />
      <Footer />
    </BrowserRouter>
  )
}

export default App
