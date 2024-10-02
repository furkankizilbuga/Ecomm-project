import { useState } from "react"
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
            confirmPass: "",
            role_id: 1,
            storeName: "",
            storePhone: "",
            storeTax: "",
            storeBank: ""
        },
        mode: "onChange"
    })

    const roleId = useWatch({
        control,
        name: "role_id"
    })

    const onSubmit = (data) => {

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
                        type="password"
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
                    <label className="text-textColor font-bold">Confirm Password *</label>
                    <input
                        className="bg-[#F9F9F9] w-full placeholder:text-sm focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] py-3 pl-4"
                        placeholder="Confirm Password"
                        type="password"
                        {...register("confirmPass", { 
                            required: "Lütfen şifrenizi tekrar giriniz!", 
                            })}
                        />  
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
                            <label className="text-textColor font-bold">Store Name *</label>
                            <input
                                className="bg-[#F9F9F9] w-full placeholder:text-sm focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] py-3 pl-4"
                                placeholder="Store Name"
                                {...register("storeName", { 
                                    required: "Lütfen mağazanızın ismini giriniz!", 
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
                                    pattern: {
                                        value: /^(?:\+90|0)?5\d{2}[-\s]?\d{3}[-\s]?\d{4}$/,
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
                                    pattern: {
                                        value: /^TR\d{2}\d{4}\d{4}\d{2}\d{10}$/,
                                        message: "Lütfen geçerli bir IBAN adresi giriniz!"
                                    }
                                    })}/>  
                            {errors.storeBank && <span>{errors.storeBank.message}</span>}
                        </div>
                    </>
                }
                <button 
                    type="submit"
                    disabled={ !isValid }
                    className={`${isValid ? "bg-primaryBlue" : "bg-blue-200"} rounded px-10 py-2 font-medium text-white`}>
                    Sign Up
                </button>
            </form>
        </div>
    )
}