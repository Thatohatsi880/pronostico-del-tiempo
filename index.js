function searchSubmit(event) {
    event.preventDefault();
    let searchInput= document.querySelector("#search-input");
    let citySubject = document.querySelector("#city");
    citySubject.innerHTML = searchInput.value;
}

let searchElement = document.querySelector("#search");
searchElement.addEventListener("submit", searchSubmit);