({
	doInit : function(component, event, helper) {
		component.set('v.showNewButton', $A.get('e.force:createRecord'));
		helper.setBoatTypeCollections(component);
	},
	
	createBoat: function (component, event, helper) {
		var createRecordEvent = $A.get('e.force:createRecord');
		createRecordEvent.setParams({
			'entityApiName' : 'Boat__c',
			'defaultFieldValues': {
				'BoatType__c': helper.getSelectedBoatId(component)
			},
		});
		createRecordEvent.fire();
	},
	
	findBoats: function(component, event, helper) {
		helper.broadcastSelectedBoatType(component);
	}
})