const test = QUnit.test;

QUnit.module('hash');

import { writeSearchToQuery } from '../src/hash-query.js';

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

import { writePageToQuery } from '../src/hash-query.js';

test('write page to existing query', assert => {
    //arrange
    const page = 3;
    const existingQuery = 'searchTerm=star+wars&page=6';
    //act
    const result = writePageToQuery(existingQuery, page);
    //assert
    assert.equal(result, 'searchTerm=star+wars&page=3');
});

import { readFromQuery } from '../src/hash-query.js';

test('reads options from query', assert => {
    // arrange
    const query = 'searchTerm=star+wars&page=3';
    const expected = {
        searchTerm: 'star wars',
        page: 3
    };
    // act
    const result = readFromQuery(query);
    // assert
    assert.deepEqual(result, expected);
});

test('if query has no page then return page=1', assert => {
    // arrange
    const query = 'searchTerm=star+wars';
    const expected = {
        searchTerm: 'star wars',
        page: 1
    };
    // act
    const result = readFromQuery(query);
    // assert
    assert.deepEqual(result, expected);
});