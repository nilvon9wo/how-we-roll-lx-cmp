({
	doInit : function(component, event, helper) {
		helper.onInit(component, event, helper);
	},

	onUserInfoClick : function(component, event, helper) {
		var navigateToSObject = $A.get('e.force:navigateToSObject');
	    navigateToSObject.setParams({
	    	recordId: event.currentTarget.dataset.userid,
	    	slideDevName: 'chatter'
	    });
	    navigateToSObject.fire();
	}
})