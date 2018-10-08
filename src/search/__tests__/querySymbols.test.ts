import QuerySymbols from '../querySymbols'


describe('QuerySymbols', () => {
    it('should return empty if empty searchString is passed to it', () => {
        expect(QuerySymbols('', [])).toEqual([]);
    })

})