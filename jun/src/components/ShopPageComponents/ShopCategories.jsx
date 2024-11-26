import Spinner from "@/components/Spinner";
import { fetchStates } from "@/store/features/productSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

export default function ShopCategories() {


    const { categories, categoriesFetchState } = useSelector(state => state.product);

    const topCategories = [...categories].sort((a, b) => b.rating - a.rating).slice(0, 5);
    
    return(
        <div className="bg-[#FAFAFA] w-full flex flex-col items-center justify-center gap-14 py-10">
            <div className="flex flex-col items-center gap-14 sm:flex-row sm:w-full sm:justify-between sm:px-12">
                <h3 className="text-textColor font-bold text-xl">Shop</h3>
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-textColor font-bold">Home</Link>
                    <i className="fa-solid fa-chevron-right text-mutedColor"></i>
                    <span className="font-bold text-mutedColor">Shop</span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 sm:flex-row sm:px-40 sm:flex-wrap">
                {   
                    categoriesFetchState == fetchStates.FETCHING ? (
                        <Spinner />
                    ) : 
                    topCategories.map( item => 
                        <Link to={`/shop/${item.gender == "k" ? "kadin" : "erkek"}/${item.title}`} key={item.id} className="relative cursor-pointer">
                            <img className="rounded relative object-cover object-center w-60 h-96" src={item.img} alt={item.title} />
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <div className="flex flex-col gap-4 items-center font-bold text-sm text-white absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
                                <h4>{item.title}</h4>
                                <p>{item.rating}</p>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}