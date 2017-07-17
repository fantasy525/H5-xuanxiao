$(function () {
    var phone=$('.phone-num input');
    var test=$('.test');
    var name=$('.relName');
    var nianji=$('.nianji');
    var mess=$('.mess input');
    var errorP=$('.error p');
    var sel=$('.sel');
function checkPhone(obj) {
    var isPhoneNum=/^1[3|5|8]\d{9}$/.test(obj.val());
    return isPhoneNum;
}
function rgb2hex(rgb) {
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }
    phone.on({
        'blur':function () {

           if(!checkPhone($(this))){
               $(this).css({
                   'borderColor':"red"
               })
                errorP.text("手机号码格式不正确")
               return;
           }
           else{
               $(this).css({
                   'borderColor':"#a8b7ce"
               })
               errorP.text("")
           }
        },
        'input':function () {

            if($(this).val().length>11){
                $(this).val($(this).val().slice(0,11))
            }
        }
    })
    sel.on({
        'change':function(){
            var borderCo=rgb2hex($(this).css("borderColor")).toLowerCase();
            if(borderCo==="#ff0000"){
                $(this).css("borderColor","#a8b7ce");
            }
        }
    });
        test.on({
            'click':function(){
                var f=true;
                sel.each(function(i){
                    if($(this).val()===""){
                        f=false;
                        $(this).css("border","1px solid red");
                        if(errorP.text()===""){
                            errorP.text("不能为空");
                        }
                    }
                });
                if(f){
                    if(!checkPhone(phone)){
                        errorP.text("手机号码格式不正确")
                        return;
                    }
                    window.location.href="eduBack.html";
                }
            },
            'blur':function () {
                errorP.text("");
            }
        })
    $('select').on('change',function(){
        $(this).css({
            "fontSize":".24rem", "color":"#596a85"
        })
    })

})
