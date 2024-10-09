/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

export default function Pagination({ productsPerPage, totalProducts, paginate, currentPage, setCurrentPage }) {
    const history = useHistory();
    const location = useLocation();
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const page = parseInt(searchParams.get('page')) || 1;
        setCurrentPage(page);
    }, [location.search, setCurrentPage]);

    const handlePrevious = () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1;
            paginate(newPage);
            history.push(`?page=${newPage}`);
        }
    };

    const handleNext = () => {
        if (currentPage < pageNumbers.length) {
            const newPage = currentPage + 1;
            paginate(newPage);
            history.push(`?page=${newPage}`);
        }
    };

    return (
        <nav className="flex items-center h-10">
            <button 
                onClick={handlePrevious} 
                disabled={currentPage === 1} 
                className="bg-primaryBlue h-full text-white font-semibold rounded-l-md w-16 text-sm disabled:opacity-50"
            >
                Prev
            </button> 
            {pageNumbers.map(number => (
                <Link 
                    key={number}
                    to={`?page=${number}`}
                    onClick={() => paginate(number)}
                    className={`${number === pageNumbers.length ? "border-r-0" : ""} border-r text-primaryBlue font-semibold h-full w-10 flex items-center justify-center ${number === currentPage ? 'bg-primaryBlue text-white' : ''}`}
                >
                    {number}
                </Link>  
            ))}
            <button 
                onClick={handleNext} 
                disabled={currentPage === pageNumbers.length} 
                className="bg-primaryBlue text-white h-full font-semibold rounded-r-md w-16 text-sm disabled:opacity-50"
            >
                Next
            </button>
        </nav>
    );
}
