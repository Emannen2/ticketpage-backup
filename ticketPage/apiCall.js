fetch('https://api.staging.ticketmonti.com/api/v1/events/current', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => {
    const displayCards = document.getElementById('displayCards');

    data.data.forEach(event => {
      const eventId = event.id;
      const eventTitle = event.title;
      const eventDescription = event.description;
      const eventStartDate = event.start_date;
      const eventEndDate = event.end_date;
      const eventThumbnail = event.thumbnail;
      const slug = event.slug;

      // Create a new div element with the event ID
      const eventDiv = document.createElement('div');
      eventDiv.id = `event-${eventId}`;

      // Update the HTML of the event div
      eventDiv.innerHTML = `
      <div class="box-border border-[1px] rounded-3xl rounded-t-3xl border-slate-200 w-[300px] h-[400px] hover shadow-md mb-8 hover:shadow-2xl">
        <div class="h-1/2 w-full bg-cover rounded-t-3xl"
          style="background-image: url(${eventThumbnail})">
        </div>
        <h1 class="justify-center flex text-xl pt-3 bignoodle">${eventTitle}</h1>
        <h4 class="text-center p-2">${eventDescription}</h4>
        <div class="flex justify-center- mt-10">
          <button class="learnMore box-border border-[1px] rounded-lg p-1 border-slate-200 mt-auto mx-auto">
          <a href="/eventInfo.html?${slug}" class="text-md text-slate-400">
            <h1 class="text-md text-slate-400">
              Learn more
            </h1>
          </button>
        </div>
      </div>
    `;

      // Append the event div to the displayCards div
      displayCards.appendChild(eventDiv);
    });
  })
  .catch(error => console.error(error));