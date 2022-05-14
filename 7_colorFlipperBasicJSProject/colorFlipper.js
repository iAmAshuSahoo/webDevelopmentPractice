// console.log("Hello")

let changeColorButton = document.getElementById("btn");
let hexColor = document.querySelector("#hex-color");
// let body = document.getElementsByTagName("body")[0];
let mainContent = document.getElementById("main");
let changeList = document.querySelectorAll("li");
let colorChangeMessage = document.querySelector("#color-changed");
let message = '';
let flag = false;

// console.log(body)
for(let ind = 0; ind < changeList.length; ind++) {
    console.log(changeList[ind])
    changeList[ind].addEventListener("click", () => setFlag(changeList[ind]));
    changeColorButton.addEventListener("click", changeColor);
}

function changeColor () {
    if (flag === true) {
        let red = Math.floor(Math.random()*255);
        let green = Math.floor(Math.random()*255);
        let blue = Math.floor(Math.random()*255);
        hexColor.innerText = `rgb(${red},${green},${blue})`;
    } else {
        hexColor.innerText = `#${Math.floor(Math.random()*16777215).toString(16).toUpperCase()}`;
    }
    mainContent.style.backgroundColor = hexColor.innerText
}

function setFlag (item) {
    console.log(colorChangeMessage)
    
    if (item.innerText === "Simple") {
        flag = true;
        colorChangeMessage.innerHTML = "Color code changed to <span id='message'>RGB</span>";
    } else {
        flag = false;
        colorChangeMessage.innerHTML = "Color code changed to <span id='message'>HEX</span>";
    }
    colorChangeMessage.style.visibility = "visible"
    hexColor.innerText = "Default Color";
    mainContent.style.backgroundColor = "#F1f5f8";

    setTimeout(
        function setting () {
            console.log("Hi")
            colorChangeMessage.style.visibility = "hidden";
        } , 2000);

}