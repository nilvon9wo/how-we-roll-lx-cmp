({
	onBoatClick : function(component, event, helper) {
		var boatSelect = component.getEvent('boatSelect');
		boatSelect.setParams({
			boatId: event.getSource().getLocalId()
		});
		boatSelect.fire();
	}
})