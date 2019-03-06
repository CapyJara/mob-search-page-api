import { writePageToQuery } from './hash-query.js';

const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');

let currentPageNumber = 1;

previousButton.addEventListener('click', () => {
    currentPageNumber--;
    updatePaging();
});

nextButton.addEventListener('click', () => {
    currentPageNumber++;
    updatePaging();
});

export default function updatePaging() {
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writePageToQuery(existingQuery, currentPageNumber);
    window.location.hash = newQuery;
}