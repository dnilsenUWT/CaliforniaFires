//JS and Leaflet stuff

var map = L.map('map').setView([37.78, -120.36], 6);


// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG5pbHNlbiIsImEiOiJjazIzeHFyd3kwMm03M25rNGkyNnJuODFjIn0.THS8KaBhpFTcgWOjMpp6_g', {
				attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				maxZoom: 18,
				//accessToken: "pk.eyJ1IjoiZG5pbHNlbiIsImEiOiJjazIzeHFyd3kwMm03M25rNGkyNnJuODFjIn0.THS8KaBhpFTcgWOjMpp6_g",
        id: 'mapbox/dark',
			}).addTo(map);

//Add some geojson
//
// function popup (feature, layer) {
//   layer.bindPopup("I'm a popup");
// };
//
// L.geoJson(fire2010,{
//
//   onEachFeature: popup
//
// }).addTo(map);
