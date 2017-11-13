({
	onSearch: function(component, boatTypeId) {
		var action = component.get('c.getBoats');
		action.setParam('boatTypeId', boatTypeId);
		action.setCallback(this, function(response){
			if (response.getState() === 'SUCCESS') {
				component.set('v.boats', response.getReturnValue());
			}
		});
		$A.enqueueAction(action);
	}
})