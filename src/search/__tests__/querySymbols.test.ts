import { Company } from '../../types';
import QuerySymbols from '../querySymbols'


describe('QuerySymbols', () => {
    it('should return empty if empty searchString is passed to it', () => {
        expect(QuerySymbols('', [])).toEqual([]);
    })

    it('should return companies matching the searchString', () => {
        const companies: Company[] = [{ name: 'Apple Inc', symbol: 'aapl' }, { name: 'Alphabet Inc', symbol: 'Googl' }, { name: 'Faceboon Inc', symbol: 'Inc' }]
        expect(QuerySymbols('aapl', companies)).toEqual([{ name: 'Apple Inc', symbol: 'aapl' }, { "name": "Alphabet Inc", "symbol": "Googl" }])
    })

})