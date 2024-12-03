import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import { ProductCardsSkeleton } from "@/components/ui/skeletons";
import { fetchStates } from "@/store/features/clientSlice";
import { fetchCategories, fetchProducts, setCurrentPage } from "@/store/features/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom"

export default function CategoryPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    let { categoryId } = useParams();

    const { productsFetchState, categories, products, total, currentPage } = useSelector(state => state.product);

    const paginate = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
    }
    
    useEffect(() => {
        //Fetch with category id.
        dispatch(fetchProducts({ 
            sort: "",
            category: categoryId, 
            filter: "", 
        }));

        //Fetch if not already fetched.
        if (!categories || categories.length === 0) {
            dispatch(fetchCategories());
        }
    }, [dispatch, categoryId, categories, currentPage]);

    //Get category name using category id from params.
    const categoryName = categories.find(category => category.id == categoryId)?.title;


    //Products are fetched but is empty:
    if(products.length == 0 && productsFetchState == fetchStates.FETCHED) {
        return (
            <div className="px-12 flex flex-col items-center pt-20 md:pt-40 text-center gap-3">
                <h3 className="font-bold text-primaryBlue md:text-2xl">This Category is currently out of stock!</h3>
                <p className="text-sm md:text-base">Look for other categories until we restock!</p>
                <button onClick={() => history.push("/shop")} className="text-white font-medium px-10 py-1 rounded bg-primaryBlue md:text-lg">Explore</button>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center md:px-12 justify-center pt-10 gap-20">
            <div className="flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between items-center w-full">
                <h3 className="text-textColor font-bold text-xl">{categoryName}</h3>
                <p className="text-secondaryTextColor text-sm font-medium">Showing all {total} results</p>
            </div>
            <div className="flex flex-col items-center gap-x-8 gap-y-12 justify-center sm:flex-wrap sm:flex-row sm:px-40 sm:max-w-8xl">
                {
                    productsFetchState == fetchStates.FETCHING || productsFetchState == fetchStates.FAILED ? (
                        <ProductCardsSkeleton />
                    ) : (
                        products.map(item => (
                        <ProductCard key={item.id} item={item}  />
                    ))
                )}
            </div>
            <Pagination 
                paginate={paginate} />
        </div>
    )
}