import { useState } from "react"

export default function Header() {

    const [display, setDisplay] = useState(false);

    return (
        <header className="flex flex-col items-center mx-9 my-4 font-montserrat">
            <div className="flex justify-between w-full">
                <h1 className="text-text-color font-bold text-xl">Jun</h1>
                <button onClick={() => setDisplay(!display)}><i className="fa-solid fa-list text-secondary-text"></i></button>
            </div>
            <nav className={`${display ? "opacity-1 mt-24 mb-16 gap-8 text-2xl" : "transition-transform -translate-y-full opacity-0 m-0 h-0"} flex flex-col duration-500 transition ease-in-out `}>
                <button className="text-primary">Explore</button>
                <button className="text-secondary-text">Login</button>
                <button className="text-secondary-text">Sign-up</button>
            </nav>
            <div className="flex flex-col w-full gap-2 pt-10">
                <input placeholder="Search" className="bg-[#F9F9F9] focus:outline-primary transition-all outline-none rounded border border-[#E6E6E6] px-3 py-1 placeholder:text-sm"/>
                <select className="bg-[#F9F9F9] focus:outline-primary transition-all outline-none rounded border border-[#E6E6E6] px-2 py-1 text-sm">
                    <option disabled selected hidden>Category</option>
                    <option>Clothing</option>
                </select>
                <button className="bg-primary py-2 rounded">
                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                </button>
            </div>
        </header>
    )

}
