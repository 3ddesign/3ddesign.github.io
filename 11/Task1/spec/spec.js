var extpow = require('../js/pow.js');

describe("pow tests", function() {
    it("Test1", function() {
        var result;
        result = extpow.pow(5, 5);
        expect(result).toEqual('5 в степени 5 равно 3125');
    });
    it("Test2", function() {
        var result;
        result = extpow.pow(0, -1);
        expect(result).not.toBeNull('0 в степени 0 равно 1');
    });
    it("Test3", function() {
        var result;
        result = extpow.pow(456, 456);
        expect(result).toEqual('456 в степени 456 равно Infinity');
    });
    xit("Test4", function() {
        var result;
        result = extpow.pow(456, 456);
        expect(result).toEqual('456 в степени 456 равно Infinity');
    });
});
