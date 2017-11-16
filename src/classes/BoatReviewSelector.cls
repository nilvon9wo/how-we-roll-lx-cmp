public with sharing class BoatReviewSelector {
    public List<BoatReview__c> selectAllFor(Id boatId) {
    	return [
    		SELECT Comment__c, CreatedDate, CreatedBy.Id, CreatedBy.Name, CreatedBy.SmallPhotoUrl, CreatedBy.CompanyName,
    			Id, LastModifiedDate, Name,  Rating__c
    		FROM BoatReview__c
    		WHERE Boat__c = :boatId
    	];
    }
}