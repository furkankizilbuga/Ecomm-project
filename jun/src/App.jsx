import './App.css'
import Footer from './layout/Footer'
import Header from './layout/Header'
import PageContent from './layout/PageContent'
import { useLocation } from 'react-router-dom'


function App() {
  
  const location = useLocation();

  const show = location.pathname !== "/contact";

  return (
    <>
      {show && <Header />}
      <PageContent />
      {show && <Footer />}
    </>
  )
}

export default App
