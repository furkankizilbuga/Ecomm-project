import BestSellerProducts from "@/layout/HomePageLayouts/BestSellerProducts";
import EditorsPick from "@/layout/HomePageLayouts/EditorsPick";
import FeaturedProducts from "@/layout/HomePageLayouts/FeaturedProducts";

export default function HomePage() {
    return(
        <main>
            <EditorsPick />
            <BestSellerProducts />
            <FeaturedProducts />
        </main>
        
    )
}