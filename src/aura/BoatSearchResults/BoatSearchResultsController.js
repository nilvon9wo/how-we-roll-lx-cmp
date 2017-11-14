({
	doSearch : function(component, event, helper) {
		helper.onSearch(component, event);
	},
	
	onBoatSelect : function(component, event, helper) {
        component.set('v.selectedBoatId', event.getParam('boatId'));
	},
	
	search: function(component, event, helper){
        var params = event.getParam('arguments');
        component.set('v.boatTypeId', params.boatTypeId);
        helper.onSearch(component, event);
    }
})