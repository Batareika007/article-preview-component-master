var clickButton = document.querySelector(".footer-link");
var flowLinks = document.querySelector(".links");
clickButton.addEventListener("click", function () {
    flowLinks.classList.toggle("display-none");
    document.querySelector(".footer-link").classList.toggle("footer-link-active");
    console.log("button clicked");
});