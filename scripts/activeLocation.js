document.addEventListener("DOMContentLoaded", () => {
    const location = document.location.href;

    const culture = document.getElementById("culture")
    const entertainment = document.getElementById('entertainment')
    const kids = document.getElementById('kids')

    if(location.includes("culture.html")) {
        culture.classList.add("active")
    } else if(location.includes('entertainment.html')){
        entertainment.classList.add('active')
    } else if(location.includes('kids.html')) {
        kids.classList.add('active')
    }

})