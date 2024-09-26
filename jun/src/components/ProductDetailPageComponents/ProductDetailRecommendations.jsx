export default function ProductDetailRecommendations() {
    return (
        <div className="bg-lightBackgroundColor flex flex-col items-center py-10 gap-10 sm:px-60 ">
            <h2 className="text-textColor font-bold text-xl text-center">Related Products</h2>
            <div className="flex flex-col items-center gap-12 py-10 border-t border-mutedColor sm:flex-row sm:justify-center xl:justify-between  sm:gap-x-4 sm:flex-wrap">
                {/*Maplenecek*/}
                <div className="flex flex-col gap-2 bg-white max-w-80 rounded pb-10">
                    <img src="/assets/productCardImages/WOMENproduct3.png" className="max-w-80" />
                    <div className="flex flex-col gap-2 mx-4 pt-2">
                        <h4 className="font-bold text-textColor">Ürün ismi</h4>
                        <p className="text-sm text-secondaryTextColor font-semibold">Ürün açıklaması</p>
                        <p className="font-bold text-secondaryColor1">$6.48</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 bg-white max-w-80 rounded pb-10">
                    <img src="/assets/productCardImages/WOMENproduct3.png" className="max-w-80" />
                    <div className="flex flex-col gap-2 mx-4 pt-2">
                        <h4 className="font-bold text-textColor">Ürün ismi</h4>
                        <p className="text-sm text-secondaryTextColor font-semibold">Ürün açıklaması</p>
                        <p className="font-bold text-secondaryColor1">$6.48</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 bg-white max-w-80 rounded pb-10">
                    <img src="/assets/productCardImages/WOMENproduct3.png" className="max-w-80" />
                    <div className="flex flex-col gap-2 mx-4 pt-2">
                        <h4 className="font-bold text-textColor">Ürün ismi</h4>
                        <p className="text-sm text-secondaryTextColor font-semibold">Ürün açıklaması</p>
                        <p className="font-bold text-secondaryColor1">$6.48</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 bg-white max-w-80 rounded pb-10">
                    <img src="/assets/productCardImages/WOMENproduct3.png" className="max-w-80" />
                    <div className="flex flex-col gap-2 mx-4 pt-2">
                        <h4 className="font-bold text-textColor">Ürün ismi</h4>
                        <p className="text-sm text-secondaryTextColor font-semibold">Ürün açıklaması</p>
                        <p className="font-bold text-secondaryColor1">$6.48</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 bg-white max-w-80 rounded pb-10">
                    <img src="/assets/productCardImages/WOMENproduct3.png" className="max-w-80" />
                    <div className="flex flex-col gap-2 mx-4 pt-2">
                        <h4 className="font-bold text-textColor">Ürün ismi</h4>
                        <p className="text-sm text-secondaryTextColor font-semibold">Ürün açıklaması</p>
                        <p className="font-bold text-secondaryColor1">$6.48</p>
                    </div>
                </div>
            </div>
        </div>
    )
}