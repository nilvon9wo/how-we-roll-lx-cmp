({
	markSelectedBoat : function(component, event) {
		var boatSelect = component.getEvent('boatSelect');
		boatSelect.setParams({
			boatId: event.getSource().getLocalId()
		});
		boatSelect.fire();		
	},
	
	detailSelectedBoat: function(component) {
		var boatSelected = $A.get('e.c:BoatSelected');
		boatSelected.setParam('boat', component.get('v.boat'));
		boatSelected.fire();	
	}
})