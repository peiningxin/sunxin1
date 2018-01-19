//轮播图
var numCarousel = 0;
var carouselTime = null;
function autoCarousel(){
    carouselTime = setInterval(function(){
        numCarousel++;
        if(numCarousel==6){numCarousel=0;}
        $('.carousel_pic a').eq(numCarousel).css({display:'block'}).animate({'opacity':1},1000).siblings().css({display:'none',opacity:0});
        $('.carousel_btn a').eq(numCarousel).css({backgroundColor:'rgba(0,0,0,.6)'}).siblings().css({backgroundColor:'rgba(153,153,153,.6)'});
    },3000);
}
autoCarousel();

//鼠标进入划出盒子（左右按钮出现/隐藏）事件—————————————————————————————————————————————————————
$('.carousel_box').bind('mouseover',function(){
    clearInterval(carouselTime);
}).bind('mouseout',function(){
    autoCarousel();
});


//鼠标滑过下部按钮
$('.carousel_btn a').bind('mouseover',function(){
    numCarousel=$(this).index();
    $('.carousel_pic a').eq(numCarousel).css({display:'block'}).animate({'opacity':1},500).siblings().css({display:'none',opacity:0});
    $(this).css({backgroundColor:'rgba(0,0,0,.6)'}).siblings().css({backgroundColor:'rgba(153,153,153,.6)'});
});


$(window).scroll(function(){
    if($('html,body').scrollTop()>=1000){
        $('.toTop').show();
    }else{
        $('.toTop').hide();
    }
    console.log('scrollTop()'+$('html,body').scrollTop());
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
