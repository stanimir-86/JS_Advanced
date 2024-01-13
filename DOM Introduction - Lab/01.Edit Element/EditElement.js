function editElement(ref, match, replaceText) {
    let text = ref.textContent;//вземане на информация за референцията с този метод в променлива.
    let regex = new RegExp(match, 'g');//използвам този метод за създаване на регекс,защото той може да приеме параметър променлива и добавям g флаг.
    let res = text.replace(regex, replaceText);//с методата реплайс заменян регекса с текста за подмяна
    ref.textContent = res;//подменям стойноста на референцията с новия резултат.
    //при промяна на DOM не се налага да печатам или return резултат.
}



