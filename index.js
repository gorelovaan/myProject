let modal = document.getElementById("myModal");
let modalContent = document.querySelector(".modal_box p");
let modalImage = document.getElementById("modalImage");
let btns = document.querySelectorAll(".card_button");
let span = document.getElementById("closeModal");
btns.forEach(function (btn) {
    btn.onclick = function () {
        let card = btn.closest(".card_item");
        let content = card.getAttribute("data-content");
        let imgSrc = card.querySelector("img").src;

        modalContent.textContent = content;
        modalImage.src = imgSrc;
        modal.style.display = "block";
    };
});
span.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

