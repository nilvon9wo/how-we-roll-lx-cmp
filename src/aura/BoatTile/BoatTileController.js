({
	onBoatClick : function(component, event, helper) {
		helper.markSelectedBoat(component, event);

		//helper.detailSelectedBoat(component);
		var boatSelected = $A.get('e.c:BoatSelected');
		boatSelected.setParam('boat', component.get('v.boat'));
		boatSelected.fire();	
	}
})