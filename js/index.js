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
    // console.log('scrollTop()'+$('html,body').scrollTop());
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


//登录、注册

//手机号验证
var tF1 = false;
$('.phone_check').bind('blur',function(){
    if($(this).val()===''){
        $(this).css({borderColor:'#e94d3c'}).parent().prev().css({display:'block'}).html('请输入手机号');
    }else{
        var str = $(this).val();
        var oReg = /^1\d{10}$/; 
        if(oReg.test(str)===true){
            $(this).css({borderColor:'#2bbc69'}).parent().prev().css({display:'none'}); 
            tF1=true;
        }else{
            $(this).css({borderColor:'#e94d3c'}).parent().prev().css({display:'block'}).html('手机号码格式错误');
        }
    }
})
//随机码验证
var tF2 = false;
$('.random').bind('blur',function(){
    if($(this).val()==5352){
        $(this).css({borderColor:'#2bbc69'}).parent().prev().prev().css({display:'none'});
        tF2 =true;
    }else{
        $(this).css({borderColor:'#e94d3c'}).parent().prev().prev().css({display:'block'}).html('验证码错误');
    }
})
//获取手机验证码
$('.identifyingCode').bind('click',function(){
    if(tF1===true & tF2===true & ($(this).html()=="获取验证码"||$(this).html()=="重新发送")){
        $(this).html('已经发送<span>10</span>S');
        var timeNum = 10;
        var timer=setInterval(function(){
            timeNum--;
            if(timeNum<0){
                console.log('小于1')
                $('.identifyingCode').html('重新发送');
                clearInterval(timer);
                
            }else{
                $('.identifyingCode span').html(timeNum);
            }
        },1000);
    }
})

//多选框按钮
$('.check_box').bind('click',function(){
    $(this).toggleClass('active');
})

// 登录方式切换
$('.phonePasswordBtn').bind('click',function(){
    $('.login_box .content1').hide();

    $('.login_box .bot1').hide();
    $('.login_box .content2').show();
    $('.login_box .bot2').show();
})
$('.phoneBtn').bind('click',function(){
    $('.login_box .content2').hide();
    $('.login_box .bot2').hide();
    $('.login_box .content1').show();
    $('.login_box .bot1').show();
})

//手机号验证

$('.phoneEmail_check').bind('blur',function(){
    if($(this).val()===''){
        $(this).css({borderColor:'#e94d3c'}).parent().prev().css({display:'block'}).html('请输入手机号/邮箱');
    }else{
        var str = $(this).val();
        var oRegP = /^1\d{10}$/; 
        var oRegE = /^.+\.@.+\..+$/;
        if(oRegP.test(str)===true||oRegE.test(str)===true){
            $(this).css({borderColor:'#2bbc69'}).parent().prev().css({display:'none'}); 
        }else{
            $(this).css({borderColor:'#e94d3c'}).parent().prev().css({display:'block'}).html('账号格式错误');
        }
    }
})
// 普通登录密码验证
$('.password_check').bind('blur',function(){
    if($(this).val()===''){
        $(this).css({borderColor:'#e94d3c'}).parent().prev().prev().css({display:'block'}).html('请输入密码');
    }else{
        $(this).css({borderColor:'#2bbc69'}).parent().prev().prev().css({display:'none'});
    }
})
//打开登录弹出框
$('.login').bind('click',function(){
    $('.max_shadow').show();
    $('body').css({overflow:'hidden'});
})

//关闭弹出框
$('.close').bind('click',function(){
    $('.max_shadow').hide();
    $('body').css({overflow:'visible'});
})

