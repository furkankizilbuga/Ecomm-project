import { useForm } from "react-hook-form"

export default function SignUpPage() {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid},
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
        mode: "onSubmit"
    })

    const onSubmit = () => {

    }

    return(
        <div className="py-20 mx-10">
            <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full">
                    <input
                        className="bg-[#F9F9F9] w-full placeholder:text-sm focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] py-2 pl-2"
                        placeholder="Name"
                        {...register("name", { required: "Lütfen isminizi giriniz!", minLength: 3})}/> 
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div className="w-full">
                    <input 
                        className="bg-[#F9F9F9] w-full placeholder:text-sm focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] py-2 pl-2"
                        placeholder="Email"
                        {...register("email", { 
                            required: "Lütfen mailinizi giriniz!", 
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Lütfen geçerli bir email adresi giriniz!"
                            }
                        })}/>
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div className="w-full">
                    <input
                        className="bg-[#F9F9F9] w-full placeholder:text-sm focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] py-2 pl-2"
                        placeholder="Password"
                        {...register("password", { 
                            required: "Lütfen şifrenizi giriniz!", 
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                message: "Şifreniz en az: bir büyük, bir küçük harf, bir özel karakter ve bir sayı içermelidir!"
                            }
                            })}/>  
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <button 
                    type="submit"
                    disabled={ !isValid }
                    className={`${isValid ? "bg-primaryBlue" : "bg-blue-200"} rounded px-10 py-2 font-medium text-white`}>Sign Up</button>
            </form>
        </div>
    )
}