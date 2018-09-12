import 'isomorphic-fetch'

const getStock = (symbol, dataType) => {
  const url=`https://api.iextrading.com/1.0/stock/${symbol}/${dataType}`;

  return fetch(url)
  .then(data => { return data.json() })
  .then(res => { return res })
}


export const getRefData = () =>{
  const url ='https://api.iextrading.com/1.0/ref-data/symbols?filter=name,symbol' ;
  return fetch(url)
  .then(data => { return data.json() })
  .then(res => { return res })
}
export default getStock;
