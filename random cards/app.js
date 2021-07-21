document.getElementById("zurag").style.display = "none";
document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("zurag").style.display = "block";
    let arr = ["blue", "gray", "green", "purple", "red", "yellow"];
    let ran, h1, text;

    ran = Math.floor(Math.random() * arr.length + 1);
    if (ran === 1) {
        console.log("blue");
        document.getElementById("zurag").src = "./img/" + "blue" + "_back.png";
        h1 = document.createElement("h1");
        h1.setAttribute("id", "colorName");
        text = document.createTextNode("BLUEEE");
        h1.appendChild(text);
        document.getElementById("container").appendChild(h1);

        document.getElementById("colorName").append(text)
    } else if (ran === 2) {
        console.log("gray");
        document.getElementById("zurag").src = "./img/" + "gray" + "_back.png";
    } else if (ran === 3) {
        console.log("green");
        document.getElementById("zurag").src = "./img/" + "green" + "_back.png";
    } else if (ran === 4) {
        console.log("purple");
        document.getElementById("zurag").src = "./img/" + "purple" + "_back.png";
    } else if (ran === 5) {
        console.log("red");
        document.getElementById("zurag").src = "./img/" + "red" + "_back.png";
    } else if (ran === 6) {
        console.log("yellow");
        document.getElementById("zurag").src = "./img/" + "yellow" + "_back.png";
    };

    console.log(ran);
});


