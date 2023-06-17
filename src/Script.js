$(document).ready(function () {
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function () {

        $(this).addclassName('transition');
    }, function () {

        $(this).removeclassName('transition');
    });
});
