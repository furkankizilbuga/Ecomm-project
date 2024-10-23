import { useForm } from "react-hook-form";

const CreateNewAddress = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
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
        mode: "onChange"
    });

    return(
        <form className="flex flex-col gap-2">
            <input
                placeholder="Title" 
                className="border pl-1 rounded w-full outline-1 outline-primaryBlue placeholder:text-xs" />
            <div className="shadow p-4">
                <div className="flex flex-col gap-1">
                    <div className="flex gap-2 items-center">
                        <i className="fa-solid fa-user text-sm"></i>
                        <input
                            placeholder="Name" 
                            className="pl-1 border w-full outline-1 outline-primaryBlue rounded text-sm placeholder:text-xs"/>
                        <input
                            placeholder="Surname" 
                            className="pl-1 border w-full outline-1 outline-primaryBlue rounded text-sm placeholder:text-xs"/>
                    </div>
                    <div className="flex gap-2 items-center">
                        <i className="fa-solid fa-mobile-alt text-sm"></i>    
                        <input
                            placeholder="Phone" 
                            className="pl-1 border w-full outline-1 outline-primaryBlue rounded text-sm placeholder:text-xs"/>
                    </div>
                    <input 
                        placeholder="City"
                        className="pl-1 border w-full outline-1 outline-primaryBlue rounded text-sm placeholder:text-xs" />
                    <input 
                        placeholder="District"
                        className="pl-1 border w-full outline-1 outline-primaryBlue rounded text-sm placeholder:text-xs" />
                    <input 
                        placeholder="Neighborhood"
                        className="pl-1 border w-full outline-1 outline-primaryBlue rounded text-sm placeholder:text-xs" />         
                </div>
            </div>
        </form>
    )
}

export default CreateNewAddress;
