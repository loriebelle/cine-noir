const filterButtons = document.querySelectorAll(".nav-btn");

// Filter button interaction
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Remove active class from all
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    })
})