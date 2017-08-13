$(window).on("load", function() {
    setItemSize();
    setAboutContentWidth()
});

$(window).resize(function() {
    setItemSize();
    setAboutContentWidth()
});

// Used in the 'EXPERIENCE' and 'PROJECTS' page for
// responsiveness on different devices.
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

// Used in the 'ABOUT' page for responsiveness on different devices.
function setAboutContentWidth() {
    var aboutMainDiv = $("#main.about");

    if (aboutMainDiv) {
        var mainWidth = aboutMainDiv.width();
        var imgWidth = $("#profile-pic").outerWidth(true);
        var newAboutContentWidth = mainWidth;

        if ($(window).width() >= 640)
            newAboutContentWidth -= imgWidth;

        $("#about-content").width(newAboutContentWidth);
    }
}
