({
	onInit : function(component, event, helper) {
		var action = component.get('c.getAll');
		action.setParam('boatId', component.get('v.boat').Id);
		action.setCallback(this, function(response){
			if (response.getState() === 'SUCCESS') {
				component.set('v.boatReviews', response.getReturnValue());
			}
			else {
                var errors = response.getError();
                var error = errors ? errors[0] : null;
                var message = error 
                	? ('Error message: ' + error.message) 
                	: 'Unknown error';
                console.error(message);   
			}
		});
		$A.enqueueAction(action);
	}
})