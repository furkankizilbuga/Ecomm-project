export default function ProductDetailDescription() {
    return(
        <div className="flex flex-col py-10 mx-14 gap-10">
            <div className="flex items-center justify-between text-sm font-semibold text-secondaryTextColor">
                <span>Additional Information</span>
                <span>Reviews 0</span>
            </div>
            <img src="/assets/productCardImages/WOMENproduct3.png" className="rounded-md max-w-80" />
            <div className="flex flex-col gap-4">
                <h3 className="text-textColor font-bold text-xl">Ürünün Öne Çıkan Özelliği</h3>
                <p className="font-medium text-sm text-secondaryTextColor max-w-96">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Culpa, modi adipisci? Laudantium ea assumenda voluptatem eaque. 
                    Tempore, architecto recusandae quaerat cumque modi 
                    maiores a impedit voluptatum quia maxime eius ea?
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-textColor font-bold text-xl">Ürünün Detayları</h3>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <i className="fa-solid fa-chevron-right text-mutedColor"></i>
                        <p className="font-semibold text-sm text-secondaryTextColor">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <i className="fa-solid fa-chevron-right text-mutedColor"></i>
                        <p className="font-semibold text-sm text-secondaryTextColor">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}