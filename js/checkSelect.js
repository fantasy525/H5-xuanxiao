(function () {
    function CheckSelect(){

        }
        CheckSelect.prototype.check=function (el,next,url) {
            var error=$('.error p');
            function rgb2hex(rgb) {
                rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                function hex(x) {
                    return ("0" + parseInt(x).toString(16)).slice(-2);
                }
                return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
            }
            el.on({
                'change':function(){
                    var borderCo=rgb2hex($(this).css("borderColor")).toLowerCase();
                    if(borderCo==="#ff0000"){
                        $(this).css("borderColor","#a8b7ce");
                    }
                }
            })
            next.on({
                'click':function(){
                    var f=true;
                    el.each(function(i){
                        if($(this).val()===""){
                            f=false;
                            $(this).css("border","1px solid red");
                            if(error.text()===""){
                                error.text("不能为空");
                            }
                        }
                    });
                    if(f){
                        window.location.href=url;
                    }
                },
                'blur':function(){
                    $('.error p').text("");
                }
            });
        }
        window.CheckSelect=CheckSelect;
})();


