---
sidebar_position: 2
---

# Product

---

## Add multiple items to cart

### Precondition

Visit `https://academybugs.com/store/`


### Descripton

Check if user is able to add multiple quantities of an item to cart

### Steps

```mermaid
graph TD;
    id1(Click the image on the first product)-->id2(Click on '+' button)
    id2-->id3(Check if input field increased to '2')
    id2-->id4(Click 'Add to cart' button)
    id4-->id5(Check quantity value equals to '2')

    style id3 fill:#5AE48D,color:#000000
    style id5 fill:#5AE48D,color:#000000
```

### Result

Product should be displayed with the quantity value equaling to 2

---

## Add a product with colour options to cart

### Precondition

Visit `https://academybugs.com/store/`


### Descripton

Check if the user is able to add a product in cart with a specified color option

### Steps

```mermaid
graph TD;
    id1(Click on 'Select Options' button under 'Denim Coat')-->id2(Click on 'Green' color option button)
    id2-->id3(Check if 'Select Color' option equals to 'Green')
    id2-->id4(Click 'Add to cart' button)
    id4-->id5(Check if product in cart contains the value 'Green')

    style id3 fill:#5AE48D,color:#000000
    style id5 fill:#5AE48D,color:#000000
```

### Result

Product should be added to cart with the correct color option

---

## Post a comment on a product

### Precondition

Visit `https://academybugs.com/store/denim-coat/`


### Descripton

Check if the user is able to post a comment on a product

### Steps

```mermaid
graph TD;
    id1(Click on 'Comment' input field)-->id2(Type 'Example Comment')
    id2-->id3(Click on 'Name' Input field)
    id3-->id4(Type 'John')
    id4-->id5(Click on 'Email' Input field)
    id5-->id6(Type 'tester@gmail')
    id6-->id7(Click on 'Post Comment' button)
    id7-->id8(Check if comment is successfully posted)

    style id8 fill:#5AE48D,color:#000000
```

### Result

Comment should be posted and displayed on the product page

---