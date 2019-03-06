const test = QUnit.test;

QUnit.module('no search');

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