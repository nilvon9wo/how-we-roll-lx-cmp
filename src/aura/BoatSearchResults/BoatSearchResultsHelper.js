({
	onSearch: function(component) {
		var action = component.get('c.getBoats');
		action.setParam('boatTypeId', component.get('v.boatTypeId'));
		action.setCallback(this, function(response){
			if (response.getState() === 'SUCCESS') {
				component.set('v.boats', response.getReturnValue());
			}
		});
		$A.enqueueAction(action);
	},
})