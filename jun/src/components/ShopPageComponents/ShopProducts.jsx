import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard"
import useImageSize from "@/hooks/useImageSize"
import { fetchProducts, fetchStates, setCurrentPage } from "@/store/features/productSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCardsSkeleton } from "../ui/skeletons";

export default function ShopProducts() {
    const { isMobile } = useImageSize();

    const display = isMobile ? "assets/shopClients/mobile-clients-1.png" : "assets/shopClients/desktop-clients-1.png";
    const imageClass = isMobile ? "w-60 mx-auto" : "mx-auto";

    const { productsFetchState, categories, products, total, currentPage } = useSelector(state => state.product);

    const [category, setCategory] = useState("");
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("");

    const [tempSort, setTempSort] = useState("");
    const [tempCategory, setTempCategory] = useState("");
    const [tempFilter, setTempFilter] = useState("");

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchProducts({ 
            sort: sort,
            category: category, 
            filter: filter 
        }));
    }, [category, currentPage, dispatch, filter, sort]);

    const paginate = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
    }

    const categoryNameHandler = (code, title) => {
        return code.charAt(0) == "k" ? "Kadın " + title : "Erkek " + title;
    }

    const filterHandler = () => {
        setCategory(tempCategory);
        setSort(tempSort);
        setFilter(tempFilter); 
    };

    return (
        <div className="flex flex-col items-center justify-center pt-10 gap-20">
            <div className="flex flex-col items-center gap-6 min-[920px]:flex-row sm:justify-between sm:w-full sm:px-40">
                <p className="text-sm font-semibold text-secondaryTextColor">Showing all {total} results</p>
                
                <div className="flex flex-col items-center sm:items-end gap-4">
                    <div className="flex flex-col sm:flex-row">
                        <select 
                            value={tempSort}
                            onChange={(e) => setTempSort(e.target.value)}
                            className="bg-[#F9F9F9] focus:border-primaryBlue transition-all outline-none border rounded-l border-[#E6E6E6] px-4 py-2 text-sm sm:px-4 sm:max-[800px]:gap-5">
                            <option value="">No Sort</option>
                            <option value="price:desc">Price Desc</option>
                            <option value="price:asc">Price Asc</option>
                            <option value="rating:desc">Rating Desc</option>
                            <option value="rating:asc">Rating Asc</option>
                        </select>   
                        <input  
                            value={tempFilter}
                            onChange={(e) => setTempFilter(e.target.value)} 
                            placeholder="Filter" 
                            className="bg-[#F9F9F9] focus:border-primaryBlue transition-all outline-none border border-[#E6E6E6] px-4 py-2 text-sm sm:px-4 sm:max-[800px]:gap-5"/>
                        <select 
                            value={tempCategory}
                            onChange={(e) => setTempCategory(e.target.value)}
                            className="bg-[#F9F9F9] focus:border-primaryBlue transition-all outline-none border border-[#E6E6E6] px-4 py-2 text-sm sm:px-4 sm:max-[800px]:gap-5">
                            <option value="">Tüm Kategoriler</option>
                            {categories.map((item, index) => (
                                <option value={item.id} key={index}>{categoryNameHandler(item.code, item.title)}</option>
                            ))}
                        </select>
                        <button onClick={filterHandler} className="bg-primaryBlue py-2 px-6 rounded-r text-sm text-white">Filter</button>
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className="text-sm font-semibold text-secondaryTextColor">Views: </p>
                        <div className="flex gap-2">
                            <button className="border border-[#E6E6E6] px-3 py-2 rounded text-sm"><i className="fa-solid fa-table-cells-large"></i></button>
                            <button className="border border-[#E6E6E6] px-3 py-2 rounded text-sm"><i className="fa-solid fa-list"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-x-8 gap-y-12 justify-center sm:flex-wrap sm:flex-row sm:px-40 sm:max-w-8xl">
                {
                    productsFetchState === fetchStates.FETCHING || productsFetchState === fetchStates.FAILED ? (
                        <ProductCardsSkeleton />
                    ) : (
                        products.map(item => 
                            <ProductCard key={item.id} item={item} />
                        )
                    )
                }
            </div>
            <Pagination 
                paginate={paginate}
                 />
                
            <div className="bg-[#FAFAFA] w-full">
                <img className={imageClass} src={display} />
            </div>
        </div>
    );
}
