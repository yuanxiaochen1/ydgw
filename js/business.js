$(function () {
    $(".mask-qrcode").hide();
    $(".mask-qrcode").click(function () {
        $(".mask-qrcode").hide();
    });
    $(".qrcode").click(function () {
        $(".mask-qrcode").show();
    });
   /*  var captureImage = function (video) {
        var canvas = document.createElement("canvas");
        canvas.width = video.videoWidth * 0.8;
        canvas.height = video.videoHeight * 0.8;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        var src = canvas.toDataURL("image/png");
        // $(video).attr("background-image", "url("+src+")");
        $("#aaa").attr("src", src);
        console.log(src);
    };
    var video1 = document.getElementById("video1");
    var video2 = document.getElementById("video2");
    captureImage(video1);
    captureImage(video2); */
})