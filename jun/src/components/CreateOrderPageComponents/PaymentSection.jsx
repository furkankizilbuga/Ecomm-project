import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateNewPayment from "./CreateNewPayment";
import EditCard from "./EditCard";
import { setPayment } from "@/store/features/cartSlice";

const PaymentSection = () => {

    const [editingCardId, setEditingCardId] = useState(null);
    const dispatch = useDispatch();

    const { creditCards } = useSelector(state => state.client);
    const { payment } = useSelector(state => state.cart);

    const editHandler = (cardId) => {
        setEditingCardId(cardId);
    };

    const closeEditHandler = () => {
        setEditingCardId(null);
    };

    const hideCardNo = (cardNo) => {
        const cleanNo = cardNo.replace(/\s/g, '');
        const lastFour = cleanNo.slice(-4);
        return `**** **** **** ${lastFour}`;
    };

    return (
        <div className="shadow p-4 flex flex-col gap-12">
                        <h4 className="font-semibold">Payment Options</h4>
                        <div className="flex flex-col gap-12 lg:flex-row lg:flex-wrap lg:gap-x-4">
                            <CreateNewPayment />
                            {creditCards.map((card) => (
                                <div key={card.id} className="flex flex-col gap-2 rounded lg:w-[calc(50%-8px)]">
                                    {editingCardId === card.id ? (
                                        <EditCard card={card} onClose={closeEditHandler} />
                                    ) : (
                                        <div className="flex flex-col gap-2">
                                            <div className="flex justify-between">
                                                <div className="flex gap-2">
                                                    <input 
                                                        onChange={() => dispatch(setPayment(card))}
                                                        name="address"
                                                        checked={payment.id === card.id}
                                                        type="radio" 
                                                    />
                                                    <h5 className="font-semibold">{card.name_on_card}</h5>
                                                </div>
                                                <button onClick={() => editHandler(card.id)} className="text-sm font-medium underline">
                                                    Edit
                                                </button>
                                            </div>
                                            <div className="shadow p-4 flex flex-col gap-1">
                                                <p className="text-sm text-secondaryTextColor">{hideCardNo(card.card_no)}</p>
                                                <p className="text-sm text-secondaryTextColor">{card.expire_month}/{card.expire_year}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                </div>
    )
}

export default PaymentSection;