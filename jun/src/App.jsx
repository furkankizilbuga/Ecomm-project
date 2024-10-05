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


function App() {
  
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const roles = useSelector((state) => state.client.roles);

  const show = location.pathname !== "/contact" && location.pathname !== "/team";


  //Auto Login Control
  useEffect(() => {

    const token = localStorage.getItem("token");

    if(token) {

      const baseURL = "https://workintech-fe-ecommerce.onrender.com";

      axios.get(`${baseURL}/verify`,{
        headers: {
          Authorization: token
        }
      }
      )
      .then(res => {

        const user = res.data;
        console.log("res.data: " + user);
        dispatch(setUser({name: user.name, email: user.email}))
        dispatch(setRoles([...roles, res.data.role_id]));
        localStorage.setItem("token", user.token);
        toast("Giriş başarılı!")

      })
      .catch(err => {
        if(err.response && err.response.status === 401) {
          toast.error("Lütfen tekrar giriş yapınız.");
          localStorage.removeItem("token");
        } else {
          console.log(err);
        }

        history.push("/");
      })

    }

  }, [])

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
