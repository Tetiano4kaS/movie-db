import React, {useEffect} from 'react';

interface IProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (newPage: number) => void;
    restartPagination: boolean;
}

const Pagination: React.FC<IProps> = ({totalPages, currentPage, onPageChange, restartPagination}) => {
    const visiblePages = 10;

    useEffect(() => {
        if (restartPagination) {
            onPageChange(1);
        }
    }, [restartPagination, onPageChange]);

    const pages: number[] = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const getVisiblePages = () => {
        if (totalPages <= visiblePages) {
            return pages;
        }
        let start = Math.max(1, currentPage - visiblePages / 2);
        const end = Math.min(totalPages, start + visiblePages - 1);
        if (end - start < visiblePages - 1) {
            start = end - visiblePages + 1;
        }
        return pages.slice(start - 1, end);
    };

    const renderPage = (page: number) => (
        <button
            key={page}
            style={{backgroundColor: page === currentPage ? "red" : ""}}
            onClick={() => onPageChange(page)}
        >
            {page}
        </button>
    );

    return (
        <div>
            {currentPage > 1 && <button onClick={() => onPageChange(1)}>{"<<"}</button>}
            {currentPage > 1 && <button onClick={() => onPageChange(currentPage - 1)}>{"<"}</button>}
            {getVisiblePages().map(renderPage)}
            {currentPage < totalPages && <button onClick={() => onPageChange(currentPage + 1)}>{">"}</button>}
            {currentPage < totalPages && <button onClick={() => onPageChange(totalPages)}>{">>"}</button>}
        </div>
    );
};

export default Pagination;
