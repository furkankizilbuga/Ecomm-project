import { useForm, useWatch } from "react-hook-form"

export default function SignUpPage() {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        control
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            role_id: 1,

        },
        mode: "onSubmit"
    })

    const roleId = useWatch({
        control,
        name: "role_id"
    })

    const onSubmit = () => {

    }

    return(
        <div className="py-20 mx-10">
            <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full flex flex-col gap-2">
                    <label className="text-textColor font-bold">Name *</label>
                    <input
                        className="bg-[#F9F9F9] w-full placeholder:text-sm focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] py-3 pl-4"
                        placeholder="Name"
                        {...register("name", { required: "Lütfen isminizi giriniz!", minLength: 3})}/> 
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div className="w-full flex flex-col gap-2">
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
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label className="text-textColor font-bold">Password *</label>
                    <input
                        className="bg-[#F9F9F9] w-full placeholder:text-sm focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] py-3 pl-4"
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
                <div className="w-full flex flex-col gap-2">
                    <label className="text-textColor font-bold">Password Validation *</label>
                    <input
                        className="bg-[#F9F9F9] w-full placeholder:text-sm focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] py-3 pl-4"
                        placeholder="Password Validation"
                        {...register("password", { 
                            required: "Lütfen şifrenizi tekrar giriniz!", 
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                message: "Şifreniz en az: bir büyük, bir küçük harf, bir özel karakter ve bir sayı içermelidir!"
                            }
                            })}/>  
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <div className="w-full flex flex-col gap-2">
                    <label className="text-textColor font-bold">Role *</label>
                    <select 
                        {...register("role_id")}
                        className="bg-[#F9F9F9] w-full focus:border-primaryBlue transition-all font-semibold text-textColor outline-none rounded border border-[#E6E6E6] py-3 pl-4 text-sm">
                        <option value="3" className="font-medium text-textColor" selected>Customer</option>
                        <option value="1" className="font-medium text-textColor">Admin</option>
                        <option value="2" className="font-medium text-textColor">Store</option>
                    </select>
                </div>
                {
                    roleId == 2 && 
                    <>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-textColor font-bold">Password *</label>
                            <input
                                className="bg-[#F9F9F9] w-full placeholder:text-sm focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] py-3 pl-4"
                                placeholder="Store Name"
                                {...register("password", { 
                                    required: "Lütfen şifrenizi giriniz!", 
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                        message: "Şifreniz en az: bir büyük, bir küçük harf, bir özel karakter ve bir sayı içermelidir!"
                                    }
                                    })}/>  
                            {errors.password && <span>{errors.password.message}</span>}
                        </div>
                    </>
                }
                <button 
                    type="submit"
                    disabled={ !isValid }
                    className={`${isValid ? "bg-primaryBlue" : "bg-blue-200"} rounded px-10 py-2 font-medium text-white`}>Sign Up</button>
            </form>
        </div>
    )
}