import { Company } from '../types'
import { getCompanySymbols as companySymbols } from './companySymbols.mock'


const mockFetch = (data: object) => new Promise(resolve => {
    return resolve(data)
})
export const getCompanySymbols = () => {
    const symbols: Company[] = companySymbols(25)

    return mockFetch(symbols)
}

export default { getCompanySymbols }