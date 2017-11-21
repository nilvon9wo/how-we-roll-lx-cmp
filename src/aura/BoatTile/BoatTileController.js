({
	onBoatClick : function(component, event, helper) {
		var boat = component.get('v.boat');
		helper.detailSelectedBoat(boat);
		helper.plot(boat);
	}
})