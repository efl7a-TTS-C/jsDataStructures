// Exercise 1
// Here is a sample html file with a submit button. Now modify the style of the paragraph text through JavaScript code.
// Sample HTML file :

// Clicking on the button the font, font size, and color of the paragraph text will be changed.

function js_style() {
    let el = document.getElementById("text");
    el.style.fontFamily = "Impact";
    el.style.fontSize = "45px";
    el.style.color = "aqua";
}

