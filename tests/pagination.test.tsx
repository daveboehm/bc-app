import React from 'react'
import { cleanup, render, screen, RenderResult } from "@testing-library/react";
import { PaginationProps } from '../utils/types';
import { MOCK_PAGINATION_PROPS } from './__fixtures__/mock-data';
import { Pagination } from '../components/pagination';

describe("<Pagination />", () => {

    describe("happy path", () => {
        let props: PaginationProps
        let view: RenderResult

        beforeEach(() => {
            props = MOCK_PAGINATION_PROPS
            view = render(<Pagination {...props} />)
        })

        afterEach(cleanup)

        it("should render and match snapshot", () => {
            expect(view.container).toBeVisible()
            expect(view.container).toMatchSnapshot()
        })

        it("should display 3 pages possible", () => {
            const pageButtons = screen.getAllByTestId(/pagination-button/)
            expect(pageButtons).toHaveLength(3) // @Note: Mock data has 25 total items, showing 10 per page
        })
    })
    
})