$(function(){
    var scoreList= $('.score-list');
    var errorP=$('.error p');
    var test=$('.test');
    var errorDiv=$('.error');
    var sel=$('.sel');
    function rgb2hex(rgb) {
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }
$('.test-list div').click(function(){
    errorDiv.css({
        "marginTop":"1rem"
    })
  test[0].style.marginBottom="1rem";
    var that= $(this);
    var pl=that.text();
    if(that.hasClass('test-select')){
        that.removeClass('test-select');
        console.log();
        $(".score-list li input[data-id="+pl.replace(" ","")+"]").parent('li').remove();
        if(scoreList.children().length==0){
            errorDiv.css({
                "marginTop":"2.75rem"
            })
        }
    }
    else{
        that.addClass('test-select');
        var html='<li> <label>'+pl+'</label><input type="text" data-id="'+pl.replace(" ","")+'" class="relName newSel" placeholder="请输入您的'+pl+'成绩"></li>';
        scoreList.append(html);
    }
});
    sel.on({
        'change':function(){
            var borderCo=rgb2hex($(this).css("borderColor")).toLowerCase();
            if(borderCo==="#ff0000"){
                $(this).css("borderColor","#a8b7ce");
            }
        }
    })
    scoreList.on('change','.newSel',function () {
        var borderCo=rgb2hex($(this).css("borderColor")).toLowerCase();
        if(borderCo==="#ff0000"){
            $(this).css("borderColor","#a8b7ce");
        }
    })
    $('select').on('change',function(){
        $(this).css({
            "fontSize":".24rem",
            "color":"#596a85"
        })
    })
    test.on({
        'click':function () {
            var f=true;
            $('.info-list li input').each(function () {
                if($(this).val()==""){
                    f=false;
                    $(this).css("border","1px solid red");
                    if(errorP.text()===""){
                        errorP.text("不能为空");
                    }
                }
            });
            if(scoreList.children.length!=0){
                scoreList.children('li').children('input').each(function () {
                    if($(this).val()==""){
                        f=false;
                        $(this).css("border","1px solid red");
                        if(errorP.text()!="您增加的考试成绩不能为空"){
                            errorP.text("您增加的考试成绩不能为空");
                        }
                    }
                })
            }
            if(f){
                window.location.href="softPower.html";
            }
        },
        'blur':function () {
            if(errorP.text()!==""){
                errorP.text("")
            }
        }
        }
    )
})