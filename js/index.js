const addButtons = document.querySelectorAll('.btn'); 
const cartBadge = document.querySelector('#cart-count'); 

let count = 0;

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        if (cartBadge) {
            cartBadge.textContent = count;
        }

        button.style.backgroundColor = "#27ae60";
        button.innerText = "🛒 Added";

        setTimeout(() => {
            button.style.backgroundColor = "";
            button.innerHTML = "🛒 Add";
        }, 1000);
    });
});
