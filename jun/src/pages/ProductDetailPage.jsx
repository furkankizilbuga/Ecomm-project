import ProductDetailDescription from "@/components/ProductDetailPageComponents/ProductDetailDescription";
import ProductDetailMain from "@/components/ProductDetailPageComponents/ProductDetailMain";
import ProductDetailRecommendations from "@/components/ProductDetailPageComponents/ProductDetailRecommendations";
import Spinner from "@/components/Spinner";
import useImageSize from "@/hooks/useImageSize";
import { fetchProduct, fetchStates } from "@/store/features/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {

const { isMobile } = useImageSize();

    let display = isMobile ? "/assets/shopClients/mobile-clients-1.png" : "/assets/shopClients/desktop-clients-1.png";
    let imageClass = isMobile ? "w-60 mx-auto" : "mx-auto";

    const { productId } = useParams();
    const dispatch = useDispatch();
    const { selectedFetchState } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [dispatch, productId])

    return(
        selectedFetchState == fetchStates.FETCHING ? (
            <Spinner />
        ) :(
        <div>
            <ProductDetailMain />
            <ProductDetailDescription />
            <ProductDetailRecommendations />
            <div className="bg-[#FAFAFA] w-full">
                <img className={imageClass} src={display} />
            </div>
        </div>
        )
    )
}