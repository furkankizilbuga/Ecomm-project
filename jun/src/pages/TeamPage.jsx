export default function TeamPage() {
    return(
        <div className="bg-lightBackgroundColor flex flex-col gap-10">
            <div className="flex flex-col items-center">
                <h2 className="text-textColor font-bold">Meet Our Team</h2>
                <p className="text-secondaryTextColor">
                    Problems trying to resolve the conflict between
                    the two major realms of classical physics:
                    Newtonian mechanics.
                </p>
            </div>
            <div>
                <div className="bg-white flex flex-col items-center">
                    <img className="rounded-full" />
                    <span className="text-primaryBlue font-semibold">Founder</span>
                    <h4 className="text-textColor font-semibold">Devon Lane</h4>
                    <p className="text-secondaryTextColor">the quick fox jumps over the lazy dog</p>
                </div>
            </div>
        </div>
    )
}