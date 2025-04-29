document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000, 
        once: true, 
    });
});

async function loadNavbar() {
    const response = await fetch("navbar.html");
    const navbarHtml = await response.text();
    document.getElementById("navbar").innerHTML = navbarHtml;

    AOS.refresh();
}

async function loadFooter() {
    const response = await fetch("footer.html");
    const footerHTML = await response.text();
    document.getElementById("footer").innerHTML = footerHTML;

    AOS.refresh();
}

loadNavbar();
loadFooter();