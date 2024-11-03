import { useDispatch, useSelector } from "react-redux";
import CreateNewAddress from "./CreateNewAddress";
import EditAddress from "./EditAddress";
import { setAddress } from "@/store/features/cartSlice";
import { useState } from "react";

const AddressSection = () => {

    const [editingAddressId, setEditingAddressId] = useState(null);

    const { addressList } = useSelector(state => state.client);
    const { address } = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const editHandler = (addressId) => {
        setEditingAddressId(addressId);
    };

    const closeEditHandler = () => {
        setEditingAddressId(null);
    };

    return(
                <div className="shadow p-4 flex flex-col gap-12">
                        <h4 className="font-semibold">Addresses</h4>
                        <div className="flex flex-col gap-12 lg:flex-row lg:flex-wrap lg:gap-x-4">
                            <CreateNewAddress />
                            {addressList.map((item) => (
                                <div key={item.id} className="flex flex-col gap-2 rounded lg:w-[calc(50%-8px)]">
                                    {editingAddressId === item.id ? (
                                        <EditAddress item={item} onClose={closeEditHandler} />
                                    ) : (
                                        <div className="flex flex-col gap-2">
                                            <div className="flex justify-between">
                                                <div className="flex gap-2">
                                                    <input 
                                                        onChange={() => dispatch(setAddress(item))}
                                                        name="address"
                                                        checked={address.id === item.id}
                                                        type="radio" 
                                                    />
                                                    <h5 className="font-semibold">{item.title}</h5>
                                                </div>
                                                <button onClick={() => editHandler(item.id)} className="text-sm font-medium underline">
                                                    Edit
                                                </button>
                                            </div>
                                            <div className="shadow p-4 flex flex-col gap-1">
                                                <div className="flex flex-col justify-between">
                                                    <p className="flex gap-1 items-center text-sm"><i className="fa-solid fa-user"></i>{item.name}</p>
                                                    <p className="flex gap-1 items-center text-nowrap text-sm"><i className="fa-solid fa-mobile-alt"></i>{item.phone}</p>
                                                </div>
                                                <p className="text-sm text-secondaryTextColor">{item.city}</p>
                                                <p className="text-sm text-secondaryTextColor">{item.district}</p>
                                                <p className="text-sm text-secondaryTextColor text-ellipsis">{item.neighborhood}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                </div>
    )
}

export default AddressSection;