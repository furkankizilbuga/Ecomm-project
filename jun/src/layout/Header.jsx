import useLocalStorage from "@/hooks/useLocalStorage";
import { setRoles, setUser } from "@/store/features/clientSlice";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {

    const [display, setDisplay] = useState(false);

    const user = useSelector(state => state.client.user);
    const dispatch = useDispatch();

    const [profileDisplay, setProfileDisplay] = useState(false);

    const isLogged = user && Object.keys(user).length > 0;

    const [token, setToken] = useLocalStorage("token", null);

    const logoutHandler = () => {

        dispatch(setUser({}));
        dispatch(setRoles([]));

        setToken(null);
    }

    //{isLogged && <Link to="/login" className="text-secondaryTextColor sm:text-base sm:max-[800px]:text-sm">Login</Link>}
    //{isLogged && <Link to="/signup" className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm">Sign-up</Link>}

    return (
        <header className="flex flex-col items-center mx-12 py-10 bg-white font-montserrat sm:flex-row sm:justify-between sm:min-w-max sm:gap-4">
            <div className="flex flex-col w-full sm:flex-row sm:items-center sm:w-auto sm:gap-14 sm:max-[800px]:gap-5">
                <div className="flex justify-between w-full sm:w-auto">
                    <a href="/" className="text-textColor font-bold text-xl sm:text-2xl">Jun</a>
                    <button className="sm:hidden" onClick={() => setDisplay(!display)}><i className="fa-solid fa-list text-secondaryTextColor"></i></button>
                </div>
                <nav className={`${display ? "opacity-1 mt-24 mb-16 gap-8" : "opacity-0 h-0 overflow-hidden"} flex flex-col items-center duration-500 text-2xl transition ease-in-out sm:opacity-100 sm:h-auto sm:overflow-visible sm:flex-row sm:gap-4 sm:m-0 sm:mt-0 sm:mb-0`}>                    
                    <Link to="/shop" className="text-primaryBlue sm:text-base sm:max-[800px]:text-sm">Explore</Link>
                    {!isLogged && <Link to="/login" className="text-secondaryTextColor sm:text-base sm:max-[800px]:text-sm">Login</Link>}
                    {!isLogged && <Link to="/signup" className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm">Sign-up</Link>}
                    {isLogged && <Link to={`/user/${user.name}`} className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm">{user.name}</Link>}
                    {isLogged && <button onClick={logoutHandler} className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm">Logout</button>}
                </nav>
            </div>
            <div className="flex flex-col w-full gap-2 pt-10 sm:flex-row sm:gap-0 sm:pt-0 sm:w-auto">
                <input placeholder="Search" className="bg-[#F9F9F9] focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] px-3 py-1 placeholder:text-sm sm:rounded-l sm:px-2 sm:rounded-r-none sm:max-[700px]:w-[150px]"/>
                <select className="bg-[#F9F9F9] focus:border-primaryBlue transition-all outline-none rounded border border-[#E6E6E6] px-2 py-1 text-sm sm:rounded-none sm:px-0 sm:max-[800px]:gap-5">
                    <option disabled selected hidden>Category</option>
                    <option>Clothing</option>
                </select>
                <button className="bg-primaryBlue py-2 rounded sm:rounded-r sm:rounded-l-none sm:px-4">
                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                </button>
                <div className="mx-auto sm:my-auto sm:ml-4">
                    <p onClick={() => setProfileDisplay(!profileDisplay)} className="relative">{user.name}</p>
                    <div className={`${profileDisplay ? "" : "hidden" } p-20 bg-red-500 absolute`}>
                        Logout
                    </div>
                </div>
            </div>
        </header> 
    )
}
