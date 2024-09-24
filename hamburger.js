const hamburger = document.getElementById("hamburger-menu");

const frame1 = document.getElementById("h-frame1");

const frame2 = document.getElementById("h-frame2");
const main = document.getElementById("main");
const checkout = document.getElementById("checkout");

hamburger.addEventListener("click", function () {
    frame1.style.display = "flex";
    frame2.style.display = "flex";
    frame2.style.flexDirection = "column";
    main.style.filter = "blur(5px)";
});

main.addEventListener("click", function () {
    frame1.style.display = "none";
    frame2.style.display = "none";
    main.style.filter = "none";
});

checkout.addEventListener("click", () => {
    window.location.href = "checkout.html";
});
