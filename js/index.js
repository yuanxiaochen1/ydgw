$(function(){
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        pagination: {
            el: '.swiper-pagination',
            bulletActiveClass: 'my-bullet-active',
        },
    })
    $(".mask-qrcode").hide();
    $('.wrap1_button').click(function(){
        location.href='video1.html';
    });
    $('.wrap3_button').click(function(){
        location.href='video2.html';
    });
    $(".mask-qrcode").click(function(){
        $(".mask-qrcode").hide();
    });
    $(".qrcode").click(function(){
        $(".mask-qrcode").show();
    });
})