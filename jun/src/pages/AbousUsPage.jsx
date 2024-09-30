import useImageSize from "@/hooks/useImageSize";
import TeamPage from "./TeamPage";
import ContactPage from "./ContactPage";

export default function AboutUsPage() {

    const { isMobile } = useImageSize();

    let display = isMobile ? "assets/shopClients/mobile-clients-1.png" : "assets/shopClients/desktop-clients-1.png";
    let imageClass = isMobile ? "w-60 mx-auto" : "mx-auto";

    return(
        <div className="flex flex-col">
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center gap-6 py-20">
                    <h2 className="text-textColor font-bold text-3xl">ABOUT US</h2>
                    <p className="text-secondaryTextColor font-medium">
                        We know how large objects will act,
                        but things on a small scale just do not
                        act that way.
                    </p>
                    <button className="bg-primaryBlue rounded text-white font-semibold px-10 py-4">
                        Reach Us
                    </button>
                </div>
                <img src="" />
                <div className="flex flex-col items-center gap-4 py-20">
                    <span className="text-boldRed">Problems trying</span>
                    <h3 className="text-textColor font-bold text-center mb-10">
                        Met minim Mollie non
                        desert Alamo est sit
                        cliquey dolor do met sent.
                    </h3>
                    <p className="text-secondaryTextColor font-medium">
                        Problems trying to resolve the conflict
                        between the two major realsm of Classical
                        physics: Newtonian mechanics.
                    </p>
                </div>
                <div className="flex flex-col items-center text-textColor font-bold gap-20">
                    <div className="flex flex-col items-center">
                        <h2>15K</h2>
                        <p className="font-medium text-secondaryTextColor">Happy Customers</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2>150K</h2>
                        <p className="font-medium text-secondaryTextColor">Monthly Visitors</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2>15</h2>
                        <p className="font-medium text-secondaryTextColor">Countries Worldwide</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2>100+</h2>
                        <p className="font-medium text-secondaryTextColor">Top Partners</p>
                    </div>
                </div>
            </div>
            <TeamPage />
            <div className="bg-[#FAFAFA] flex flex-col items-center">
                <h2 className="text-textColor font-bold text-3xl">Big Companies Are Here</h2>
                <p className="text-secondaryTextColor font-medium text-center">
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