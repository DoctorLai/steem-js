import assert from 'assert';
import steem from '../src';

describe('steem.format.reputation', ()=> {
    const reputation = steem.formatter.reputation;
    it('0 => rep 25', () => {
        assert.equal(reputation(0), 25);
    });
    it('95832978796820 => 69', () => {
        assert.equal(reputation(95832978796820), 69);
    });
    it('10004392664120 => 61', () => {
        assert.equal(reputation(10004392664120), 61);
    });
    it('30999525306309 => 65', () => {
        assert.equal(reputation(30999525306309), 65);
    });
    it('-37765258368568 => -16', () => {
        assert.equal(reputation(-37765258368568), -16);
    });
    it('334486135407077 => 74', () => {
        assert.equal(reputation(334486135407077), 74);
    });
    it('null => rep 25', () => {
        assert.equal(reputation(null), 25);
    });
    
})
