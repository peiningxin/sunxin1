//多选项按钮
$('.check_box').click(function(){
    $(this).toggleClass('active');
});

$('.section4 dt').click(function(){
    $(this).toggleClass('active').next().toggle();
});

$('.section2 .mark').click(function(){
    $('.section2 .adr_list').toggle();
});
$('.section2 .adr_list a').click(function(){
    $('.section2 .mark span').html($(this).html());
});

