/**
 * Created by sbeeson@gmail.com on 2016-04-19.
 */

$(document).on("click",".menuItem", function() {
    var t = $(this);
    $(".menuItem").removeClass("selected");
    t.addClass("selected");
    $(".page").removeClass("selected");
    $('#' + t.attr("data-target")).addClass("selected");
});