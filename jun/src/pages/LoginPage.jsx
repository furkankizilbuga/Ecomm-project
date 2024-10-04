import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function LoginPage() {

    let history = useHistory();
    const [loading, setLoading] = useState(false);

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
            history.goBack();
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        })
    }

    return(
        <div className="bg-lightBackgroundColor">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white">
                <div>
                    <label className="text-textColor font-bold">Email *</label>
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
                        <label className="text-textColor font-bold">Password *</label>
                        <input
                            className="bg-[#F9F9F9] w-full placeholder:text-sm focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] py-3 pl-4"
                            placeholder="Password"
                            type="password"
                            {...register("password", { 
                                required: "Lütfen şifrenizi giriniz!", 
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
                                    message: "Şifreniz en az: bir büyük, bir küçük harf, bir özel karakter ve bir sayı içermelidir!"
                                }
                                })}/>  
                        {errors.password && <span className="text-[#ff0f0f] text-sm">{errors.password.message}</span>}
                    </div>
                    <button 
                    type="submit"
                    disabled={ !isValid }
                    className={`${isValid ? "bg-primaryBlue" : "bg-blue-200"} flex w-full justify-center rounded px-10 py-2 font-medium text-white`}>
                    {loading ? (
                    <div className="loader border-4 border-white border-t-transparent rounded-full w-6 h-6 animate-spin"></div>
                    ) : "Sign Up"}
                </button>
            </form>
        </div>
    )
}