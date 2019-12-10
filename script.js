
	var map = L.map('map').setView([37.78, -120.36], 6);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZG5pbHNlbiIsImEiOiJjazIzeHFyd3kwMm03M25rNGkyNnJuODFjIn0.THS8KaBhpFTcgWOjMpp6_g', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11'
	}).addTo(map);


	var controlLayers = L.control.layers().addTo(map);

	$.getJSON("geojson_data/fire_2010_2018.json",function(data){
    // add GeoJSON layer to the map once the file is loaded
    var fire2010 = L.geoJson(data, {
			onEachFeature: function( feature, layer ){
				layer.bindPopup( "Fire Name: " + "<strong>" + feature.properties.FIRE_NAME + "</strong><br/>" + "Year: " + feature.properties.YEAR_)
      }
		}).addTo(map);
		controlLayers.addOverlay(fire2010, "2010-2018");
	});

	$.getJSON("geojson_data/fire_2000_2009.json",function(data){
    // add GeoJSON layer to the map once the file is loaded
    var fire2000 = L.geoJson(data, {
			onEachFeature: function( feature, layer ){
				layer.bindPopup( "Fire Name: " + "<strong>" + feature.properties.FIRE_NAME + "</strong><br/>" + "Year: " + feature.properties.YEAR_)
      }
		}).addTo(map);
		controlLayers.addOverlay(fire2000, "2000-2009");
	});

		$.getJSON("geojson_data/fire_1990_1999.json",function(data){
	    // add GeoJSON layer to the map once the file is loaded
	    var fire1990 = L.geoJson(data, {
				onEachFeature: function( feature, layer ){
					layer.bindPopup( "Fire Name: " + "<strong>" + feature.properties.FIRE_NAME + "</strong><br/>" + "Year: " + feature.properties.YEAR_)
	      }
			}).addTo(map);
			controlLayers.addOverlay(fire1990, "1990-1999");
		});

		$.getJSON("geojson_data/fire_1980_1989.json",function(data){
	    // add GeoJSON layer to the map once the file is loaded
	    var fire1980 = L.geoJson(data, {
				onEachFeature: function( feature, layer ){
					layer.bindPopup( "Fire Name: " + "<strong>" + feature.properties.FIRE_NAME + "</strong><br/>" + "Year: " + feature.properties.YEAR_)
	      }
			}).addTo(map);
			controlLayers.addOverlay(fire1980, "1980-1989");
		});

		$.getJSON("geojson_data/fire_1970_1979.json",function(data){
			// add GeoJSON layer to the map once the file is loaded
			var fire1970 = L.geoJson(data, {
				onEachFeature: function( feature, layer ){
					layer.bindPopup( "Fire Name: " + "<strong>" + feature.properties.FIRE_NAME + "</strong><br/>" + "Year: " + feature.properties.YEAR_)
				}
			}).addTo(map);
			controlLayers.addOverlay(fire1970, "1970-1979");
		});

		$.getJSON("geojson_data/fire_1960_1969.json",function(data){
			// add GeoJSON layer to the map once the file is loaded
			var fire1960 = L.geoJson(data, {
				onEachFeature: function( feature, layer ){
					layer.bindPopup( "Fire Name: " + "<strong>" + feature.properties.FIRE_NAME + "</strong><br/>" + "Year: " + feature.properties.YEAR_)
				}
			}).addTo(map);
			controlLayers.addOverlay(fire1960, "1960-1969");
		});

		$.getJSON("geojson_data/fire_1950_1959.json",function(data){
			// add GeoJSON layer to the map once the file is loaded
			var fire1950 = L.geoJson(data, {
				onEachFeature: function( feature, layer ){
					layer.bindPopup( "Fire Name: " + "<strong>" + feature.properties.FIRE_NAME + "</strong><br/>" + "Year: " + feature.properties.YEAR_)
				}
			}).addTo(map);
			controlLayers.addOverlay(fire1950, "1950-1959");
		});

		$.getJSON("geojson_data/fire_1940_1949.json",function(data){
			// add GeoJSON layer to the map once the file is loaded
			var fire1940 = L.geoJson(data, {
				onEachFeature: function( feature, layer ){
					layer.bindPopup( "Fire Name: " + "<strong>" + feature.properties.FIRE_NAME + "</strong><br/>" + "Year: " + feature.properties.YEAR_)
				}
			}).addTo(map);
			controlLayers.addOverlay(fire1940, "1940-1949");
		});

		$.getJSON("geojson_data/fire_1930_1939.json",function(data){
			// add GeoJSON layer to the map once the file is loaded
			var fire1930 = L.geoJson(data, {
				onEachFeature: function( feature, layer ){
					layer.bindPopup( "Fire Name: " + "<strong>" + feature.properties.FIRE_NAME + "</strong><br/>" + "Year: " + feature.properties.YEAR_)
				}
			}).addTo(map);
			controlLayers.addOverlay(fire1930, "1930-1939");
		});

		$.getJSON("geojson_data/fire_1920_1929.json",function(data){
			// add GeoJSON layer to the map once the file is loaded
			var fire1920 = L.geoJson(data, {
				onEachFeature: function( feature, layer ){
					layer.bindPopup( "Fire Name: " + "<strong>" + feature.properties.FIRE_NAME + "</strong><br/>" + "Year: " + feature.properties.YEAR_)
				}
			}).addTo(map);
			controlLayers.addOverlay(fire1920, "1920-1929");
		});

		$.getJSON("geojson_data/fire_1910_1919.json",function(data){
			// add GeoJSON layer to the map once the file is loaded
			var fire1910 = L.geoJson(data, {
				onEachFeature: function( feature, layer ){
					layer.bindPopup( "Fire Name: " + "<strong>" + feature.properties.FIRE_NAME + "</strong><br/>" + "Year: " + feature.properties.YEAR_)
				}
			}).addTo(map);
			controlLayers.addOverlay(fire1910, "1910-1919");
		});

		$.getJSON("geojson_data/fire_1900_1909.json",function(data){
			// add GeoJSON layer to the map once the file is loaded
			var fire1900 = L.geoJson(data, {
				onEachFeature: function( feature, layer ){
					layer.bindPopup( "Fire Name: " + "<strong>" + feature.properties.FIRE_NAME + "</strong><br/>" + "Year: " + feature.properties.YEAR_)
				}
			}).addTo(map);
			controlLayers.addOverlay(fire1900, "1900-1909");
		});
	// var overlays = {
	// 	"2000-2010": fire2000,
	// 	"1990-1999": fire1999,
	// };
