({
	doSearch : function(component, event, helper) {
		var params = event.getParam('arguments');
		var boatTypeId = (params) ? params.boatTypeId : null;
		helper.onSearch(component, boatTypeId);
	}
})