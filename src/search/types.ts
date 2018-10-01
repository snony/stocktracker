export interface Company { name: string, symbol: string }
export type CompanySelect = (company: Company) => void;



export interface SearchProps {
    readonly getInfo: CompanySelect
    readonly companySymbols: Company[]
}