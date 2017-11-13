public with sharing class BoatTypeSelector {
    public List<BoatType__c> selectAll() {
    	return [
    		SELECT Id, Name
    		FROM BoatType__c
    	];
    }
}