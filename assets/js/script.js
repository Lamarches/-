

const carouselSlide = document.querySelector('.carousel-slide');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const pageIndicator = document.querySelector('.page');

let currentPage = 1;
const cardsPerPage = 4;
const totalPages = Math.ceil(cards.length / cardsPerPage);

function showPage(num) {
    const startIndex = (num - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    cards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    pageIndicator.textContent = `${num} of ${totalPages}`;
}

prevButton.addEventListener('click', () => {
    currentPage = (currentPage - 1 < 1) ? totalPages : currentPage - 1;
    showPage(currentPage);
});

nextButton.addEventListener('click', () => {
    currentPage = (currentPage + 1 > totalPages) ? 1 : currentPage + 1;
    showPage(currentPage);
});

showPage(currentPage);