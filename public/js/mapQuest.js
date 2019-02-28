function initMap() {
	// add your code here
	L.mapquest.key = 'IXm3G0yPjbjnzZVq4Z2ss502AZuV5fH7';

	var map = L.mapquest.map('map', {
		center: [32.878806, -177.235912], 
		layers: L.mapquest.tileLayer('map'),
		zoom: 12, 
		zoomControl: false 
	});

	L.marker([32.878806, -177.235912]).addTo(map); 
}