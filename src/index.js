module.exports = function getZerosCount(number, base) {

    function primeFactorization(number,result) {
        var result=(result||[]);
        var root=Math.sqrt(number);
        var x=2;
        if (number%x) {
            x=3;
            while((number%x)&&((x=(x+2))<root)){}
        }
        x=(x<=root)?x:number;
        result.push(x);
        return (x===number)?result:primeFactorization((number/x),result);
    };

    var factor=primeFactorization(base);

    var first=factor.slice(0, factor.lastIndexOf(factor[0])+1);
    var second=factor.slice(factor.indexOf(factor[factor.length-1]));

    function howMuch(n) {
        var arr=[];
        var forCount=number;
        var count = 0;
        while(forCount>0){
            forCount=Math.floor(forCount/n);
            count+=forCount;}
        arr.push(count);
        return arr;
    }

    var firstZeros=howMuch(first[0]);
    var secondZeros=howMuch(second[0]);

    return Math.min(Math.floor(firstZeros/first.length),Math.floor(secondZeros/second.length));
}
//http://mathforum.org/library/drmath/view/66749.html

//https://brilliant.org/wiki/trailing-number-of-zeros/

//https://math.stackexchange.com/questions/226868/number-of-trailing-zeros-in-a-factorial-in-base-b

//https://gist.github.com/jonathanmarvens/7206278