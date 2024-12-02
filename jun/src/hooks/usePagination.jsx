import { useState } from "react";
import axios from "axios";

export default function usePagination() {
    
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);
    const [totalProducts, setTotalProducts] = useState(0);

    const fetchProducts = async (category = '', sort = '', filter = '') => {
        const baseURL = "https://workintech-fe-ecommerce.onrender.com";
        let query = "/products";
        let params = [];

        if (category) params.push(`category=${category}`);
        if (sort) params.push(`sort=${sort}`);
        if (filter) params.push(`filter=${filter}`);

        const offset = (currentPage - 1) * productsPerPage;

        params.push(`limit=${productsPerPage}`);
        params.push(`offset=${offset}`)

        if (params.length > 0) {
            query += `?${params.join("&")}`;
        }

        try {
            const res = await axios.get(baseURL + query);
            setProducts(res.data.products);
            setTotalProducts(res.data.total);
        } catch (err) {
            console.error(err);
        }
    };

    return [
        products, 
        currentPage, 
        totalProducts, 
        productsPerPage, 
        setCurrentPage, 
        fetchProducts
    ];
}