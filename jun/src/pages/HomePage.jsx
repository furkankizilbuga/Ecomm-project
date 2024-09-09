import BestSellerProducts from "@/layout/HomePageLayouts/BestSellerProducts";
import EditorsPick from "@/layout/HomePageLayouts/EditorsPick";
import FeaturedProducts from "@/layout/HomePageLayouts/FeaturedProducts";

export default function HomePage() {
    return(
        <main className="font-montserrat">
            <EditorsPick />
            <BestSellerProducts />
            <FeaturedProducts />
        </main>
        
    )
}