var assert = require('assert');

describe('Main', function () {

    describe('Calculator', function () {

        it('should return 3 when sum of (1,2)', function () {
            assert.equal( 1 + 2, 3);
        });
    });

    
    describe('Array functions:', function () {

        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});