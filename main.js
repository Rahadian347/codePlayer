//function for updating iframe element
function updateElement() {
    $("iframe").contents().find("html").html("<html><head><style type='text/css'> " + $("#cssPanel").val()
        + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>")

    // document.getElementById("outputPanel").contentWindow.eval($("#jsPanel").val());
    // window.frames[0].frameElement.contentWindow.eval($("#jsPanel").val());
    var jsPanel = $("#jsPanel").val()
    window.frames[0].frameElement.contentWindow.eval(jsPanel);

}

$(".toggleButton").click(
    function () {
        $(this).toggleClass("active")

        var panelId = $(this).attr("id") + "Panel";
        $("#" + panelId).toggleClass("hidden")

        var titleId = $(this).attr("id") + "Title";
        $("#" + titleId).toggleClass("hiddenTitle")

        var numberOfActivePanels = 4 - $(".hidden").length;
        $(".panel").width(($(window).width() / numberOfActivePanels) - 7)

        var numberOfActiveTitles = 4 - $(".hiddenTitle").length;
        $(".titleEditor").width(($(window).width() / numberOfActiveTitles) - 7)

        

    });

$(".panel").height($(window).height() - $("#header").height() - 5)
$(".panel").width(($(window).width() / 2) - 7)

$(".titleEditor").width(($(window).width() / 2) - 7.9)

updateElement();

$("textarea").on('change keyup paste', function () {
    updateElement();
})