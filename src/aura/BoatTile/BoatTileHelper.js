({
	detailSelectedBoat: function(boat) {
		var boatSelected = $A.get('e.c:BoatSelectedEvent');
		boatSelected.setParam('boatId', boat.Id);
		boatSelected.fire();	
	},
	
	plot: function(boat) {
		var plotMapMarker = $A.get('e.c:BoatMarkerEvent');
		plotMapMarker.setParam('sObjectId', boat.Id); 
		plotMapMarker.setParam('lat', boat.Geolocation__Latitude__s); 
		plotMapMarker.setParam('long', boat.Geolocation__Longitude__s); 
		plotMapMarker.setParam('label', boat.Name); 
		plotMapMarker.fire();
	}
})