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
         <div class="flex flex-col gap-2 w-1/4 border border-gray-200 p-1 rounded-md">
                            <div
                                class="relative bg-white   overflow-hidden group h-[250px] flex justify-between flex-col items-center "
                            >
                                <div
                                    class="absolute top-2 left-2 w-15 z-50 h-5 px-3 float-start items-center justify-center leading-5 bg-red-500 text-white text-xs rounded-sm"
                                >
                                    -${randomDiscount}%
                                </div>
                                <div
                                    class="absolute flex flex-col gap-2 top-2 right-2"
                                >
                                    <i class="bi bi-heart text-2xl"></i>
                                    <i class="bi bi-eye text-2xl"></i>
                                </div>
                              <a class="flex-1 relative h-full" href="product.html?id=${
                                  product.id
                              }">  
                                    <img src="${
                                        product.image
                                    }" alt="" class="w-full h-full object-fill" />
                              </a>
                                <button
                                    class="w-full absolute bottom-0 rounded-md bg-black text-white py-2 mt-auto capitalize text-sm font-bold hidden group-hover:block hover:block h-10"
                                >
                                    Add to cart
                                </button>
                            </div>
                            <div class="text-black font-extrabold text-sm h-[40px]">
                               ${product.title}
                            </div>
                            <div class="flex gap-2">
                                <span class="text-red-500 text-sm font-bold"
                                    >$${(
                                        product.price -
                                        (product.price * randomDiscount) / 100
                                    ).toFixed(2)}</span
                                >
                                <span
                                    class="line-through text-sm font-bold text-gray-400"
                                    >$${product.price}</span
                                >
                            </div>
                            <div class="flex gap-2">
                                <span>
                                    ${stars}
                                </span>
                                <span class="text-gray-400">(${
                                    product.rating.count
                                })</span>
                            </div>
                        </div>`;
        })
        .join("");
    Populate(PreantId, productshtml);
};

const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    RenderProducts(products, "best-sellers");
    RenderProducts(products, "flash");
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
        days < 10 ? `0${days}` : days;
    document.getElementById("hours2").textContent =
        hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes2").textContent =
        minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds2").textContent =
        seconds < 10 ? `0${seconds}` : seconds;

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
