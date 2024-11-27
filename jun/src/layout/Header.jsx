import Cart from "@/components/Cart";
import SearchedProducts from "@/components/SearchedProducts";
import { useAuth } from "@/hooks/useAuth";
import { setProductsBySearch } from "@/store/features/productSlice";
import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

export default function Header() {
    const [display, setDisplay] = useState(false);
    const [displayMd, setDisplayMd] = useState(false);

    const [showSearchResults, setShowSearchResults] = useState(false);

    const [category, setCategory] = useState("");
    const [search, setSearch] = useState("");

    const searchContainerRef = useRef(null);

    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.client.user);
    const { categories, productsBySearch } = useSelector(state => state.product);

    const { logout, isAuthenticated } = useAuth();

    const searchHandler = () => {
        const searchParams = new URLSearchParams();
        if (search) searchParams.set('q', search);
        if (category) searchParams.set('category', category);
        
        history.push(`/search?${searchParams.toString()}`);
    }

    useEffect(() => {

        const baseURL = "https://workintech-fe-ecommerce.onrender.com"

        const fetchProducts = async () => {
            try {

                if (!search) {
                    dispatch(setProductsBySearch([]));
                    return;
                }

                let query = "/products?";
                if (category) query += `category=${category}&`;
                if (search) query += `filter=${search}`;
    
                const { data } = await axios.get(baseURL + query);
                dispatch(setProductsBySearch(data.products || []));
            } catch (error) {
                console.error("Error fetching products:", error);
                dispatch(setProductsBySearch([]));
            }
        };

    
        const timer = setTimeout(() => {
            if (category || search) fetchProducts();
        }, 2000);

        return () => clearTimeout(timer);
    }, [category, dispatch, search]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchContainerRef.current && 
                !searchContainerRef.current.contains(event.target)) {
                setShowSearchResults(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    

    return (
        <header className="flex flex-col items-center mx-12 py-10 bg-white font-montserrat sm:flex-row sm:justify-between sm:min-w-max sm:gap-4 relative">
            <div className="flex flex-col w-full sm:flex-row sm:items-center sm:w-auto sm:gap-14 sm:max-[800px]:gap-5">
                <div className="flex justify-between w-full sm:w-auto relative sm:items-center">
                    <a href="/" className="text-textColor font-bold text-xl sm:mr-4 sm:text-2xl">Jun</a>
                    <button className="sm:hidden" onClick={() => {
                        console.log(isAuthenticated)
                        setDisplay(!display)
                    }}><i className="fa-solid fa-list text-secondaryTextColor"></i></button>
                    <button className="hidden sm:block lg:hidden" onClick={() => setDisplayMd(!displayMd)}>
                        <i className="fa-solid fa-list text-secondaryTextColor"></i>
                    </button>
                    {/* Hamburger Menu */}
                    <div className="hidden sm:block lg:hidden">
                        <nav className={`${displayMd ? "opacity-100 visible" : "opacity-0 invisible"} absolute left-0 top-full mt-2 bg-white p-4 border-primaryBlue border rounded-lg flex flex-row items-center gap-4 duration-500 transition-all ease-in-out z-50`}>                    
                            <Link to="/shop" className="text-primaryBlue sm:text-base sm:max-[800px]:text-sm">Explore</Link>
                            {!isAuthenticated && <Link to="/login" className="text-secondaryTextColor sm:text-base sm:max-[800px]:text-sm">Login</Link>}
                            {!isAuthenticated && <Link to="/signup" className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm">Sign-up</Link>}
                            {isAuthenticated && <Link to={`/profile/${user.name}`} className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm">{user.name}</Link>}
                            {isAuthenticated && <button onClick={logout} className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm">Logout</button>}
                            <Cart />
                        </nav>
                    </div>
                </div>
                {/* Mobile Header */}
                <nav className={`${display ? "opacity-1 mt-24 mb-16 gap-8" : "opacity-0 h-0 overflow-hidden"} flex flex-col items-center duration-500 text-2xl transition ease-in-out sm:hidden`}>                    
                    <Link to="/shop" className="text-primaryBlue sm:text-base sm:max-[800px]:text-sm">Explore</Link>
                    {!isAuthenticated && <Link to="/login" className="text-secondaryTextColor sm:text-base sm:max-[800px]:text-sm">Login</Link>}
                    {!isAuthenticated && <Link to="/signup" className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm">Sign-up</Link>}
                    {isAuthenticated && <Link to={`/profile/${user.name}`} className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm">{user.name}</Link>}
                    {isAuthenticated && <button onClick={logout} className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm">Logout</button>}
                    <Cart />
                </nav>
                {/* Normal Header */}
                <nav className="hidden lg:flex lg:flex-row lg:items-center lg:gap-4">                    
                    <Link to="/shop" className="text-primaryBlue sm:text-base sm:max-[800px]:text-sm">Explore</Link>
                    {!isAuthenticated && <Link to="/login" className="text-secondaryTextColor sm:text-base sm:max-[800px]:text-sm">Login</Link>}
                    {!isAuthenticated && <Link to="/signup" className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm">Sign-up</Link>}
                    {isAuthenticated && <Link to={`/profile/${user.name}`} className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm">{user.name}</Link>}
                    {isAuthenticated && <button onClick={logout} className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm">Logout</button>}
                    <Cart />
                </nav>
            </div>
            <div 
                ref={searchContainerRef}
                className="flex flex-col w-full gap-2 pt-10 sm:flex-row sm:gap-0 sm:pt-0 sm:w-auto">
                <input
                    onFocus={() => setShowSearchResults(true)}
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setShowSearchResults(true);
                    }}
                    placeholder="Search" 
                    className="bg-[#F9F9F9] relative focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] px-3 py-1 placeholder:text-sm sm:rounded-l sm:px-2 sm:rounded-r-none sm:w-40 md:w-full"/>
                <select 
                    className="bg-[#F9F9F9] focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] px-2 py-1 text-sm sm:rounded-none sm:px-0 sm:max-[800px]:gap-5"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    {categories.map((item, index)=> (
                        <option key={index} value={item.id}>{item.title}</option>
                    ))}
                </select>
                <button onClick={searchHandler} className="bg-primaryBlue py-2 rounded sm:rounded-r sm:rounded-l-none sm:px-4">
                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                </button>
                {showSearchResults && productsBySearch.length > 0 && (
                    <div className="absolute top-full mt-2 w-full z-50">
                        <SearchedProducts viewAllHandler={searchHandler} />
                    </div>
                )}
            </div>
        </header> 
    )
}