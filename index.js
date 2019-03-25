const axios = require('axios');
const { getQuery } = require('./libs');

async function getChart(symbol, region='GB', interval, range) {
  const query = getQuery(symbol, region, interval, range);
  const { data } = await axios.get(query);
  if (data.chart.error) {
    return {
      data: [],
      error: data.chart.error
    }
  } else {
    return { 
      error: data.chart.error, 
      data: data.chart.result[0]
    }
  }
}

module.exports = {
  getChart
}