public class BoatReviews {
    BoatReviewSelector boatReviewSelector;
    
    public BoatReviews(BoatReviewSelector boatReviewSelector) {
    	this.boatReviewSelector = boatReviewSelector;
    }
    
    public BoatReviews() {
    	this(new BoatReviewSelector());
    }
    
    @AuraEnabled
    public static List<BoatReview__c> getAll(Id boatId) {
    	//return (new BoatReviews()).selectAllFor(boatId);
    	return [
    		SELECT Comment__c, CreatedDate, CreatedBy.Id, CreatedBy.Name, CreatedBy.SmallPhotoUrl, CreatedBy.CompanyName,
    			Id, LastModifiedDate, Name,  Rating__c
    		FROM BoatReview__c
    		WHERE Boat__c = :boatId
    	];
    }

    public List<BoatReview__c> selectAllFor(Id boatId) {
    	return this.boatReviewSelector.selectAllFor(boatId);
    }

}