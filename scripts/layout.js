async function loadNavbar(){
    const response = await fetch("navbar.html");
    const navbarHtml = await response.text();
    document.getElementById("navbar").innerHTML = navbarHtml;
}

async function loadfooter(){
    const response = await fetch("footer.html");
    const footerHTML = await response.text();
    document.getElementById("footer").innerHTML = footerHTML;
}

loadfooter();
loadNavbar();