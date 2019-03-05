const test = QUnit.test;

import { pageArray } from '../src/paging.js';

QUnit.module('page array');

const movies = [
    { title: '1' },
    { title: '2' },
    { title: '3' },
    { title: '4' },
    { title: '5' },
    { title: '6' },
    { title: '7' },
    { title: '8' },
    { title: '9' },
    { title: '10' }
];

test('page 1 of 3 per page', assert => {
    // act
    const pageOptions = {
        page: 1,
        perPage: 3
    };
    const result = pageArray(movies, pageOptions);

    // assert
    assert.deepEqual(result, [
        { title: '1' },
        { title: '2' },
        { title: '3' }
    ]);
});

test('page 2 of 3 per page', assert => {
    // act
    const pageOptions = {
        page: 2,
        perPage: 3
    };
    const result = pageArray(movies, pageOptions);

    // assert
    assert.deepEqual(result, [
        { title: '4' },
        { title: '5' },
        { title: '6' }
    ]);
});
test('page 3 of 4 per page', assert => {
    // act
    const pageOptions = {
        page: 3,
        perPage: 4
    };
    const result = pageArray(movies, pageOptions);

    // assert
    assert.deepEqual(result, [
        { title: '9' },
        { title: '10' }
    ]);
});