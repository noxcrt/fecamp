function Square(width, height){
    this.width = width;
    this.height = height;
}

Square.prototype.넓이 = function(a, b){
    return this.width * this.height*a*b;
};

Square.prototype.a = function(){
    return this.width * this.height;
};

Square.prototype.b = function(){
    return this.width * this.height;
};

//사용자정의 타입은 다음과 같이도 작성할 수 있다.
/*
Square.prototype = {
    넓이 :function(){
        return this.width * this.height;
    },
    a : function(){
        return this.width * this.height;
    },
    b : function(){
        return this.width * this.height;
    }
};
*/

var 사각형1 = new Square(10, 5);
var 사각형2 = new Square(3, 4);

console.log(사각형1.넓이());
console.log(사각형1.넓이.apply(사각형2));
console.log(사각형1.넓이.call(사각형2) === 사각형2.넓이());
console.log(사각형2);
console.log(사각형1.넓이 === 사각형2.넓이); 
//true 라고 나오는 이유: 사각형1, 사각형2(Square 함수)에 대한 인수 중 넓이가 없기 때문에, prototype에서 참조하기 때문에 인수가 들어가지 않는다. (프로토타입 체인)

console.log(사각형1.넓이.apply(사각형2,[2, 3]) === 사각형1.넓이.call(사각형2, 2, 3));
// apply는 적용하는 값을 배열 같은 것(배열,arguments)을 넣어야 하고, call은 인수로 필요 값을 입력한다.

var arr = [1,2].concat('a','b'); //concat은 해당 내용을 배열에 넣어 새로운 배열을 만들어 낸다.

function argarr(){
    console.log(arguments);
    var arr = [].concat.apply([], arguments); // var arr = [].concat(1, 2, 3);
   /*
    위의 코드(var arr = [].prototype.concat.apply([], arguments);)
    는 아래 코드와 같은 기능이다.(배열로 변환하는 기능)
    
    var arr =[];
    for (var i=0; i <arguments.length; i++){
        arr.push(arguments[i]);
    }
    */
    console.log(arr);
}
argarr(1,2,3);

//문제: 다음과 같이 동작하는 원(Circle) 데이터를 정의하라.
// var circle = new Circle(반지름숫자);
// console.log(circle.넚이()); // 원의 넚이 = 반지름 제곱*파이
// console.log(circle.넚이()); // 원의 지름 = 2 * 반지름
// console.log(circle.지름()); // 원의 둘레 = 2 * 파이 * 반지름

function Circle(r){
     return this.r = r;
 }

 Circle.prototype = {
      넓이 : function(){
        return this.r * this.r * Math.PI;     
      },
      지름 : function(){
          return 2 * this.r;
      },
      둘레 : function(){
          return 2 * Math.PI * this.r;
      }
 };

var circle1 = new Circle(5);
// 인스턴스(instance): 클래스(class) 또는 타입(type)을 사용해 구체적인 고유 데이터로 만든 것.
// 이 떄, 인스턴스를 만드는 과정에는 new 연산자가 사용되며 이 과정을 가르켜 인스턴스화(instantiation)라고 한다.

/*
아직 표준화되지 않은 인스턴스화 방법
class Circle{
    넚이(){
        return this.r * this.r * Math.PI;
    }
}
*/

console.log(circle1.넓이()); 
console.log(circle1.지름()); 
console.log(circle1.둘레());

//DOM
/*
var span = document.createElement('span');
undefined
var parent = document.querySelector('h1');
undefined
parent.appendChild(span);

var test = document.createTextNode('내용이 될 문자열');
undefined
span.appendChild(test);
*/
