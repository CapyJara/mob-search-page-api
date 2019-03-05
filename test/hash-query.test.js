const test = QUnit.test;

function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    searchParams.set('page', 1);

    return searchParams.toString();
}

QUnit.module('hash');

test('add search to empty hash', assert => {
    // arrange
    const existingQuery = '';
    const searchTerm = 'star wars';
    // act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    // assert
    assert.equal(result, 'searchTerm=star+wars&page=1');
});

test('change an existing query', assert => {
    // arrange
    const existingQuery = 'searchTerm=star+wars&page=6';
    const searchTerm = 'harry potter';
    // act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    // assert
    assert.equal(result, 'searchTerm=harry+potter&page=1');
});

function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);

    return searchParams.toString();
}   

test('write page to existing query', assert => {
    //arrange
    const page = 3;
    const existingQuery = 'searchTerm=star+wars&page=6';
    //act
    const result = writePageToQuery(existingQuery, page);

    //assert
    assert.equal(result, 'searchTerm=star+wars&page=3');
});

function readFromQuery(query) {
    const searchParams = new URLSearchParams(query);
    const pageNumber = parseInt(searchParams.get('page')) || 1;
    const result = {
        searchTerm: searchParams.get('searchTerm'),
        page: pageNumber
    };
    return result;
}

test('reads options from query', assert => {
    const query = 'searchTerm=star+wars&page=3';
    const expected = {
        searchTerm: 'star wars',
        page: 3
    };
    const result = readFromQuery(query);

    assert.deepEqual(result, expected);
});

test('if query has no page then return page=1', assert => {
    const query = 'searchTerm=star+wars';
    const expected = {
        searchTerm: 'star wars',
        page: 1
    };
    const result = readFromQuery(query);

    assert.deepEqual(result, expected);
});