// 문제: 1초마다 한번씩 반복하여 현재 시간을 표시하는 clock() 함수를 작성하라.
// 단, 시간은 반드시 두 자리로 표시해야 한다. 예를 들어 9시 50분 7초라면 09:50:07로 표시한다.
// 사용예: clock();
// 힌트: 시간 표시를 document.title = 시간문자열; 과 같이 작성하면 표시할 수 있다.
    function clock(){
        var str = '';
         // 여기에 내용을 채우세요.
        var date = new Date();
        시 = date.getHours();
        분 = date.getMinutes();
        초 = date.getSeconds();
        ms = date.getMilliseconds();
        
        str = 시 +':' + 분 + ':' + 초;
        
        if (시 <10){
            시 = '0' + 시
        }
        if (분 <10){
            분 = '0' + 분
        }
        if (초 <10){
            초 = '0' + 초
        }
        /*if (ms < 10){
         ms = '00' + ms   
        } else {
            
        }*/
        setTimeout(function (){clock()}, 1000);
        document.title = str;
        
    }
    clock();

// 반복문(초기식; 조건식; 증감식) 초기식과 증감식은 생략될 수 있다.
    // 1부터 10까지 콘솔에 출력하는 코드
    for (var i=1; i <= 10; i++){
        console.log(i);
    }
    // 문제: 인수로 전달한 숫자의 단을 콘솔에 출력하는 구구단() 함수를 작성하라.
    // 빈칸: &nbsp;
    function 구구단(num){
        for (var i=1; i < 10; i++){
            console.log(num + 'x' + i + '=' + (num*i));
        }
    }
    구구단(3); //3단출력;

    //문제: 2단부터 9단까지 <table> 문자열을 반환하는 함수
        /*function 구구단전부(num){
            var html = '';
            html += '<table>';

                html += '<tr>';
                    for(var i = 2; i <= 9; i++) {
                    html += '<th>';
                    html += i + '단';
                    html += '</th>';
                    }
                html += '</tr>';

                for(var j=2; j<=9, j++){
                    for (var h=2; h<=9; h++){

                    }
                 = + (h*j)
                }
            html += '</table>';
            
                window.onload = function (){
        document.getElementById('box').innerHTML = 구구단전부();
    }
*/
        //문제풀이
        function 구구단전부(num){
            var html = '';
            html += '<table border=1px;>';

                html += '<tr>';
                    for(var i = 2; i <= 9; i++) {
                          if (i === 3){
                           continue;
                        }
                    html += '<th>' + i + '단'+ '</th>'
                    }
                html += '</tr>';

                for (var i=1; i < 10; i++){
                    html += '<tr>'
                    for(var j=2; j < 10; j++){
                        if (j === 3){
                           continue;
                        }
                        html += '<td>' + j + 'x' + i + '=' + (j*i) + '</td>';
                    }
                    html += '</tr>';
                }
            html += '</table>';
            
            return html;
        }

        window.onload = function (){
        document.getElementById('box').innerHTML = 구구단전부();
        };
        
// 문제: 전달된 인수 중 숫자만 모두 더한 값을 반환하는 함수 sum()을 작성하라.
    function sum(){
        var result = 0;
        
        var i = arguments.length;
        
        for (var j=0; j < i; j++){
            if (typeof(arguments[j]) === 'number'){
             result += arguments[j];  
            } 
        }
        return result;    
    }
    console.log(sum(1, 5, '+', 8)); //14
    console.log(sum(1,5, '+', 8, 10, 20, 40)); //84

//문제: 첫 번째 인수로 전달된 배열에 나머지 인수를 모두 추가하는 함수 push()를 작성하라.
    function push(){
        for(i=1; i < arguments.length ; i++){
            arguments[0].push(arguments[i]);
        }
    }

    var arr = ['a', 'b'];

    /* 문제해설:
    function push(arr){
    for(var i=1; i < arguments.length; i++){
        arr.push(arguments[i]);
        }
    }
    */

    push(arr, 1, 2, 3);
    console.log(arr); // 출력결과 : ['a', 'b', 1, 2, 3];
    push(arr, 1, 2, 3, 4);
    console.log(arr); // 출력결과 : ['a', 'b', 1, 2, 3, 1, 2, 3, 4]

// break문: 반복문이 break문을 만나면 즉시 반복을 멈춘다.

// continue문: 반복문이 continue문을 만나면, 그 아래 있는 블록의 내용을 무시하고, 그 다음으로 넘어간다.
// 즉, for 문에서는 증감식으로, while문에서는 조건식으로 이동한다.

// 내장 타입의 기능을 확장할 때는 생성자.prototype.메소드이름 = function(){ ... } 형태를 사용한다.
// ()를 쓸 때는 사용할 때뿐으로, 만들 때는 사용하지 않는다.
    String.prototype.toNumber = function (){
        return parseInt(this);
    };

    '123'.toNumber(); // 여기서 123, abc는 문자열
    'abc'.toNumber(); // 값이 NaN;

     /*[1, 2, 3]; new Array(1,2,3);
     "문자열"  new String('문자열');
     {key: "value"}
*/

// 문제: 배열에서 가장 큰 숫자를 반환하는메소드 max()를 정의하라.
     Array.prototype.max = function (){
         var max = 0;
         for(var i=0; i < this.length ; i++){
            if (typeof(this[i]) !== 'number'){
                continue;
            }
             if (max < this[i]){
                max = this[i];      
             } 
            }
         return max;
        }
     
     console.log([1,3,5].max()); //5
     console.log([10,3, '+', -2].max()) // 10
     
// 문제: 날짜 객체에서 가르키는 시간이 오전인지 오후인지 문자열로 반환하는
// prototype메소드 ampm()을 작성하라.

    
    Date.prototype.ampm = function(){
        if (this.getHours() >= 12) {
            return '오후';
        } else {
            return '오전';
        }
    };

    var date = new Date();
    console.log(date.ampm()); //'오후'
    var date = new Date(2015, 5, 12, 9);
    console.log(date.ampm()); // '오전'