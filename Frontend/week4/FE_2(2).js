// javascript 과제 관련 실습

let Club = {
    생성일 : 20210401,
    '영어 이름' : 'efubFront',
    '한글 이름' : '이펍',
    주소 : '서울특별시 서대문구 이화여대길 52'
};

for (property in Club) {
    console.log(property+' : '+Club[property]);
}

let book = {
    이름:'Clean Code 클린 코드',
    가격: 29700,
    저자: '로버트 C. 마틴',
    ISBN: 9788966260959,
    '페이지 수': '584쪽'
}

function Book(){
    this.이름 = 'Clean Code 클린 코드';
    this.가격 = 29700;
    this.저자 = '로버트 C. 마틴';
    this.ISBN = 9788966260959;
    this['페이지 수'] = '584쪽';
}

let book2 = new Book();

console.log(book2);
if (!('sale_rate' in book2)) book2.sale_rate = '50%';
console.log(book2.sale_rate);

var animalArray1=["dog","bird","cat","mouse"];
var animalArray2=["panda","bear","hamster"];

console.log(animalArray1);

animalArray1 = animalArray1.filter(function(data){
    return data !== "cat";
});

console.log(animalArray1);