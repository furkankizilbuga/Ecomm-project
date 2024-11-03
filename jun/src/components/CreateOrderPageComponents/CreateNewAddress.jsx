import { useAuth } from "@/hooks/useAuth";
import { fetchAddressList } from "@/store/features/clientSlice";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const CreateNewAddress = () => {
    const dispatch = useDispatch();
    const { token } = useAuth();
    const [errorMessage, setErrorMessage] = useState("");
    const [isFormVisible, setFormVisible] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            title: "",
            name: "",
            surname: "",
            phone: "",
            city: "",
            district: "",
            neighborhood: ""
        },
        mode: "onSubmit"
    });

    const onSubmit = (data) => {
        const baseURL = "https://workintech-fe-ecommerce.onrender.com";

        axios.post(baseURL + "/user/address", data, {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                dispatch(fetchAddressList(token));
                setErrorMessage("");
                setFormVisible(false);
                console.log(res)
            })
            .catch(err => {
                setErrorMessage("Please try again.");
                console.log(err);
            });
    }

    const handleAddAddress = () => {
        setFormVisible(true);
    }

    return (
        <div className="flex flex-col gap-2  lg:w-[calc(50%-8px)]">
            {isFormVisible && (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                    {errorMessage && <span className="text-xs font-medium text-red-500">{errorMessage}</span>}
                    {Object.keys(errors).length > 0 && <span className="text-xs font-medium text-red-500">Please fill all form fields!</span>}
                    {errors.phone && <span className="text-xs font-medium text-red-500">Please use a valid phone!</span>}
                    <input
                        {...register("title", {
                            required: "Title is required!"
                        })}
                        placeholder="Title" 
                        className="border pl-1 py-1 rounded w-full outline-1 outline-primaryBlue placeholder:text-xs" />
                    <div className="shadow p-4 rounded lg:h-full">
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
                </form>
            )}
            {!isFormVisible && (
                <div className="shadow rounded flex justify-center items-center h-12 mt-2 lg:h-full cursor-pointer" onClick={handleAddAddress}>
                    <i className="fa-solid fa-plus text-lg"></i>
                </div>
            )}
        </div>
    );
}

export default CreateNewAddress;
