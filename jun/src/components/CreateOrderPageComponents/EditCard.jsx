/* eslint-disable react/prop-types */
import { useAuth } from "@/hooks/useAuth";
import { fetchCreditCards } from "@/store/features/clientSlice";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const EditCard = ({ card, onClose }) => {

    const dispatch = useDispatch();
    const { token } = useAuth();
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            card_no: "",
            expire_month: card.expire_month || 0,
            expire_year: card.expire_year || 0,
            name_on_card: card.name_on_card || "",
        },
        mode: "onSubmit"
    });

    const updateHandler = (data) => {
        const baseURL = "https://workintech-fe-ecommerce.onrender.com";

        axios.put(baseURL + "/user/card", data, {
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            dispatch(fetchCreditCards(token));
            setErrorMessage("");
            console.log(res)
            onClose();

        })
        .catch(err => {
            setErrorMessage("Please try again.");
            console.log(err);
        });

    }

    const deleteHandler = () => {
        const baseURL = "https://workintech-fe-ecommerce.onrender.com";

        axios.delete(baseURL + "/user/card/" + card.id , {
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            dispatch(fetchCreditCards(token));
            setErrorMessage("");
            console.log(res);
            onClose();
        })
        .catch(err => {
            setErrorMessage("Error deleting address. Please try again.");
            console.log(err);
        });
    }

    return(
            <form onSubmit={handleSubmit(updateHandler)} className="flex flex-col gap-2">
                {errorMessage && <span className="text-xs font-medium text-red-500">{errorMessage}</span>}
                {Object.keys(errors).length > 0 && <span className="text-xs font-medium text-red-500">Please fill all fields!</span>}
                <div className="shadow p-4 rounded lg:h-full">
                    <div className="flex flex-col gap-1">
                        <input
                        {...register("card_no", {
                            required: "Card No is required!"
                        })}
                        placeholder="Card No" 
                        className="border pl-1 py-1 rounded w-full outline-1 outline-primaryBlue placeholder:text-xs" />
                        <div className="flex gap-2 items-center">
                            <input
                                {...register("expire_month", {
                                    required: "Expire month is required!"
                                })}
                                placeholder="Expire month" 
                                className="pl-1 py-1 border w-full outline-1 outline-primaryBlue rounded text-sm placeholder:text-xs"/>
                            <input
                                {...register("expire_year", {
                                    required: "Expire year is required!"
                                })}
                                placeholder="Expire year" 
                                className="pl-1 py-1 border w-full outline-1 outline-primaryBlue rounded text-sm placeholder:text-xs"/>
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
                <button type="button" onClick={deleteHandler} className="font-medium text-white bg-red-500 text-sm rounded py-1">Delete</button>
            </form>
    )
}

export default EditCard;