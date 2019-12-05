$(function(){
    var list = document.getElementById('wrap_list');
    var dataArry = [
        {title:"打造智能价值网络，惊艳亮相北京电视台，带你走进不一样的世界",id:"1", time:"2019-06-18"},
    ];
    var str = '';
    for(var i = 0; i < dataArry.length; i++){
        str += '<li id=item' + dataArry[i].id+'>'
        +'<span>'+dataArry[i].title+'</span>'
        +'<span class="item">'+dataArry[i].time+'></span>'
        +'</li>';
    }
    list.innerHTML = str;
    for(var j = 0; j < dataArry.length; j++){
        $('#item'+ dataArry[j].id).click(function(e){
            var id  = $(this).attr('id');
            var newId = id.replace('item', '');
            location.href = "details.html#"+ newId;
        });
    }
})