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
    	return (new BoatReviews()).selectAllFor(boatId);
    }

    public List<BoatReview__c> selectAllFor(Id boatId) {
    	return this.boatReviewSelector.selectAllFor(boatId);
    }

}