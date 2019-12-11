$(function () {
    var str = '<div class="mask-nav" id="mask-nav">' +
        '<ul>' +
        '<a href="index.html" rel="externa">首页</a>' +
        '<a href="abchain.html" rel="externa">ABCHAIN</a>' +
        '<a href="news.html" rel="externa">新闻动态</a>' +
        '<a href="about.html" rel="externa">关于弦子</a>' +
        '<a href="addUs.html" rel="externa">加入我们</a>' +
        '<a href="aboutUs.html" rel="externa">联系我们</a>' +
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
            if (returnUrl($(this).attr("href")) == returnUrl(url) || (returnUrl($(this).attr("href")) == 'index.html' && returnUrl(url) == '')) {
                $(this).addClass("active-header");
            }
        });
        //以下为截取url的方法
        function returnUrl(href) {
            var number = href.lastIndexOf("/");
            return href.substring(number + 1);
        };
        /* $('.package').find('video').attr({
            'x5-playsinline':"",
             'playsinline':"" ,
             'webkit-playsinline':"",
             'preload':"auto"
            });
        */
       $(document).find('video').trigger('pause');
       $(document).find('video').css('display','none')
      
    });
    $(".closeIco").click(function () {
        $(".mask-nav").hide();
        $(".menuIco").show();
        $(".closeIco").hide();
        $(document).find('video').css('display','block');
        $(document).find('.videobg').css('display','block');
        $(document).find('.videoButton').css('display','block');
    });
   
})