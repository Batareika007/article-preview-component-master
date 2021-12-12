var clickButton = document.querySelector(".footer-link");
var flowLinks = document.querySelector(".links");

clickButton.addEventListener("click", function () {
    flowLinks.classList.toggle("display-none");
    document.querySelector(".footer-link").classList.toggle("footer-link-active");
    // changeImage();
    // console.log("button clicked");
    function changeImage() {

        // if (document.getElementById("changeOnClick").src == "images/icon-share.svg") {
        //     document.getElementById("changeOnClick").src = "images/icon-share-white.svg";
        //     console.log("change to white")
        // } else {
        //     document.getElementById("share-icon-on-click").src = "images/icon-share.svg";
        //     console.log("change to regular")
        // }
        if (document.querySelector(".changeonclick").src == "images/icon-share.svg") {
            document.querySelector(".changeonclick").src = "images/icon-share-white.svg";
            console.log("change to white")
        } else {
            document.querySelector(".changeonclick").src = "images/icon-share.svg";
            console.log("change to regular")
        }
    }
});