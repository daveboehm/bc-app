import { EntriesPropsType, EntryType, PaginationProps } from "../../pages/types";

export const MOCK_ENTRY_PROPS: EntryType = {
    description: "",
    id: 332387,
    image: {
        height: 768,
        title: "Heat Press Zone",
        url: "https://www-cdn.bigcommerce.com/assets/Heat-Press-Zone.png",
        width: 1024
    },
    title: "Heat Press Zone",
    url: {
        value: "https://www.heatpresszone.com/",
        target: "_blank",
    }
}

export const MOCK_ENTRIES_PAGE_PROPS: EntriesPropsType = {
    entryIds: [...Array(25)].map((_, idx) => {
        return (idx + 1000).toString()
    }),
    hydratedEntries: [...Array(25)].map((_, idx) => {
        return {
            ...MOCK_ENTRY_PROPS,
            id: idx + 1000
        }
    }),
}

export const MOCK_PAGINATION_PROPS: PaginationProps = {
    currentPage: 2,
    handlePageChange: jest.fn(),
    itemsPerPage: 10,
    totalItems: 25
}