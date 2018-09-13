const getStock = (symbol, dataType) => {
  const url=`https://api.iextrading.com/1.0/stock/${symbol}/${dataType}`;

  return fetch(url).then(data => data.json());
}

export default getStock;