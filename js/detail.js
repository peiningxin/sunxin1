
//点击商品小图片切换边框颜色
$('.food_show_inner .small_box img').bind('click',function(){
    $(this).css({borderColor:'#2bbc69'});
    $(this).parent().siblings().children('img').css({borderColor:'#ededed'});
    $('.big_box img').attr('src',$(this).attr('src'));
});

//放大镜
var boxWidth = $('.big_box').width();
$('.big_box img').bind('mouseover',function(e){
    $(this).width(882).height(750);
    var left=$('.big_box').offset().left;
    var marginL = -(e.clientX-left)*0.5;
    // console.log('e.clientX'+e.clientX);
    $(this).css({marginLeft:marginL});
});

$('.food_message .menu').bind('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
})

//数量加减
$('.reduce').bind('click',function(){
    var number = $(this).next().html();
    if(number>1){
        number--;
        $(this).next().html(number);
    }
})
$('.plus').bind('click',function(){
    var number = $(this).prev().html();
    number++;
    $(this).prev().html(number);
})




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


