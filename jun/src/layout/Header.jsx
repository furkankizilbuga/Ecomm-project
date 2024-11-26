import Cart from "@/components/Cart";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
    const [display, setDisplay] = useState(false);
    const [displayMd, setDisplayMd] = useState(false);


    const [tempCategory, setTempCategory] = useState("");
    const [tempSearch, setTempSearch] = useState("");

    const [category, setCategory] = useState("");
    const [search, setSearch] = useState("");


    const user = useSelector(state => state.client.user);
    const categories = useSelector(state => state.product.categories);

    const { logout, isAuthenticated } = useAuth();

    const searchHandler = () => {
        setCategory(tempCategory);
        setSearch(tempSearch);
    }

    useEffect(() => {
        //TODO 5 ürün gelecek kalanları için "View All" olacak.
    }, [category, search])

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
                        <nav className={`${displayMd ? "opacity-100 visible" : "opacity-0 invisible"} absolute left-0 top-full mt-2 bg-white p-4 shadow rounded-lg flex flex-row items-center gap-4 duration-500 transition-all ease-in-out z-50`}>                    
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
            <div className="flex flex-col w-full gap-2 pt-10 sm:flex-row sm:gap-0 sm:pt-0 sm:w-auto">
                <input
                    value={tempSearch}
                    onChange={(e) => setTempSearch(e.target.value)} 
                    placeholder="Search" 
                    className="bg-[#F9F9F9] focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] px-3 py-1 placeholder:text-sm sm:rounded-l sm:px-2 sm:rounded-r-none sm:w-40 md:w-full"/>
                <select 
                    className="bg-[#F9F9F9] focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] px-2 py-1 text-sm sm:rounded-none sm:px-0 sm:max-[800px]:gap-5"
                    value={tempCategory}
                    onChange={(e) => setTempCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    {categories.map((item, index)=> (
                        <option key={index} value={item.id}>{item.title}</option>
                    ))}
                </select>
                <button onClick={searchHandler} className="bg-primaryBlue py-2 rounded sm:rounded-r sm:rounded-l-none sm:px-4">
                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                </button>
            </div>
        </header> 
    )
}