const { expect } = require('chai');
const { getChart } = require('..');
const { getQuery } = require('../libs');

describe('getChart()', () => {
  it('should create valid query', () => {
    const query = getQuery('tsla', 'GB', '2m', '1d');
    expect(query).to.satisfy((query) => {
      return (query === 'https://query2.finance.yahoo.com/v8/finance/chart/TSLA?interval=2m&range=1d&region=GB'
      || query === 'https://query1.finance.yahoo.com/v8/finance/chart/TSLA?interval=2m&range=1d&region=GB')
    })
  })

  it('should get chart', async () => {
    const chart = await getChart('tsla', 'GB', '2m', '1d');
    expect(chart.error).to.be.null;
    expect(chart.data).to.have.all.keys('meta', 'timestamp', 'indicators')
  })

  it('should get support 20 requests', async () => {
    for (let i = 0; i < 20; i++) {
      console.log('\t# Request', i + 1);
      const chart = await getChart('tsla', 'GB', '2m', '1d');
      expect(chart.error).to.be.null;
      expect(chart.data).to.have.all.keys('meta', 'timestamp', 'indicators')
    }
  })
})