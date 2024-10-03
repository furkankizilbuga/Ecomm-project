import useImageSize from "@/hooks/useImageSize";
import TeamPage from "./TeamPage";
import ContactPage from "./ContactPage";
import { Link } from "react-router-dom";

export default function AboutUsPage() {

    const { isMobile } = useImageSize();

    let display = isMobile ? "assets/shopClients/mobile-clients-1.png" : "assets/shopClients/desktop-clients-1.png";
    let imageClass = isMobile ? "w-60 mx-auto" : "mx-auto";

    return(
        <div className="flex flex-col">
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center min-[850px]:flex-row">
                    <div className="flex flex-col items-center gap-6 py-20 px-12 min-[850px]:items-start">
                        <h2 className="text-textColor font-bold text-3xl md:text-4xl lg:text-5xl">ABOUT US</h2>
                        <p className="text-secondaryTextColor font-semibold text-center sm:text-sm lg:text-base sm:text-left sm:w-80 md:w-96">
                            We know how large objects will act,
                            but things on a small scale just do not
                            act that way.
                        </p>
                        <Link to="/contact" className="bg-primaryBlue rounded text-white font-semibold px-10 py-3">
                            Reach Us
                        </Link>
                    </div>
                    <img className="object-cover object-center w-4/5 h-4/5 md:w-3/5 md:h-3/5 max-w-[400px] md:max-w-[350px] lg:max-w-[500px] xl:max-w-[1400px]" src="/assets/aboutImages/aboutpageimg.png" />
                </div>
                <div className="flex flex-col items-center gap-4 py-20 px-12 min-[850px]:flex-row sm:gap-10 sm:max-w-[1000px] xl:max-w-[1275px]">
                    <div className="flex flex-col items-center gap-4 min-[850px]:items-start">
                        <span className="text-boldRed font-semibold text-sm md:text-md">Problems trying</span>
                        <h3 className="text-textColor text-xl font-bold text-center mb-8 min-[850px]:text-left md:text-2xl">
                            Met minim Mollie non
                            desert Alamo est sit
                            cliquey dolor do met sent.
                        </h3>
                    </div>
                    <p className="text-secondaryTextColor font-medium text-center min-[850px]:text-left">
                        Problems trying to resolve the conflict
                        between the two major realsm of Classical
                        physics: Newtonian mechanics.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center pb-20 text-center text-4xl text-textColor font-bold gap-20 px-12 sm:flex-row sm:flex-wrap min-[850px]:text-5xl max-w-[1000px] xl:max-w-[1400px] sm:my-20">
                    <div className="flex flex-col items-center gap-2">
                        <h2>15K</h2>
                        <p className="font-semibold text-lg  text-secondaryTextColor">Happy Customers</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h2>150K</h2>
                        <p className="font-semibold text-lg text-secondaryTextColor">Monthly Visitors</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h2>15</h2>
                        <p className="font-semibold text-lg text-secondaryTextColor">Countries Worldwide</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h2>100+</h2>
                        <p className="font-semibold text-lg text-secondaryTextColor">Top Partners</p>
                    </div>
                </div>
            </div>
            <TeamPage />
            <div className="bg-[#FAFAFA] flex flex-col items-center px-12 py-10 gap-6">
                <h2 className="text-textColor font-bold text-3xl text-center">Big Companies Are Here</h2>
                <p className="text-secondaryTextColor font-medium text-center max-w-96">
                    Problems trying to resolve the conflict
                    between the two major realsm of Classical
                    physics: Newtonian mechanics.
                </p>
                <div className="bg-[#FAFAFA] w-full">
                    <img className={imageClass} src={display} />
                </div>
            </div>
            <ContactPage />
        </div>
    )
}