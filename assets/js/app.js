$('body').click(function(e) {
    if ($(e.target).closest('.menu-container').length === 0) {
        $('.close').click();
    }
});