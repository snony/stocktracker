export type Company = {name: string, symbol:string};
export type ClickResult = (company:Company) => void;

export type Companies = Array<Company>

export interface SearchProps{
    readonly getInfo: ClickResult;
    readonly companySymbols: Companies; 
}

export interface SearchState{
    searchValue:string;
    suggestedCompanies: Companies;
}