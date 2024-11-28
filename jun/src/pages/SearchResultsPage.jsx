import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsBySearch } from "@/store/features/productSlice";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import usePagination from "@/hooks/usePagination";
import { ProductCardsSkeleton } from '@/components/ui/skeletons';
import { fetchStates } from '@/store/features/clientSlice';
import { useHistory } from 'react-router-dom';

export default function SearchResultsPage() {

    /**
     * 
     * TODO
     * URL'den erişilmeye çalışıldığı zaman
     * eğer ürünlerin sayısı belirli bir sayfaya erişemeyecek kadar az ise
     * o sayfa boş geliyor. Bu durumda ya en son sayfaya ya da en başa yönlendirsin.
     * 
     */

    const dispatch = useDispatch();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);
    
    const searchTerm = searchParams.get('q') || '';
    const categoryId = searchParams.get('category') || '';
    const page = parseInt(searchParams.get('page'), 10) || 1;

    const { productsBySearch, productsBySearchFetchState } = useSelector(state => state.product);

    // Pagination
    const [currentProducts, currentPage, totalProducts, productsPerPage, setProducts, setCurrentPage] = usePagination();

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    
    useEffect(() => {
        if (searchTerm || categoryId) {
            dispatch(fetchProductsBySearch({ 
                category: categoryId, 
                search: searchTerm 
            }));
        }
    }, [searchTerm, categoryId, dispatch]);

    useEffect(() => {
        setProducts(productsBySearch);
    }, [productsBySearch, setProducts])


    //URL'deki sayfa var olandan yüksek veya az ise:
    useEffect(() => {
        if (totalProducts === 0) return;

        const totalPages = Math.ceil(totalProducts / productsPerPage);
        if (page > totalPages) {
            history.push(`/search?q=${searchTerm}&category=${categoryId}&page=${totalPages}`);
        } else if (page < 1) {
            history.push(`/search?q=${searchTerm}&category=${categoryId}&page=1`);
        }
    }, [page, totalProducts, productsPerPage, searchTerm, categoryId, history]);

    if (productsBySearchFetchState === fetchStates.FETCHING) {
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