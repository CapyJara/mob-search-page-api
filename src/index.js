import { loadMovies } from './load-movie.js';
import { movies } from '../data/sample-data.js';
import loadPaging from './paging.js';

loadMovies(movies);
loadPaging(movies.length);