var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})
closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

// product search functionality
var product_container = document.getElementById("product_container")
var search = document.getElementById("search")
var productList = product_container.querySelectorAll("div")
var count;
search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase();
    for (count = 0; count < productList.length; count++) {
        var productname=productList[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";
        }
        else {
            productList[count].style.display = "block";
        }
    }
})