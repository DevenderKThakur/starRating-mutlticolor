const stars = document.querySelectorAll(".star");
const currentRating = document.getElementById("current-rating");

let userRating = 0;

stars.forEach((star) => {
    star.addEventListener("click", () => {
        const rating = parseInt(star.getAttribute("data-rating"));
        userRating = rating;
        updateRating();
    });

    star.addEventListener("mouseover", () => {
        const rating = parseInt(star.getAttribute("data-rating"));
        highlightStars(rating);
    });

    star.addEventListener("mouseout", () => {
        clearStars();
        highlightStars(userRating);
    });
});

function highlightStars(rating) {
    stars.forEach((star, index) => {
        star.classList.remove("active");
        if (index < rating) {
            star.classList.add("active");
            if (rating <=2) {
                star.classList.add("two-stars");
            } else if (rating === 3) {
                star.classList.add("three-stars");
            }
        }  
    });
}

function clearStars() {
    stars.forEach((star) => {
        star.classList.remove("active", "two-stars", "three-stars");
    });
}

function updateRating() {
    currentRating.innerHTML = userRating;
}

function nextPage(){
    window.location.reload()
}