//点击商品小图片切换边框颜色
$('.food_show_inner .small_box img').bind('click',function(){
    $(this).css({borderColor:'#2bbc69'});
    $(this).parent().siblings().children('img').css({borderColor:'#ededed'});
    $('.big_box img').attr('src',$(this).attr('src'));
});


//放大镜  --滑过放大1.5倍
var W = $('.big_box img').width();
var H = $('.big_box img').height();
var ofL = $('.big_box').offset().left;
var ofT = $('.big_box').offset().top;
$('.big_box img').bind('mousemove',function(e){
    $(this).width(W*1.5).height(H*1.5);
    var left = -(e.pageX-ofL)*0.5;
    var top = -(e.pageY-ofT)*0.5;
    $(this).css({left:left,top:top});
}).bind('mouseout',function(){
    $(this).width(W).height(H);
    $(this).css({left:0,top:0});
});



//返回顶部
$(window).scroll(function(){
    if($('html,body').scrollTop()>=1000){
        $('.toTop').show();
    }else{
        $('.toTop').hide();
    }
    if($('html,body').scrollTop()>=6684){
        $('.toTop').css({position:'absolute'});
    }else{
        $('.toTop').css({position:'fixed'});
    }
});
//返回顶部
$('.toTop').bind('click',function(){
    $('html,body').animate({scrollTop:0});
})

//评论切换
$('.comment_con_pic').bind('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.comment_pic').parent().hide();
    $('.comment_pic').children('img').parent().parent().show();
});
$('.comment_con_all').bind('click',function(){
    $('.comment_pic').parent().show();
    $(this).addClass('active').siblings().removeClass('active');
});

//显示隐藏的评论
$('.comment_more').bind('click',function(){
    $('.hidden_comment').show();
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

