import { Link } from 'react-router-dom';
/* eslint-disable react/prop-types */
export default function Pagination({ productsPerPage, totalProducts, paginate, currentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            paginate(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < pageNumbers.length) {
            paginate(currentPage + 1);
        }
    };

    return (
        <nav>
            <ul className="flex flex-row items-center">
                <li className="bg-primaryBlue text-white font-semibold rounded-l-md">
                    <button 
                        onClick={handlePrevious} 
                        disabled={currentPage === 1} 
                        className="border px-4 py-2 text-sm h-10 flex items-center justify-center disabled:opacity-50"
                    >
                        Prev
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <Link 
                            to={`?page=${number}`}
                            onClick={() => paginate(number)}
                            className={`border text-primaryBlue font-semibold px-4 py-2 h-10 flex items-center justify-center ${number === currentPage ? 'bg-primaryBlue text-white' : ''} block w-full text-center`}
                        >
                            {number}
                        </Link>
                    </li>
                ))}
                <li className='bg-primaryBlue text-white font-semibold rounded-r-md'>
                    <button 
                        onClick={handleNext} 
                        disabled={currentPage === pageNumbers.length} 
                        className="border px-4 py-2 text-sm h-10 flex items-center justify-center disabled:opacity-50"
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
}
