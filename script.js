document.getElementById("yesBtn").addEventListener("click", function() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("resultPage").style.display = "block";
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var button = this;

    button.style.position = "absolute";
    button.style.left = (mouseX + 50) + "px";
    button.style.top = (mouseY + 50) + "px";
});
