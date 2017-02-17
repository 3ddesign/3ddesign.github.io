var extpow = {
    pow: function(a, b) {
        if (b >= 0) {
            var result = 1;
            for (var i = 0; i < b; i++) {
                result *= a;
            }
            return a + ' в степени ' + b + ' равно ' + result;
        } else {
            var result = 1;
            var bn = -b;
            for (var i = 0; i < bn; i++) {
                result *= a;
            }
            return a + ' в степени ' + b + ' равно ' + 1 / result;
        }
    }
};

try {
    module.exports = extpow;
} catch (e) {}
