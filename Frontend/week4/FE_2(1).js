// javascript 실습

let num = [1,2,3,4,5];

num.forEach((n)=>{
    let result = (n%2 === 0 ? `${n}은 짝수입니다.` : `${n}은 홀수입니다.`);
    console.log(result);
});

let squareNum = num.map(n => n*n);

console.log('제곱 결과 : '+squareNum);