// Create a new item in Local Storage
function newItemStorage() {
    let name = prompt("Enter the name for the item:");
    let value = prompt("Enter the value for the item:");
    if (name && value) {
        localStorage.setItem(name, value);
        alert("Item added to Local Storage");
    }
}

// Delete an item from Local Storage
function deleteItemStorage() {
    let name = prompt("Enter the name of the item to delete:");
    if (name && localStorage.getItem(name)) {
        localStorage.removeItem(name);
        alert("Item deleted from Local Storage");
    } else {
        alert("Item not found in Local Storage");
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
    if (confirm("Do you allow the use of cookies on this website?")) {
        document.cookie = "allowCookies=true; path=/";
        alert("Cookies are now enabled");
    } else {
        alert("Cookies are not enabled");
    }
}
