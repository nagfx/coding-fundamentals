const containerWindow = document.querySelector(".wrapper")

console.log(containerWindow)
var isRegisterClicked = false;

function toggleRegisterWindow() {
    if (isRegisterClicked) {
        containerWindow.className = "wrapper slide-out hide";

        isRegisterClicked = !isRegisterClicked;
        console.log(isRegisterClicked);
    }
    else {
        containerWindow.className = "wrapper slide-in";
        isRegisterClicked = !isRegisterClicked;

        console.log(isRegisterClicked);

    }

};