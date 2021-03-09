
let movieList = null;
let inputSearch = null;

let triggerMode = false;

const createStyle = () => {
    const headStyle = document.createElement('style');

    headStyle.innerHTML = `* {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: Arial, serif;
    }
    .container {
        padding: 20px;
        max-width: 1280px;
        margin: 0 auto;
    }
    
    .movies {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
    }
    .movie {
        display: flex;
        align-content: center;
        justify-content: center;
    }
    .movie__image {
        width: 100%;
        object-fit: cover;
    }
    .search {
        margin-bottom: 30px;
    }
    .search__label-input {
        display: block;
        margin-bottom: 7px;
    }
    .search__input {
        display: block;
        width: 400px;
        padding: 10px 15px;
        border-radius: 4px;
        border: 1px solid lightgray;
        margin-bottom: 10px;
    }
    .search__label-checkbox {
        font-size: 12px;
        display: block;
        margin-top: -16px;
        margin-left: 25px;
    }
    `;
 
    document.head.appendChild(headStyle);
};
const createHeader = (container) => {
    const header = document.createElement('h1');

    header.innerText = 'Приложение для поиска фильмов';
    container.append(header);
};
const setAttributes = (el, attrs) => {
    for (let key in attrs) el.setAttribute(key, attrs[key]);
};

const triggerModeHandler = () => triggerMode = !triggerMode;


const createSearchBox = (container) => {
    const searchBox = document.createElement('div');
    const input = document.createElement('input');
    const labelForInput = document.createElement('label');
    const checkbox = document.createElement('input');
    const labelForCheckbox = document.createElement('label');

    searchBox.setAttribute('class', 'search');

    setAttributes(input, {
        class: 'search__input',
        id: 'search',
        type: 'text', 
        placeholder: 'Начните вводить текст...'

    });

    setAttributes(labelForInput, {
        class: 'search__label-input',
        for: 'search'
    });

    labelForInput.innerText = 'Поиск фильмов';

    setAttributes(checkbox, {
        class: 'search__checkbox',
        id: 'checkbox',
        type: 'checkbox', 
    });
    checkbox.addEventListener('click', triggerModeHandler);

    setAttributes(labelForCheckbox, {
        class: 'search__label-checkbox',
        for: 'checkbox'
    });

    labelForCheckbox.innerText = 'Добавлять фильмы к существующему списку';

    searchBox.append(labelForInput, input, checkbox, labelForCheckbox);
    container.append(searchBox);

    setAttributes();
}; 

const createMarkup = () => {
    const container = document.createElement('div');
    const movies = document.createElement('div');

    createHeader(container);
    createSearchBox(container);

    container.classList.add('container');
    movies.classList.add('movies');


    container.append(movies);
    document.body.prepend(container);


    movieList = document.querySelector('.movies');
    inputSearch = document.querySelector('#search'); 

};

const addMovieToList = (movie) => {

    const item = document.createElement('div');
    const img = document.createElement('img');
    
    img.classList.add('movie__image');
    img.src = movie.Poster;
    item.classList.add('movie');

    item.append(img);
    movieList.append(item);

};

const clearMoviesMarkup = () => movieList && (movieList.innerHTML = '');

const delay = (() => {
    let timer = 0;
    
    return (cb,ms) => {
        clearTimeout(timer);
        timer = setInterval(cb,ms);
    };
})();

createStyle();
createMarkup();

