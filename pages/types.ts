// --------------
// Private types
// --------------

type ImageType = {
    height: number;
    img?: HTMLElement;
    title: string;
    url: string;
    width: number;
}

type UrlType = {
    value: string;
    // @TODO: confirm available options for link target attr
    target: "_blank" | "parent" | "self";
}

// --------------
// External types
// --------------

export type EntryType = {
    description?: string;
    id: number;
    image: ImageType;
    title: string;
    url: UrlType;
}

export type EntriesPropsType = {
    entryIds: (string | undefined)[];
    hydratedEntries: (EntryType | undefined)[];
}

export type PaginationProps = {
    currentPage: number;
    itemsPerPage?: number;
    handlePageChange: (_pageNumber: number) => void;
    totalItems: number;
}