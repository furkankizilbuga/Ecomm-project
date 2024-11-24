import BestSellerProducts from "@/components/HomePageComponents/BestSellerProducts";
import EditorsPick from "@/components/HomePageComponents/EditorsPick";
import FeaturedProducts from "@/components/HomePageComponents/FeaturedProducts";

export default function HomePage() {
    return(
        <main>
            <EditorsPick />
            <BestSellerProducts />
            <FeaturedProducts />
        </main>
        
    )
}