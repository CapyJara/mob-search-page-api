import { loadMovies } from './load-movie.js';
import { updateSearchTerm } from './search-component.js';
import { readFromQuery } from './hash-query.js';
import makeSearchMovieUrl from './make-search-movie.js';
import updatePaging from './paging-component.js';

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchTerm(queryOptions.searchTerm);
    
    const url = makeSearchMovieUrl(queryOptions);
    
    fetch(url)
        .then(response => response.json())
        .then(body => {
            loadMovies(body.results);
            console.log(body);
            updatePaging(body);
        });
});