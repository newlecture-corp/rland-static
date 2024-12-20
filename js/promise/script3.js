// 라이브러리 또는 API
function getList(page){    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`{"kor":100,"eng":200}`);
        },3000);
        //  reject("오마이갓!!");
    })
}

(async ()=>{
    let exam = await getList(5);
    console.log(exam);
    console.log("다음 라인");
})();

// IIFE(Immediately Invoked Function Expression)
