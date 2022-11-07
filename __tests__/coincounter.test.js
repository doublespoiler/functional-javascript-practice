// import coinCounter from '../coin-recursive.js'
const {coinCounter} = require('../coin-recursive');

beforeEach(() => {

});

describe ('CoinCounter', () => {
  test('it should return NaN if the input is not a number.', () =>{
    expect(coinCounter("blah")).toEqual("NaN");
  });
  test('it should return 1 quarter if the input is a quarter.', () => {
    expect(coinCounter(0.25)).toEqual()
  })

    // 1 cent
    // 2 cent
    // 5 cent
    // 6 cents 1+ 5
    // 10 cents
    // 11 cents 1+ 10
    // 15 cents 10 + 5
    // 25 cents
    // 35 cents 25 + 10
    // 40 cents 25+ 5
    // 26 cents 25 + 1
    // 420.69

});
