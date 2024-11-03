import { useAuth } from "@/hooks/useAuth";
import { fetchCreditCards } from "@/store/features/clientSlice";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const CreateNewPayment = () => {
    const dispatch = useDispatch();
    const { token } = useAuth();
    const [errorMessage, setErrorMessage] = useState("");
    const [isFormVisible, setFormVisible] = useState(false);
    const [formattedCardNumber, setFormattedCardNumber] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        defaultValues: {
            card_no: "",
            expire_month: "",
            expire_year: "",
            name_on_card: "",
        },
        mode: "onSubmit"
    });

    const formatCreditCard = (value) => {
        const numbers = value.replace(/\D/g, '');
        
        const formatted = numbers.replace(/(\d{4})(?=\d)/g, '$1 ');
        
        return formatted.slice(0, 19);
    };

    const handleCardNumberChange = (e) => {
        const formatted = formatCreditCard(e.target.value);
        setFormattedCardNumber(formatted);
        setValue('card_no', formatted.replace(/\s/g, ''));
    };

    const onSubmit = (data) => {
        const baseURL = "https://workintech-fe-ecommerce.onrender.com";
        const submissionData = {
            ...data,
            card_no: data.card_no.replace(/\s/g, '')
        };

        axios.post(baseURL + "/user/card", submissionData, {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                dispatch(fetchCreditCards(token));
                setErrorMessage("");
                setFormVisible(false);
                console.log(res)
            })
            .catch(err => {
                setErrorMessage("Please try again.");
                console.log(err);
            });
    }

    const handleAddCard = () => {
        setFormVisible(true);
    }

    return (
        <div className="flex flex-col gap-2 lg:w-[calc(50%-8px)]">
            {isFormVisible && (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                    {errorMessage && <span className="text-xs font-medium text-red-500">{errorMessage}</span>}
                    {Object.keys(errors).length > 0 && 
                        <span className="text-xs font-medium text-red-500">
                            {errors.card_no?.message || errors.expire_month?.message || errors.expire_year?.message || "Please fill all form fields!"}
                        </span>
                    }
                    <div className="shadow p-4 rounded lg:h-full">
                        <div className="flex flex-col gap-1">
                            <input
                                value={formattedCardNumber}
                                onChange={handleCardNumberChange}
                                placeholder="Card No (XXXX XXXX XXXX XXXX)"
                                className="border pl-1 py-1 rounded w-full outline-1 outline-primaryBlue placeholder:text-xs"
                            />
                            <input
                                type="hidden"
                                {...register("card_no", {
                                    required: "Card No is required!",
                                    pattern: {
                                        value: /^[0-9]{16}$/,
                                        message: "Please enter a valid 16-digit card number"
                                    }
                                })}
                            />
                            <div className="flex gap-2 items-center">
                                <input
                                    {...register("expire_month", {
                                        required: "Month is required!",
                                        pattern: {
                                            value: /^(0?[1-9]|1[0-2])$/,
                                            message: "Month must be between 1-12"
                                        },
                                        maxLength: {
                                            value: 2,
                                            message: "Month cannot exceed 2 digits"
                                        }
                                    })}
                                    maxLength={2}
                                    placeholder="Month" 
                                    className="pl-1 py-1 border w-12 outline-1 outline-primaryBlue rounded text-sm placeholder:text-xs"/>
                                <input
                                    {...register("expire_year", {
                                        required: "Year is required!",
                                        pattern: {
                                            value: /^\d{2}$/,
                                            message: "Year must be 2 digits"
                                        },
                                        maxLength: {
                                            value: 2,
                                            message: "Year must be 2 digits"
                                        }
                                    })}
                                    maxLength={2}
                                    placeholder="Year" 
                                    className="pl-1 py-1 border w-12 outline-1 outline-primaryBlue rounded text-sm placeholder:text-xs"/>
                            </div>
                            <input 
                                {...register("name_on_card", {
                                    required: "Name is required!"
                                })}
                                placeholder="Name on card"
                                className="pl-1 py-1 border w-full outline-1 outline-primaryBlue rounded text-sm placeholder:text-xs" />
                        </div>
                    </div>
                    <button type="submit" className="font-medium text-white text-sm bg-primaryBlue rounded py-1">Save</button>
                </form>
            )}
            {!isFormVisible && (
                <div className="shadow rounded flex justify-center items-center h-12 mt-2 lg:h-full cursor-pointer" onClick={handleAddCard}>
                    <i className="fa-solid fa-plus text-lg"></i>
                </div>
            )}
        </div>
    );
}

export default CreateNewPayment;