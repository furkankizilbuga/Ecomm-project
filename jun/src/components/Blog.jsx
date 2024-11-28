/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
export default function Blog(props) {
    const { item } = props;
    return(
        <div className="flex flex-col items-center mt-16 transition-transform duration-300 md:hover:scale-105 md:hover:shadow">
            <img className="w-64 md:w-80" src={item} />
            <div className="flex flex-col w-64 md:w-80 items-start border-b-mutedColor border border-b-2 p-6 pb-10 gap-3">
                <div className="flex font-semibold gap-3 text-sm">
                    <span className="text-primaryBlue">Google</span>
                    <span className="text-secondaryTextColor">Trending</span>
                    <span className="text-secondaryTextColor">New</span>
                </div>
                <h4 className="text-textColor font-bold text-xl">Loudest à la Madison #1 {"("}L'integral{")"}</h4>
                <p className="text-secondaryTextColor font-semibold text-sm">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                <div className="flex justify-between gap-6 text-xs md:text-sm text-nowrap">
                    <div className="flex items-center gap-1">
                        <i className="fa-regular fa-clock text-primaryBlue"></i>
                        <p className="text-secondaryTextColor font-semibold">22 April 2021</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <i className="fa-regular fa-comment text-secondaryColor1 font-bold"></i>
                        <p className="text-secondaryTextColor font-semibold">10 comments</p>
                    </div>
                </div>
                <button className="text-secondaryTextColor flex items-center gap-2 text-sm font-semibold">
                    Learn More 
                    <i className="text-primaryBlue  text-2xl fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    )
}