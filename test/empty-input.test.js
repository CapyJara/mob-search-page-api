const test = QUnit.test;

QUnit.module('no search');

// function makeSearchMovieUrl(queryOptions) {
//     const searchTerm = queryOptions.searchTerm;
//     if(!searchTerm){
//         return '';
//     }
// }
import makeSearchMovieUrl from '../src/make-search-movie.js';

test('if no search', assert => {
    // arrange
    const queryOptions = {
        searchTerm: '',
        page: 1
    };
    // act
    const url = makeSearchMovieUrl(queryOptions);
    // assert
    assert.equal(url, '');
});