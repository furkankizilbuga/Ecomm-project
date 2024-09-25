export default function ProductDetailRecommendations() {
    //Maplenecek.
    return (
        <div className="bg-lightBackgroundColor flex flex-col py-10 gap-10">
            <h2 className="text-textColor font-bold text-xl text-center">Related Products</h2>
            <span className="border-t border-mutedColor mx-14"></span>
            <div className="flex flex-col items-center gap-12 py-10">
                <div className="flex flex-col gap-2 mx-14 bg-white max-w-80 rounded pb-10">
                    <img src="/assets/productCardImages/WOMENproduct3.png" className=" max-w-80" />
                    <div className="flex flex-col gap-2 mx-4 pt-2">
                        <h4 className="font-bold text-textColor">Ürün ismi</h4>
                        <p className="text-sm text-secondaryTextColor font-semibold">Ürün açıklaması</p>
                        <p className="font-bold text-secondaryColor1">$6.48</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 mx-14 bg-white max-w-80 rounded pb-10">
                    <img src="/assets/productCardImages/WOMENproduct3.png" className=" max-w-80" />
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