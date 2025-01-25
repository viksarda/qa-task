---
sidebar_position: 3
---

# My Cart

---

## Purchase an item

### Precondition

Visit `https://academybugs.com/store/`


### Descripton

Check if user is able to purchase an item

### Steps

```mermaid
graph TD;
    id1(Click 'Add to cart' button on first product )-->id2(Wait for 'Checkout now' button to appear)
    id2-->id3(Click on 'Checkout now' button)
    id3-->id4(Click on 'Checkout' button)
    id4-->id5(Fill out shipping information)
    id5-->id6(Click on 'Continue to shipping' button)
    id6-->id7(Click on 'Continue to payment' button)
    id7-->id8(Click on 'Submit order' button)
    id8-->id9(Check if modal opens with message 'Not a real order')

    style id2 fill:#5AE48D,color:#000000
    style id9 fill:#5AE48D,color:#000000
    
```

### Result

User should be able to purchase a product

---

## Update the quantity of an added product

### Precondition

Visit `https://academybugs.com/store/`


### Descripton

Check if user is able to update the quantity of an item after added to cart and cart subtotal is adjusted accordingly

### Steps

```mermaid
graph TD;
    id1(Click 'Add to cart' button on first product )-->id2(Wait for 'Checkout now' button to appear)
    id2-->id3(Click on 'Checkout now' button)
    id3-->id4(Check if cart subtotal value equals the price of the product)
    id4-->id5(Click on '+' button)
    id5-->id6(Check if quantity value equals '2')
    id5-->id7(Click on 'Update' button)
    id7-->id8(Check if cart subtotal value is multiplied by 2)

    style id2 fill:#5AE48D,color:#000000
    style id4 fill:#5AE48D,color:#000000
    style id6 fill:#5AE48D,color:#000000
    style id8 fill:#5AE48D,color:#000000
```

### Result

On `my-cart` page product should be displayed with the quantity value equaling to 2

---

## Remove a product from cart

### Precondition

Visit `https://academybugs.com/store/`


### Descripton

Check if the user is able to remove a product from the cart

### Steps

```mermaid
graph TD;
    id1(Click 'Add to cart' button on first product)-->id2(Wait for 'Checkout now' button to appear)
    id2-->id3(Click on 'Checkout now' button)
    id3-->id4(Check if one product is visible in the cart)
    id3-->id5(Click on 'X' button)
    id5-->id6(Check if 'There are no items in your cart' message appears)


    style id2 fill:#5AE48D,color:#000000
    style id4 fill:#5AE48D,color:#000000
    style id6 fill:#5AE48D,color:#000000
```

### Result

The product should be removed from the cart and user receives a 'There are no items in your cart' message

---