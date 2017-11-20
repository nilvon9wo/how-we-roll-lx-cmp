({
	onBoatClick : function(component, event, helper) {
		helper.markSelectedBoat(component, event);

		//helper.detailSelectedBoat(component);
		var boat = component.get('v.boat');
		var boatSelected = $A.get('e.c:BoatSelected');
		boatSelected.setParam('boat', boat);
		boatSelected.fire();
		
		var plotMapMarker = $A.get('e.c:PlotMapMarker');
		plotMapMarker.setParam('sObjectId', boat.Id); 
		plotMapMarker.setParam('lat', boat.Geolocation__Latitude__s); 
		plotMapMarker.setParam('long', boat.Geolocation__Longitude__s); 
		plotMapMarker.setParam('label', boat.Name); 
		plotMapMarker.fire();
	}
})