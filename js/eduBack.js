$(function () {
    var search = $('.search');
    var school = $('.school');
    var test = $('.test');
    var errorP = $('.error p');
    var sel=$('.sel');
    function rgb2hex(rgb) {
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }
    school.on({
        'input': function () {
            if ($(this).val().length > 0) {
                search.slideDown(100);
            }
            else if (($(this).val().length == 0)) {
                search.slideUp(100);
            }
        },
        'blur': function () {
            search.slideUp(100)
        }
    });
    sel.on({
        'change':function(){
            var borderCo=rgb2hex($(this).css("borderColor")).toLowerCase();
            if(borderCo==="#ff0000"){
                $(this).css("borderColor","#a8b7ce");
            }
        }
    });
    search.children('li').click(function () {
        school.val($(this).text());
    });
    var data = [];
    for (var j = 1; j <= 40; j++) {
        data.push({"id": j, "value": j / 10})
    }
    var data2 = [];
    for(var i=1;i<=100;i++){
        data2.push({"id":i,"value":i});
    }
    var scores = $('.gpa-score span');
    var scoreDom = document.querySelector('.scoreValue');
    scores.click(function () {

        var scoreId = scoreDom.dataset['id'];
        var scoreValue = scoreDom.dataset['value'];
        if ($(this).index() == 0) {

            if(!$(this).hasClass('selected')){
                scoreDom.innerText="3";
                scoreDom.dataset['id']='30';
                scoreDom.dataset['value']='3';
            }
            scoreId=scoreDom.dataset['id'];
            $(this).addClass('selected').siblings('span').removeClass('selected');
            var scoreSelect = new IosSelect(1,
                [data],
                {
                    title: '4分制',
                    itemHeight: 0.7,
                    headerHeight: 0.88,
                    cssUnit: 'rem',
                    oneLevelId:scoreId,
                    itemShowCount:5,
                    callback: function (selectOneObj) {
                        scoreDom.innerText = selectOneObj.value;
                        scoreDom.dataset['id'] = selectOneObj.id;
                        scoreDom.dataset['value'] = selectOneObj.value;
                    }
                });
        }
        else {
            if(!$(this).hasClass('selected')){
                scoreDom.innerText="80";
                scoreDom.dataset['id']='80';
                scoreDom.dataset['value']='80';
            }
            $(this).addClass('selected').siblings('span').removeClass('selected');
            scoreId=scoreDom.dataset['id'];
            var scoreSelect = new IosSelect(1,
                [data2],
                {
                    title: '100分制',
                    itemHeight: 0.7,
                    headerHeight: 0.88,
                    cssUnit: 'rem',
                    itemShowCount:5,
                    oneLevelId:scoreId,
                    callback: function (selectOneObj) {
                        scoreDom.innerText = selectOneObj.value ;
                        scoreDom.dataset['id'] = selectOneObj.id ;
                        scoreDom.dataset['value'] = selectOneObj.value;
                    }
                });
        }
    });
    test.on({
        'click': function () {
            var f=true;
            if($('.subject').val()!=""){
                sel.each(function(i){
                    if($(this).val()===""){
                        f=false;
                        $(this).css("border","1px solid red");
                        if(errorP.text()===""){
                            errorP.text("不能为空");
                        }
                    }
                });
            }
            else{
                sel.each(function(i){
                    if($(this).hasClass('nianji')){
                        return;
                    }
                    if($(this).val()===""){
                        f=false;
                        $(this).css("border","1px solid red");
                        if(errorP.text()===""){
                            errorP.text("不能为空");
                        }
                    }
                });
            }
            if(f){
                window.location.href = "testScore.html";
            }

        },
        'blur': function () {
            if (errorP.text() != "") {
                errorP.text("")
            }
        }
    })
    $('select').on('change',function(){
        $(this).css({
            "fontSize":".24rem",
            "color":"#596a85"
        })
    })
})