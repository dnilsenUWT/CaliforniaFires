
	var map = L.map('map').setView([37.78, -120.36], 6);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG5pbHNlbiIsImEiOiJjazIzeHFyd3kwMm03M25rNGkyNnJuODFjIn0.THS8KaBhpFTcgWOjMpp6_g', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11'
	}).addTo(map);


	var controlLayers = L.control.layers().addTo(map);

	$.getJSON("geojson_data/fire_2000_2009.json",function(data){
    // add GeoJSON layer to the map once the file is loaded
    var geoJSON = L.geoJson(data, {
			onEachFeature: function( feature, layer ){
        layer.bindPopup( "<strong>" + feature.properties.FIRE_NAME + "</strong>")
      }
		}).addTo(map);
		controlLayers.addOverlay(geoJSON, "2000-2010");
	});

		$.getJSON("geojson_data/fire_1990_1999.json",function(data){
	    // add GeoJSON layer to the map once the file is loaded
	    var geoJSON = L.geoJson(data, {
				onEachFeature: function( feature, layer ){
	        layer.bindPopup( "<strong>" + feature.properties.FIRE_NAME + "</strong>")
	      }
			}).addTo(map);
			controlLayers.addOverlay(geoJSON, "1990-1999");
		});



	// var overlays = {
	// 	"2000-2010": fire2000,
	// 	"1990-1999": fire1999,
	// };
