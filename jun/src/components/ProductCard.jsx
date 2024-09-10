/* eslint-disable react/prop-types */


export default function ProductCard(props) {

    const { item } = props;

    return(
        <div className="flex flex-col items-center gap-6 pb-10 ">
            <img src={item} />
            <div className="flex flex-col items-center gap-3">
                <h4 className="text-textColor font-bold ">Graphic Design</h4>
                <p className="text-secondaryTextColor font-bold text-nowrap md:max-[700px]:text-primaryBlue">English Department</p>
                <div className="flex gap-3">
                    <span className="text-mutedColor font-bold">$16.48</span>
                    <span className="text-secondaryColor1 font-bold">$6.48</span>
                </div>
                <div className="flex gap-2">
                    <div className="bg-secondaryColor1 p-2 rounded-full"></div>
                    <div className="bg-primaryBlue p-2 rounded-full"></div>
                    <div className="bg-alertColor p-2 rounded-full"></div>
                    <div className="bg-darkBackgroundColor p-2 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}