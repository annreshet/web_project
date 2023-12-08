function saveEvent(event) {
    event.preventDefault()

    let eventsData = JSON.parse(localStorage.getItem('events'))
    if(eventsData == null) {
        eventsData = []
        localStorage.setItem('events', JSON.stringify(eventsData))
    }

    function saveLS(data) {
        eventsData.push(data)
        localStorage.setItem('events', JSON.stringify(eventsData))
    }

    const form = event.target;

    const name = form.elements.namedItem('nameEvent').value
    const date = form.elements.namedItem('dateEvent').value
    const description = form.elements.namedItem('descriptionEvent').value

    const dateType = new Date(date);

    const monthNames = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    const day = dateType.getDate();
    const monthIndex = dateType.getMonth();
    const month = monthNames[monthIndex];
    const hours = dateType.getHours();
    const minutes = dateType.getMinutes();

    const formattedDate = `${day} ${month} в ${hours}:${minutes}`;

    const formData = {
        name: name,
        date: formattedDate,
        description: description
    }

    saveLS(formData)
    addEvent()
    document.getElementById('form').reset();
}

function addEvent() {
    let events = document.querySelector('.events')
    const data = JSON.parse(localStorage.getItem('events'))

    let event = []

    data.forEach(data => {
        event += `<div class="event"><h3>${data.name}</h3> <p class="formDate">${data.date}</p> <p class="formDescription">${data.description}</p></div>`
    })

    events.innerHTML = event
}
document.addEventListener('DOMContentLoaded', function (){
    addEvent()
})