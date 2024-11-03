import CreateNewAddress from "@/components/CreateOrderPageComponents/CreateNewAddress";
import EditAddress from "@/components/CreateOrderPageComponents/EditAddress";
import { useAuth } from "@/hooks/useAuth";
import { fetchAddressList } from "@/store/features/clientSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CreateOrderPage = () => {
    const dispatch = useDispatch();
    const { token } = useAuth();

    useEffect(() => {
        dispatch(fetchAddressList(token));
    }, [dispatch, token]);

    const { addressList } = useSelector(state => state.client);
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const [editingAddressId, setEditingAddressId] = useState(null);

    const editHandler = (addressId) => {
        setEditingAddressId(addressId);
    };

    const closeEditHandler = () => {
        setEditingAddressId(null);
    };

    const selectedAddress = addressList.find(address => address.id === selectedAddressId);

    return (
        <div className="flex flex-col gap-10 px-12 sm:flex-row sm:justify-between">
            <div className="flex flex-col gap-4 sm:w-full md:gap-20">
                <div className="flex flex-col md:flex-row">
                    <div className="shadow p-4 rounded-t md:w-full flex flex-col gap-2 md:h-40 border-b-4 border-primaryBlue">
                        <h4 className="text-primaryBlue font-semibold text-nowrap">Address Information</h4>
                        {selectedAddress ? (
                            <div>
                                <p className="text-sm font-medium">{selectedAddress.name}</p>
                                <p className="text-sm">{selectedAddress.phone}</p>
                                <p className="text-xs">{selectedAddress.city}</p>
                                <p className="text-xs">{selectedAddress.district}</p>
                                <p className="text-xs">{selectedAddress.neighborhood}</p>
                            </div>
                        ) : (
                            <p className="text-sm font-medium">No address selected.</p>
                        )}
                    </div>
                    <div className="shadow p-4 rounded-b flex flex-col md:w-full md:h-40">
                        <h4 className="text-primaryBlue font-semibold text-nowrap">Payment Options</h4>
                        <p className="text-sm">AAAAAA</p>
                    </div>
                </div>
                <div className="shadow p-4 flex flex-col gap-12">
                    <h4 className="font-semibold">Addresses</h4>
                        <div className="flex flex-col gap-12 lg:flex-row lg:flex-wrap lg:gap-x-4">
                            <CreateNewAddress />
                            {addressList.map((address) => (
                                <div key={address.id} className="flex flex-col gap-2 rounded lg:w-1/2">
                                    {editingAddressId === address.id ? (
                                        <EditAddress address={address} onClose={closeEditHandler} />
                                    ) : (
                                        <div>
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
            </div>

            {/*ORDER SUMMARY*/}
            <div className="flex flex-col gap-4 sm:max-w-80">
                <div className="shadow flex gap-2 items-start rounded p-4">
                    <input className="mt-1" type="checkbox" />
                    <p className="text-sm">By proceeding with this purchase, you agree to our <span className="underline font-semibold">terms of service and conditions.</span></p>
                </div>
                <div className="shadow flex flex-col gap-4 p-4 rounded">
                    <h4 className="text-primaryBlue font-semibold text-lg">Order Summary</h4>
                    <div className="border-b-mutedColor py-4 border-b flex flex-col gap-1 text-sm sm:text-base">
                        <div className="flex justify-between font-medium text-textColor">
                            <p>Products Total</p>
                            <p>8000TL</p>
                        </div>
                        <div className="flex justify-between font-medium text-textColor">
                            <p>Shipment Total</p>
                            <p>29.99TL</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-textColor font-medium">Total</p>
                        <p className="text-primaryBlue font-semibold">88888TL</p>
                    </div>
                </div>
                <button className="bg-primaryBlue rounded text-white font-semibold py-2 text-sm sm:text-base">Save and Continue</button>
            </div>
        </div>
    );
};

export default CreateOrderPage;