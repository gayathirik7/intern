// Selecting elements
const eventForm = document.getElementById('event-form');
const eventName = document.getElementById('event-name');
const eventDate = document.getElementById('event-date');
const eventTime = document.getElementById('event-time');
const eventLocation = document.getElementById('event-location');
const eventsContainer = document.getElementById('events');

// Event listener for form submission
eventForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get event details from the form
    const name = eventName.value;
    const date = eventDate.value;
    const time = eventTime.value;
    const location = eventLocation.value;

    // Create a new event object
    const event = {
        name,
        date,
        time,
        location
    };

    // Create event display
    displayEvent(event);

    // Reset form
    eventForm.reset();
});

// Function to display event on the page
function displayEvent(event) {
    const eventElement = document.createElement('div');
    eventElement.classList.add('event');

    eventElement.innerHTML = `
        <div class="event-details">
            <div class="event-name">${event.name}</div>
            <div class="event-date-time">${event.date} at ${event.time}</div>
        </div>
        <div class="event-location">Location: ${event.location}</div>
    `;

    eventsContainer.appendChild(eventElement);
}
