/* eslint-disable react/no-unescaped-entities */
import BestSellerProducts from "@/layout/HomePageLayouts/BestSellerProducts";
import EditorsPick from "@/layout/HomePageLayouts/EditorsPick";
import FeaturedProducts from "@/layout/HomePageLayouts/FeaturedProducts";

export default function HomePage() {
    return(
        <>
            <EditorsPick />
            <BestSellerProducts />
            <FeaturedProducts />
        </>
        
    )
}