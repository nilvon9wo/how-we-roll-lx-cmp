({
	doInit : function(component, event, helper) {
		helper.onInit(component, event, helper);
	},
	
	onRecordUpdated : function(component, event, helper) {
		helper.alertSuccess('A blank review has been initialized successfully');
	},
	
	onSave : function(component, event, helper) {
		component.find('service')
			.saveRecord($A.getCallback(function (saveResult){
				if (saveResult.state === 'ERROR') {
					console.log('Error saving review record: ' + component.get('v.recordError'));
				} else {
					helper.alertSuccess('Your review has been saved successfully');
					helper.onInit(component, event, helper);
					component.getEvent('boatReviewAdded').fire();
				}
			}));
	},
})