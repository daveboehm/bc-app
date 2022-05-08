import React from 'react'
import { render, screen, RenderResult } from "@testing-library/react";
import { EntryItem } from '../pages/components/entry-item';
import { EntryType } from '../pages/types';
import { MOCK_ENTRY_PROPS } from './__fixtures__/mock-data';

describe("<EntryItem />", () => {
    

    describe("happy path", () => {
        let props: EntryType
        let view: RenderResult
        
        beforeEach(() => {
            props = MOCK_ENTRY_PROPS
            view = render(<EntryItem {...props} />)
        })
        
        it("should match snapshot", () => {
            expect(view.container).toMatchSnapshot()
        });

        it("should use the correct alt text and src url", () => {
            const theImage = screen.getByRole("img")
            expect(theImage).toBeVisible()
            expect(theImage).toHaveAttribute("alt", props.image.title)
            expect(theImage).toHaveAttribute("src", props.image.url)
        })

        it("should use the correct link url", () => { 
            const theLink = screen.getByTitle(props.image.url)
            expect(theLink).toHaveAttribute("href", props.url.value)
        })
    })

    describe("sad path", () => {
        let props: EntryType | any // 'any' Type needed here to test bad data
        
        beforeEach(() => {
            props = MOCK_ENTRY_PROPS 
        })

        it.each([ "url", "id", "title" ])("should NOT render if missing %s prop", (_prop) => {
            delete props[_prop]

            const { container } = render(<EntryItem {...props} />)

            expect(container).toBeEmptyDOMElement();
        })
    })

});

