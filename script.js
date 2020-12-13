// Creating the local storeage for the save feature

function getLocalStorage(key) {
    var value = localStorage.getItem(key);
    if (value) {
        $("#text${key}").text(value);
    }
}

