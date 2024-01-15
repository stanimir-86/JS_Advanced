function addItem() {
    let ulElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    
    let newElement = document.createElement('li');
    newElement.textContent = inputElement.value;
    inputElement.value='';

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });
    newElement.appendChild(deleteElement);
    ulElement.appendChild(newElement);
}