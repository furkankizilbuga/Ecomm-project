import ProductCard from "@/components/ProductCard"
import Spinner from "@/components/Spinner";
import useImageSize from "@/hooks/useImageSize"
import { fetchStates } from "@/store/features/productSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ShopProducts() {
    const { isMobile } = useImageSize();

    const display = isMobile ? "assets/shopClients/mobile-clients-1.png" : "assets/shopClients/desktop-clients-1.png";
    const imageClass = isMobile ? "w-60 mx-auto" : "mx-auto";

    const { products, productsFetchState, categories } = useSelector(state => state.product);

    const [category, setCategory] = useState("");
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("");

    const [tempSort, setTempSort] = useState("");
    const [tempCategory, setTempCategory] = useState("");
    const [tempFilter, setTempFilter] = useState("");

    const [productDisplay, setProductDisplay] = useState(products);

    const baseURL = "https://workintech-fe-ecommerce.onrender.com";

    useEffect(() => {
        let query = "/products";
        const params = [];

        if (category) params.push(`category=${category}`);
        if (sort) params.push(`sort=${sort}`);
        if (filter) params.push(`filter=${filter}`);

        if (params.length > 0) {
            query += `?${params.join("&")}`;
        }

        axios.get(baseURL + query)
            .then(res => {
                if (JSON.stringify(res.data.products) !== JSON.stringify(productDisplay)) {
                    setProductDisplay(res.data.products);
                }
            })
            .catch(err => console.error(err));
    }, [sort, filter, category]);

    const filterHandler = () => {
        setCategory(tempCategory);
        setSort(tempSort);
        setFilter(tempFilter); 
    };

    return (
        <div className="flex flex-col items-center justify-center pt-10 gap-20">
            <div className="flex flex-col items-center gap-6 min-[920px]:flex-row sm:justify-between sm:w-full sm:px-40">
                <p className="text-sm font-semibold text-secondaryTextColor">Showing all {productDisplay.length} results</p>
                
                <div className="flex flex-col items-center sm:items-end gap-4">
                    <div className="flex flex-col sm:flex-row">
                        <select 
                            value={tempSort}
                            onChange={(e) => setTempSort(e.target.value)}
                            className="bg-[#F9F9F9] focus:border-primaryBlue transition-all outline-none border rounded-l border-[#E6E6E6] px-4 py-2 text-sm sm:px-4 sm:max-[800px]:gap-5">
                            <option value="" selected hidden disabled>Sort</option>
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
                            <option value="">All Categories</option>
                            {categories.map((item, index) => (
                                <option value={item.id} key={index}>{item.title}</option>
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
                    productsFetchState === fetchStates.FETCHING ? (
                        <Spinner />
                    ) : (
                        productDisplay.map(item => 
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
    );
}
