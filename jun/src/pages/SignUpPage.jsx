import axios from "axios"
import { useState } from "react"
import { useForm, useWatch } from "react-hook-form"
import { useHistory } from "react-router-dom";

export default function SignUpPage() {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        control,
        watch
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPass: "",
            role_id: 3,
            storeName: "",
            storePhone: "",
            storeTax: "",
            storeBank: ""
        },
        mode: "onChange"
    })

    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const roleId = useWatch({
        control,
        name: "role_id"
    })

    const onSubmit = (data) => {

        setLoading(true);

        let payload = 
            {
                name: data.name,
                email: data.email,
                password: data.password,
                role_id: data.role_id
            }

        if(data.role_id == 2) {
            let storePayload = {
                name: data.storeName,
                phone: data.storePhone,
                tax_no: data.storeTax,
                bank_account: data.storeBank
            }
            payload = {...payload, storePayload}
        }

        const baseURL = "https://workintech-fe-ecommerce.onrender.com";

        axios.post(baseURL + "/signup", payload)
        .then(res => {
            history.goBack();
            //TODO toastify eklenecek > “You need to click link in email to activate your account!”
            console.log(payload);
        })
        .catch(err => {
            setLoading(false);
            console.log(err);
        })


    }

    return(
        <div className="py-20 mx-10 sm:bg-lightBackgroundColor sm:mx-0 sm:flex sm:flex-row-reverse sm:justify-center">
            <form className="flex flex-col rounded-r-md items-center gap-4 sm:bg-white sm:w-1/2 xl:w-1/3 md:px-20 sm:p-12" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full flex flex-col sm:flex-row sm:gap-6">
                    <div className="w-full flex flex-col gap-4">
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
                                type="password"
                                {...register("password", { 
                                    required: "Lütfen şifrenizi giriniz!", 
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
                                        message: "Şifreniz en az: bir büyük, bir küçük harf, bir özel karakter ve bir sayı içermelidir!"
                                    }
                                    })}/>  
                            {errors.password && <span>{errors.password.message}</span>}
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-textColor font-bold">Confirm Password *</label>
                            <input
                                className="bg-[#F9F9F9] w-full placeholder:text-sm focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] py-3 pl-4"
                                placeholder="Confirm Password"
                                type="password"
                                {...register("confirmPass", { 
                                    required: "Lütfen şifrenizi tekrar giriniz!",
                                    validate: value => value === watch("password") || "Şifreniz uyuşmuyor!"
                                    })}
                                />  
                            {errors.confirmPass && <span>{errors.confirmPass.message}</span>}
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
                    </div>
                    {
                        roleId == 2 && 
                        <div className="w-full flex flex-col gap-4">
                            <div className="w-full flex flex-col gap-2">
                                <label className="text-textColor font-bold">Store Name *</label>
                                <input
                                    className="bg-[#F9F9F9] w-full placeholder:text-sm focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] py-3 pl-4"
                                    placeholder="Store Name"
                                    {...register("storeName", { 
                                        required: "Lütfen mağazanızın ismini giriniz!",
                                        minLength: 3,
                                        shouldUnregister: roleId != 2,
                                        })}/>  
                                {errors.storeName && <span>{errors.storeName.message}</span>}
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <label className="text-textColor font-bold">Store Phone No *</label>
                                <input
                                    className="bg-[#F9F9F9] w-full placeholder:text-sm focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] py-3 pl-4"
                                    placeholder="Store Phone No"
                                    {...register("storePhone", { 
                                        required: "Lütfen mağazanızın telefon numarasını giriniz!",
                                        shouldUnregister: roleId != 2,
                                        pattern: {
                                            value: /^(?:\+90|0)?5\d{2}[\s-]?\d{3}[\s-]?\d{4}$/,
                                            message: "Lütfen geçerli bir telefon numarası giriniz!"
                                        }
                                        })}/>  
                                {errors.storePhone && <span>{errors.storePhone.message}</span>}
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <label className="text-textColor font-bold">Store Tax No *</label>
                                <input
                                    className="bg-[#F9F9F9] w-full placeholder:text-sm focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] py-3 pl-4"
                                    placeholder="Store Tax No"
                                    {...register("storeTax", { 
                                        required: "Lütfen mağazanızın vergi numarasını giriniz!",
                                        shouldUnregister: roleId != 2,
                                        pattern: {
                                            value: /^T\d{4}V\d{6}$/,
                                            message: "Lütfen geçerli bir vergi numarası giriniz!"
                                        }
                                        })}/>  
                                {errors.storeTax && <span>{errors.storeTax.message}</span>}
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <label className="text-textColor font-bold">Store Bank No *</label>
                                <input
                                    className="bg-[#F9F9F9] w-full placeholder:text-sm focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] py-3 pl-4"
                                    placeholder="Store Bank No"
                                    {...register("storeBank", { 
                                        required: "Lütfen mağazanızın IBAN adresini giriniz!",
                                        shouldUnregister: roleId != 2,
                                        pattern: {
                                            value: /^TR\d{2}\d{4}\d{4}\d{2}\d{10}$/,
                                            message: "Lütfen geçerli bir IBAN adresi giriniz!"
                                        }
                                        })}/>  
                                {errors.storeBank && <span>{errors.storeBank.message}</span>}
                            </div>
                        </div>
                    }
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
            <img className="hidden rounded-l-md sm:block" src="/assets/signUpImages/signupimage.png" />
        </div>
    )
}