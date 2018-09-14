

const QueryDB = (queryString, db) => {
    if(queryString === ""){
        return [];
    }
    //TODO 13/09 ML: search for algorithm associated to searching through db
    const companyByNameOrSymbol = db.filter((obj) => 
        obj.name.toLowerCase().includes(queryString.toLowerCase()) || obj.symbol.toLowerCase().includes(queryString.toLowerCase())
    );
    return companyByNameOrSymbol.length > 10?  companyByNameOrSymbol.slice(0,10): companyByNameOrSymbol;
}

export default QueryDB;