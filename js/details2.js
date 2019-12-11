$(function(){
    var src = location.href;
    var id = src.slice(src.indexOf('#') + 1, src.length);
    var data = 
        {
            title:"数字经济助力赣南脐橙丨弦子科技实物礼包现场体验会",
            id:"2", 
            time:"2019-10-25",
            describe:'数字经济助力赣南脐橙——弦子科技区块链实物礼包现场体验会”在信丰县桃江大酒店举行。来自信丰、兴国、瑞金等赣州各县（市、区）的脐橙种植户、微商代表70多人参加了会议。',
            src:"https://shopimg.stringon.com/news.mp4",
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