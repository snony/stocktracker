export type Company = {name: string, symbol:string};
export type ClickResult = (company:Company) => void;

export type CompanySymbols = Array<Company>
export interface SearchProps{
    readonly getInfo: ClickResult;
    readonly companySymbols: CompanySymbols; 
}

export interface SearchState{
    searchValue:string;
    suggestedCompanies: CompanySymbols;
}