/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function usePagination() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(3);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

    const totalProducts = products.length;

    return [currentProducts, currentPage, totalProducts, productsPerPage, setProducts, setCurrentPage];
}