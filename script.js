$("#searchBar").click(function () {
    $(".mainNav__menu").addClass("mainNav__menu_overlay");
});

$("#close").click(function () {
    $(".mainNav__menu").removeClass("mainNav__menu_overlay");
});

var height = $(document).height() - 70;

$(".hero").css("height", height);
