({
	doInit : function(component, event, helper) {
		component.set('v.showFullDetailsButton', $A.get('e.force:navigateToSObject'));
	},

	onFullDetails : function(component, event, helper) {
	    var navigateToSObject = $A.get("e.force:navigateToSObject");
	    navigateToSObject.setParams({
	    	recordId: component.get('v.boat').Id,
	    	slideDevName: 'detail'
	    });
	    navigateToSObject.fire();
	}	
})