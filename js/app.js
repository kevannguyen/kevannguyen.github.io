// sidebar mappings with id
var sidebarDict = {
    "side-home" : "#home",
    "side-about" : "#about",
    "side-projects" : "#projects",
    "side-contact" : "#contact",
};

// used for home sequence animation
var fadeDelay = 1700;
var nextSeqDelay = 1000;
var currentDelay = 0;
// used to store timeouts that may need to be cancelled
var seqTimeouts = [];

// shows content based on id
function contentShow(nameId) {
    $("#main-content").children().hide();
    $(nameId).show();
}

// runs the sequence animation of the "home" content
function homeSequence(initialDelay) {
    // hide all children first
    $("#main-content").children().hide();
    // set current delay
    currentDelay = initialDelay;
    // hide all children first
    $("#home-sequence").children().hide();
    // remove all "fadeOutLeft" in the children
    $("#home-sequence").children().removeClass("fadeOutLeft");
    // stop all the current timeouts and then clear it
    for (var i = 0; i < seqTimeouts.length; i++) {
        clearTimeout(seqTimeouts[i]);
    }
    seqTimeouts = [];
    // show the home content
    $("#home").show();
    
    // iterate through each sequence 
    $("#home-sequence > .sequence").each(function(index) {
        var currentSeq = $("#home-sequence > .sequence").eq(index);
        
        // fade in from right
        seqTimeouts.push(setTimeout(function() {
            currentSeq.show();
        }, currentDelay));
        
        currentDelay += fadeDelay;
        if (index < $("#home-sequence > .sequence").length - 1){
            // fade out to left
            seqTimeouts.push(setTimeout(function() {
                currentSeq.addClass("fadeOutLeft"); 
                seqTimeouts.push(setTimeout(function() {
                    currentSeq.hide();
                }, 800));
            }, currentDelay));
        }
        currentDelay += nextSeqDelay;
    });
}

/* BUTTON TRANSITIONS
============================================================================ */
$("#side-about, #side-projects, #side-contact").click(function() {
    contentShow(sidebarDict[this.id]);
});

$("#side-home").click(function() {
    homeSequence(100);
});


/* ON LOAD
============================================================================ */
$(document).ready(function() {
    homeSequence(2450);
});
