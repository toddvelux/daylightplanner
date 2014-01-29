function doLayout() {
    var winHeight, headerHeight;
    winHeight = window.innerHeight ? window.innerHeight : $(window).height();
    headerHeight = $('#toolbar').outerHeight();
    var newH = parseInt(winHeight) - parseInt(headerHeight);
    $('#juicebox-content').height(newH);
}

$(document).ready(function () {
    doLayout();
    $(window).bind('resize', doLayout);
});

