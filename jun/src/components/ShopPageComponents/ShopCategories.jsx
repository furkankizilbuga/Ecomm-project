import Spinner from "@/components/Spinner";
import { fetchCategories, fetchStates } from "@/store/features/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom"

export default function ShopCategories() {

    const history = useHistory();
    const dispatch = useDispatch();
    const { categories, categoriesFetchState } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])

    const uniqueCategories = [
        ...categories
    ].filter((value, index, self) => 
        index === self.findIndex((t) => (
            t.title === value.title
        ))
    );
      
    const topCategories = uniqueCategories
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    const clickHandler = (categoryId, categoryTitle) => {
        history.push({
            pathname: `/shop/${categoryId}`,
            state: { categoryTitle },
        });
        window.scrollTo(0, 0);
    };
    
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
                        <div onClick={() => clickHandler(item.id, item.title)} key={item.id} className="relative cursor-pointer">
                            <img className="rounded object-cover object-center w-60 h-96" src={item.img} alt={item.title} />
                            <div className="absolute inset-0 bg-black bg-opacity-50  hover:bg-opacity-60 transition"></div>
                            <div className="flex flex-col pointer-events-none gap-4 items-center font-bold text-sm text-white absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
                                <h4>{item.title}</h4>
                                <p>{item.rating}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}