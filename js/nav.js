$(function () {
    var str = '<div class="mask-nav" id="mask-nav">' +
        '<ul>' +
        '<a href="index.html" rel="externa">首页</a>' +
        '<a href="news.html" rel="externa">WEAVER</a>' +
        '<a href="about.html" rel="externa">ABCHAIN</a>' +
        '<a href="news.html" rel="externa">新闻动态</a>' +
        '<a href="about.html" rel="externa">关于弦子</a>' +
        '<a href="addUs.html" rel="externa">加入我们</a>' +
        '<a href="javascript:;" rel="externa">&nbsp;</a>' +
        '</ul>' +
        '</div>';
    var nav = '<div class="nav">' +
        '<div class="navbar-header">' +
        '<img class="logo" src="images/logo.png" alt="">' +
        '</div>' +
        '<div class="nav-ico" id="nav-ico">' +
        '<img class="menuIco" src="images/list.png" alt="">' +
        '<img class="closeIco" src="images/close.png" alt="">' +
        '</div>' +
        '</div>'
    $(".package").prepend(nav);
    $(".package").prepend(str);

    $(".logo").click(function () {
        location.href = 'index.html';
    });
    $(".menuIco").click(function () {
        $(".mask-nav").show();
        $(".menuIco").hide();
        $(".closeIco").show();
        var url = window.location.href;
        
        $("#mask-nav a").each(function () {
            console.log(returnUrl(url) )
            if (returnUrl($(this).attr("href")) == returnUrl(url) || (returnUrl($(this).attr("href")) == 'index.html' && returnUrl(url) == '')) {
                $(this).addClass("active-header");
            }
        });
        //以下为截取url的方法
        function returnUrl(href) {
            var number = href.lastIndexOf("/");
            return href.substring(number + 1);
        }
    });
    $(".closeIco").click(function () {
        $(".mask-nav").hide();
        $(".menuIco").show();
        $(".closeIco").hide();
    });
   
})