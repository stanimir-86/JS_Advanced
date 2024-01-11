//Синтакси за клас
//не е задължително да има конструктор.
//В примера сме дефинирали и име.
class Cat {
    constructor(name) {
        this.name = name;
        this.hair = true;//defeut value
    }
}

let firstCat = new Cat('Stamat');//създавам нова инстанция от класа Cat с параметър за име Stamat
console.log(firstCat);//имам вече създаден обект firstCat с ключ name и стойност (име Stamat)
console.log(firstCat.name);//Stamat value
//мога да променям стойностите в движение
firstCat.name = "Gogo";
console.log(firstCat.name)
//Друг пример
let cats = ["Pepi", "Mimi", "Lili", "Vili"];
let catsList = cats.map(x => new Cat(x));
console.log(catsList);
//взех масив от стрингове и го направих в масив от обекти.
//Пример три 
//създавам си нов класc

class Rectangle {//създавам клас
    constructor(heigth, width) {//създавам конструктор и дефинирам два параметъра
        this.heigth = heigth;//придавам им стойност
        this.width = width;
    }

    calcArea() { return this.heigth * this.width };//правя си метод,който е функция
    static checkBigger(heigth, widh) {
        if (this.heigth > this.widh) {
            console.log(this.heigth);
        } else if (this.heigth < this.width) {
            console.log(this.width);
        } else {
            console.log(this.heigth, this.width);
        }
    }
}
let square = new Rectangle(10, 10);//вземам си я в променлива и викам класа с два параметъра
console.log(square.calcArea());//изпълнявам метода calcArea върху класа
//мога да си задам дефаутна стойст в конструктора,дори ако не ми е подадено,като параметър
//istanceof
console.log(firstCat instanceof Cat);//true firstCat инстанция на класа Cat
//статичен метод в клас
//извикване
console.log(Rectangle.checkBigger());

