function tjgs(month,fullName){
    var gs_date = [];
    $(".text-left.table.table-hover.su-grid").eq(0).children().eq(1).children().each(function () {
        var tr = $(this);
        var gs = tr.children().eq(3);
        var date = tr.children().eq(7);
        if(parseFloat(gs[0].innerText)>8){
            var date = date[0].innerText;
            var dateStr = date.toString();
            var dayStr = dateStr.substring(dateStr.lastIndexOf("-")+1);
            var day = dayStr.replace(/\b[0]/,"");
            gs_date.push(day);
        }
    });
    var date  = gs_date.reverse().join(",");
    var total = gs_date.length;
    console.log("\n"+month+"月加班统计：\n----------------------------------\n"+"姓 名："+fullName+"\n"+"日 期："+date+"\n"+"合 计："+total+"\n");
    return total;
}
