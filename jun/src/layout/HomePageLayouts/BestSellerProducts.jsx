import ProductCard from "@/components/ProductCard";

const productCardImages = [
    "assets/productCardImages/WOMENproduct3.png",
    "assets/productCardImages/MENproduct3.png",
    "assets/productCardImages/WOMENproduct4.png",
    "assets/productCardImages/WOMENproduct5.png",
    "assets/productCardImages/WOMENproduct6.png",
    "assets/productCardImages/WOMENproduct4.png"
]

export default function BestSellerProducts() {
    return (
        <div className="flex flex-col items-center gap-10 px-4 sm:pt-16">
            <div className="flex flex-col items-center gap-3">
                <p className="max-w-52 text-center text-secondaryTextColor text-xl font-semibold">Featured Products</p>
                <h3 className="max-w-52 text-textColor font-bold text-2xl text-center sm:max-w-96">BEST SELLER PRODUCTS</h3>
                <p className="max-w-52 text-center text-secondaryTextColor sm:max-w-96">Problems trying to resolve the conflict between</p>
            </div>
            <div className="flex flex-col items-center gap-x-8 gap-y-12 justify-center sm:flex-wrap sm:flex-row sm:max-w-8xl">
                {
                    productCardImages.map((item, index) => 
                        <ProductCard key={index} item={item} />
                    )
                }
            </div>
        </div>
    )
}
