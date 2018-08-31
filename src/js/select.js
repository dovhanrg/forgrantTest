'use strict';

const select = document.querySelector('.select');
const itemsWrapper = document.querySelector('.items');


export const removeSelected = (event) => {
    const selected = document.querySelector('.selected');
    selected.parentElement.removeChild(selected);
    // const selectedWrapper = document.querySelector('.selectedWrapper');
    // selectedWrapper.removeChild(selected);
}

export const toggleSelected = event => {
    const selectArrow = document.querySelector('.selectArrow');
    selectArrow.classList.toggle('transition');
    
    const items = document.querySelector('.items');
    items.classList.toggle('visible');
}

export const addSelected = event => {
    const id = [];
    const nonSelectedArr = [];
    let text = '';
    
    const selectedWrapper = document.querySelector('.selectedWrapper');
    const eventTargetId = event.target.dataset.id;
    

    const selected = document.querySelector('.selected');
    // const itemsWrapper = document.querySelectorAll('.items');
    switch (eventTargetId) {
        case '01': text = 'EUR';
        break;
        case '02': text = 'RUB';
        break;
        case '03': text = 'GBP';
        break;
        case '04': text = 'USD';
    }
    
    const items = document.querySelectorAll('.item');
    // items.insertAdjacentElement('beforeend', cloneNode);
    // items.forEach(element => id.push(element.dataset.id))
    // nonSelectedArr.push(id.filter(element => element !== eventTargetId));
    // console.log(nonSelectedArr);
    cloneItem();
    removeSelected(event);
    removeItemFromList(event);

    const span = document.createElement('span');
    span.classList.add('item', 'selected');
    span.textContent = text;
    span.dataset.id = eventTargetId;
    selectedWrapper.insertAdjacentElement('afterbegin',span);

    // consol.
}
export const removeItemFromList = event => {
    event.target.parentElement.removeChild(event.target);
}

export const cloneItem = event => {
    const itemsWrapper = document.querySelector('.items');
    const selected = document.querySelector('.selected');
    const cloneSelectedItem = selected.cloneNode(true);
    cloneSelectedItem.classList.remove('selected');
    console.log(cloneSelectedItem);
    itemsWrapper.insertAdjacentElement('afterbegin',cloneSelectedItem);

}
// select.addEventListener('click', removeSelected);
select.addEventListener('click', toggleSelected);
itemsWrapper.addEventListener('click', addSelected);
