import CreateNewAddress from "@/components/CreateOrderPageComponents/CreateNewAddress";
import { useSelector } from "react-redux";

const CreateOrderPage = () => {

    const { addressList } = useSelector(state => state.client);

    return(
        <div className="flex flex-col gap-10 px-12 sm:flex-row">
            {/**/}
            <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <div className="shadow p-4 rounded-t">
                        <h4 className="text-primaryBlue font-semibold">Address Information</h4>
                        <p className="text-sm">AAAAAA</p>
                    </div>
                    <div className="shadow p-4 rounded-b">
                        <h4 className="text-primaryBlue font-semibold">Payment Options</h4>
                        <p className="text-sm">AAAAAA</p>
                    </div>
                </div>
                <div className="shadow p-4 flex flex-col gap-4">
                    <h4 className="font-semibold">Address</h4>
                    <CreateNewAddress />
                    <div>
                        {addressList.map((address) => 
                        <div key={address.id} className="flex flex-col gap-2">
                            <h5 className="font-semibold">{address.title}</h5>
                            <div className="shadow p-4 flex flex-col gap-1">
                                <div className="flex flex-col justify-between">
                                    <p className="flex gap-1 items-center text-sm"><i className="fa-solid fa-user"></i>{address.name}</p>
                                    <p className="flex gap-1 items-center text-nowrap text-sm"><i className="fa-solid fa-mobile-alt"></i>{address.phone}</p>
                                </div>
                                <p className="text-sm text-secondaryTextColor">{address.city}</p>
                                <p className="text-sm text-secondaryTextColor">{address.district}</p>
                                <p className="text-sm text-secondaryTextColor text-ellipsis">{address.neighborhood}</p>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>

            {/*ORDER SUMMARY*/}
            <div className="flex flex-col gap-4">
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
    )
}

export default CreateOrderPage;