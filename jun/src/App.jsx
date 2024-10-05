import './App.css'
import Footer from './layout/Footer'
import Header from './layout/Header'
import PageContent from './layout/PageContent'
import { useLocation } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  
  const location = useLocation();

  const show = location.pathname !== "/contact" && location.pathname !== "/team";

  return (
    <>
      <ToastContainer />
      {show && <Header />}
      <PageContent />
      {show && <Footer />}
    </>
  )
}

export default App
