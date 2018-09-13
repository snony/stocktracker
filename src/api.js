<<<<<<< HEAD
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
=======
const getStock = (symbol, dataType) => {
  const url=`https://api.iextrading.com/1.0/stock/${symbol}/${dataType}`;

  return fetch(url).then(data => data.json());
}

export default getStock;
>>>>>>> 518101ab21063af458b49d557cc58771f45c35dc
