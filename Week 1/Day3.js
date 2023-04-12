// Zigzag Conversion//
var convert = function(s, numRows) {
    if (numRows == 1) return s

    let n =s.length
    let charsInSection = numRows * 2 - 2
    let res = ''

    for (let row = 0; row < numRows; row++) {
        let i = row
        while (i < n) {
            res += s[i]

            if (row != 0 && row != numRows-1) {
                let charsInBetween = charsInSection - 2 * row
                let secondIndex = i + charsInBetween
                if (secondIndex < n) res += s[secondIndex]
            }
            i += charsInSection
        }
    }
    return res
};

//Reverse Integer//
var reverse = function(x) {
    const sign = Math.sign(x);
    let result =0;
    while(x!==0){
        result = result*10+x%10;
        x= sign>0? Math.floor(x/10): Math.ceil(x/10);
        }

        const limit = Math.pow(2,31);
        if(result<=-limit || result> limit) return 0;
        return result;
};

//String to Integer (atoi)//