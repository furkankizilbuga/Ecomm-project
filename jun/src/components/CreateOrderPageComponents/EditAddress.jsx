/* eslint-disable react/prop-types */
import { useAuth } from "@/hooks/useAuth";
import { fetchAddressList } from "@/store/features/clientSlice";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const EditAddress = ({ item, onClose }) => {

    const dispatch = useDispatch();
    const { token } = useAuth();
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            title: item?.title || "",
            name: item?.name || "",
            surname: item?.surname || "",
            phone: item?.phone || "",
            city: item?.city || "",
            district: item?.district || "",
            neighborhood: item?.neighborhood || ""
        },
        mode: "onSubmit"
    });

    const updateHandler = (data) => {
        const baseURL = "https://workintech-fe-ecommerce.onrender.com";

        axios.put(baseURL + "/user/address", data, {
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            dispatch(fetchAddressList(token));
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

        axios.delete(baseURL + "/user/address/" + item.id , {
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            dispatch(fetchAddressList(token));
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
                    {errors.phone && <span className="text-xs font-medium text-red-500">Please use a valid phone!</span>}
                    <input
                        {...register("title", {
                            required: "Title is required!"
                        })}
                        placeholder="Title" 
                        className="border pl-1 py-1 rounded w-full outline-1 outline-primaryBlue placeholder:text-xs" />
                    <div className="shadow p-4 rounded">
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-2 items-center">
                                <div className="flex items-center gap-2">
                                    <i className="fa-solid fa-user text-sm"></i>
                                    <input
                                        {...register("name", {
                                            required: "Name is required!"
                                        })}
                                        placeholder="Name" 
                                        className="pl-1 py-1 border w-full outline-1 outline-primaryBlue rounded text-sm placeholder:text-xs"/>
                                </div>
                                <input
                                    {...register("surname", {
                                        required: "Surname is required!"
                                    })}
                                    placeholder="Surname" 
                                    className="pl-1 py-1 border w-full outline-1 outline-primaryBlue rounded text-sm placeholder:text-xs"/>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i className="fa-solid fa-mobile-alt text-sm"></i>    
                                <input
                                    {...register("phone", {
                                        required: "Phone is required!",
                                        pattern: {
                                            value: /^(?:\+90[\s-]?)?0?5\d{2}[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
                                            message: "Please enter a valid number!"
                                        }
                                    })}
                                    placeholder="Phone" 
                                    className="pl-1 py-1 border w-full outline-1 outline-primaryBlue rounded text-sm placeholder:text-xs"/>
                            </div>
                            <input 
                                {...register("city", {
                                    required: "City is required!"
                                })}
                                placeholder="City"
                                className="pl-1 py-1 border w-full outline-1 outline-primaryBlue rounded text-sm placeholder:text-xs" />
                            <input 
                                {...register("district", {
                                    required: "District is required!"
                                })}
                                placeholder="District"
                                className="pl-1 py-1 border w-full outline-1 outline-primaryBlue rounded text-sm placeholder:text-xs" />
                            <input 
                                {...register("neighborhood", {
                                    required: "Neighborhood is required!"
                                })}
                                placeholder="Neighborhood"
                                className="pl-1 py-1 border w-full outline-1 outline-primaryBlue rounded text-sm placeholder:text-xs" />         
                        </div>
                    </div>
                    <button type="submit" className="font-medium text-white text-sm bg-primaryBlue rounded py-1">Save</button>
                    <button type="button" onClick={deleteHandler} className="font-medium text-white bg-red-500 text-sm rounded py-1">Delete</button>
                </form>
    )
}

export default EditAddress;