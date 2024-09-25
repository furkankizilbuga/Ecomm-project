import ProductDetailDescription from "@/components/ProductDetailPageComponents/ProductDetailDescription";
import ProductDetailMain from "@/components/ProductDetailPageComponents/ProductDetailMain";
import ProductDetailRecommendations from "@/components/ProductDetailPageComponents/ProductDetailRecommendations";
import useImageSize from "@/hooks/useImageSize";

export default function ProductDetailPage() {

const { isMobile } = useImageSize();

    let display = isMobile ? "/assets/shopClients/mobile-clients-1.png" : "/assets/shopClients/desktop-clients-1.png";
    let imageClass = isMobile ? "w-60 mx-auto" : "mx-auto";

    return(
        <div>
            <ProductDetailMain />
            <ProductDetailDescription />
            <ProductDetailRecommendations />
            <div className="bg-[#FAFAFA] w-full">
                <img className={imageClass} src={display} />
            </div>
        </div>
    )
}