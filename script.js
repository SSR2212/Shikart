
import products from "./products.js";

// Display Products
const productList = document.getElementById("product-list");

products.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>Price: ${product.price}</p>
    <button>Buy Now</button>
  `;

  productList.appendChild(productCard);
});

// Dice Roll Logic
const rollDiceBtn = document.getElementById("roll-dice");
const diceResult = document.getElementById("dice-result");

rollDiceBtn.addEventListener("click", () => {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  diceResult.textContent = diceRoll === 6
    ? "Congratulations! You rolled a 6. Your purchase is FREE!"
    : `You rolled a ${diceRoll}. Better luck next time!`;
});
    