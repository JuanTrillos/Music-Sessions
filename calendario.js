document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'dayGrid' ],
    events: [
      {
        title: 'Evento 1',
        start: '2023-03-01'
      },
      {
        title: 'Evento 2',
        start: '2023-03-05',
        end: '2023-03-07'
      },
      {
        title: 'Evento 3',
        start: '2023-03-09T12:30:00',
        allDay: false
      }
      // ...
    ]
  });

  calendar.render();
});
