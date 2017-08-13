$(window).on("load", function() {
    setItemHeight();
});

$(window).resize(function() {
    setItemHeight();
});

// Used in the 'EXPERIENCE' and 'PROJECTS' page for
// responsiveness on different devices.
// Sets height of item div so that horizontal rule <hr> below
// it gets placed properly.
function setItemHeight() {
    $(".item").each(function(index, item) {
        // Set item height
        var headerHeight = $(item).children(".item-header").outerHeight(true),
            descriptionHeight = $(item).children("ul").outerHeight(true),
            imgHeight = $(item).children("img").outerHeight(true),
            newItemHeight;

        // Set item height to height of all 3 (header, description, img) if
        // viewing on small viewport width (< 640px)
        newItemHeight = headerHeight + imgHeight + descriptionHeight;
        if ($(window).width() >= 640)
            newItemHeight = (imgHeight > descriptionHeight) ? headerHeight + imgHeight : headerHeight + descriptionHeight;

        $(item).height(newItemHeight);
    });
}