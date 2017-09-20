const assert = require('chai').assert;
const evaluatePokerHand = require('../app.js');

describe('Evaluating the poker hand ', () => {

  it('should return a pair', () => {
    assert.deepEqual(evaluatePokerHand(['Ah', 'As', '10c', '7d', '6s']), '1 pair(s)');
  });
  it('should return 2 pairs', () => {
	assert.deepEqual(evaluatePokerHand(['Kh', 'Kc', '3s', '3h', '2d']), '2 pair(s)');
  });
  it('should return a flush', () => {
	assert.deepEqual(evaluatePokerHand(['Kh', 'Qh', '6h', '2h', '9h']), 'Flush');
  });
  it('should return a full house', () => {
	assert.deepEqual(evaluatePokerHand(['Kc', 'Kd', 'Kh', '2h', '2d']), 'Full House');
  });
  it('should return a straight', () => {
  assert.deepEqual(evaluatePokerHand(['10c', 'Jd', 'Qh', 'Kh', 'Ad']), 'Straight');
  });
  it('should return a 4 of a kind', () => {
  assert.deepEqual(evaluatePokerHand(['Kc', 'Kd', 'Kh', 'Ks', '2d']), 'Four of a kind');
  });
  it('should return nothing', () => {
  assert.deepEqual(evaluatePokerHand(['3c', '4d', '6h', 'Ks', '2d']), 'You got nothing');
  });
});
