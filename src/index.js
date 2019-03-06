import { loadMovies } from './load-movie.js';
import { updateSearchTerm } from './search-component.js';
import { readFromQuery } from './hash-query.js';
import makeSearchMovieUrl from './make-search-movie.js';
import updatePagingInfo from './paging-component.js';

window.addEventListener('hashchange', loadQuery);

const movieContainer = document.getElementById('movie-container');
const promptContainer = document.getElementById('prompt-container');

function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchTerm(queryOptions.searchTerm);
    
    const url = makeSearchMovieUrl(queryOptions);

    if(!url){
        promptContainer.classList.remove('hidden');
        movieContainer.classList.add('hidden');
    }
    else {
        promptContainer.classList.add('hidden');
        movieContainer.classList.remove('hidden');
    }
    
    fetch(url)
        .then(response => response.json())
        .then(body => {
            loadMovies(body.results);
            const pagingInfo = {
                page: body.page,
                totalPages: body.total_pages
            };
            updatePagingInfo(pagingInfo);
        });
}