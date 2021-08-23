// //////////////////
//TABS

$("#tabs .nav-tabs a").click(function () {
    var position = $(this).parent().position();
    var width = $(this).parent().width();
    $("#tabs .slider").css({ "left": + position.left, "width": width });
});
var actWidth = $("#tabs .nav-tabs").find(".active").parent("li").width();
var actPosition = $("#tabs .nav-tabs .active").position();
$("#tabs .slider").css({ "left": + actPosition.left, "width": actWidth });
