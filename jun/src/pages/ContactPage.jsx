import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
export default function ContactPage() {
    return(
        <div className="bg-[#2A7CC7] text-white flex flex-col items-center justify-center h-full gap-20 sm:h-screen sm:flex-row sm:justify-between sm:gap-0">
            <div className="max-w-96 flex flex-col items-center gap-6 pt-40 sm:w-2/3 sm:items-start sm:mx-auto sm:pt-0 sm:max-w-[500px] sm:px-10">
                <h4 className="font-semibold text-lg">WORK WITH US</h4>
                <h2 className="text-5xl text-center max-w-72 font-bold sm:text-start sm:max-w-full">Now Let's Grow Yours</h2>
                <p className="text-center text-lg max-w-72 sm:text-start sm:max-w-full">
                    The gradual accumulation of information about atomic
                    and small-scale behaviour during the first
                    quarter of the 20th century.
                </p>
                <button className="border border-white px-8 py-4 rounded font-semibold">Contact Us</button>
                <Link to="/" className="flex items-center gap-2">
                    <i className="fa-solid fa-chevron-left text-white"></i>
                    <p className="font-semibold">Home</p>
                </Link>
            </div>
            <img className="h-1/2 w-full object-cover object-top sm:object-center sm:h-full sm:w-1/3" src="/assets/contactPageImages/contactpageimg.png" />
        </div>
    )
}