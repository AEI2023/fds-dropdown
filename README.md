# fds-brands
Simple Dropdown using Web Component.


### Preview:
![Alt text](https://i.ibb.co/fqR20xY/thumbnails.png "Example into a Navbar")

>&nbsp;
> ### **Config**
> **name:** is a text this anchor.
> **type:** **1** is only Text, **2** is icons and text, **3** is only a Icon.
> **icon:** url image.
> **bg:** Background color.
> **bgdrop:** Background color bubble dropdown.
> **color:** text color.
>&nbsp;

---

## Structure

```html
<!--Only text is type 1-->
<fds-dropdown name="Home" type="1" bg="#ccc" bgdrop="#fff" color="#010101"></fds-dropdown>
<!--Text and icon is type 2-->
<fds-dropdown name="Products" type="2" icon="https://img.icons8.com/small/256/product.png" bg="#ccc" bgdrop="#fff" color="#010101">
  <a href="#">Link number 3</a>                
  <a href="#">Link number 2</a>                
  <a href="#">Link number 4</a>                
  <a href="#">Link number 6</a>                
  <a href="#">Link number 7</a>                
</fds-dropdown>
<!--Only icons is type 3-->
<fds-dropdown name="Favorites" type="3" icon="https://img.icons8.com/small/256/like.png" bg="#ccc" bgdrop="#fff" color="#010101"></fds-dropdown>
```

**Preview** [Here](https://aei2023.github.io/fds-dropdown/)