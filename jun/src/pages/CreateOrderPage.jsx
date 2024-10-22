const CreateOrderPage = () => {
    return(
        <div className="flex flex-col px-12 sm:flex-row">
            <div>

            </div>
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