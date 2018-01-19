$('.filter .left a').bind('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
});

$('.fav').bind('click',function(){
    $(this).children('span').html('已添加到心愿单');
})