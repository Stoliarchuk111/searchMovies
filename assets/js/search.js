let searchLast = ' ';

const getData = (url) => fetch(url)
.then((response) => response.json())
.then((json) => {
    if (!json || !json.Search) throw Error('Сервер вернул неправильный объект');

    return json.Search;
});



inputSearch.addEventListener('keyup', (e) => {


    delay(() => {
        const searchString = e.target.value;

        if (searchLast && searchString.length > 3 && searchString !== searchLast) {
                if (!triggerMode) clearMoviesMarkup();

            getData(`https://www.omdbapi.com/?apikey=df409a13&s=${searchString}`)
            .then((movies) => movies.forEach((movie) => addMovieToList(movie)))
            .catch((err) => console.log(err));
        }

        searchLast = searchString;
    }, 1000);
});
