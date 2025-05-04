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

    return false;
}

function addItemToShoppingList() {
    let itemName = document.getElementById("item-name");
    let itemQuantity = document.getElementById("item-quantity");

    let itemHtml = createListItemHtml(itemName.value, itemQuantity.value);
    console.log("ItemHTML: ", itemHtml);
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml);
}

function createListItemHtml(itemName, itemQuantity) {
    return `<li>${itemName} - ${itemQuantity}</li>`;
}