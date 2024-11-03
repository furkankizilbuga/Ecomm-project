import AddressSection from "@/components/CreateOrderPageComponents/AddressSection";
import OrderSummary from "@/components/CreateOrderPageComponents/OrderSummary";
import PaymentSection from "@/components/CreateOrderPageComponents/PaymentSection";
import { useAuth } from "@/hooks/useAuth";
import { fetchAddressList } from "@/store/features/clientSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from 'react-router-dom';

const CreateOrderPage = () => {
    const dispatch = useDispatch();
    const { token } = useAuth();
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchAddressList(token));
    }, [dispatch, token]);

    const { address } = useSelector(state => state.cart);
    const [editingAddressId, setEditingAddressId] = useState(null);
    
    const getActiveSection = () => {
        const searchParams = new URLSearchParams(location.search);
        return searchParams.get('step') || 'address';
    };

    const activeSection = getActiveSection();

    const handleSectionChange = (section) => {
        history.push({
            pathname: '/create-order',
            search: `?step=${section}`
        });

        console.log(address);
    };

    useEffect(() => {
        if (activeSection === 'payment' && !address) {
            history.push({
                pathname: '/create-order',
                search: '?step=address'
            });
        }
    }, [activeSection, address, history]);

    return (
        <div className="flex flex-col gap-10 px-12 sm:flex-row sm:justify-between">
            <div className="flex flex-col gap-4 sm:w-full md:gap-20">
                <div className="flex flex-col md:flex-row">
                    <div 
                        onClick={() => handleSectionChange("address")} 
                        className={`shadow p-4 rounded-t md:w-full flex flex-col gap-2 md:h-40 ${
                            activeSection === "address" ? "border-b-4 border-primaryBlue" : ""
                        }`}
                    >
                        <h4 className="text-primaryBlue font-semibold text-nowrap">Address Information</h4>
                        {Object.keys(address).length > 0 ? (
                            <div>
                                <p className="text-sm font-medium">{address.name}</p>
                                <p className="text-sm">{address.phone}</p>
                                <p className="text-xs">{address.city}</p>
                                <p className="text-xs">{address.district}</p>
                                <p className="text-xs">{address.neighborhood}</p>
                            </div>
                        ) : (
                            <p className="text-sm font-medium">No address selected.</p>
                        )}
                    </div>
                    <div 
                        onClick={() => {
                            if (address) {
                                handleSectionChange("payment");
                            }
                        }} 
                        className={`shadow p-4 rounded-t md:w-full flex flex-col gap-2 md:h-40 ${
                            !address ? "cursor-not-allowed opacity-50" : ""
                        } ${activeSection === "payment" ? "border-b-4 border-primaryBlue" : ""}`}
                    >
                        <h4 className="text-primaryBlue font-semibold text-nowrap">Payment Options</h4>
                        <p className="text-sm">AAAAAA</p>
                    </div>
                </div>
                {activeSection === "address" ? (
                    <AddressSection 
                        editingAddressId={editingAddressId}
                        setEditingAddressId={setEditingAddressId}
                    />
                ) : (
                    <PaymentSection />
                )}
            </div>
            <OrderSummary />
        </div>
    );
};

export default CreateOrderPage;