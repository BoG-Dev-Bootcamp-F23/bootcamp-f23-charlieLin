const card = document.querySelector("main");
let flipped = false;

card.addEventListener('click', () => {

    if (flipped === false) {
        card.style.transform = "rotateY(180deg)";
        flipped = true;
    } else {
        card.style.transform = "rotateY(360deg)";
        flipped = false;
    }
})