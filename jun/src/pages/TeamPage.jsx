export default function TeamPage() {
    return(
        <div className="bg-lightBackgroundColor flex flex-col items-center gap-16 h-full py-16 sm:h-screen sm:gap-20 sm:justify-center">
            <div className="flex flex-col items-center w-72 gap-4 sm:w-[500px]">
                <h2 className="text-textColor font-bold text-3xl w-3/5 text-center sm:w-full">Meet Our Team</h2>
                <p className="text-secondaryTextColor text-center text-sm font-medium">
                    Problems trying to resolve the conflict between
                    the two major realms of classical physics:
                    Newtonian mechanics.
                </p>
            </div>
            <div className="w-64 flex flex-col gap-10 sm:flex-row sm:w-full sm:justify-center">
                {/* Maplenecek */}
                <div className="bg-white rounded flex flex-col items-center py-10 gap-3 sm:w-60">
                    <img className="rounded-full object-cover object-top h-28 w-28" src="/assets/productCardImages/MENproduct3.png"/>
                    <span className="text-primaryBlue font-semibold text-sm">Founder</span>
                    <h4 className="text-textColor font-bold">Devon Lane</h4>
                    <p className="text-secondaryTextColor text-sm w-1/2 font-medium text-center">the quick fox jumps over the lazy dog</p>
                </div>
                <div className="bg-white rounded flex flex-col items-center py-10 gap-3 sm:w-60">
                    <img className="rounded-full object-cover object-top h-28 w-28" src="/assets/productCardImages/MENproduct3.png"/>
                    <span className="text-primaryBlue font-semibold text-sm">Founder</span>
                    <h4 className="text-textColor font-bold">Devon Lane</h4>
                    <p className="text-secondaryTextColor w-1/2 text-sm font-medium text-center">the quick fox jumps over the lazy dog</p>
                </div>
                <div className="bg-white rounded flex flex-col items-center py-10 gap-3 sm:w-60">
                    <img className="rounded-full object-cover object-top h-28 w-28" src="/assets/productCardImages/MENproduct3.png"/>
                    <span className="text-primaryBlue font-semibold text-sm">Founder</span>
                    <h4 className="text-textColor font-bold">Devon Lane</h4>
                    <p className="text-secondaryTextColor text-sm w-1/2 font-medium text-center">the quick fox jumps over the lazy dog</p>
                </div>
                <div className="bg-white rounded flex flex-col items-center py-10 gap-3 sm:w-60">
                    <img className="rounded-full object-cover object-top h-28 w-28" src="/assets/productCardImages/MENproduct3.png"/>
                    <span className="text-primaryBlue font-semibold text-sm">Founder</span>
                    <h4 className="text-textColor font-bold">Devon Lane</h4>
                    <p className="text-secondaryTextColor text-sm w-1/2 font-medium text-center">the quick fox jumps over the lazy dog</p>
                </div>
            </div>
        </div>
    )
}