import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import { ProductCardsSkeleton } from "@/components/ui/skeletons";
import usePagination from "@/hooks/usePagination";
import { fetchStates } from "@/store/features/clientSlice";
import { fetchProductsByCategory } from "@/store/features/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useHistory } from "react-router-dom"

export default function CategoryPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    let { categoryId } = useParams();
    const location = useLocation();
    const { categoryTitle } = location.state || {};

    const { productsByCategory, productsByCategoryFetchState } = useSelector(state => state.product)

    //Pagination
    const [currentProducts, currentPage, totalProducts, productsPerPage, setProducts, setCurrentPage] = usePagination();

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    
    useEffect(() => {
        dispatch(fetchProductsByCategory(categoryId));
    }, [dispatch, categoryId]);

    useEffect(() => {
        if (productsByCategory.length > 0) {
            setProducts(productsByCategory);
        }
    }, [productsByCategory, setProducts]);

    



    //Ürünlerin fetchlendiği ama hiçbir ürünün bulunamadığı durumda:
    if(productsByCategory.length == 0 && productsByCategoryFetchState == fetchStates.FETCHED) {
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
                <h3 className="text-textColor font-bold text-xl">{categoryTitle}</h3>
                <p className="text-secondaryTextColor text-sm font-medium">Showing all {totalProducts} results</p>
            </div>
            <div className="flex flex-col items-center gap-x-8 gap-y-12 justify-center sm:flex-wrap sm:flex-row sm:px-40 sm:max-w-8xl">
                {
                    productsByCategoryFetchState == fetchStates.FETCHING || productsByCategoryFetchState == fetchStates.FAILED ? (
                        <ProductCardsSkeleton />
                    ) : (
                        currentProducts.map(item => (
                        <ProductCard key={item.id} item={item}  />
                    ))
                )}
            </div>
            <Pagination 
                productsPerPage={productsPerPage} 
                totalProducts={totalProducts} 
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} />
        </div>
    )
}