$(function(){
    var src = location.href;
    var id = src.slice(src.indexOf('#') + 1, src.length);
    var data = 
        {
            title:"打造智能价值网络，惊艳亮相北京电视台，带你走进不一样的世界",
            id:"1", 
            time:"2019-06-18",
            describe:'区块链技术有哪些不一样的应用场景呢?<br/>'
            +'区块链可以发挥哪些更具有未来感的效力呢？<br/>'
            +'区块链还能为实体经济和数字经济的发展带来哪些想象的空间呢？<br/>'
            +'在区块链打造智能价值网络我们到底应该如何看待呢？<br/>'
            +'接下来还有可能发生什么呢？货找人? 甚至是货找货?<br/>'
            +'想要一探究竟，发现更多精彩。。。<br/>',
            src:"https://img.stringon.com/decodeBlockChain.mp4",
        };
    document.getElementById('title').innerHTML = data.title || '';
    document.getElementById('time').innerHTML = data.time || '0000-00-00';
    document.getElementById('describe').innerHTML = data.describe || describe;
    $('#video').attr("src", data.src);
    let video1 = document.querySelector('#video');
    let videoBottom1 = document.querySelector('#buttom1');
    let imgBG1 = document.querySelector('#imgBG1');
    videoBottom1.onclick = function () {
        videoBottom1.style.display = 'none';
        imgBG1.style.display = 'none';
        video1.play();
        video1.setAttribute('controls', 'true');
    }
    $(document).find('video').attr({
        'x5-video-player-type': 'h5-page',
        "style": "object-fit:fill",
        'playsinline': "true",
        "preload": "auto"
    }).trigger('play');
})