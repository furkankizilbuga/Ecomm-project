import axios from "axios"
import { useEffect, useState } from "react"

export default function ProductMock() {

    const [item, setItem] = useState({
        name: "",
        imagePath: "",
        price: 0
    });

    useEffect(() => {
        axios.get("http://localhost:9000/jun/shop")
        .then(res => {
            const product = res.data[12];
            setItem({
                ...item,
                name: product.name,
                imagePath: product.imagePath,
                price: product.price
            })
        })
        .catch(err => console.log(err))
    }, [])

    return( 
        <div className="flex flex-col items-center gap-6 pb-10 ">
            <img src={item.imagePath} />
            <div className="flex flex-col items-center gap-3">
                <h4 className="text-textColor font-bold ">{item.name}</h4>
                <p className="text-secondaryTextColor font-bold text-nowrap md:max-[700px]:text-primaryBlue">English Department</p>
                <div className="flex gap-3">
                    <span className="text-secondaryColor1 font-bold">${item.price}</span>
                </div>
                <div className="flex gap-2">
                    <div className="bg-secondaryColor1 p-2 rounded-full"></div>
                    <div className="bg-primaryBlue p-2 rounded-full"></div>
                    <div className="bg-alertColor p-2 rounded-full"></div>
                    <div className="bg-darkBackgroundColor p-2 rounded-full"></div>
                </div>
            </div>
        </div>
        
    )
}