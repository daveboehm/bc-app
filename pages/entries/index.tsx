import React, { useState, useEffect } from "react"
import type { NextPage } from 'next'
import Link from 'next/link'
import { EntryItem } from '../../components/entry-item'
import { Pagination } from '../../components/pagination'
import type { EntriesPropsType } from "../../utils/types"
import styles from '../../styles/Entry.module.css'
import { ENTRIES_URL, ENTRY_URL, ITEMS_PER_PAGE } from "../../utils/constants"

const Entries: NextPage | any = (props: EntriesPropsType) => {
    const { entryIds, hydratedEntries = [] } = props;
    
    const [currentPageEntries, setCurrentPageEntries] = useState(hydratedEntries)
    const [pageNum, setPageNum] = useState(0);

    useEffect(() => {
        const startIdx = pageNum * ITEMS_PER_PAGE
        const endIdx = startIdx + ITEMS_PER_PAGE
        const viewables = hydratedEntries.slice(startIdx, endIdx)

        setCurrentPageEntries(viewables);
        
    }, [pageNum, hydratedEntries])


    return (
        <main className={styles.main}>

            <Link href="/">
                <span className={styles.backLink}>Back to Home</span>
            </Link>

            <hr className={styles.hr} />

            <h1 className={styles.pageHeader}>All Entries ({entryIds.length})</h1>

            {hydratedEntries.length &&
                <ul className={styles.entries}>
                    {currentPageEntries.map((entry: any, idx: number) => (
                        <EntryItem {...entry} key={entry.id ?? idx} />
                    ))}
                </ul>
            }

            {(hydratedEntries.length > ITEMS_PER_PAGE) && 
                <>
                    <hr className={styles.hr} />

                    <Pagination currentPage={pageNum} handlePageChange={setPageNum} totalItems={entryIds.length} />
                </>
            }
           
        </main>
    )
}

// --------------
// Data Fetchin
// --------------
export const handleError = (err: any) => {
    console.error(err)
    // probablySendToErrorLoggerService("ListingPage", err)
}

const DEFAULT_ALL_THE_THINGS = {};
export async function getStaticProps() {

    // Fetch entry IDs
    const entriesResponse = await fetch(ENTRIES_URL, DEFAULT_ALL_THE_THINGS)
    if (!entriesResponse.ok) throw new Error("Super bad error you should totally care about")
    const entryIds: string[] = await entriesResponse.json()

    // 
    const entriesPromises = entryIds.map(async (id) => {
        const maybeEntry = await fetch(`${ENTRY_URL}?id=${id}`)
        if (maybeEntry.ok) { return await maybeEntry.json() }
        return null
    })
    
    // Resolve each entryById, remove bad eggs
    const hydratedEntries = await Promise.all(entriesPromises)
        .then(allEntries => allEntries.filter(noNulls => noNulls !== null))
        .catch(handleError)
    
    return { props: { entryIds, hydratedEntries } }
}

export default Entries
