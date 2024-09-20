const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id") || 1;
const RenderProduct = async (Data, PreantId) => {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });

    let stars = "";
    for (let index = 0; index < Math.floor(Data.rating.rate); index++) {
        stars += ` <i class="bi bi-star-fill text-yellow-500"></i>`;
    }
    const producthtml = `
       <div class="my-4">
                    <span class="text-gray-500"> Account / ${Data.category} / ${Data.title}</span>
                </div>
                <div
                    class="flex lg:h-[700px] w-full items-start flex-col lg:flex-row"
                >

                    <div
                        class="relative h-full lg:w-[45%] bg-white flex items-center justify-center my-auto order-1 lg:order-none w-full rounded-md"
                    >
                        <div class="flex items-center justify-center p-3 h-full relative">
                            <img
                                src="${Data.image}"
                                alt=""
                                class="w-full h-full object-scale-down"
                            />
                        </div>
                    </div>
                    <div
                        class="flex flex-col lg:pl-5 flex-1  gap-5 order-3 lg:order-none w-full justify-between h-full"
                    >
                        <div class="text-2xl">${Data.title}</div>
                        <div>
                            <div class="flex gap-2">
                                <!-- stars -->
                                <span>
                                    ${stars}
                                </span>
                                <span
                                    class="text-gray-400 pr-5 border-r border-gray-600"
                                    >(${Data.rating.count})</span
                                >
                                <span class="text-green-500 font-bold"
                                    >In Stock</span
                                >
                            </div>
                        </div>
                        <div class="text-2xl">$${Data.price}</div>
                        <div class="font-bold text-gray-600">
                          ${Data.description}
                        </div>
                        <div class="flex items-center text-lg">
                            <span class="flex items-center gap-2"
                                >Colors:
                                <button
                                    class="w-6 h-6 rounded-full bg-red-400 inline-block border-2 border-transparent focus:border-black"
                                ></button>
                                <button
                                    class="w-6 h-6 rounded-full bg-blue-400 inline-block border-2 border-transparent focus:border-black"
                                ></button>
                            </span>
                        </div>
                        <div
                            class="flex items-center gap-2 text-md font-semibold"
                        >
                            <span class="text-lg">Size: </span>
                            <button
                                class="rounded-md h-7 w-7 bg-white text-black border border-gray-500 hover:border-transparent p-2 flex items-center justify-center hover:bg-red-500 hover:text-white duration-300"
                            >
                                XS
                            </button>
                            <button
                                class="rounded-md h-7 w-7 bg-white text-black border border-gray-500 hover:border-transparent p-2 flex items-center justify-center hover:bg-red-500 hover:text-white duration-300"
                            >
                                S
                            </button>
                            <button
                                class="rounded-md h-7 w-7 bg-white text-black border border-gray-500 hover:border-transparent p-2 flex items-center justify-center hover:bg-red-500 hover:text-white duration-300"
                            >
                                M
                            </button>
                            <button
                                class="rounded-md h-7 w-7 bg-white text-black border border-gray-500 hover:border-transparent p-2 flex items-center justify-center hover:bg-red-500 hover:text-white duration-300"
                            >
                                L
                            </button>
                            <button
                                class="rounded-md h-7 w-7 bg-white text-black border border-gray-500 hover:border-transparent p-2 flex items-center justify-center hover:bg-red-500 hover:text-white duration-300"
                            >
                                XL
                            </button>
                        </div>
                        <div class="flex items-center justify-between gap-4">
                            <div
                                class="bg-white text-black rounded-md flex items-center justify-center overflow-hidden font-bold text-2xl h-8 border border-gray-500"
                            >
                                <button
                                    class="border-r flex items-center p-2 justify-center relative hover:bg-[#DB4444] hover:text-white duration-300 px-2 border-l-0 border border-gray-500"
                                >
                                    <i class="bi bi-dash"></i>
                                </button>
                                <span class="px-4">1</span>
                                <button
                                    class="border-l flex items-center p-2 justify-center relative hover:bg-[#DB4444] hover:text-white duration-300 px-2 border-r-0 border border-gray-500"
                                >
                                    <i class="bi bi-plus-lg"></i>
                                </button>
                            </div>
                            <button
                                class="h-full bg-red-500 hover:bg-red-600 duration-200 text-white px-10 rounded-md shadow-md shadow-gray-600"
                            >
                                Buy Now
                            </button>
                        </div>
                        <div
                            class="flex flex-col border border-gray-500 rounded-md"
                        >
                            <div class="flex items-center gap-2 p-2">
                                <div class="relative pr-3">
                                    <img
                                        src="./assets/imgs/icon-delivery.png"
                                        alt=""
                                        class="w-full"
                                    />
                                </div>
                                <div class="flex flex-col text-xs font-bold">
                                    <div class="text-lg pb-3">
                                        Free Delivery
                                    </div>
                                    <div
                                        class="border-b border-gray-500 w-full  leading-3"
                                    >
                                        Enter your postal code for Delivery
                                        Availability
                                    </div>
                                </div>
                            </div>
                            
                            <div
                                class="flex items-center gap-2 p-2 border-t border-gray-500"
                            >
                                <div class="relative pr-3">
                                    <img
                                        src="./assets/imgs/Icon-return.png"
                                        alt=""
                                        class="object-contain"
                                    />
                                </div>
                                <div class="flex flex-col text-xs font-bold">
                                    <div class="text-lg pb-3">
                                        Return Delivery
                                    </div>
                                    <div>
                                        Free 30 Days Delivery Returns
                                        <span class="border-b border-gray-500"
                                            >Details</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    Populate(PreantId, producthtml);
};
const Populate = (PreantId, html) => {
    const praent = document.getElementById(PreantId);
    praent.innerHTML = "";
    praent.innerHTML = html;
};
const getProduct = async () => {
    try {
        if (id > 20 || id < 1) {
            throw new Error("Product not found");
        }
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await response.json();
        RenderProduct(product, "product");
    } catch (error) {
        console.log(error);
        Populate(
            "product",
            "<div class='text-red-500 flex items-center justify-center h-[200px] text-[40px]'>Product not found</div>"
        );
    }
};

getProduct();

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
                            class="flex flex-col gap-2 sm:w-1/4 min-w-[250px] w-full px-1"
                        >
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
                                    }" alt="" class="w-full h-full object-fill p-2" />
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
    RenderProducts(products, "related-products");
};

getProducts();
