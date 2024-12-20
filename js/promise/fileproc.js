// The problems of Javascript
// 1. Callback Hell
// 2. Error Handling
// 3. Readability
// 4. Maintainability
// 5. Debugging
// 6. Performance
// 7. Callbacks are not composable
// 8. Callbacks are not reusable
// 9. Callbacks are not chainable
// 10. Callbacks are not cancellable
// 11. Callbacks are not lazy
// 12. Callbacks are not parallelizable
// 13. Callbacks are not testable

class Exam {
    #kor;
    #eng;
    #math;

    constructor() {
        this.#kor = 0;
        this.#eng = 0;
        this.#math = 0;
    }

    get kor() {
        return this.#kor;
    }

    set kor(kor) {
        this.#kor = kor;
    }

    get eng() {
        return this.#eng;
    }

    set eng(eng) {
        this.#eng = eng;
    }

    get math() {
        return this.#math;
    }

    set math(math) {
        this.#math = math;
    }

    total() {
        return this.#kor + this.#eng + this.#math;
    }

    avg() {
        return this.total() / 3;
    }
}


class Menu {
    #id;
    #korName;
    #engName;
    #price;

    constructor() {
        this.#id = 0;
        this.#korName = '';
        this.#engName = '';
        this.#price = 0;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get korName() {
        return this.#korName;
    }

    set korName(korName) {
        this.#korName = korName;
    }

    get engName() {
        return this.#engName;
    }

    set engName(engName) {
        this.#engName = engName;
    }

    get price() {
        return this.#price;
    }

    set price(price) {
        this.#price = price;
    }
}

let exams = [
    { kor: 100, eng: 90, math: 80 },
    { kor: 90, eng: 80, math: 70 },
    new Menu(),
    { kor: 80, eng: 70, math: 60 },
    new Exam(),
    { kor: 70, eng: 60, math: 50 },
];

let exams1 = exams.filter(exam => exam.kor >= 70);
console.log(exams1);

class MunuController {
    #menuService;

    constructor() {
        this.#menuService = new MenuService();
    }
}

if ("" == 0) {
    // It is! But why??
    console.log("It is!");
}
if (1 < x < 3) {
    // True for *any* value of x!
}

const obj = { width: 10, height: 15 };
// Why is this NaN? Spelling is hard!
const area = obj.width * obj.heigth;
console.log(area);


