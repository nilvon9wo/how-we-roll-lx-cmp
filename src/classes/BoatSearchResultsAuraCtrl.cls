public with sharing class BoatSearchResultsAuraCtrl { 
	BoatSelector boatSelector;
	
	public BoatSearchResultsAuraCtrl(BoatSelector boatSelector) {
		this.boatSelector = boatSelector;
	}
	
	public BoatSearchResultsAuraCtrl() {
		this(new BoatSelector());
	}
	
    @AuraEnabled
	public static List<Boat__c> getBoats(String boatTypeId) {
		return (new BoatSearchResults()).getBoatList(boatTypeId);
	}
	
	public List<Boat__c> getBoatList(String boatTypeId) {
		return (!String.isBlank(boatTypeId))
			? this.boatSelector.selectForBoatType((Id) boatTypeId)
			: this.boatSelector.selectAll();
	}
}