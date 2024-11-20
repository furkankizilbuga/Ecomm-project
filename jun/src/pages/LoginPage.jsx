import useLocalStorage from "@/hooks/useLocalStorage";
import { setRoles, setUser } from "@/store/features/clientSlice";
import { useAuth } from "@/hooks/useAuth";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast, Bounce } from "react-toastify";

export default function LoginPage() {

    let history = useHistory();
    const [loading, setLoading] = useState(false);
    const [remember, setRemember] = useState(false);
    const { login } = useAuth();
   
    const dispatch = useDispatch();
    const roles = useSelector((state) => state.client.roles);

    const [, setToken] = useLocalStorage("token", null);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onChange"
    })


    const onSubmit = (data) => {

        setLoading(true);

        const baseURL = "https://workintech-fe-ecommerce.onrender.com";


        axios.post(baseURL + "/login", data)
        .then(res => {

            login(res.data.token);
            //Set User
            dispatch(setUser({ name: res.data.name, email: res.data.email }));

            //Role Add
            if(!roles.includes(res.data.role_id)){ 
                dispatch(setRoles([...roles, res.data.role_id]));
            }
            
            
            //Token LocalStorage
            if(remember) setToken(res.data.token);

            if(history.length > 1) {
                history.goBack();
            } else history.push("/");

            toast("Hoşgeldin " + res.data.name, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

        })
        .catch(err => {
            console.log(err);
            setLoading(false);

            toast.error(err.response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

        })
    }

    return(
        <div className="bg-lightBackgroundColor flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white flex flex-col gap-4 py-24 px-12 w-full rounded-md sm:w-3/5 lg:w-1/2 xl:w-1/3 sm:py-20 sm:my-24">
                <h1 className="text-textColor text-2xl font-bold mb-4">Login</h1>
                <div>
                    <label className="text-textColor font-bold">Email</label>
                    <input 
                        className="bg-[#F9F9F9] w-full placeholder:text-sm focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] py-3 pl-4"
                        placeholder="Email"
                        {...register("email", { 
                            required: "Lütfen mailinizi giriniz!", 
                            minLength: 8,
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Lütfen geçerli bir email adresi giriniz!"
                            }
                        })}/>
                    {errors.email && <span className="text-[#ff0f0f] text-sm">{errors.email.message}</span>}
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label className="text-textColor font-bold">Password</label>
                    <input
                        className="bg-[#F9F9F9] w-full placeholder:text-sm focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] py-3 pl-4"
                        placeholder="Password"
                        type="password"
                        {...register("password", { 
                            required: "Lütfen şifrenizi giriniz!", 
                            })}/>  
                    {errors.password && <span className="text-[#ff0f0f] text-sm">{errors.password.message}</span>}
                </div>
                <div className="flex gap-2 items-center">
                    <input onChange={() => setRemember(!remember)} name="remember" id="remember" value={remember} type="checkbox"  />
                    <label htmlFor="remember" className="text-sm text-textColor font-semibold">Remember Me</label>
                </div>
                <button 
                    type="submit"
                    disabled={ !isValid }
                    className={`${isValid ? "bg-primaryBlue" : "bg-blue-200"} flex w-full justify-center rounded px-10 py-2 font-medium text-white`}>
                    {loading ? (
                    <div className="loader border-4 border-white border-t-transparent rounded-full w-6 h-6 animate-spin"></div>
                    ) : "Login"}
                </button>
                <button className="text-sm underline font-medium" onClick={() => history.push("/signup")} >Not a member? Click to register for free!</button>
            </form>
        </div>
    )
}