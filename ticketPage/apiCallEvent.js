fetch('https://api.staging.ticketmonti.com/api/v1/events/current', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {
        const displayCards = document.getElementById('displayCards');
        const currentSlug = window.location.href.split('?')[1];

        data.data.forEach(event => {
            const eventId = event.id;
            const eventTitle = event.title;
            const eventDescription = event.description;
            const eventStartDate = event.start_date;
            const eventEndDate = event.end_date;
            const eventThumbnail = event.thumbnail;
            const slug = event.slug;
            const eventLocation = event.venue.address;

            // Check if the event slug matches the current slug
            if (slug === currentSlug) {
                // Update the HTML of the dynamicInformation div
                const dynamicInformation = document.getElementById('dynamicInformation');
                dynamicInformation.innerHTML = `<h1 class="text-sm font-normal">${eventDescription}<h1>`;
                const title = document.getElementById('title');
                title.innerHTML = `<h2 class="bignoodle text-3xl max-[1060px]:pl-5">${eventTitle}</h2>`;
                const date = document.getElementById('date');
                date.innerHTML = `<h4 class="text-md max-[1060px]:pl-5 mt-8">${eventStartDate}</h4>`;
                const pic = document.getElementById('pic');
                pic.innerHTML = `<div class="min-[1265px]:w-[1200] h-full max-[1265px]:w-[1000px] max-[1020px]:w-full min-[750px]:h-[480] max-[750px]:h-[320] min-[1020px]:rounded-3xl mt-10 shadow-md"
          style="background-image: url(${eventThumbnail}); background-position: center; background-size: cover;">
        </div>`;
                const introduction = document.getElementById('introduction');
                introduction.innerHTML = `<span class="font-normal"> ${eventDescription}</span>`;
                const time = document.getElementById('time');
                time.innerHTML = `<p class="pl-2 font-semibold text-[17px]">Time</span>
          <p class="pl-2 text-[14px] font-normal">${eventEndDate}</span>`;
                const location = document.getElementById('location');
                location.innerHTML = `<h1 class="font-semibold text-[17px] pl-2">Location</h1>
          <p class="text-[14px] font-normal pl-2 max-[800px]:pr-5 ">${eventLocation}</p>`;
            } else {
                // Create a new div element for the event
                const eventDiv = document.createElement('div');
                eventDiv.id = `event-${eventId}`;
                eventDiv.innerHTML = `
          <div class="box-border border-[1px] rounded-3xl rounded-t-3xl border-slate-200 w-[300px] h-[400px] shadow-md mb-8 hover:shadow-2xl">
            <div class="h-1/2 w-full bg-cover rounded-t-3xl"
              style="background-image: url(${eventThumbnail})">
            </div>
            <h1 class="justify-center flex text-xl pt-3 bignoodle">${eventTitle}</h1>
            <h4 class="text-center p-2">${eventDescription}</h4>
            <div class="flex justify-center mt-10">
              <button class="learnMore box-border border-[1px] rounded-lg p-1 border-slate-200 mt-auto mx-auto">
                <a href="/eventInfo.html?${slug}" class="text-md text-slate-400">
                  <h1 class="text-md text-slate-400">
                    Learn more
                  </h1>
                </a>
              </button>
            </div>
          </div>
        `;

                // Append the new event div to the displayCards div
                displayCards.appendChild(eventDiv);
            }
        });
    })
    .catch(error => console.error(error));