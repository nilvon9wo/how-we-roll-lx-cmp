({
	onFormSubmit : function(component, event, helper) {
		var formData = event.getParam('formData');
		component.find('boatSearchResults').search(formData.boatTypeId);
	}
})