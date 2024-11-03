/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import CreateNewAddress from "./CreateNewAddress";
import EditAddress from "./EditAddress";

const AddressSection = ({ selectedAddressId, setSelectedAddressId, editingAddressId, setEditingAddressId }) => {

    const { addressList } = useSelector(state => state.client);

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
                            {addressList.map((address) => (
                                <div key={address.id} className="flex flex-col gap-2 rounded lg:w-[calc(50%-8px)]">
                                    {editingAddressId === address.id ? (
                                        <EditAddress address={address} onClose={closeEditHandler} />
                                    ) : (
                                        <div className="flex flex-col gap-2">
                                            <div className="flex justify-between">
                                                <div className="flex gap-2">
                                                    <input 
                                                        onChange={() => setSelectedAddressId(address.id)}
                                                        name="address"
                                                        checked={selectedAddressId === address.id}
                                                        type="radio" 
                                                    />
                                                    <h5 className="font-semibold">{address.title}</h5>
                                                </div>
                                                <button onClick={() => editHandler(address.id)} className="text-sm font-medium underline">
                                                    Edit
                                                </button>
                                            </div>
                                            <div className="shadow p-4 flex flex-col gap-1">
                                                <div className="flex flex-col justify-between">
                                                    <p className="flex gap-1 items-center text-sm"><i className="fa-solid fa-user"></i>{address.name}</p>
                                                    <p className="flex gap-1 items-center text-nowrap text-sm"><i className="fa-solid fa-mobile-alt"></i>{address.phone}</p>
                                                </div>
                                                <p className="text-sm text-secondaryTextColor">{address.city}</p>
                                                <p className="text-sm text-secondaryTextColor">{address.district}</p>
                                                <p className="text-sm text-secondaryTextColor text-ellipsis">{address.neighborhood}</p>
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