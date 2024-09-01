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
    return(
        <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center gap-3">
                <p className="max-w-52 text-center text-secondaryTextColor text-xl font-semibold">Featured Products</p>
                <h3 className="text-textColor font-bold text-2xl text-center">BEST SELLER <br/> PRODUCTS</h3>
                <p className="max-w-52 text-center text-secondaryTextColor">Problems trying to resolve the conflict between</p>
            </div>
            <div className="flex flex-col gap-6">
                {
                    productCardImages.map((item, index) => 
                        <ProductCard key={index} item={item} />
                    )
                }
            </div>
        </div>
    )
}