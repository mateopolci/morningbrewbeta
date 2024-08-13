// Cart init
let cart = [];
// Create the html store card
const createCoffeeCard = (coffee) => {
    return `
        <div class="group relative pb-4">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-64">
                <img src="${coffee.img}" alt="${coffee.name}" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <div>
                    <h3 class="text-sm text-gray-700">
                        ${coffee.name}
                    </h3>
                </div>
                <p class="text-sm font-medium text-gray-900">$${coffee.price}</p>
            </div>
                <div class="flex justify-center mt-6">
                <button onclick="addToCart(${coffee.id})" class="rounded-md bg-light-brown px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Add to cart
                </button>
        </div>`;
};
// Add item to cart
const addToCart = (coffeeId) => {
    const selectedCoffee = coffeeList.find((coffee) => coffee.id === coffeeId);
    if (selectedCoffee) {
        cart.push(selectedCoffee);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
};
// Update cart list
const updateCartList = () => {
    const cartList = document.getElementById('cartList');
    if (cartList) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartList.innerHTML = '';
        cart.forEach((coffee) => {
            cartList.innerHTML += `
                <li class="flex py-6">
                    <div class="flex-shrink-0">
                        <img src="${coffee.img}" alt="${coffee.name}" class="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32">
                    </div>
                    <div class="ml-4 flex-1 flex flex-col sm:ml-6">
                        <div>
                            <div class="flex justify-between">
                                <h4 class="text-sm">
                                    <a href="#" class="font-medium text-gray-700 hover:text-gray-800">${coffee.name}</a>
                                </h4>
                                <p class="ml-4 text-sm font-medium text-gray-900">$${coffee.price}</p>
                            </div>
                            <p class="mt-1 text-sm text-gray-500">${coffee.origin}</p>
                        </div>
                        <div class="mt-4 flex-1 flex items-end justify-between">
                            <button type="button" class="text-sm font-medium text-indigo-600 hover:text-indigo-500" onclick="removeFromCart(${coffee.id})">
                                <span>Remove</span>
                            </button>
                        </div>
                    </div>
                </li>`;
        });
    }
};
// Update cart total
const updateTotal = () => {
    const total = document.getElementById('total');
    if (total) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalAmount = cart.reduce((sum, coffee) => sum + coffee.price, 0);
        total.textContent = `$${totalAmount.toFixed(2)}`;
    }
};
// Remove a cart item
const removeFromCart = (coffeeId) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex((coffee) => coffee.id === coffeeId);
    if (index !== -1) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartList();
        updateTotal();
    }
};
// Update grid with coffe cards
const updateGrid = () => {
    const itemGrid = document.getElementById('itemGrid');
    if (itemGrid) {
        itemGrid.innerHTML = '';
        coffeeList.forEach((coffee) => {
            itemGrid.innerHTML += createCoffeeCard(coffee);
        });
    }
};
// Coffee sorting
const sortCoffees = (order) => {
    coffeeList.sort((a, b) => {
        if (order === 'asc') {
            return a.price - b.price;
        }
        else if (order === 'desc') {
            return b.price - a.price;
        }
        return 0;
    });
};
// Origin filter
const filterByOrigin = (selectedOrigin) => {
    const filteredCoffees = coffeeList.filter((coffee) => coffee.origin === selectedOrigin);
    const itemGrid = document.getElementById('itemGrid');
    if (itemGrid) {
        itemGrid.innerHTML = filteredCoffees
            .map((coffee) => createCoffeeCard(coffee))
            .join('');
    }
};
const handleFilterChange = (event) => {
    if (event.target.name === 'origin[]') {
        const selectedOrigin = event.target.value;
        filterByOrigin(selectedOrigin);
    }   
};
document.querySelectorAll('input[name="origin[]"]').forEach((input) => {
    input.addEventListener('change', handleFilterChange);
});
// Event init and DOM load
document.addEventListener('DOMContentLoaded', () => {
    const cartList = document.getElementById('cartList');
    const total = document.getElementById('total');
    const itemGrid = document.getElementById('itemGrid');
    // Cart page
    if (cartList && total) {
        updateCartList();
        updateTotal();
    }
    // Store page
    if (itemGrid) {
        updateGrid();
        // Show sort button
        const sortButton = document.getElementById('sortButton');
        const sortDiv = document.querySelector('.sortDiv');
        if (sortButton && sortDiv) {
            sortButton.addEventListener('click', (event) => {
                event.preventDefault();
                sortDiv.classList.toggle('hidden');
            });
            const ascSort = document.getElementById('ascSort');
            const descSort = document.getElementById('descSort');
            if (ascSort) {
                ascSort.addEventListener('click', (event) => {
                    event.preventDefault();
                    sortCoffees('asc');
                    updateGrid();
                });
            }
            if (descSort) {
                descSort.addEventListener('click', (event) => {
                    event.preventDefault();
                    sortCoffees('desc');
                    updateGrid();
                });
            }
        }
    }
});
