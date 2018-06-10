var obj = {
    username : 'iwzyuan',
    age : 6
}
function render(str,obj) {
    var tpl = str.replace(/<%=([\s\S]+?)%>/g,function (match,group) {
        return obj[group]
    })
    return tpl;
}
var result = render('hello <%=username%> <%=age%>',obj);