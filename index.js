const track = document.querySelector('.carousel-track');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const cards = Array.from(track.children);

let currentIndex = 0;

const updateCarousel = () => {
    const cardWidth = cards[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * (cardWidth + 20)}px)`;
};

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});
// JavaScript for the Search Bar
document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    const query = document.getElementById('query').value.trim().toLowerCase();

    // Define available movies and their booking pages
    const movies = {
        kanguva: 'kanguva-booking.html',
        black: 'black-booking.html',
        brother: 'brother-booking.html',
        amaran: 'amaran-booking.html'
    };

    // Check if the searched movie exists
    if (movies[query]) {
        // Redirect to the corresponding booking page
        window.location.href = movies[query];
    } else {
        // Handle movie not found
        alert('Movie not found. Please search for Kanguva, Black, Brother, or Amaran.');
    }
});

