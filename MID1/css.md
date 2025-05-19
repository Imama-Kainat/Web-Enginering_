
# **Complete CSS Guide for Web Development & Design**

## **1. CSS Basics**
### **1.1 What is CSS?**
CSS (Cascading Style Sheets) is used to style HTML elements, controlling their layout, appearance, and responsiveness.

### **1.2 Ways to Apply CSS**
1. **Inline CSS**: Directly within an HTML element using the `style` attribute.  
   ```html
   <p style="color: red;">This is inline CSS</p>
   ```
2. **Internal CSS**: Inside a `<style>` tag in the `<head>` section.  
   ```html
   <style>
     p { color: blue; }
   </style>
   ```
3. **External CSS**: In a separate `.css` file linked to the HTML file.  
   ```html
   <link rel="stylesheet" href="styles.css">
   ```

---

## **2. CSS Selectors**
CSS selectors define how styles are applied to elements.

### **2.1 Basic Selectors**
| Selector | Example | Description |
|----------|---------|-------------|
| **Element Selector** | `p { color: red; }` | Targets all `<p>` elements. |
| **Class Selector** | `.para { color: blue; }` | Targets all elements with `class="para"`. |
| **ID Selector** | `#id1 { color: black; }` | Targets an element with `id="id1"`. |
| **Group Selector** | `h1, p { color: green; }` | Targets multiple elements at once. |

### **2.2 Attribute Selectors**
| Selector | Example | Description |
|----------|---------|-------------|
| `[type="text"]` | `input[type="text"] { padding: 10px; }` | Targets `<input>` elements of type text. |

### **2.3 Pseudo Classes & Elements**
| Selector | Example | Description |
|----------|---------|-------------|
| `:hover` | `button:hover { background: yellow; }` | Styles an element when hovered over. |
| `:first-child` | `p:first-child { color: red; }` | Styles the first `<p>` inside a parent. |
| `::before` | `h1::before { content: "🔥 "; }` | Adds content before an element. |
| `::after` | `h1::after { content: " 🚀"; }` | Adds content after an element. |

---

## **3. Box Model**
Every HTML element is a rectangular box consisting of:
1. **Content** (Text or Image)
2. **Padding** (Space inside the border)
3. **Border** (Outer boundary)
4. **Margin** (Space outside the border)

```css
.styling {
  padding: 20px 10px 30px 15px; /* top right bottom left */
  border: 5px solid black; 
  margin: 10px;
}
```

---

## **4. Typography & Text Styling**
| Property | Example | Description |
|----------|---------|-------------|
| `color` | `color: red;` | Changes text color. |
| `font-family` | `font-family: Arial, sans-serif;` | Specifies font style. |
| `font-size` | `font-size: 20px;` | Sets text size. |
| `text-align` | `text-align: center;` | Aligns text left, right, center, or justify. |
| `text-transform` | `text-transform: uppercase;` | Converts text to uppercase/lowercase. |
| `text-decoration` | `text-decoration: underline;` | Underlines, strikes out, or removes underline. |

---

## **5. Layout: Flexbox & Grid**
### **5.1 Flexbox**
Used for **1D layouts** (rows or columns).  

```css
.container {
  display: flex;
  flex-direction: row; /* row | column */
  justify-content: space-between; /* alignment */
  align-items: center;
  gap: 20px;
}
```

| Property | Description |
|----------|-------------|
| `display: flex;` | Enables flexbox. |
| `flex-direction` | Defines main axis (`row` or `column`). |
| `justify-content` | Aligns items along the main axis. |
| `align-items` | Aligns items along the cross axis. |
| `gap` | Adds space between flex items. |

### **5.2 CSS Grid**
Used for **2D layouts** (rows & columns).  

```css
.cont-grid {
  display: grid;
  grid-template-columns: repeat(3, auto); /* 3 equal columns */
  grid-template-rows: 200px 200px; /* Row height */
  gap: 10px;
}
```

| Property | Description |
|----------|-------------|
| `display: grid;` | Enables grid layout. |
| `grid-template-columns` | Defines number & size of columns. |
| `grid-template-rows` | Defines row height. |
| `gap` | Defines space between grid items. |

---

## **6. Responsive Design**
### **6.1 Media Queries**
Allows different styles based on screen size.

```css
@media (max-width: 768px) {
  body {
    background-color: lightgray;
  }
}
```
| Media Query | Description |
|-------------|-------------|
| `(max-width: 768px)` | Applies styles when screen width is ≤ 768px. |
| `(min-width: 1024px)` | Applies styles when screen width is ≥ 1024px. |

### **6.2 Units for Responsive Design**
| Unit | Description |
|------|-------------|
| `px` | Fixed size (e.g., `100px`). |
| `%` | Percentage relative to parent (e.g., `width: 50%;`). |
| `em` | Relative to parent font-size (e.g., `font-size: 1.5em;`). |
| `rem` | Relative to root font-size (e.g., `font-size: 2rem;`). |
| `vw` | Viewport width (e.g., `width: 50vw;`). |

---

## **7. Transitions & Animations**
### **7.1 Transitions**
```css
button {
  background: blue;
  transition: background 0.5s ease-in-out;
}
button:hover {
  background: red;
}
```
| Property | Description |
|----------|-------------|
| `transition-property` | Specifies the property to animate. |
| `transition-duration` | Duration of transition (e.g., `0.5s`). |
| `transition-timing-function` | Easing (`ease-in-out`, `linear`, etc.). |

### **7.2 Keyframe Animations**
```css
@keyframes move {
  0% { transform: translateX(0); }
  100% { transform: translateX(100px); }
}
.box {
  animation: move 2s infinite alternate;
}
```
| Property | Description |
|----------|-------------|
| `@keyframes` | Defines animation frames. |
| `animation-name` | Name of the animation. |
| `animation-duration` | Time taken for animation. |
| `animation-iteration-count` | Number of times the animation runs. |

---

## **8. CSS Best Practices**
- **Use External CSS** for maintainability.
- **Avoid `!important`**, except in rare cases.
- **Use Variables** (`--primary-color: red;`).
- **Use CSS Reset** (`* { margin: 0; padding: 0; }`).
- **Keep Classes Descriptive** (`.header-nav` instead of `.nav1`).

---

