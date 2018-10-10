import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../search'
import { SearchProps } from '../types'



describe('Search Component', () => {
    beforeAll(() => {
        configure({ adapter: new Adapter() });
    })

    it('should render correctly when no company is searched', () => {
        const searchProps: SearchProps = {} as SearchProps
        const tree = renderer
            .create(<Search {...searchProps} />)
            .toJSON()
        expect(tree).toMatchSnapshot();

    })

    it('should render correctly with search results', () => {
        const searchProps: SearchProps = {} as SearchProps
        const tree = mount(<Search {...searchProps} />)
        tree.setState({ companies: [{ symbol: 'Aapl', name: 'Apple Inc' }, { symbol: 'Goo', name: 'Alphabet Inc' }] })
        expect(tree).toMatchSnapshot();

    })


    it('should handle search input', () => {
        const searchProps: SearchProps = { companySymbols: [{ name: 'Apple Inc', symbol: 'Aapl' }] } as SearchProps
        const tree = shallow(<Search {...searchProps} />)
        const newSearchValue = { target: { value: "Facebook" } };
        tree.find('input').simulate('change', newSearchValue)
        expect(tree.state()).toEqual({ searchValue: newSearchValue.target.value, companies: [] });
    })

    it('should handle Company on Select', () => {
        const searchProps: SearchProps = { companySymbols: [], getInfo: jest.fn() }
        const tree = mount(<Search {...searchProps} />)
        tree.setState({ companies: [{ name: 'Facebook', symbol: 'fb' }] });
        tree.find('li').simulate('click')
        expect(tree.state()).toEqual({ searchValue: 'Facebook (fb)', companies: [] });
    })


})