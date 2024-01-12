class List {
    constructor() {
        this.result = [];
        this.size = this.result.length;
    }
    add(element) {
        this.result.push(element);// adds a new element to the collection
        this.size = this.result.length;//щом добавя елемент се променя сайза.Затова го сетвам на ново.
        this.result.sort((a, b) => a - b);//ascending order
    }
    remove(index) {
        if (index < 0 || index >= this.result.length) {//Index validation
            throw new Error('Invalid index');
        }
        this.result.splice(index, 1);//- removes the element at position index
        this.size = this.result.length;//set new length
    }
    get(index) {
        if (index < 0 || index >= this.result.length) {//Index validation
            throw new Error('Invalid index');
        }
        return this.result[index];
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 