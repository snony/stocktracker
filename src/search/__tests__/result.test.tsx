import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';
import { Company } from '../../types'
import SearchResults, { Result, ResultProps, SearchResultProps } from '../result'

describe('Search Results Component', () => {

    it('renders correctly with empty result passed to it', () => {
        const results: SearchResultProps = { results: [] } as SearchResultProps
        const tree = renderer
            .create(<SearchResults {...results} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('renders correctly with Results passed into it', () => {
        const results: Company[] = [{ name: 'Apple Inc', symbol: 'aapl' }, { name: 'Alphabet Inc', symbol: 'goog' }]
        const onClickResult = jest.fn()
        const resultsProp: SearchResultProps = { results, onClickResult }
        const tree = renderer
            .create(<SearchResults {...resultsProp} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })

})


describe('Result Component', () => {
    beforeAll(() => {
        configure({ adapter: new Adapter() });
    })

    it('renders correctly ', () => {
        const onClickResult = jest.fn()
        const result: ResultProps = { company: { name: 'Apple Inc', symbol: 'aapl' }, onClickResult }
        const tree = renderer
            .create(<Result {...result} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('should be able to click company', () => {
        const onClickResult = jest.fn()
        const result: ResultProps = { company: { name: 'Apple Inc', symbol: 'aapl' }, onClickResult }
        const element = mount(<Result {...result} />)
        element.find('li').simulate('click')
        expect(onClickResult).toHaveBeenCalled()
    })


})