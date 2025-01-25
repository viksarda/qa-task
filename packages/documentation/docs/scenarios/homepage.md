---
sidebar_position: 1
---

# Homepage

---

## Change the pagination Size

### Precondition

Visit `https://academybugs.com/store/`


### Descripton

Check if user can change the pagination size on the homepage.

### Steps

```mermaid
graph TD;
    id1(Click on '10' button in the pagination size section)-->id2(Check if only 10 products are present)
    style id2 fill:#5AE48D,color:#000000
```

### Result

Page should only load 10 products


---

## Change the sorting of the products

### Precondition

Visit `https://academybugs.com/store/`

### Descripton

Check if user can sort the products on the homepage

### Steps

```mermaid
graph TD;
    id1(Click on 'Default Sorting' button)-->id2(Click on 'Price Low-High' option)
    id2-->id3(Check if the first product is 'Flamingo TShirt')

    style id3 fill:#5AE48D,color:#000000
```

### Result

Page should sort the products accordingly from low to high price

---

## Change the currency of the products

### Precondition

Visit `https://academybugs.com/store/`


### Descripton

Check if user can change the currency option and the price changes accordingly

### Steps

```mermaid
graph TD;
    id1(Click on dropdown menu)-->id2(Select 'EUR' option)
    id2-->id3(Check if the currency changed to '€' for the products)

    style id3 fill:#5AE48D,color:#000000
```

### Result

Value of the products should be changed accordingly to the new currency

---

## Search for a product

### Precondition

Visit `https://academybugs.com/store/`


### Descripton

Check if the user can search for a product successfully

### Steps

```mermaid
graph TD;
    id1(Click on 'Product Search' input field)-->id2(Type 'Chain')
    id2-->id3(Click on 'Search' button)
    id3-->id4(Check if only 'Bright Gold Purse With Chain' product is visible)
    id3-->id5(Check if 'Showing all 1 results' text is visible)

    style id4 fill:#5AE48D,color:#000000
    style id5 fill:#5AE48D,color:#000000
```

### Result

Only one item is displayed on the homepage (Bright Gold Purse With Chain)

---

## Filter by price

### Precondition

Visit `https://academybugs.com/store/`


### Descripton

Check if the user can filter the products by price

### Steps

```mermaid
graph TD;
    id1(Click on 'Greater Than $299.99' button)-->id2(Check if only 'Black Over-the-shoulder Handbag' product is visible)
    id1-->id3(Check if 'Showing all 1 results' text is visible)


    style id2 fill:#5AE48D,color:#000000
    style id3 fill:#5AE48D,color:#000000
```

### Result

Only the products withing that price range should be visible on the homepage

---