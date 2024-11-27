document.addEventListener("DOMContentLoaded", () => {
    const cartItems = [];
    const cartList = document.getElementById('cart-items');
    const totalPriceElem = document.getElementById('total-price');
    let totalPrice = 0;
  
    function updateCart() {
      cartList.innerHTML = '';
      cartItems.forEach((item, index) => {
        const listItem = document.createElement('li');
       
        listItem.textContent = `${item.title} - $${item.price}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add("text-red-500", "ml-4");
        removeButton.addEventListener('click', () => {
          totalPrice -= item.price;
          cartItems.splice(index, 1);
          updateCart();
        });
        
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
      });
      totalPriceElem.textContent = totalPrice;
    }
  
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
        const bookDiv = button.parentElement;
        const bookPrice = parseInt(bookDiv.getAttribute('data-price'));
        const bookTitle = bookDiv.getAttribute('data-title');
  
        cartItems.push({ title: bookTitle, price: bookPrice });
        totalPrice += bookPrice;
        updateCart();
      });
    });
  });














//   1. Event Listener on DOMContentLoaded
// The code is wrapped inside document.addEventListener("DOMContentLoaded", ...) to ensure that the script runs only after the HTML page is fully loaded.
// This ensures all elements like buttons and containers are available for manipulation before the script starts executing.
// 2. Variables
// cartItems: An empty array to hold the books that the user adds to the shopping cart. Each book is stored as an object with two properties: title and price.
// cartList: References the HTML element (an unordered list) where the cart items will be displayed.
// totalPriceElem: References the HTML element (a span or similar) where the total price of the items in the cart is displayed.
// totalPrice: A variable to track the running total of all book prices in the cart. It starts at 0.
// 3. updateCart Function
// This function is responsible for:

// Clearing the current cart display: cartList.innerHTML = ''; ensures that the cart display is refreshed every time a change is made (item added or removed).
// Looping through cartItems: The function iterates over the cartItems array and for each item, it creates a new <li> element displaying the book title and price.
// Remove button: For each item, a "Remove" button is created. Clicking the remove button will:
// Subtract the price of the removed item from totalPrice.
// Remove the book from the cartItems array using splice(), which deletes the item at the given index.
// Call updateCart() again to refresh the cart list and the total price after the item is removed.
// Updating the total price: Finally, the function updates the total price displayed on the page.
// 4. Event Listeners for "Add to Cart" Buttons
// The code selects all elements with the class add-to-cart and adds a click event listener to each one. When the button is clicked:
// The parent container of the button (bookDiv) is accessed. This contains the data-price and data-title attributes that hold the price and title of the book.
// The price is converted to an integer using parseInt() and both the price and title are used to create an object representing the book.
// This book object is pushed into the cartItems array.
// The total price is updated by adding the book's price to the totalPrice variable.
// The updateCart() function is called to refresh the display, showing the new book in the cart and the updated total price.
  