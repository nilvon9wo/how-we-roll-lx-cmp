({
	onBoatSelected : function(component, event, helper) {
		var boat = event.getParam('boat');
		console.log('######## onBoatSelected boat', boat);
		component.set('v.boat', boat);
		component.set('v.id', boat.Id);
	},
	onRecordUpdated : function(component, event, helper) {
	}
})