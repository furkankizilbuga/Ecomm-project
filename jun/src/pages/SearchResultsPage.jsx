import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, setCurrentPage } from "@/store/features/productSlice";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import { ProductCardsSkeleton } from '@/components/ui/skeletons';
import { fetchStates } from '@/store/features/clientSlice';
import { useHistory } from 'react-router-dom';

export default function SearchResultsPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);
    
    const search = searchParams.get('q') || '';
    const category = searchParams.get('category') || '';
    const page = parseInt(searchParams.get('page'), 10) || 1;

    const { products, productsFetchState, total, productsPerPage, currentPage } = useSelector(state => state.product);

    const paginate = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
    }
    
    useEffect(() => {
            dispatch(fetchProducts({ 
                category: category, 
                filter: search,
                sort: "",
            }));
    }, [search, category, dispatch, currentPage, page]);


    //If page in url does not exist:
    useEffect(() => {
        if (total === 0) return;

        const totalPages = Math.ceil(total / productsPerPage);
        if (page > totalPages) {
            history.push(`/search?q=${search}&category=${category}&page=${totalPages}`);
        } else if (page < 1) {
            history.push(`/search?q=${search}&category=${category}&page=1`);
        }
    }, [page, total, productsPerPage, search, category, history]);

    if (productsFetchState === fetchStates.FETCHING) {
        return <ProductCardsSkeleton />;
    }

    return (
        <div className="flex flex-col items-center md:px-12 justify-center pt-10 gap-20">
            <div className="flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between items-center w-full">
                <h3 className="text-textColor font-bold text-xl">
                    Search Results 
                    {search && ` for "${search}"`}
                    {category && ` in Category`}
                </h3>
                <p className="text-secondaryTextColor text-sm font-medium">
                    Showing all {products.length} results
                </p>
            </div>
            {products.length === 0 ? (
                <p className="text-center text-gray-500">No products found.</p>
            ) : (
                <>
                    <div className="flex flex-col items-center gap-x-8 gap-y-12 justify-center sm:flex-wrap sm:flex-row sm:px-40 sm:max-w-8xl">
                        {products.map(item => (
                            <ProductCard key={item.id} item={item} />
                        ))}
                    </div>
                    <Pagination 
                        paginate={paginate}
                    />
                </>
            )}
        </div>
    )
}