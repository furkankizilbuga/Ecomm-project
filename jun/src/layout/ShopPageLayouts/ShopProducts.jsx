import ProductCard from "@/components/ProductCard"
import Spinner from "@/components/Spinner";
import useImageSize from "@/hooks/useImageSize"
import { fetchStates } from "@/store/features/productSlice";
import { useSelector } from "react-redux";

export default function ShopProducts() {

    //TODO Pagination will be fixed. This is design only.
    //https://www.youtube.com/watch?v=IYCa1F-OWmk

    const { isMobile } = useImageSize();

    let display = isMobile ? "assets/shopClients/mobile-clients-1.png" : "assets/shopClients/desktop-clients-1.png";
    let imageClass = isMobile ? "w-60 mx-auto" : "mx-auto";

    const { products, productsFetchState, categories } = useSelector(state => state.product);

    return(
        <div className="flex flex-col items-center justify-center pt-10 gap-20">
            <div className="flex flex-col items-center gap-6 min-[920px]:flex-row sm:justify-between sm:w-full sm:px-40">
                <p className="text-sm font-semibold text-secondaryTextColor">Showing all 12 results</p>
                <div className="flex gap-4 items-center">
                    <p className="text-sm font-semibold text-secondaryTextColor">Views: </p>
                    <div className="flex gap-2">
                        <button className="border border-[#E6E6E6] px-3 py-2 rounded text-sm"><i className="fa-solid fa-table-cells-large"></i></button>
                        <button className="border border-[#E6E6E6] px-3 py-2 rounded text-sm"><i className="fa-solid fa-list"></i></button>
                    </div>
                </div>
                <div className="flex gap-2">
                    <select className="bg-[#F9F9F9] focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] px-4 py-2 text-sm sm:px-4 sm:max-[800px]:gap-5">
                        <option disabled selected hidden>Category</option>
                        {categories.map((item, index)=> (
                        <option key={index}>{item.title}</option>
                        ))}
                    </select>
                    <button className="bg-primaryBlue px-6 rounded text-sm text-white">Filter</button>
                </div>
            </div>
            <div className="flex flex-col items-center gap-x-8 gap-y-12 justify-center sm:flex-wrap sm:flex-row sm:px-40 sm:max-w-8xl">
                {
                    productsFetchState === fetchStates.FETCHING ? (
                        <Spinner />
                    ) : (
                        products.map(item => 
                            <ProductCard key={item.id} item={item} />
                        )
                    )
                }
            </div>
            <ul className="flex justify-center items-center border-mutedColor border rounded-md text-xs font-semibold">
                <li className="text-primaryBlue px-4">Prev</li>
                <li className="border-x-mutedColor border-x px-4 py-5 text-primaryBlue">1</li>
                <li className="border-x-mutedColor border-x px-4 py-5 text-primaryBlue">2</li>
                <li className="border-x-mutedColor border-x px-4 py-5 text-primaryBlue">3</li>
                <li className="text-primaryBlue px-4">Next</li>
            </ul>
            <div className="bg-[#FAFAFA] w-full">
                <img className={imageClass} src={display} />
            </div>
        </div>
    )
}