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
        
        // Only set new description width if greater than 640px
        $(item).children("ul").width(itemWidth);
        if ($(window).width() >= 640)
            $(item).children("ul").width(newDescriptionWidth);

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
