$(window).on("load", function() {
    setItemSize();
});

$(window).resize(function() {
    setItemSize();
});

// Used in the 'EXPERIENCE' and 'PROJECTS' page.
// Ensures that the description is always to the right of the image,
// even if description height exceeds the image.
function setItemSize() {
    $(".item").each(function(index, item) {
        // Set width first (because width may affect height)
        var imgWidth = $(item).children("img").outerWidth(true),
            itemWidth = $(item).outerWidth(true),
            newDescriptionWidth = itemWidth - imgWidth;
        
        // Only set new description width if greater than 480 (typical phone size)
        if ($(window).width() <= 480) 
            $(item).children("ul").width(itemWidth);
        else
            $(item).children("ul").width(newDescriptionWidth);

        // Set item height
        var headerHeight = $(item).children(".item-header").outerHeight(true),
            descriptionHeight = $(item).children("ul").outerHeight(true),
            imgHeight = $(item).children("img").outerHeight(true),
            newItemHeight = headerHeight;

        // Set item height to height of all 3 (header, description, img) if
        // viewing on small viewport width of 480 (typical phone size)
        if ($(window).width() <= 480)
            newItemHeight += imgHeight + descriptionHeight;
        else
            newItemHeight += (imgHeight > descriptionHeight) ? imgHeight : descriptionHeight;

        $(item).height(newItemHeight);
    });
}
