const firstItem = "            <a class=\"item\">\n" +
    "                <img src=\"img/1.png\" alt=\"\" draggable=\"false\">\n" +
    "                <p><span id=\"more\">Sed dapibus pulvinar nibh tempor portsdfsdfsdfsdfsdfsdfsdfsdfsfa.</span></p>\n" +
    "                <button onclick=\"myFunction()\" id=\"myBtn\">Читать больше</button>\n" +
    "            </a>";
const secondItem = "            <a class=\"item\">\n" +
    "                <img src=\"img/2.png\" alt=\"\" draggable=\"false\">\n" +
    "                <p>Lorerdiet<span id=\"dots\">...</span><span id=\"more\">Sed dapibus pulvinar nibh tempor porta.</span></p>\n" +
    "                <button onclick=\"myFunction()\" id=\"myBtn\">Читать больше</button>\n" +
    "            </a>";
const thirdItem = "            <a class=\"item\">\n" +
    "                <img src=\"img/3.png\" alt=\"\" draggable=\"false\">\n" +
    "                <p>Lorerdiet<span id=\"dots\">...</span><span id=\"more\">Sed dapibus pulvinar nibh tempor porta.</span></p>\n" +
    "                <button onclick=\"myFunction()\" id=\"myBtn\">Читать больше</button>\n" +
    "            </a>";

const items = [firstItem, secondItem, thirdItem];


document.querySelector('#show-images').onclick = executeMathResult;
function executeMathResult() {
    document.getElementById('first_sample_items').innerHTML = items[0] + items[1] + items[2];
}

function myFunction(dots, moreText, btnText) {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Читать больше";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Читать меньше";
        moreText.style.display = "inline";
    }
}