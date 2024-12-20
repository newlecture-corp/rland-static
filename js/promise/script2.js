// 라이브러리 또는 API
function getList(page){
    // , eventHandler,successHandler
    
    return new Promise((resolve, reject)=>{
        //resolve(`{"kor":100,"eng":200}`);
         reject("오마이갓!!");
    })
}

let promise=getList(5);

promise
.then((data)=>{
    console.log("축하해",data);
    // 1. 파싱
    try{
        let json = JSON.parse(data);
        console.log(json);
        //return json;
    }
    catch(e){
        console.log("중첩문 캐치")
    }
    // -> 압축/키얻기...
    // 2. 뽀개기
    // 3. 출력(사용)
},(error)=>{
    console.log("에고 어쩌냐~~");
}).
catch(error=>{
    console.log("잡았다", error);
});
// .then(d=>{
//     return {...d, kor:400};g
// })
// .then((json)=>{
//     console.log(json.kor, json);
// })
