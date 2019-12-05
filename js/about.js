$(function(){
    var src = location.href;
    var id = src.slice(src.indexOf('#') + 1, src.length);
    var dataArry = [
        /* {
            patentName:"数字版权区块链、数字内容摘要信息计算方法和计算机设备",
            applicationNumber:"2018101482353", 
            patentType:"发明"
        } */
    ]
    if(dataArry.length < 1){
      $(".section2").hide();
      return;
    }
    var table = document.getElementById('patent');
    var str = '<tr>'
        +'<th width="56%">专利名称</th>'
        +'<th width="20%">申请号</th>'
        +'<th width="24%">专利类型</th>'
        +'</tr>';
    for(var i = 0; i < dataArry.length; i++){
        str += '<tr>'
        +'<td>'+dataArry[i].patentName+'</td>'
        +'<td>'+dataArry[i].applicationNumber+'</td>'
        +'<td>'+dataArry[i].patentType+'</td>'
        +'</tr>';
    }
    table.innerHTML = str;
})