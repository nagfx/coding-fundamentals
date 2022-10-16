const pallette = document.querySelector(".palette")
var isPalletteShowing = false;
// console.log(pallette)



document.addEventListener("keydown",(e) => {
    console.log(e);
    if (e.key === "k" && e.ctrlKey) {
        isPalletteShowing = !isPalletteShowing;
        if (isPalletteShowing) {        
            pallette.className = "palette fade-in";
          }
        else {
            pallette.className = "palette fade-out hide"
        }
    }
    else {

    }

} );


