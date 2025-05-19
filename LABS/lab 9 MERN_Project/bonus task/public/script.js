let map, marker;
let locationSelected = false;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 20.5937, lng: 78.9629 },
    zoom: 5
  });

  map.addListener('click', (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    document.getElementById('lat').value = lat;
    document.getElementById('lng').value = lng;
    locationSelected = true;

    if (marker) marker.setMap(null);
    marker = new google.maps.Marker({
      position: { lat, lng },
      map
    });
  });
}

document.getElementById('eventForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Validate location is selected
  if (!locationSelected) {
    showResponse("Please select a location on the map", "error");
    return;
  }

  const event = {
    eventName: document.getElementById('eventName').value,
    organizerName: document.getElementById('organizerName').value,
    date: document.getElementById('date').value,
    location: {
      lat: parseFloat(document.getElementById('lat').value),
      lng: parseFloat(document.getElementById('lng').value)
    }
  };

  try {
    const res = await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    });

    if (!res.ok) {
      throw new Error('Server returned an error');
    }

    const result = await res.json();
    showResponse(`✅ Event registered successfully! ID: ${result.id}`, "success");
    document.getElementById('eventForm').reset();
    
    // Reset the map marker
    if (marker) marker.setMap(null);
    locationSelected = false;
  } catch (error) {
    console.error('Error:', error);
    showResponse("❌ Error saving event. Please try again.", "error");
  }
});

function showResponse(message, type) {
  const responseEl = document.getElementById('response');
  responseEl.style.display = 'block';
  responseEl.innerText = message;
  
  if (type === "error") {
    responseEl.style.background = "#ffebee";
    responseEl.style.color = "#c62828";
  } else {
    responseEl.style.background = "#e8f5e9";
    responseEl.style.color = "#2e7d32";
  }
  
  // Scroll to response
  responseEl.scrollIntoView({ behavior: 'smooth' });
}
