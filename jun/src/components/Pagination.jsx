import { Link } from 'react-router-dom';
/* eslint-disable react/prop-types */
export default function Pagination({ productsPerPage, totalProducts, paginate, currentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="flex flex-row">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <Link 
                            to={`?page=${number}`}
                            onClick={() => paginate(number)}
                            className={`border font-semibold text-primaryBlue px-4 py-2 ${number === 1 ? 'rounded-l' : ''} ${number == currentPage && `bg-primaryBlue text-white`} ${number === pageNumbers.length ? 'rounded-r' : ''} block w-full text-center`}
                        >
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
