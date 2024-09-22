import ProductCard from "@/components/ProductCard"

const productCardImages = [
    "assets/productCardImages/WOMENproduct3.png",
    "assets/productCardImages/MENproduct3.png",
    "assets/productCardImages/WOMENproduct4.png",
    "assets/productCardImages/WOMENproduct5.png",
    "assets/productCardImages/WOMENproduct6.png",
    "assets/productCardImages/WOMENproduct4.png"
]

export default function ShopProducts() {
    return(
        <div className="flex flex-col items-center justify-center py-10 gap-20">
            <div className="flex flex-col items-center gap-6">
                <p className="text-sm font-semibold text-secondaryTextColor">Showing all 12 results</p>
                <div className="flex gap-4 items-center">
                    <p className="text-sm font-semibold text-secondaryTextColor">Views: </p>
                    <button className="border border-[#E6E6E6] px-3 py-2 rounded text-sm"><i className="fa-solid fa-table-cells-large"></i></button>
                    <button className="border border-[#E6E6E6] px-3 py-2 rounded text-sm"><i className="fa-solid fa-list"></i></button>
                </div>
                <div className="flex gap-2">
                    <select className="bg-[#F9F9F9] focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] px-4 py-2 text-sm sm:rounded-none sm:px-0 sm:max-[800px]:gap-5">
                        <option disabled selected hidden>Category</option>
                        <option>CLOTHES</option>
                    </select>
                    <button className="bg-primaryBlue px-6 rounded text-sm text-white">Filter</button>
                </div>
            </div>
            <div className="flex flex-col items-center gap-x-8 gap-y-12 justify-center sm:flex-wrap sm:flex-row sm:max-w-8xl">
                {
                    productCardImages.map((item, index) => 
                        <ProductCard key={index} item={item} />
                    )
                }
            </div>
            <div className="flex border-[#E6E6E6] border rounded px-6 py-2">
                <button className="text-primaryBlue">Prev</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className="text-primaryBlue">Next</button>
            </div>
        </div>
    )
}