export type Company = {name: string, symbol:string};
export type ClickResult = (company:Company) => void;