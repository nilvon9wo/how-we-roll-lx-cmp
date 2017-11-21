public class BoatReviewsAuraCtrl { 
    BoatReviewSelector boatReviewSelector;
    
    public BoatReviewsAuraCtrl(BoatReviewSelector boatReviewSelector) {
    	this.boatReviewSelector = boatReviewSelector;
    }
    
    public BoatReviewsAuraCtrl() {
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