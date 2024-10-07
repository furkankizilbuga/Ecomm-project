import { useSelector } from "react-redux";

export default function ProductDetailDescription() {

    const product = useSelector(state => state.product.selectedProduct);

    return(
        <div className="flex flex-col py-10 mx-14 gap-10 sm:items-center sm:mx-60">
            <div className="flex items-center justify-between border-b border-mutedColor sm:pb-10 sm:w-full sm:justify-center text-sm font-semibold text-secondaryTextColor sm:gap-10">
                <span>Additional Information</span>
                <span>Reviews 0</span>
            </div>
                <div className="flex flex-col gap-10 2xl:flex-row">
                    <img src={product.images[0].url} className="rounded-md object-cover object-center sm:w-full lg:w-3/5 xl:w-96" />
                    <div className="flex flex-col gap-4 sm:min-w-96">
                        <h3 className="text-textColor font-bold text-xl">Ürünün Öne Çıkan Özelliği</h3>
                        <p className="font-medium text-sm text-secondaryTextColor max-w-96">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Culpa, modi adipisci? Laudantium ea assumenda voluptatem eaque. 
                            Tempore, architecto recusandae quaerat cumque modi 
                            maiores a impedit voluptatum quia maxime eius ea?
                        </p>
                        <p className="font-medium text-sm text-secondaryTextColor max-w-96">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Culpa, modi adipisci? Laudantium ea assumenda voluptatem eaque. 
                            Tempore, architecto recusandae quaerat cumque modi 
                            maiores a impedit voluptatum quia maxime eius ea?
                        </p>
                        <p className="font-medium text-sm text-secondaryTextColor max-w-96">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Culpa, modi adipisci? Laudantium ea assumenda voluptatem eaque. 
                            Tempore, architecto recusandae quaerat cumque modi 
                            maiores a impedit voluptatum quia maxime eius ea?
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 sm:min-w-72">
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
            
        </div>
    )
}