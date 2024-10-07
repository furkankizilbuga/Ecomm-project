import { useEffect } from 'react'
import './App.css'
import Footer from './layout/Footer'
import Header from './layout/Header'
import PageContent from './layout/PageContent'
import { useLocation, useHistory } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setRoles, setUser } from './store/features/clientSlice'
import useLocalStorage from './hooks/useLocalStorage'
import { fetchCategories, fetchProducts } from './store/features/productSlice'


function App() {
  
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const roles = useSelector((state) => state.client.roles);

  const [token, setToken] = useLocalStorage("token", null);

  const show = location.pathname !== "/contact" && location.pathname !== "/team";

  //Auto Login Control
  useEffect(() => {

    if(token) {

      const baseURL = "https://workintech-fe-ecommerce.onrender.com";

      axios.get(baseURL + "/verify",{
        headers: {
          Authorization: token
        }
      }
      )
      .then(res => {

        const user = res.data;
        dispatch(setUser({name: user.name, email: user.email}))
        dispatch(setRoles([...roles, res.data.role_id]));
        setToken(user.token);

      })
      .catch(err => {

        if(err.response && err.response.status === 401) {
          toast.error("Lütfen tekrar giriş yapınız.");
          setToken(null);
          console.log("ERROR RESPONSE 401: " + err);
        } else {
          console.log("ERROR RESPONSE NORMAL: " + err);
        }

        history.push("/");

      })
    }


    //fetchCategories
    dispatch(fetchCategories());

    //fetchProducts
    dispatch(fetchProducts());
    
  }, [dispatch])

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
