import { fetchProducts } from "@/store/features/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import ProductCard from "../ProductCard";

export default function ProductDetailRecommendations() {

    const dispatch = useDispatch();

    let pathSegments = location.pathname.split("/");
    let categoryId = parseInt(pathSegments[2]);


    const { products, categories } = useSelector(state => state.product);

    const category = categories.find(category => category.id == categoryId);

    useEffect(() => {
        dispatch(fetchProducts({
            category: categoryId,
            sort: "",
            filter: ""
        }))
    }, [dispatch, categoryId])

    return (
        <div className="bg-lightBackgroundColor flex flex-col items-center py-10 gap-10 sm:px-60 ">
            <h2 className="text-textColor font-bold text-xl text-center">Benzer Ürünler: {category?.title}</h2>
            <div className="flex flex-col items-center gap-12 py-10 border-t border-mutedColor sm:flex-row sm:justify-center xl:justify-between  sm:gap-x-4 sm:flex-wrap">
                {
                    products.map(product => (
                        <ProductCard key={product.id} item={product} />
                    ))
                }
            </div>
        </div>
    )
}