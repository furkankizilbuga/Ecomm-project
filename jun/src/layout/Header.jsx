import Cart from "@/components/Cart";
import SearchedProducts from "@/components/SearchedProducts";
import { useAuth } from "@/hooks/useAuth";
import { fetchProductsHeader } from "@/store/features/productSlice";
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

export default function Header() {
    const [display, setDisplay] = useState(false);
    const [displayMd, setDisplayMd] = useState(false);

    const [showSearchResults, setShowSearchResults] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const [category, setCategory] = useState("");
    const [search, setSearch] = useState("");

    const searchContainerRef = useRef(null);

    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.client.user);
    const { categories, productsHeader } = useSelector(state => state.product);

    const categoryNameHandler = (code, title) => {
        return code.charAt(0) == "k" ? "Kadın " + title : "Erkek " + title;
    }  

    const { logout, isAuthenticated } = useAuth();

    const searchHandler = () => {
        const searchParams = new URLSearchParams();
        if (search) searchParams.set('q', search);
        if (category) searchParams.set('category', category);
        
        history.push(`/search?${searchParams.toString()}`);
        setShowSearchResults(false);
        setHasSearched(true);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (search || category) {
                dispatch(fetchProductsHeader({ category: category, filter: search }));
                setHasSearched(true);
            }
        }, 2000);
    
        return () => clearTimeout(timer);
    }, [category, dispatch, search]);

    //Hamburger menu closes when clicked outside.
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
                    
                </div>
                {/* Mobile Header */}
                <nav className={`${display ? "opacity-1 mt-24 mb-16 gap-8" : "opacity-0 h-0 overflow-hidden"} flex flex-col items-center duration-500 text-2xl transition ease-in-out sm:hidden`}>                    
                    <Link to="/shop" className="text-primaryBlue sm:text-base sm:max-[800px]:text-sm hover:text-[#118dd4]">Explore</Link>
                    {!isAuthenticated && <Link to="/login" className="text-secondaryTextColor sm:text-base sm:max-[800px]:text-sm hover:text-textColor">Login</Link>}
                    {!isAuthenticated && <Link to="/signup" className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm hover:text-textColor">Sign-up</Link>}
                    {isAuthenticated && <Link to={`/profile/${user.name}`} className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm hover:text-textColor">{user.name}</Link>}
                    {isAuthenticated && <button onClick={logout} className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm hover:text-textColor">Logout</button>}
                    <Cart />
                </nav>
                {/* Normal Header */}
                <nav className="hidden lg:flex lg:flex-row lg:items-center lg:gap-4">                    
                    <Link to="/shop" className="text-primaryBlue sm:text-base sm:max-[800px]:text-sm hover:text-[#118dd4]">Explore</Link>
                    {!isAuthenticated && <Link to="/login" className="text-secondaryTextColor sm:text-base sm:max-[800px]:text-sm hover:text-textColor">Login</Link>}
                    {!isAuthenticated && <Link to="/signup" className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm hover:text-textColor">Sign-up</Link>}
                    {isAuthenticated && <Link to={`/profile/${user.name}`} className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm hover:text-textColor">{user.name}</Link>}
                    {isAuthenticated && <button onClick={logout} className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm hover:text-textColor">Logout</button>}
                    <Cart />
                </nav>
            </div>
            <div 
                ref={searchContainerRef}
                className="flex flex-col w-full gap-2 pt-10 sm:flex-row sm:gap-0 sm:pt-0 sm:w-auto">
                <input
                    onFocus={(e) => {
                        if(e.target.value) {
                            setShowSearchResults(true);
                        }
                    }}
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        if(e.target.value) {
                            setShowSearchResults(true);
                        }
                        setHasSearched(false);
                    }}
                    placeholder="Search" 
                    className="bg-[#F9F9F9] relative focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] px-3 py-1 placeholder:text-sm sm:rounded-l sm:px-2 sm:rounded-r-none sm:w-40 md:w-full"/>
                <select 
                    className="bg-[#F9F9F9] focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] px-2 py-1 text-sm sm:rounded-none sm:px-0 sm:max-[800px]:gap-5"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Tüm Kategoriler</option>
                    {categories.map((item, index)=> (
                        <option key={index} value={item.id}>{categoryNameHandler(item.code, item.title)}</option>
                    ))}
                </select>
                <button onClick={searchHandler} className="bg-primaryBlue py-2 rounded sm:rounded-r sm:rounded-l-none sm:px-4">
                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                </button>

                {/* Hamburger Menu */}
                <button className="hidden sm:block sm:pl-4 lg:hidden" onClick={() => setDisplayMd(!displayMd)}>
                    <i className="fa-solid fa-list text-secondaryTextColor"></i>
                </button>
                
                <div className="hidden sm:block lg:hidden">
                    <nav className={`${displayMd ? "opacity-100 visible" : "opacity-0 invisible"} absolute right-0 top-20 mt-2 bg-white py-6 px-2 w-32 shadow-md border rounded-lg flex flex-col items-center gap-4 duration-500 transition ease-out z-50`}>                    
                        <Link to="/shop" className="text-primaryBlue sm:text-base sm:max-[800px]:text-sm hover:bg-gray-100 w-full py-2 rounded text-center transition">Explore</Link>
                        {!isAuthenticated && <Link to="/login" className="text-secondaryTextColor sm:text-base sm:max-[800px]:text-sm hover:bg-gray-100 w-full py-2 rounded text-center transition">Login</Link>}
                        {!isAuthenticated && <Link to="/signup" className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm hover:bg-gray-100 py-2 w-full rounded text-center transition">Sign-up</Link>}
                        {isAuthenticated && <Link to={`/profile/${user.name}`} className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm hover:bg-gray-100  py-2 rounded text-center transition">{user.name}</Link>}
                        {isAuthenticated && <button onClick={logout} className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm hover:bg-gray-100  py-2 rounded text-center transition">Logout</button>}
                        <Cart />
                    </nav>
                </div>
                {showSearchResults && (
                    <div className="absolute top-full mt-2 z-50">
                        {productsHeader.length > 0 ? (
                            <SearchedProducts viewAllHandler={searchHandler} />
                        ) : (
                            hasSearched && (
                                <div className="text-center border border-mutedColor -mt-6 w-40 shadow p-2 bg-white text-gray-500 rounded">
                                    Not Found
                                </div>
                            )
                        )}
                    </div>
                )}
            </div>
        </header> 
    )
}