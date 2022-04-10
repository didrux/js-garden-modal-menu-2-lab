const firstItem = new Object("            <a class=\"item\">\n" +
    "                <img src=\"img/1.png\" alt=\"\" draggable=\"false\">\n" +
    "                <p><span id=\"more1\">This is the start page of the Currency Bot.</span></p>\n" +
    "                <button onclick=\"myFunction(more1, myBtn1)\" id=\"myBtn1\">Show text</button>\n" +
    "            </a>");
const secondItem = new Object("            <a class=\"item\">\n" +
    "                <img src=\"img/2.png\" alt=\"\" draggable=\"false\">\n" +
    "                <p><span id=\"more2\">Description of the currency bot</span></p>\n" +
    "                <button onclick=\"myFunction(more2, myBtn2)\" id=\"myBtn2\">Show text</button>\n" +
    "            </a>");
const thirdItem = new Object("            <a class=\"item\">\n" +
    "                <img src=\"img/3.png\" alt=\"\" draggable=\"false\">\n" +
    "                <p><span id=\"more3\">Example of the usage of the currency bot</span></p>\n" +
    "                <button onclick=\"myFunction(more3, myBtn3)\" id=\"myBtn3\">Show text</button>\n" +
    "            </a>");

const items = [firstItem, secondItem, thirdItem];

document.querySelector('#show-images').onclick = executeMathResult;
function executeMathResult() {
    document.getElementById('first_sample_items').innerHTML = items[0] + items[1] + items[2];
    const more1 = document.getElementById("more1");
    const myBtn1 = document.getElementById("myBtn1");
    const more2 = document.getElementById("more2");
    const myBtn2 = document.getElementById("myBtn2");
    const more3 = document.getElementById("more3");
    const myBtn3 = document.getElementById("myBtn3");
}

function myFunction(moreText, btnText) {

    if (btnText.innerHTML === "Show text") {
        btnText.innerHTML = "Hide text";
        moreText.style.display = "inline";
    } else {
        btnText.innerHTML = "Show text";
        moreText.style.display = "none";
    }
}