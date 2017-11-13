({
	onFormSubmit : function(component, event, helper) {
		var boatTypeId = event.getParam('formSubmit').boatTypeId;
		component.find('boatSearchResults').search(boatTypeId);
	}
})