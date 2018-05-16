//function - set day counter using moment and events count using ulsterCalcEventDays plugin
function ulsterAnnouncementsDayCounter(thisItem) {
    var pubDate = thisItem.data('published-date');
    pubDate = new Date(pubDate);
    //pubDate = pubDate.toISOString();
    var calcDiff = moment(pubDate).fromNow(true);
    if (thisItem.hasClass('facebook')) {
        thisItem.find('span.label').text('Listed on Facebook ' + calcDiff + ' ago.');
    }
    if (thisItem.hasClass('tweet')) {
        thisItem.find('span.label').text('Tweeted ' + calcDiff + ' ago.');
    }
}
jQuery(document).ready(function() {
    jQuery('.board .col').each(function() {
        //set date counters
        ulsterAnnouncementsDayCounter(jQuery(this));
    });
});
