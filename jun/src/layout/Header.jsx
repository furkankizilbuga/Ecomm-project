import { useState } from "react"
import { Link } from "react-router-dom";

export default function Header() {

    const [display, setDisplay] = useState(false);

    return (
        <header className="flex flex-col items-center mx-12 py-10 bg-white font-montserrat sm:flex-row sm:justify-between sm:min-w-max sm:gap-4">
            <div className="flex flex-col w-full sm:flex-row sm:items-center sm:w-auto sm:gap-14 sm:max-[800px]:gap-5">
                <div className="flex justify-between w-full sm:w-auto">
                    <a href="/" className="text-textColor font-bold text-xl sm:text-2xl">Jun</a>
                    <button className="sm:hidden" onClick={() => setDisplay(!display)}><i className="fa-solid fa-list text-secondaryTextColor"></i></button>
                </div>
                <nav className={`${display ? "opacity-1 mt-24 mb-16 gap-8" : "opacity-0 h-0 overflow-hidden"} flex flex-col duration-500 text-2xl transition ease-in-out sm:opacity-100 sm:h-auto sm:overflow-visible sm:flex-row sm:gap-4 sm:m-0 sm:mt-0 sm:mb-0`}>                    
                    <Link to="/shop" className="text-primaryBlue sm:text-base sm:max-[800px]:text-sm">Explore</Link>
                    <button className="text-secondaryTextColor sm:text-base sm:max-[800px]:text-sm">Login</button>
                    <button className="text-secondaryTextColor sm:text-base text-nowrap sm:max-[800px]:text-sm">Sign-up</button>
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
            </div>
        </header> 
    )
}
