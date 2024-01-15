function solve() {
   const addButton = Array.from(document.querySelectorAll(".add-product"));
   const checkOutButton = document.querySelector(".checkout");
   const textAreaInput = document.querySelector("textarea");
 
   let cart = [];
 
   addButton.forEach((button, index) => {
      button.addEventListener('click', () => {
         const productName = document.querySelectorAll(".product-title")[index].textContent;
         const productPrice = Number(document.querySelectorAll(".product-line-price")[index].textContent);
         cart.push({ name: productName, price: productPrice });
         textAreaInput.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
 
      });
   });
   checkOutButton.addEventListener('click', () => {
      
      const uniqueProducts = [...new Set(cart.map((item) => item.name))];
      const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
      textAreaInput.value += `You bought ${uniqueProducts.join(", ")} for ${totalPrice.toFixed(2)}.`;
      addButton.forEach((button) => {
         button.disabled = true;
      });
      checkOutButton.disabled = true;
   });
}