function showIntro(type) {
    if (!$(this).hasClass("activate")) {
        $("#video-btn-" + type).removeClass("activate");
        $("#intro-btn-" + type).addClass("activate");

        $("#intro-" + type).show();
        $("#video-" + type).hide();
    }
}

function showVideo(type) {
    if (!$(this).hasClass("activate")) {
        $("#intro-btn-" + type).removeClass("activate");
        $("#video-btn-" + type).addClass("activate");

        $("#intro-" + type).hide();
        $("#video-" + type).show();
    }
}