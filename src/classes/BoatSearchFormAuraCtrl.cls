public class BoatSearchFormAuraCtrl {
	BoatTypeSelector boatTypeSelector;
	
	public BoatSearchFormAuraCtrl(BoatTypeSelector boatTypeSelector) {
		this.boatTypeSelector = boatTypeSelector;
	}

	public BoatSearchFormAuraCtrl() {
		this(new BoatTypeSelector());
	}
	
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes() {
    	return (new BoatSearchFormAuraCtrl()).getBoatTypeList();
    }
    
    @testVisible
    private List<BoatType__c> getBoatTypeList() {
    	return this.boatTypeSelector.selectAll();
    }
}