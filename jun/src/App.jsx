import { useEffect } from 'react'
import './App.css'
import Footer from './layout/Footer'
import Header from './layout/Header'
import PageContent from './layout/PageContent'
import { useLocation } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from 'react-redux'
import { fetchCategories, fetchProducts } from './store/features/productSlice'
import { AuthProvider } from './store/AuthContext'


function App() {
  
  const location = useLocation();
  const dispatch = useDispatch();

  const show = location.pathname !== "/contact" && location.pathname !== "/team";

  useEffect(() => {

    dispatch(fetchCategories());
    dispatch(fetchProducts());
    
  }, [dispatch])

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
