// import { loadMovies } from './load-movie.js';
import { updateSearchTerm } from './search-component.js';
import { readFromQuery } from './hash-query.js';

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchTerm(queryOptions.searchTerm);
});