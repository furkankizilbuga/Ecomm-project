export default function ShopProducts() {
    return(
        <div>
            <div className="flex flex-col">
                <p>Showing all 12 results</p>
                <div className="flex gap-4">
                    <p>Views: </p>
                    <button></button>
                    <button></button>
                </div>
                <div>
                    <select className="bg-[#F9F9F9] focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] px-2 py-1 text-sm sm:rounded-none sm:px-0 sm:max-[800px]:gap-5">
                        <option disabled selected hidden>Category</option>
                        <option>Clothing</option>
                    </select>
                    <button className="bg-primaryBlue text-white">Filter</button>
                </div>
            </div>
        </div>
    )
}