/**
 * Created by sbeeson@gmail.com on 2016-04-19.
 */
$(document).on("click",".menuItem", function() {
    $(".menuItem").removeClass("selected");
    $(this).addClass("selected");
});