

## **1. Introduction to HTML**

HTML (Hypertext Markup Language) is the standard language for creating web pages. It describes the structure of web pages using **markup**. HTML uses a system of **tags** to create elements on a webpage.

### Structure of an HTML Document
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title of the Document</title>
</head>
<body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

- **`<!DOCTYPE html>`**: Declares the document type.
- **`<html>`**: Root element of the HTML document.
- **`<head>`**: Contains metadata like character set, page title, and external resources.
- **`<body>`**: Contains the visible content of the webpage.

---

## **2. Basic HTML Elements**

### Text Formatting Tags:
- **`<h1> to <h6>`**: Headings (from largest to smallest).
- **`<p>`**: Paragraph.
- **`<strong>`**: Bold text (semantically strong).
- **`<em>`**: Italic text (semantically emphasized).
- **`<br>`**: Line break (self-closing).
- **`<hr>`**: Horizontal rule (self-closing).
  
### Links:
- **`<a href="URL">`**: Anchor tag to create hyperlinks.
  ```html
  <a href="https://www.example.com">Click here</a>
  ```

### Images:
- **`<img src="image.jpg" alt="description">`**: Embeds images.
  ```html
  <img src="image.jpg" alt="Image Description">
  ```

### Lists:
- **`<ul>`**: Unordered list.
- **`<ol>`**: Ordered list.
- **`<li>`**: List item.
  ```html
  <ul>
      <li>Item 1</li>
      <li>Item 2</li>
  </ul>
  ```

### Tables:
- **`<table>`**: Table.
- **`<tr>`**: Table row.
- **`<th>`**: Table header.
- **`<td>`**: Table data.
  ```html
  <table>
      <tr>
          <th>Name</th>
          <th>Age</th>
      </tr>
      <tr>
          <td>John</td>
          <td>25</td>
      </tr>
  </table>
  ```

### Forms:
- **`<form>`**: Defines a form.
- **`<input>`**: Various input types like text, password, checkbox, etc.
- **`<textarea>`**: Multi-line text input.
- **`<select>` and `<option>`**: Drop-down list.

---

## **3. HTML Forms and Input Types**

Forms are used to gather user input, and the **`<form>`** element contains input elements like **text fields**, **radio buttons**, **check boxes**, etc.

### Basic Form Structure:
```html
<form action="submit_form.php" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <input type="submit" value="Submit">
</form>
```

### Common Input Types:

1. **Text Input**:  
   - `<input type="text">`: For single-line text input.
     ```html
     <input type="text" id="username" name="username">
     ```

2. **Password Input**:  
   - `<input type="password">`: For password fields (obscures input).
     ```html
     <input type="password" id="password" name="password">
     ```

3. **Email Input**:  
   - `<input type="email">`: For email addresses. Validates the email format.
     ```html
     <input type="email" id="email" name="email">
     ```

4. **Checkbox**:  
   - `<input type="checkbox">`: Allows users to select multiple options.
     ```html
     <input type="checkbox" id="subscribe" name="subscribe" value="yes">
     ```

5. **Radio Button**:  
   - `<input type="radio">`: Allows users to select one option from a set.
     ```html
     <input type="radio" id="male" name="gender" value="male">
     <input type="radio" id="female" name="gender" value="female">
     ```

6. **Button**:  
   - `<button>`: Used for buttons to trigger actions.
     ```html
     <button type="button">Click Me</button>
     ```

7. **Submit Button**:  
   - `<input type="submit">`: Submits the form.
     ```html
     <input type="submit" value="Submit">
     ```

8. **Text Area**:  
   - `<textarea>`: For multi-line text input.
     ```html
     <textarea id="message" name="message"></textarea>
     ```

9. **Date**:  
   - `<input type="date">`: For date input.
     ```html
     <input type="date" id="birthday" name="birthday">
     ```

10. **Number**:  
   - `<input type="number">`: For numeric input.
     ```html
     <input type="number" id="age" name="age" min="18" max="100">
     ```

11. **File Input**:  
   - `<input type="file">`: For file uploads.
     ```html
     <input type="file" id="fileUpload" name="fileUpload">
     ```

12. **Color Picker**:  
   - `<input type="color">`: For selecting colors.
     ```html
     <input type="color" id="favcolor" name="favcolor">
     ```

13. **Search Input**:  
   - `<input type="search">`: For search boxes.
     ```html
     <input type="search" id="search" name="search">
     ```

14. **Range**:  
   - `<input type="range">`: For selecting a value from a range.
     ```html
     <input type="range" id="volume" name="volume" min="0" max="100">
     ```

15. **URL**:  
   - `<input type="url">`: For URL input, validates a URL format.
     ```html
     <input type="url" id="website" name="website">
     ```

16. **Tel**:  
   - `<input type="tel">`: For telephone numbers.
     ```html
     <input type="tel" id="phone" name="phone">
     ```

---

## **4. HTML Attributes**

HTML elements often have attributes that provide additional information. Common attributes include:

- **`id`**: Unique identifier for an element.
- **`class`**: Defines one or more class names for an element.
- **`href`**: Specifies the URL for links.
- **`src`**: Specifies the source for images or media.
- **`alt`**: Alternative text for images.
- **`style`**: Inline CSS styles for the element.
- **`value`**: Specifies the value for input elements.
- **`name`**: Names form elements for identification.
- **`placeholder`**: Provides a placeholder text in an input field.

---

## **5. HTML Semantic Elements**

Semantic HTML tags provide meaning to the web page, making it more readable for both developers and search engines.

- **`<header>`**: Defines the header of a page or section.
- **`<footer>`**: Defines the footer of a page or section.
- **`<article>`**: Represents independent content.
- **`<section>`**: Groups related content.
- **`<nav>`**: Defines navigation links.
- **`<aside>`**: Represents content tangentially related to the page content.
- **`<main>`**: Represents the main content of the document.
- **`<mark>`**: Highlights text.

---

## **6. HTML Comments**
Comments in HTML are written inside `<!-- -->` and are not displayed in the browser.

```html
<!-- This is a comment -->
```

---

## **7. HTML Forms and Form Validation**

HTML forms allow you to collect user input, and you can validate the data before submission.

### Form Validation Attributes:
- **`required`**: Ensures that the field must be filled out before submitting.
- **`minlength` / `maxlength`**: Defines the minimum/maximum length of input.
- **`pattern`**: Validates input against a regular expression.
- **`readonly`**: Makes the field uneditable.
- **`disabled`**: Prevents interaction with the field.

```html
<form>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <input type="submit" value="Submit">
</form>
```

---

