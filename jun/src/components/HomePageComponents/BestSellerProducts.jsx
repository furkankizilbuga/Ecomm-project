import ProductCard from "@/components/ProductCard";
import { fetchStates } from "@/store/features/productSlice";
import { useSelector } from "react-redux";
import { ProductCardsSkeleton } from "../ui/skeletons";

export default function BestSellerProducts() {

    const { products, productsFetchState } = useSelector(state => state.product);

    return (
        <div className="flex flex-col items-center gap-10 px-4 sm:pt-16">
            <div className="flex flex-col items-center gap-3">
                <p className="max-w-52 text-center text-secondaryTextColor text-xl font-semibold">Featured Products</p>
                <h3 className="max-w-52 text-textColor font-bold text-2xl text-center sm:max-w-96">BEST SELLER PRODUCTS</h3>
                <p className="max-w-52 text-center text-secondaryTextColor sm:max-w-96">Problems trying to resolve the conflict between</p>
            </div>
            <div className="flex flex-col items-center gap-x-8 gap-y-12 justify-center sm:flex-wrap sm:flex-row sm:px-40 sm:max-w-8xl">
                    {
                        productsFetchState == fetchStates.FETCHING || productsFetchState == fetchStates.FAILED ? <ProductCardsSkeleton /> :
                        products.map(item => 
                            <ProductCard key={item.id} item={item} />
                        )
                    } 
            </div>
        </div>
    )
}
