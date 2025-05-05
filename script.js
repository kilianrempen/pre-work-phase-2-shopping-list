window.onload = function() {
    initShoppingList();
};

function initShoppingList() {
    let form = document.getElementById("item-form");

    form.addEventListener("submit", (event) => {
        handleItemForm(event, form);
    });
}

function handleItemForm(event, formRef) {
    if (event.preventDefault) {
        event.preventDefault();
    }

    addItemToShoppingList();
    formRef.reset();

    return false;
}

function addItemToShoppingList() {
    let itemName = document.getElementById("item-name");
    let itemQuantity = document.getElementById("item-quantity");
    let id = getRandomInt(1, 1000000);

    let itemHtml = createListItemHtml(itemName.value, itemQuantity.value, id);
//    console.log("ItemHTML: ", itemHtml);
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml);

    setDeleteButtonEvent(id);
}

function setDeleteButtonEvent(id) {
    let deleteButton = document.getElementById("button"+id);
    deleteButton.addEventListener("click", () => {
       removeListItem(id);
    });
}

function createListItemHtml(itemName, itemQuantity, id) {
    return `<li id="item${id}">
                ${itemName} - ${itemQuantity}
                <button id="button${id}" type="button">Remove Item</button>
            </li>`;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function removeListItem(id) {
    let listItem = document.getElementById("item"+id);
    listItem.parentNode.removeChild(listItem)
}