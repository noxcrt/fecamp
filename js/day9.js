// 이벤트함수 사용

jQuery(function($){
    $('#box').on('mousedown',function(event){
        $(this)/*.text(event.which)*/.css('background-color', 'red'); //세미콜론은 가장 마지막에 쓴다.
    });
    
    $('a').on('click',function(event){
        event.preventDefault(); //기능이 안되도록 변경함(활용 예시:form 에서 submit방지, a태그 링크 방지)
        console.log('클릭!');
    });
    //마우스 관련 이벤트: click, mousedown(버튼을 누르는 순간), mouseup(버튼을 떼는 순간), mousemove(움직일때)
    //키보드 이벤트: click(버튼에 포커스가 발생한 상태에서 엔터를 누르면 클릭 효과가 발생),keypress, keydown, keyup
    //그 외 자주 사용하는 이벤트: focus, blur, change, scroll

//문제: 키보드를 누를 때 눌린 키보드 화살표 방향에 따라 5px씩 이동하는 코드를 작성하라.
    $(document).on('keydown', function(event){
        console.log(event.which);
    })
    $(document).on('keydown.move',function(event){
        /*var wch = $('#box').text(event.which);
        var mov = $('#box').left
        
        if ($('#box').text(event.which, 37)){
            $('#box').css('left', '-=5');
        } else if ($('#box').text(event.which, 38)){
            $('#box').css('top', '-=5');
        } else if ($('#box').text(event.which, 39)){
            $('#box').css('left', '+=5');
        } else if ($('#box').text(event.which, 40)){
            $('#box').css('top', '+=5');
        };
*/      //   38
        //37 40 39
        
        //해설
        var $box = $('#box')//,
            //top = parseInt($box.css('top')),
            //left = parseInt($box.css('left'));
        switch (event.which) {
                case 27: //esc키
                    $(document).off('keydown.move');
                // .off(keydown)만 쓰면 keydown과 관련된 이벤트가 모두 취소된다.(여기에서는 두 개)
                // 이벤트 이름 뒤에 .찍고 명칭을 ㅁ생성할 수 있다.
                // 여러 이벤트를 사용하고 싶을 때 이벤트를 여러가지를 한 칸씩 뛰고 작성하면 된다.
                // ex) .on('keydown mouseover')
                    break;
                case 37: //왼쪽
                    $box.css('left', '-=5');
                    break;
                case 38: //위쪽
                    $box.css('top', '-=5');
                    break;
                case 39: //오른쪽
                    $box.css('left', '+=5');
                    break;
                case 40: // 아래쪽
                    $box.css('top', '+=5');
                    break;
        };
        /*if (event.which === 38){
         $box.css('top', '-=5' //=== top - 5);    
        } else if (event.which === 40){
            $box.css('top', '+=5');
        } else if (event.which === 37){
            $box.css('left', '-=5');
        } else if (event.which === 39){
            $box.css('left', '+=5');
        }*/
    });

    // 드래그앤 드롭 구현
    // 1. #box(class="draggable")에서 마우스 버튼을 누를 떄
    //      - 초기 위치 값을 가지고 온다.
    //      - 현재 CSS left, top값을 저장해둔다.
    //      - document에 mousemove이벤트를 건다.
    // 2. 버튼을 누른채 마우스가 움직이면
    //      - 현재 위치값에서 초기 위치값을 빼면 차이를 알 수 있다.
    //      - 1에서 구한 CSS left, top 값에 차이 만큼을 더한다.
    // 3. 마우스 버튼을 떼면,
    //      - document에 걸었던 mousemove, mouseup 이벤트를 지운다.
        
    $('.draggable').on('mousedown', function(event){
            event.preventDefault(); //텍스트 선택이 되지 않도록 기본 동작 제거
            
            // 현재 커서의 위치는?
            var startX = event.pageX, startY = event.pageY;
            
            // 현재 #box의 CSS left, top값은?
            var $this = $(this);
            var startLeft = parseInt($this.css('left'));
            var startTop = parseInt($this.css('top'));
            
            if (isNaN(startLeft)) startLeft = 0;
            if (isNaN(startTop)) startTop = 0;
        
            //position이 absolute, relative, fixed가 아니면 relative 설정
            var position = $this.css('position');
            if (position != 'absolute' && position != 'relative' && position != 'fixed'){
                $this.css('position', 'relative');
            }
        
            $(document).on('mousemove.dragndrop', function(event){
                var presentX = event.pageX - startX; 
                //event.pageX는 현재 마우스가 움직인 위치의 값(현재 위치이다.)
                var presentY = event.pageY - startY;
                
                $this.css('left', presentX + startLeft).css('top', presentY + startTop);
            });
            
            $(document).on('mouseup.dragndrop', function(event){
                //마우스 버튼을 땔 때 시프트키가 눌러져 있으면 처음 위치로 되돌린다.
                if (event.shiftKey)
                {
                    $this.css('left', startLeft).css('top', startTop);
                };
                $(document).off('.dragndrop');
            });
        });
    
    // 포지션이 absolute, relative, fixed가 아니면 relative 설정
   
    
    // 도형을 드래그 했을 때 크기를 변화시키는 것
    
    $('.size-handle').on('mousedown', function(event){
       event.preventDefault();
         
            var $this = $(this);
            var startWidth = parseInt($this.width());
            var startHeight = parseInt($this.height());
            //위치값
            var startX = event.pageX, startY = event.pageY;
            
        $(document).on('mousemove.dragndrop', function(event){
                var presentX = event.pageX - startX; 
                //event.pageX는 현재 마우스가 움직인 위치의 값(현재 위치이다.)
                var presentY = event.pageY - startY;
            
            $('#box').width(startWidth + presentX);
            $('#box').height(startHeight + presentY);
                    
        $(document).on('mouseup.dragndrop',function(event){
            $(document).off('.dragdrop');
        })
        })
    });
});