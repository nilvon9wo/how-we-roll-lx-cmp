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
	
	onFormSubmit: function(component, event, helper) {
		var formSubmit = component.getEvent('formsubmit');
		formSubmit.setParams({
			formData: {
				boatTypeId: helper.getSelectedBoatId(component)
			}
		});
		formSubmit.fire();
	}
})