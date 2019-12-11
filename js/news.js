$(function(){
    var list = document.getElementById('wrap_list');
    var dataArry = [
        {title:"打造智能价值网络，惊艳亮相北京电视台，带你走进不一样的世界",id:"1", time:"2019-06-18"},{title:"数字经济助力赣南脐橙丨弦子科技实物礼包现场体验会",id:"2", time:"2019-10-25"},
    ];
    var str = '';
    for(var i = 0; i < dataArry.length; i++){
        str += '<li id=item' + dataArry[i].id+'>'+'<div class='+'left>'
        +'<span>'+dataArry[i].title+'</span>'
        +'<span class="item">'+dataArry[i].time+'</span>'+'</div>'+'<div class='+'right>'+'</div>'
        +'</li>';
    }
    list.innerHTML = str;
    for(var j = 0; j < dataArry.length; j++){
        $('#item'+ dataArry[j].id).click(function(e){
            var id  = $(this).attr('id');
            var newId = id.replace('item', '');
            if(newId==1){
                location.href = "details.html#"+ newId;
                return
            }
            if(newId==2){
                location.href = "details2.html#"+ newId;
                return
            }
        });
    }
})