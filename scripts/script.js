let currentFilter = "all";

const container = document.getElementById("poster-container");
const filterButtons = document.querySelectorAll(".nav-btn");

function getFilteredMovies() {
    return currentFilter === "all" ? movies : movies.filter(movie => movie.decade === currentFilter);
}

function createMovieCard(movie) {
    const director = Array.isArray(movie.director) ? movie.director.join(", ") : movie.director;
    return `
        <div class="movie-card">
            <img src="${movie.poster}" alt="${movie.title} Poster" class="movie-poster">
            <h1>${movie.title}</h1>
            <p>${director}</p>
            <p>${movie.year}</p>
        </div>
    `
}

function renderMovies() {
    const filtered = getFilteredMovies();
    if (filtered.length === 0) {
        container.innerHTML = "<p>No movies for this decade</p>";
        return;
    }


    container.innerHTML = filtered.map(createMovieCard).join("");
}

// Filter button interaction
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Remove active class from all
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        currentFilter = btn.getAttribute("data-filter");
        renderMovies();
        container.scrollLeft = 0;
    });
});

// Scroll buttons
document.getElementById("prev").addEventListener("click", () => {
    container.scrollBy({ left: -300, behavior: "smooth" });
});
document.getElementById("next").addEventListener("click", () => {
    container.scrollBy({ left: 300, behavior: "smooth" });
});

// Initial render
renderMovies();