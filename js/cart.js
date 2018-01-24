//单选
$('.check_box').bind('click',function(){
    $(this).toggleClass('active');
    if($('.check_box').hasClass('active')){
        $('.checkedAll').addClass('active'); 
    }else{
        $('.checkedAll').removeClass('active'); 
    }
})
//单选
$('.checkedAll').bind('click',function(){
    $(this).toggleClass('active');
    if($('.checkedAll').hasClass('active')){
        $('tbody .check_box').addClass('active');
    }else{
        $('tbody .check_box').removeClass('active'); 
    }
})

//商品数量加减
$('.plus_btn').click(function(){
    var curNum = $(this).siblings('span').html();
    curNum++;
    $(this).siblings('span').html(curNum);
})

$('.reduce_btn').click(function(){
    var curNum = $(this).siblings('span').html();
    if(curNum>1){
        curNum--;
        $(this).siblings('span').html(curNum);
    }
})

$('.del_box').click(function(){
    $(this).parent().parent().hide();
})