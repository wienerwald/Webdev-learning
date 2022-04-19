const toggleClass = (event) => {
    let parentDiv = event.target.parentElement;
    let open = document.querySelector(".open");
    if (parentDiv !== open) {
        parentDiv.classList.add("open");
        open.classList.remove("open");
    }
}

const images = document.querySelectorAll("img");
images.forEach((currentValue) => {
    currentValue.addEventListener("click", toggleClass);
});