function hamburgerDrop() {
    var x = document.getElementById("links");
    var y = document.getElementById("izlozbe");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}

var title = document.getElementById("title");
var text = document.getElementById("text");

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("gallery-item")) {
        const src = e.target.getAttribute("src");
        title.innerHTML = e.target.getAttribute("title");
        text.innerHTML = e.target.getAttribute("alt")
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})
