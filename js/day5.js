function 요일이름(y, m, d) {
	var date = new Date(y, m-1, d);
	var day = date.getDay();

	if (day === 1) {
		return '월';
	} else if (day === 2) {
		return '화';
	} else if (day === 3) {
		return '수';
	} else if (day === 4) {
		return '목';
	} else if (day === 5) {
		return '금';
	} else if (day === 6 || day === 0) {
		return '주말';
	} else {
		return '모름';
	}
}

// 문제: 생일을 입력하면 만 나이를 구하는 age() 함수를 작성하라.
// 사용예: age(1976, 3, 22) // 생일이 지났나, 안지났는 지 체크를 해서 '1'을 더하거나, 빼거나 하면 된다.

    function age(연, 월, 일){
        var date = new Date();
        // 만 나이는 현재 년도 
        var bDate = new Date (연, 월 -1, 일);
        
        var ages= date.getFullYear() - bDate.getFullYear();
        
        if (월 -1 < date.getMonth()){
            return ages-1; 
        } else if(월 -1 === date.getMonth() && 일 >= date.getDate()){ 
            return ages;
        } else {
            return ages;
        }
    }

    age(1976, 3, 22);

    // 해설
    function age(y, m, d){
        var today = new Date(), 오늘달, 오늘일;
        오늘달 = today.getMonth()+1;
        오늘일 = today.getDate();
        // 만 나이는 현재 년도 - 태어난 년도
        var 나이 = today.getFullYear() - y;
        // 단, 생일이 지나지 않았으면 나이에서 1을 빼야한다.
        if (오늘달 < m || (오늘달 === m && (오늘일 < d)){ //태어난 달이 현재 달보다크면 아직 지나지 않았음.
            // 태어난 달이 현재 달보다 크거나
            // 또는 달이 같고 태어난일이 현재 일보다크면 생일이 아직 지나지 않았음
            나이 -= -1;
        } 
        return 나이;
    }
// 문제(실습): 생일을 입력하면 나이에 따라 '어린이', '청소년', 청년', '장년이상' 으로 출력하는 함수를 연량대()를 작성하라.
//사용예: 연령대(1976, 3, 22) // 1976년 3월 22일인 사람의 연령대는?
//조건: 10살 미만은 어린이, 10 - 18살 청소년, 19-40살 청년, 40살~ 장년이상
    
    function 연령대(연, 월, 일){
        var date = new Date;
        var bDate = new Date(연, 월 -1, 일);
        
        var difD = date.getFullYear() - bDate.getFullYear();
        
        if (difD < 10){
            return '어린이';
        } else if (difD > 10 && difD <= 18) {
            return '청소년';
        } else if (difD > 18 && difD <= 40){
            return '청년'
        } else {
            return '장년 이상'
        }
    }

    console.log(연령대(1998, 3, 2));  
        
        //해설:
        function 연령대(y, m, d){
            var 만나이 = age(y, m, d), 분류;
            if (만나이<10){
                분류= '어린이';
            }
            return 분류;
        }