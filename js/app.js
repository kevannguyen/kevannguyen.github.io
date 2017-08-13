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
        $(item).children("ul").width(newDescriptionWidth);

        // Set item height
        var headerHeight = $(item).children(".item-header").outerHeight(true),
            descriptionHeight = $(item).children("ul").outerHeight(true),
            imgHeight = $(item).children("img").outerHeight(true),
            newItemHeight = headerHeight;
        newItemHeight += (imgHeight > descriptionHeight) ? imgHeight : descriptionHeight;

        $(item).height(newItemHeight);
    });
}
