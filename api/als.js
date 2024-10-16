// Delete an item from Local Storage with required fields
function deleteItemStorage() {
    let name = prompt("Enter the name of the item to delete:");
    if (name) {
        if (localStorage.getItem(name)) {
            localStorage.removeItem(name);
            alert("Item deleted from Local Storage");
        } else {
            alert("Item not found in Local Storage");
        }
    } else {
        alert("Name is required to delete an item.");
    }
}

// Add a new item to Local Storage with prompts
function addItemStorage() {
    let name = prompt("Enter the name for the item:");
    let value = prompt("Enter the value for the item:");
    if (name && value) {
        localStorage.setItem(name, value);
        alert("Item added to Local Storage");
    } else {
        alert("Name and value are required to add an item.");
    }
}

// Create a new item in Local Storage
function setItemStorage() {
    if (allowCookieData()) {
        addItemStorage();
    } else {
        alert("Cookies need to be enabled to use this function.");
    }
}

// Delete all data from Local Storage
function deletePermanentDatas() {
    if (confirm("Are you sure you want to delete all data? This action cannot be undone.")) {
        localStorage.clear();
        alert("All data deleted from Local Storage");
    }
}

// Allow cookie data
function allowCookieData() {
    return confirm("Do you allow the use of cookies on this website?");
}
