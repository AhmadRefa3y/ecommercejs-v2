const toggleMenu = () => {
    const menu = document.getElementById("nav-items");
    if (menu.classList.contains("d-none")) {
        menu.classList.remove("d-none");
        menu.classList.add("d-flex");
    } else {
        menu.classList.remove("d-flex");
        menu.classList.add("d-none");
    }
};
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
const RenderProducts = async (products, PreantId) => {
    await new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });
    const productshtml = shuffleArray([...products])
        .slice(0, 4)
        .map((product) => {
            const randomDiscount = Math.floor(Math.random() * 50) + 1;
            let stars = "";
            for (
                let index = 0;
                index < Math.floor(+product.rating.rate);
                index++
            ) {
                stars += ` <i class="bi bi-star-fill text-yellow-500"></i>`;
            }
            return `
            <div
                            class="cards d-flex flex-column gap-2"
                            style="width: 18rem"
                        >
                            <div class="imgContainer column position-relative">
                                <a
                                    href="product.html?id=${product.id}"
                                    class="text-decoration-none d-flex align-content-center justify-content-center"
                                >
                                    <img
                                        src="${product.image}"
                                        class="card-img-top"
                                        alt="..."
                                    />
                                </a>
                                <div
                                    class="cardIcons d-flex flex-column align-items-end p-3 position-absolute top-0 end-0"
                                >
                                    <img src="assets/imgs/heart small.png" alt="" />
                                    <img src="assets/imgs/Quick View.png" alt="" />
                                </div>
                                <div
                                    class="discount bg-danger position-absolute d-flex align-items-center justify-content-center"
                                >
                                    -40%
                                </div>
                                <div
                                    class="addCart position-absolute bottom-0 bg-dark text-light w-100 d-flex justify-content-center align-items-center"
                                >
                                    Add to cart
                                </div>
                            </div>
                            <div class="cardTitle">
                                <div
                                    class="fs-6 fw-bold"
                                    style="
                                        height: 60px;
                                        max-height: 50px;
                                        overflow: hidden;
                                    "
                                >
                                    ${product.title}
                                </div>
                            </div>
                            <ul class="list-group list-group-flush">
                                <div class="text-danger fs-6 fw-bold">
                                    $252
                                    <span
                                        style="
                                            text-decoration: line-through;
                                            color: grey;
                                        "
                                        >$${product.price}</span
                                    >
                                </div>
                                <div class="stars d-flex flex-row">
                                    <span>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </span>
                                    <div class="fs-6" style="color: gray">
                                        (${product.rating.count})
                                    </div>
                                </div>
                            </ul>
                        </div>
            `;
        })
        .join("");
    Populate(PreantId, productshtml);
};
const RenderExpolrerProducts = async (products, PreantId) => {
    await new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });
    const productshtml = shuffleArray([...products])
        .slice(0, 8)
        .map((product) => {
            const randomDiscount = Math.floor(Math.random() * 50) + 1;
            let stars = "";
            for (
                let index = 0;
                index < Math.floor(+product.rating.rate);
                index++
            ) {
                stars += ` <i class="bi bi-star-fill text-yellow-500"></i>`;
            }
            return `
            <div class="p-2 col-12 col-lg-3">
                        <div class="product-card d-flex flex-column">
                            <a
                                href="product.html?id=${product.id}"
                                class="product-image-container"
                                style="
                                    height: 300px;
                                    width: 100%;
                                    overflow: hidden;
                                    position: relative;
                                "
                            >
                                <img
                                    src="${product.image}"
                                    alt=".."
                                    class="product-image"
                                    style="
                                        object-fit: contain;
                                        height: 100%;
                                        width: 100%;
                                        object-position: center;
                                    "
                                />
                            </a>
                            <p class="product-name pt-3" style="height: 90px">${product.title}</p>
                            <div class="price-rating d-flex flex-column">
                                <span class="price">$${product.price}</span>
                                <div class="rating">
                                    ${stars}
                                    <span>(${product.rating.count})</span>
                                </div>
                            </div>
                        </div>
                    </div>
            `;
        })
        .join("");
    Populate(PreantId, productshtml);
};

const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    RenderProducts(products, "cardscontainer");
    RenderProducts(products, "best-selling");
    RenderExpolrerProducts(products, "product-grid");
};

getProducts();

const Populate = (PreantId, productshtml) => {
    const praent = document.getElementById(PreantId);
    praent.innerHTML = "";
    praent.innerHTML = productshtml;
};

const countdownDate = new Date("2024-9-31").getTime();
function updateTimerFLash() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days < 10 ? `0${days}` : days;
    document.getElementById("hours").textContent =
        hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes").textContent =
        minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").textContent =
        seconds < 10 ? `0${seconds}` : seconds;

    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
    }
}
function updateTimerBanner() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days2").textContent =
        days < 10 ? `0${days} Days` : `${days} Days`;
    document.getElementById("hours2").textContent =
        hours < 10 ? `0${hours} Hours` : `${hours} Hours`;
    document.getElementById("minutes2").textContent =
        minutes < 10 ? `0${minutes} Minutes` : `${minutes} Minutes`;
    document.getElementById("seconds2").textContent =
        seconds < 10 ? `0${seconds} Seconds` : `${seconds} Seconds`;

    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("days2").textContent = "00";
        document.getElementById("hours2").textContent = "00";
        document.getElementById("minutes2").textContent = "00";
        document.getElementById("seconds2").textContent = "00";
    }
}

const timerIntervalFLash = setInterval(updateTimerFLash, 1000);
const timerIntervalBanner = setInterval(updateTimerBanner, 1000);

updateTimerFLash();
updateTimerBanner();
document.getElementById("days").classList.remove("opacity-0");
document.getElementById("hours").classList.remove("opacity-0");
document.getElementById("minutes").classList.remove("opacity-0");
document.getElementById("seconds").classList.remove("opacity-0");

var countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 10);

var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementsByClassName("countdown-container")[0].innerHTML =
            "COUNTDOWN FINISHED";
    }
}, 1000);
