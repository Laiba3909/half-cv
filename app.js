window.onload = function () {
    var loader = document.getElementById('load');
    var form = document.getElementById('content');
    if (loader) {
        loader.style.display = "block";
    }
    setTimeout(function () {
        if (loader) {
            loader.style.display = "none";
        }
        if (form) {
            form.style.display = "block";
        }
    }, 5000);
};
