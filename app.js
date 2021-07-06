const api = {
   key: "b84be598b7ca04f0f84efa8c8c8ba92d",
   baseurl: "https://home.openweathermap.org/api_keys"
};

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keycode == 13) {
        // getResult(searchBox.value);
        console.log(searchBox)
    }
}
