({
	onBoatClick : function(component, event, helper) {
		helper.markSelectedBoat(component, event);

		var boat = component.get('v.boat');
		helper.detailSelectedBoat(boat);
		helper.plot(boat);
	}
})