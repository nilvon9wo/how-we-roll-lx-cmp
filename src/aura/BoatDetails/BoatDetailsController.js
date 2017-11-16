({
	onBoatReviewAdded : function (component, event, helper) {
		component.find('boatTabSet').set('v.selectedTabId', 'boatreviewtab');
		component.find('boatReviews').refresh();
	},
	
	onBoatSelected : function(component, event, helper) {
		component.set('v.id', event.getParam('boat').Id);
		component.find('service').reloadRecord();
	},
	
	onRecordUpdated : function(component, event, helper) {
		component.find('boatReviews').refresh();
	}
})