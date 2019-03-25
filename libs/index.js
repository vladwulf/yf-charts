const queryBase = [
  'https://query1.finance.yahoo.com/v8/finance/chart/',
  'https://query2.finance.yahoo.com/v8/finance/chart/'
];

function getQuery(symbol, region, interval, range) {
  const index = Math.round(Math.random());
  let query = queryBase[index];

  // convert ticker in caps
  query += `${symbol.toUpperCase()}`;

  query += `?interval=${interval}&`
  query += `range=${range}&`
  query += `region=${region}`

  return query;
}

module.exports.getQuery = getQuery;