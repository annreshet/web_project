(function() {
    document.addEventListener("DOMContentLoaded", () => {
        calculateLoadTime()
    })
})();

function calculateLoadTime() {
    const startTime = new Date().getTime()
    const selector = document.querySelector(".time")

    window.addEventListener('load', () => {
        selector.innerHTML = " Время загрузки: " + ((new Date().getTime() - startTime) / 1000) + " секунды"
    })
}