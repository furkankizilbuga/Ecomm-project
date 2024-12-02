import './App.css'
import Footer from './layout/Footer'
import Header from './layout/Header'
import PageContent from './layout/PageContent'
import { useLocation } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from './store/AuthContext'

function App() {
  
  const location = useLocation();
  const show = location.pathname !== "/contact" && location.pathname !== "/team";

  return (
    <AuthProvider>
      <ToastContainer />
      {show && <Header />}
      <PageContent />
      {show && <Footer />}
    </AuthProvider>
  )
}

export default App
