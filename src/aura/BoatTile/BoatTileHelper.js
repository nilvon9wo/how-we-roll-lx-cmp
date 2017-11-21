({
	markSelectedBoat : function(component, event) {
		var boatSelect = component.getEvent('boatSelect');
		boatSelect.setParams({
			boatId: event.getSource().getLocalId()
		});
		boatSelect.fire();		
	},
	
	detailSelectedBoat: function(boat) {
		var boatSelected = $A.get('e.c:BoatSelected');
		boatSelected.setParam('boat', boat);
		boatSelected.fire();	
	},
	
	plot: function(boat) {
		var plotMapMarker = $A.get('e.c:PlotMapMarker');
		plotMapMarker.setParam('sObjectId', boat.Id); 
		plotMapMarker.setParam('lat', boat.Geolocation__Latitude__s); 
		plotMapMarker.setParam('long', boat.Geolocation__Longitude__s); 
		plotMapMarker.setParam('label', boat.Name); 
		plotMapMarker.fire();
	}
})