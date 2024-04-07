window.showDropdown = function (searchTerm, inputElement) {
    var dropdown = document.getElementById("suggestionDropdown");
    if (dropdown) {
        dropdown.style.display = searchTerm ? "block" : "none";
    }
};

window.setInputElementValue = function (inputElement, value) {
    inputElement.value = value;
};
