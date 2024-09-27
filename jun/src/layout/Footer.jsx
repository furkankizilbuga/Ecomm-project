import { Link } from "react-router-dom";

export default function Footer() {
    //TODO <Link> eklenecek.
    return(
        <footer className="flex flex-col font-montserrat sm:border-t-2 sm:border-t-[#FAFAFA] sm:items-center">
            <div className="mt-20 mb-12 flex flex-col gap-5 mx-12 sm:flex-row sm:justify-center sm:gap-16">
                <div className="flex flex-col gap-3 text-secondaryTextColor text-xs sm:max-w-44">
                    <h3 className="text-textColor text-xl font-bold sm:text-lg">Get In Touch</h3>
                    <p>the quick fox jumps over the lazy dog</p>
                    <div className="text-primaryBlue text-2xl flex gap-6 sm:text-lg sm:gap-4">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </div>
                <div className="flex flex-col gap-3 text-secondaryTextColor font-semibold text-xs sm:max-w-44">
                    <h3 className="text-textColor text-xl font-bold sm:text-lg">Company Info</h3>
                    <nav className="flex flex-col gap-1 sm:gap-2">
                        <p className="">About us</p>
                        <p className="">Career</p>
                        <Link to="/contact" className="hover:underline">We are hiring</Link>
                        <p className="">Blog</p>        
                    </nav>
                </div>
                <div className="flex flex-col gap-3 text-secondaryTextColor font-semibold text-xs sm:max-w-44">
                    <h3 className="text-textColor text-xl font-bold sm:text-lg">Features</h3>
                    <nav className="flex flex-col gap-1 sm:gap-2">
                        <p className="">Business Marketing</p>
                        <p className="">User Analytic</p>
                        <p className="">Live Chat</p>
                        <p className="">Unlimited Support</p>        
                    </nav>
                </div>
                <div className="flex flex-col gap-3 text-secondaryTextColor font-semibold text-xs sm:max-w-44">
                    <h3 className="text-textColor text-xl font-bold sm:text-lg">Resources</h3>
                    <nav className="flex flex-col gap-1 sm:gap-2"> 
                        <p>IOS & Android</p>
                        <p>Watch a Demo</p>
                        <p>Customers</p>
                        <p>API</p>        
                    </nav>
                </div>
            </div>
            <div className="bg-[#FAFAFA] w-full py-6">
                <p className="text-secondaryTextColor text-xs font-bold text-center mx-16">Made With Love By Figmaland All Right Reserved</p>
            </div>
        </footer>
    )
}