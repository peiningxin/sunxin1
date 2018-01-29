$('.filter .left a').bind('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
});

$('.fav').bind('click',function(){
    $(this).children('span').html('已添加到心愿单');
})

//用cookie查询有没账号登录
var username = getCookie("username");
if(username!=""){
    $('.login').hide();
    $('.signOut').show();
    $('.username_show').show().html(username);
}else{
    $('.login').show();
    $('.username_show').hide();
    $('.signOut').hide();
}
$('.signOut').click(function(){
    saveCookie("username","",-1);  //删除cookie
    $('.login').show();
    $('.username_show').hide();
    $('.signOut').hide();
})

