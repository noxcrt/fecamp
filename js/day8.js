var str1 = 'A regular expression is a special sequence of characters that helps you match or find other strings or sets of strings, using a specialized syntax held in a pattern.';
var str2 = '국내지점 서울/인천/경기 공항 지점. 인천지점. 지도보기. 주소, 인천광역시 남동구 미래로 49 제일은혜빌딩 2층. 연락처, TEL : 1588-8000. FAX : 032-437-0367.';
var str3 = '<h1>블리자드 엔터테인먼트: 연락처</h1><p>(한국) 대표 번호: 1644-0727</p><p>US Account & Billing: 1-800-592-5499</p><p>Australia Account & Billing: 1-800-041-378</p><p>Singapore Account & Billing: 1-800-2549-9273</p><p>Mexico Account & Billing: 001-888-578-7628</p><p>Argentina Account & Billing: 0800-333-0778</p><p>Chile Account & Billing: 1230-020-5554</p><p>Technical Support: 1-949-955-1382</p>';

//정규표현식
 var regex = new RegExp('o[rf]'); //문자열 or 또는 of 를 찾는다.
 var regex = new RegExp('o[^ntur]'); //문자열 ntur를 제외한 나머지 전부 문자열을 찾는다.
 // 공백, 문자, 숫자들을 모두 1문자로 인식한다.
 console.log(regex.test(str1));
 console.log(regex.exec(str1)); 

 var regex = new RegExp('<h[1-6]>'); // <h1> <h2> <h3> <h4> <h5> <h6>
 console.log(regex.test(str3));

 var regex = new RegExp('[0-9]{4}-[0-9]{4}');
 console.log(regex.test(str3));

 var regex = /\d{2}[01]\d{3}-[1-4]\d{6}/; // 주민등록번호를 찾는 정규표현식(초간단)
 var regex = /<\/{0,1}p>/;

 // /http://([a-z]+\.)+[a-z]+\//  도메인을 찾는 정규식
 // /[a-z]+.[a-z]+@[a-z\.]+/      이메일을 찾는 정규식
 // /[a-z\.]+@[a-z]+(\.[a-z]+)+/  이메일을 찾는 정규식(최적화)
 // /^[0-9]+$/ 처음부터 끝까지 숫자로 이루졌는지 확인하는 정규식
 var regex = /\d+(\-\d+)+/g;
 str3.replace(regex, '전화번호');
 console.log(str3.replace(regex, '<em>$&</em>'));

 var regex = /<(\/?)p>/g; // ?는 {0,1}를 의미, {0,}는 *를 의미한다.
 console.log(str3.replace(regex, '<$1div>')); 
    //위에 나온 첫번째 괄호항목처럼 구성되어 있으면 해당 항목을 수정한다. <p>는 <div>로, </p>는 </div>로 각각 수정       하기 위해 사용한다.

// dom컬렉션은 전체 있는 내용을 검토할 때 주로 사용한다. 개별 이미지나 스크립트등을 변경할 때는 다른 명령어(getElementby..)등을 사용한다.


    // 네이버 화면을 변경하는 과제
    for(var i=0; i<document.images.length; i++){
        
        if (document.images[i].getAttribute('width') !== null &&     document.images[i].getAttribute('height') !== null){
       
        var imageswidth = document.images[i].getAttribute('width');
        var imagesheight = document.images[i].getAttribute('height');
        
        document.images[i].setAttribute('src','http://placekitten.com/'+imageswidth+'/'+imagesheight);
        }
    }
// h1 태그를 클릭하면 '클릭!'이라고 경고창을 출력하는 예제

/*
var elem = document.querySelector('h1');
elem.addEventListener('click', function(event){
    alert('클릭!');
});


var bd = document.querySelector('body');
bd.addEventListener('click',function(event){
    alert('클릭!');
})
*/

// 문제: 문서에 있는 모든 h2태그에 이벤트리스너를 추가하여 클릭한 h2태그의 텍스트가
// 경고창으로 출력되는 코드를 입력하라.

/*
var head2 = document.querySelectorAll('h2');
for(var i=0; i<head2.length; i++){
    head2[i].addEventListener('click', function(event){
    console.log(event);
    event.stopPropagation(); // 중복되는 (전파되는) 이벤트들을 방지하는 메소드 
    alert(this.innerHTML); //혹은 textContent
    });
};
*/

// 같은 엘리먼츠에 대한 접근 방식
  /*  document.forms[0].elements['password'] // name을 이용한 접근
    document.forms[0].elements['2'] // 배열형태를 이용한 접근

    document.forms[0].elements.password.value // value값에 대한 접근
*/

// jQuery는 크게 두 단계로 사용된다.
// 1. 원하는엘리먼트를 사용하고,
//    jQuery('p')
// 2. 원하는 기능을 사용한다.
 jQuery/*(document).ready _생략가능*/(function($){ //문서를 모두 읽어들인 다음에 코드를 실행한다.
   var codeColor = $('p code').css('color'); //여기에서 $는 jQuery를 의미한다. //속성을 가져올 때는 그냥 해당 속성만 쓰고, 변경하고자 하면 , 변경값 을 입력한다. ex) $('p code').css('color', 'blue')
     console.log(codeColor);
   
// 클릭을 할 때마다 현재 크기보다 10px이 증가하고, 쉬프트키를 누르고 클릭하면 현재 크기보다 10px씩 감소하는 함수를 완성하라.
     $('#box').on('click', function(event){
         var width = $(this).width();
         var height = $(this).height();
         
         console.log($(this).height);
         
         if (event.shiftkey === 'true') {
        /*  width -= $(this).width(10);
          height -= $(this).height(10);
          */
             width -= 10;
             height -= 10;
            
             $(this).width(width);
             $(this).height(height);             
         } else {
/*
          width += $(this).width(10);
          height += $(this).height(10);
*/
             width += 10;
             height += 10;
             
             $(this).width(width);
             $(this).height(height);
        };
         // event.shiftKey; //시프트 키가 눌렸는지 안눌렸는지 체크하는 프로퍼티
              });
 });
jQuery.noConflict(); // 다른 라이브러리와 변수$의 충돌을 일으키지 않는다. 단, 사용시 jQuery function 외부에서 사용시 $를 사용할 수 없다.
