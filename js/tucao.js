$(function(){
    var text=$('.text');
    $('.result span').click(function(){
        $(this).addClass('selected').siblings('span').removeClass('selected')
    });
    $('.clear').click(function(){
        if(text.val()!==""){
            text.val("");
        }
    })
})