export function pageArray(movies, pageOptions) {
    const startIndex = (pageOptions.page - 1) * pageOptions.perPage;
    const endIndex = startIndex + pageOptions.perPage;

    return movies.slice(startIndex, endIndex);
}

const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');

const PER_PAGE = 8;

export default function loadPaging(length) {
    const totalPageCount = Math.ceil(length / PER_PAGE);
    totalPages.textContent = totalPageCount;

    let currentPageCount = 1;
    currentPage.textContent = currentPageCount;

    previousButton.disabled = currentPageCount === 1;
    nextButton.disabled = currentPageCount === totalPageCount;

    nextButton.addEventListener('click', () => {
        currentPageCount++;
        currentPage.textContent = currentPageCount;
        previousButton.disabled = currentPageCount === 1;
        nextButton.disabled = currentPageCount === totalPageCount;

        const pagingOptions = {
            page: currentPageCount,
            perPage: PER_PAGE
        };
        //callback
        console.log(pagingOptions);
    });

    previousButton.addEventListener('click', () => {
        currentPageCount--;
        currentPage.textContent = currentPageCount;
        previousButton.disabled = currentPageCount === 1;
        nextButton.disabled = currentPageCount === totalPageCount;
        //callback
        const pagingOptions = {
            page: currentPageCount,
            perPage: PER_PAGE
        };
        //callback
        console.log(pagingOptions);
    });

}