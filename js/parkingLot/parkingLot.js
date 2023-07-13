// 과제
// 주차장 요금 계산
// 주차장 기본요금 1000원 (30분) 1~39분 1000원
// 10분 초과시 100원 추가

// 2시간 이상 주차시 기본요금 1500원
// 4시간 이상 주차시 기본요금 2500원
// 8시간 이상 주차시 무조건 5000원

//주차한 시간이 총 몇분인가 입력하여 요금 출력하기

/* 
    우리가 생각 해야할 것!

    - 기본요금 ! 
        - 8시간 이상 / 4시간 이상 / 2시간 이상 / 2시간 이하

    - 주차시간 당 요금
        - 10분당 100원
        - 1~39분까지는 요금을 안받아!
    
    => 40분이면 얼마야?
        1100원! 


    39분까지는 기본 요금이네?
    딱 40부터는 100원이붙어 어디까지 붙지?

    => 49분까지는 100원이야! 아 알겠다  ㅇㅋ


    => 문제 외 생각해야할것!
    시간을 어떻게 받을까
    시간 따로 분 따로 받을까? => 계산하기 귀찮아

    넣는사람이 불편하게 해 
    아 그냥 분으로 퉁쳐서 받을까? =!

    > 퉁쳐서 받는다 치면
    어떻게할까? 

    프롬프트 창을 써서 받을까? >>> 미정이가 아는 방법은 이거밖에 
*/

function calculate(){
    var oneHourMin = 60;
    var parkingFee = -1;
    var BaseFee = 0;
    var parkingMin = prompt("주차하신 총 시간을 '분' 단위로 입력해주세요.");

    while( isNaN(parkingMin) ){
        alert("숫자만 입력 가능합니다.");
        calculate();
    }

    /* 기본요금 계산하기 */
    if(parkingMin >= (8*oneHourMin) ){
        BaseFee = 5000;
    }else if(parkingMin >= (4*oneHourMin)){
        BaseFee = 2500;
    }else if(parkingMin >= (2*oneHourMin)){
        BaseFee = 1500;
    }else{
        BaseFee = 1000;

        parkingMin = parkingMin - 39;
        
        if(parkingMin>0){
            var mj = parseInt( (parkingMin-1) / 10 ) + 1;

            parkingFee = mj * 100;
        }
    }

    parkingFee = parkingFee + BaseFee;

    var main2Ele = document.getElementById("main2");
    var showFeeDiv = document.createElement( "div" )

    showFeeDiv.innerHTML = "총 요금은 : "+parkingFee+"원 입니다."
    
    main2Ele.appendChild(showFeeDiv);
}