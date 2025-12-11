Here is your **professional README.md file** based on your exact project code.
Ye GitHub ke liye perfect, clean, short + clear explanation ke saath likha gaya hai.
Just copy–paste to your repo.

---

# 📘 **Calculator App**

A simple, clean, and responsive **Calculator Application** built using **HTML, CSS, and JavaScript** with a complete mobile-first approach.
This project performs all basic arithmetic operations and includes features like **DEL**, **AC**, **percentage**, **decimal**, and **equals (=)** button functionality.

---

## 🚀 **Features**

* ✔ Mobile-first, responsive UI
* ✔ Clean and dark-theme calculator design
* ✔ Button hover zoom animation
* ✔ Supports basic arithmetic operations:

  * Addition (+)
  * Subtraction (-)
  * Multiplication (*)
  * Division (/)
  * Percentage (%)
* ✔ **DEL** → deletes last character
* ✔ **AC** → clears entire input
* ✔ **Readonly input** to prevent manual typing
* ✔ Built using simple vanilla JavaScript

---

## 🛠️ **Tech Stack**

* **HTML5**
* **CSS3 (Flexbox, Mobile-first styling)**
* **JavaScript (DOM, Events, eval, substring)**

---

## 📂 **Project Structure**

```
📁 Calculator-App
│
├── index.html
├── index.css
└── index.js
```



## 🧮 **How It Works**

### JavaScript logic:

* **substring()** is used for deleting the last digit.
* **eval()** is used to evaluate the entire mathematical expression.
* **Event listeners** are added to each button using `forEach`.
* `Array.from()` converts button list into a real array for easy iteration.
* Value updates in the display occur on each button click.

Code example:

```javascript
if(e.target.innerHTML=='DEL'){
    string = string.substring(0, string.length - 1);
    displayValue.value = string;

} else if(e.target.innerHTML=="AC"){
    string = "";
    displayValue.value = string;

} else if(e.target.innerHTML=="="){
    string = eval(string);
    displayValue.value = string;

} else {
    string += e.target.innerHTML;
    displayValue.value = string;
}
```

---

## 📱Responsive Design

* UI designed with **mobile-first approach**
* Uses Flexbox for alignment
* Container max-width ensures smooth appearance on all screen sizes
* Buttons resize cleanly on smaller devices

---


## 🧑‍💻 **Author**

**Vaishnavi Machhirke**
A passionate learner exploring JavaScript and Web Development.

---

## ⭐ **If you like this project, don’t forget to star the repo!**



