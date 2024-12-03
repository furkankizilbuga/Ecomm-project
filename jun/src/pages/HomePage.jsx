import BestSellerProducts from "@/components/HomePageComponents/BestSellerProducts";
import EditorsPick from "@/components/HomePageComponents/EditorsPick";
import FeaturedProducts from "@/components/HomePageComponents/FeaturedProducts";
import { fetchProducts } from "@/store/features/productSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function HomePage() {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchProducts({ 
            sort: "",
            category: "", 
            filter: "", 
        }));
        
    }, [dispatch])


    return(
        <main>
            <EditorsPick />
            <BestSellerProducts />
            <FeaturedProducts />
        </main>
        
    )
}