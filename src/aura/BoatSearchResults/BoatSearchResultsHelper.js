({
	onSearch: function(component, event) {
		var params = event.getParam('arguments');
		var boatTypeId = (params) ? params.boatTypeId : null;
	
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