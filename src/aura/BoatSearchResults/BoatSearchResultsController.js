({
	doSearch : function(component, event, helper) {
		helper.onSearch(component, event);
	},
	
	search: function(component, event, helper){
        var params = event.getParam('arguments');
        component.set('v.boatTypeId', params.boatTypeId);
        helper.onSearch(component, event);
    }
})