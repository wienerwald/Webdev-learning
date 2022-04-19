const toggleClass = (event) => {
    let imageDiv = event.target;
    let open = document.querySelector(".open");
    if (imageDiv !== open) {
        imageDiv.classList.add("open");
        open.classList.remove("open");
    }
}

const images = document.querySelectorAll(".image");
images.forEach((currentValue) => {
    currentValue.addEventListener("click", toggleClass);
});