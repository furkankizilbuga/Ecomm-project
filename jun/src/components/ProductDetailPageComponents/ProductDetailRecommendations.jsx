import { fetchProducts } from "@/store/features/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

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
                        <div key={product.id} className="flex flex-col gap-2 bg-white max-w-60 md:max-w-80 rounded pb-10">
                            <img src={product.images[0].url} className="w-60 md:w-80" />
                            <div className="flex flex-col gap-2 mx-4 pt-2">
                                <h4 className="font-bold text-textColor">{product.name}</h4>
                                <p className="text-sm text-secondaryTextColor font-semibold">{product.description}</p>
                                <p className="font-bold text-secondaryColor1">${product.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}