public with sharing class BoatSelector {
	public List<Boat__c> selectAll () {
		return [
			SELECT Contact__r.Name, Geolocation__Latitude__s, Geolocation__Longitude__s, Id, Name, Picture__c
			FROM Boat__c
		];
	}
	
	public List<Boat__c> selectForBoatType (Id boatTypeId) {
		return [
			SELECT Contact__r.Name, Geolocation__Latitude__s, Geolocation__Longitude__s, Id, Name, Picture__c
			FROM Boat__c
			WHERE BoatType__c = :boatTypeId
		];
	}
}