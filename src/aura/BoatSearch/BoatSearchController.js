({
	onFormSubmit : function(component, event, helper){
        var boatTypeId = event.getParam('boatTypeId');
        component.find('boatSearchResults').search(boatTypeId);
    }
})