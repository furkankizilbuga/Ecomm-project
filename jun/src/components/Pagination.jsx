/* eslint-disable react/prop-types */
import useImageSize from '@/hooks/useImageSize';
import { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

export default function Pagination({ productsPerPage, totalProducts, paginate, currentPage, setCurrentPage }) {
    const history = useHistory();
    const location = useLocation();
    const pageNumbers = [];

    const { isMobile } = useImageSize();

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
            window.scrollTo(0, 0);
        }
    };

    const handleNext = () => {
        if (currentPage < pageNumbers.length) {
            const newPage = currentPage + 1;
            paginate(newPage);
            history.push(`?page=${newPage}`);
            window.scrollTo(0, 0);
        }
    };

    const renderPageNumbers = () => {
        const totalPageCount = pageNumbers.length;

        if (isMobile) {
            const pages = [];
            pages.push(1);

            if (currentPage > 1 && currentPage < totalPageCount) {
                pages.push(currentPage);
            }

            if (currentPage < totalPageCount) {
                pages.push("...");
            }

            if (totalPageCount > 1) {
                pages.push(totalPageCount);
            }

            return pages;
        }

        const maxPageNumbersToShow = 5;
        let pages = [];

        if (totalPageCount <= maxPageNumbersToShow) {
            pages = pageNumbers;
        } else {
            const startPage = Math.max(2, currentPage - 1);
            const endPage = Math.min(totalPageCount - 1, currentPage + 1);

            pages.push(1);

            if (startPage > 2) {
                pages.push("...");
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (endPage < totalPageCount - 2) {
                pages.push("...");
            }

            pages.push(totalPageCount);
        }

        return pages;
    };

    return (
        <nav className="flex items-center h-10">
            <button 
                onClick={handlePrevious} 
                disabled={currentPage === 1} 
                className="bg-primaryBlue h-full text-white font-medium rounded-l-md w-16 text-sm disabled:opacity-50"
            >
                Prev
            </button> 
            {renderPageNumbers().map((number, index) => (
                typeof number === 'number' ? (
                    <Link 
                        key={index}
                        to={`?page=${number}`}
                        onClick={() => {
                            paginate(number)
                            window.scrollTo(0, 0);
                        }}
                        className={`${number === pageNumbers.length ? "border-r-0" : ""} border-r border-y text-primaryBlue font-medium h-full w-10 flex items-center justify-center ${number === currentPage ? 'bg-primaryBlue border-y-0 text-white' : ''}`}
                    >
                        {number}
                    </Link>
                ) : (
                    <span key={index} className="h-full w-10 flex items-center justify-center border-y border-r cursor-default text-primaryBlue">...</span>
                )
            ))}
            <button 
                onClick={handleNext} 
                disabled={currentPage === pageNumbers.length} 
                className="bg-primaryBlue text-white h-full font-medium rounded-r-md w-16 text-sm disabled:opacity-50"
            >
                Next
            </button>
        </nav>
    );
}
