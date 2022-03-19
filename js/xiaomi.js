$(function(){
    $(window).scroll(function(){
        var top = $(document).scrollTop();
        // console.log(top) 测试
        if(top == 0){
            $(".dv").fadeOut();
        }else{
            $(".dv").fadeIn();
        }
    });
    // 点击效果
    $(".dv").click(function(){
        $("body,html").stop().animate({"scrollTop":0},1000);//回到页面顶部
    })
})