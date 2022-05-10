import React, { useState, useEffect } from "react"
import type { PaginationProps } from "../../utils/types"
import { ITEMS_PER_PAGE } from "../../utils/constants"
import styles from '../styles/Pagination.module.css'

export const Pagination = (props: PaginationProps) => {
    const {
        currentPage,
        handlePageChange,
        itemsPerPage = ITEMS_PER_PAGE,
        totalItems
    } = props

    const [pageButtons, setPageButtons] = useState(1)

    useEffect(() => {
        const calcPageButtons = Math.ceil(totalItems / itemsPerPage)
        setPageButtons(calcPageButtons)
    }, [totalItems, itemsPerPage])

    return (
        <div className={styles.paginationContainer}>
            <div className={styles.buttonsContainer}>

                <button
                    data-testid="pagination-prev-button"
                    disabled={currentPage <= 0}
                    type="button"
                    className={styles.pageButtonInactive}
                    onClick={() =>handlePageChange(currentPage - 1)}>Prev</button>
                
                {pageButtons > 1 && [...Array(pageButtons)].map((_undef, pageIndex) => (
                    <button
                        data-testid="pagination-button"
                        type="button"
                        key={pageIndex}
                        className={pageIndex === currentPage ? styles.pageButtonActive : styles.pageButtonInactive}
                        onClick={() => handlePageChange(pageIndex)}>
                        {pageIndex + 1}
                    </button>
                    ))}

                <button
                    data-testid="pagination-next-button"
                    disabled={currentPage >= pageButtons-1}
                    type="button"
                    className={styles.pageButtonInactive}
                    onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                
            </div>
        </div>
    )
}

export default Pagination