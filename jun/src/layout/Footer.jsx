export default function Footer() {
    //TODO <Link> eklenecek.
    return(
        <footer className="flex flex-col font-montserrat">
            <div className="mt-20 mb-12 flex flex-col gap-5 mx-12">
                <div className="flex flex-col gap-3 text-secondary-text text-sm">
                    <h3 className="text-text-color text-xl font-bold">Get In Touch</h3>
                    <p>the quick fox jumps over the lazy dog</p>
                    <div className="text-primary text-2xl flex gap-6">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </div>
                <div className="flex flex-col gap-3 text-secondary-text font-semibold text-sm">
                    <h3 className="text-text-color text-xl font-bold">Company Info</h3>
                    <nav className="flex flex-col gap-1">
                        <p className="">About us</p>
                        <p className="">Career</p>
                        <p className="">We are hiring</p>
                        <p className="">Blog</p>        
                    </nav>
                </div>
                <div className="flex flex-col gap-3 text-secondary-text font-semibold text-sm">
                    <h3 className="text-text-color text-xl font-bold">Features</h3>
                    <nav className="flex flex-col gap-1">
                        <p className="">Business Marketing</p>
                        <p className="">User Analytic</p>
                        <p className="">Live Chat</p>
                        <p className="">Unlimited Support</p>        
                    </nav>
                </div>
                <div className="flex flex-col gap-3 text-secondary-text font-semibold text-sm">
                    <h3 className="text-text-color text-xl font-bold">Resources</h3>
                    <nav className="flex flex-col gap-1"> 
                        <p>IOS & Android</p>
                        <p>Watch a Demo</p>
                        <p>Customers</p>
                        <p>API</p>        
                    </nav>
                </div>
            </div>
            <div className="bg-[#FAFAFA] w-screen py-6">
                <p className="text-secondary-text text-xs font-bold text-center mx-16">Made With Love By Figmaland All Right Reserved</p>
            </div>
        </footer>
    )
}