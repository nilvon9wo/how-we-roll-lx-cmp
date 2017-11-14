({
	onFormSubmit : function(component, event, helper){
        var boatTypeId = event.getParam('formData').boatTypeId;
        component.find('boatSearchResults').search(boatTypeId);
    }
})