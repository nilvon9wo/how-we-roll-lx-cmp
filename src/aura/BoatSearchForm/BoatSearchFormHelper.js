({
	broadcastSelectedBoatType: function(component) {
		var formData = component.getEvent('formData');
		formData.setParams({
			formData: {
				boatTypeId: this.getSelectedBoatId(component)
			}
		});
		formData.fire();
	},
	
	getSelectedBoatId: function(component) { 
		return component.get('v.boatTypeIdByNameMap')
			.get(component.get('v.selectedBoatType'));
	},

    setBoatTypeCollections : function(component) {
        var action = component.get('c.getBoatTypes');
        action.setCallback(this, function(response){
            if (response.getState() === 'SUCCESS') {
                component.set('v.boatTypeList', response.getReturnValue());
                this.setBoatTypeIdByNameMap(component);
            }
        });
        $A.enqueueAction(action);
    },

    setBoatTypeIdByNameMap : function(component) {
        var boatTypeList = component.get('v.boatTypeList');
        var boatTypeIdByNameMap = new Map();
        for (var i = 0; i < boatTypeList.length; i++) {
            var boatType = boatTypeList[i];
            boatTypeIdByNameMap.set(boatType.Name, boatType.Id);
        }
        component.set('v.boatTypeIdByNameMap', boatTypeIdByNameMap);
    }
})
