import { useState } from "react"

export default function Header() {

    const [display, setDisplay] = useState(false);

    return (
        
        <header className="flex flex-col items-center mx-12 my-4 bg-white font-montserrat sm:flex-row sm:justify-between sm:px-9 sm:min-w-max sm:gap-4">
            <div className="flex flex-col w-full sm:flex-row sm:items-center sm:w-auto sm:gap-14">
                <div className="flex justify-between w-full sm:w-auto">
                    <h1 className="text-text-color font-bold text-xl sm:text-2xl">Jun</h1>
                    <button className="sm:hidden" onClick={() => setDisplay(!display)}><i className="fa-solid fa-list text-secondary-text"></i></button>
                </div>
                <nav className={`${display ? "opacity-1 mt-24 mb-16 gap-8" : "opacity-0 h-0 overflow-hidden"} flex flex-col duration-500 text-2xl transition ease-in-out sm:opacity-100 sm:h-auto sm:overflow-visible sm:flex-row sm:gap-4 sm:m-0 sm:mt-0 sm:mb-0`}>                    
                    <button className="text-primary sm:text-base">Explore</button>
                    <button className="text-secondary-text sm:text-base">Login</button>
                    <button className="text-secondary-text sm:text-base text-nowrap">Sign-up</button>
                </nav>
            </div>
            <div className="flex flex-col w-full gap-2 pt-10 sm:flex-row sm:gap-0 sm:pt-0 sm:w-auto">
                <input placeholder="Search" className="bg-[#F9F9F9] focus:border-primary transition-all outline-none rounded border border-[#E6E6E6] px-3 py-1 placeholder:text-sm sm:rounded-l sm:rounded-r-none"/>
                <select className="bg-[#F9F9F9] focus:border-primary transition-all outline-none rounded border border-[#E6E6E6] px-2 py-1 text-sm sm:rounded-none">
                    <option disabled selected hidden>Category</option>
                    <option>Clothing</option>
                </select>
                <button className="bg-primary py-2 rounded sm:rounded-r sm:rounded-l-none sm:px-4">
                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                </button>
            </div>
        </header>
        
    )

}
