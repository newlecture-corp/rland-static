// new Promise();


// 라이브러리 또는 API
function getList(page, eventHandler,successHandler){

    // 사고는 내가 감지할 수 있지만 조치는? 
    // 내가 할 것이 아니야.
    // 그럼 누가 처리하는데? 날 호출하는 함수

    setTimeout(eventHandler, 3000);
    setTimeout(successHandler, 5000);
    
}

// drive() 그러다가 사고가 나면 전화해!!
getList(5, function(){
    console.log("아~고~ 조심운전하지~ 119 전하ㅗ해야지");
},
function(){
    console.log("축하해");
})