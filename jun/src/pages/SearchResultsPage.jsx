import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setProductsBySearch } from "@/store/features/productSlice";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import usePagination from "@/hooks/usePagination";
import { ProductCardsSkeleton } from '@/components/ui/skeletons';

export default function SearchResultsPage() {
    const dispatch = useDispatch();
    const searchParams = new URLSearchParams(location.search);
    
    const [isLoading, setIsLoading] = useState(true);
    const searchTerm = searchParams.get('q') || '';
    const categoryId = searchParams.get('category') || '';

    const { productsBySearch } = useSelector(state => state.product);

    // Pagination
    const [currentProducts, currentPage, totalProducts, productsPerPage, setProducts, setCurrentPage] = usePagination();

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    
    

    useEffect(() => {
        const fetchSearchResults = async () => {
            setIsLoading(true);
            try {
                const baseURL = "https://workintech-fe-ecommerce.onrender.com";
                let query = "/products?";
                if (categoryId) query += `category=${categoryId}&`;
                if (searchTerm) query += `search=${searchTerm}`;
    
                const { data } = await axios.get(baseURL + query);
                dispatch(setProductsBySearch(data.products || []));
            } catch (error) {
                console.error("Search results fetch error:", error);
                dispatch(setProductsBySearch([]));
            } finally {
                setIsLoading(false);
            }
        };

        // Eğer arama terimi varsa fetch işlemini başlat
        if (searchTerm) {
            fetchSearchResults();
        } else {
            setIsLoading(false);
        }
    }, [searchTerm, categoryId, dispatch]);

    useEffect(() => {
        setProducts(productsBySearch);
    }, [productsBySearch, setProducts])

    if (isLoading) {
        return <ProductCardsSkeleton />;
    }

    return (
        <div className="flex flex-col items-center md:px-12 justify-center pt-10 gap-20">
            <div className="flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between items-center w-full">
                <h3 className="text-textColor font-bold text-xl">
                    Search Results 
                    {searchTerm && ` for "${searchTerm}"`}
                    {categoryId && ` in Category`}
                </h3>
                <p className="text-secondaryTextColor text-sm font-medium">
                    Showing all {productsBySearch.length} results
                </p>
            </div>
            {productsBySearch.length === 0 ? (
                <p className="text-center text-gray-500">No products found.</p>
            ) : (
                <>
                    <div className="flex flex-col items-center gap-x-8 gap-y-12 justify-center sm:flex-wrap sm:flex-row sm:px-40 sm:max-w-8xl">
                        {currentProducts.map(item => (
                            <ProductCard key={item.id} item={item} />
                        ))}
                    </div>
                    <Pagination 
                        productsPerPage={productsPerPage} 
                        totalProducts={totalProducts} 
                        paginate={paginate}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage} 
                    />
                </>
            )}
        </div>
    )
}