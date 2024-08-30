document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');

    // Initialize the FullCalendar
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        events: [
            { title: 'Réservé', start: '2024-08-15', end: '2024-08-20' }
        ],
        select: function(info) {
            document.getElementById('dates').value = `${info.startStr} - ${info.endStr}`;
        }
    });

    calendar.render();

    // Handle form submission
    const form = document.getElementById('reservation-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const dates = document.getElementById('dates').value;
        const mailtoLink = `mailto:marianne.eyraud@gmail.com?subject=Demande de réservation&body=Je souhaiterais réserver l'appartement pour les dates suivantes : ${dates}`;

        window.location.href = mailtoLink;
    });

    // Language switcher
    const btnFr = document.getElementById('btn-fr');
    const btnEn = document.getElementById('btn-en');
    const contentFr = document.getElementById('content-fr');
    const contentEn = document.getElementById('content-en');

    btnFr.addEventListener('click', function() {
        contentFr.style.display = 'block';
        contentEn.style.display = 'none';
    });

    btnEn.addEventListener('click', function() {
        contentFr.style.display = 'none';
        contentEn.style.display = 'block';
    });

    // Initial display setup
    contentFrn.style.display = 'none'; // Show French content by default
});
