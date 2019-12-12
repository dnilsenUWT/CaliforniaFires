

	var map2 = L.map('map2').setView([37.78, -120.36], 7);



	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG5pbHNlbiIsImEiOiJjazIzeHFyd3kwMm03M25rNGkyNnJuODFjIn0.THS8KaBhpFTcgWOjMpp6_g', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/dark-v10'
	}).addTo(map2);




	var controlLayers2 = L.control.layers(

	).addTo(map2);

	L.control.defaultExtent()

.addTo(map2);


		// Map 2
		$.getJSON("geojson_data/prescribed.json",function(data){
			// add GeoJSON layer to the map once the file is loaded
			var prescribed = L.geoJson(data, {
				style: function(feature){
				      var fillColor = "#feb24c";
							return { weight: 0, fillColor: fillColor, fillOpacity: 1 };
						}
			}).addTo(map2);
			controlLayers2.addOverlay(prescribed, "All prescribed from 1900-2018");
		});

		$.getJSON("geojson_data/all_fires.json",function(data){
	    // add GeoJSON layer to the map once the file is loaded
	    var allfire = L.geoJson(data, {
				style: function(feature){
							var fillColor = "#f03b20";
							return { weight: 0, fillColor: fillColor, fillOpacity: 1 };
						}
			}).addTo(map2);
			controlLayers2.addOverlay(allfire, "All wildfire from 1900-2018");
		});
