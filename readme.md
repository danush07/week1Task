START
1. Initialize products array with product details.
2. Initialize an empty cart array to store selected products.
3. Set up the HTML structure with product and cart containers.
4. Render products on the page with an "Add to Cart" button for each.
5. Implement addToCart function:
   Check if the selected product is already in the cart.
   If yes, increase the quantity.
   If no, add a new entry to the cart with quantity 1.
   Call updateCart function.
6. Implement removeFromCart function:
    Check if the selected product is in the cart.
   If yes, decrease the quantity, or remove if the quantity becomes zero.
   Call updateCart function.
7. Implement updateCart function:
   Display the cart items in rows with product details.
   Calculate and display the total price and average price.
8. Implement sortCart function:
 Sort the cart based on the selected sorting option with name and price
   Call updateCart function.
9. Implement clearCart function:
    Empty the cart array.
    Call updateCart function.
10. Add event listeners to the sorting and clearing elements to trigger corresponding functions.
11. Initialize the page with the products and an empty cart.
END#   w e e k 1 T a s k  
 