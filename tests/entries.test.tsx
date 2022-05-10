import React from 'react'
import { cleanup, render, screen, RenderResult } from "@testing-library/react";
import { EntriesPropsType } from '../utils/types';
import { MOCK_ENTRIES_PAGE_PROPS } from './__fixtures__/mock-data';
import Entries from '../pages/entries';
import { ITEMS_PER_PAGE } from '../utils/constants';

describe("<EntriesPage />", () => {

    describe("happy path", () => {
        let props: EntriesPropsType
        let view: RenderResult

        beforeEach(() => {
            props = MOCK_ENTRIES_PAGE_PROPS
            view = render(<Entries {...props} />)
        })

        afterEach(cleanup)

        it("should match snapshot", () => {
            expect(view.container).toBeVisible()
            expect(view.container).toMatchSnapshot()
        })

        it(`should display ${ITEMS_PER_PAGE}`, () => {
            const entriesOnPage = screen.getAllByTestId(/entry-item/)
            expect(entriesOnPage).toHaveLength(ITEMS_PER_PAGE)
        })
    })
})