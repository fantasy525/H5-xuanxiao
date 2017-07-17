var shareDiv=document.createElement('div');
shareDiv.className='share-con';
document.body.appendChild(shareDiv);
var shareHtml=' <div class="mask shareIcon">'+
    '<div class=" mask d_box">'+
    '<div class=" mask bdsharebuttonbox">'+
    '<a href="#" class="mask bds_weixin" data-cmd="weixin" title="分享到微信"><p class="mas">微信</p></a>'+
    '<a href="#" class="mask bds_tqq" data-cmd="tqq" title="分享到腾讯微博"><p class="mas">朋友圈</p></a>'+
    '<a href="#" class="mask bds_sqq" data-cmd="sqq" title="分享到QQ好友"><p class="mas">QQ好友</p></a>'+
    '<a href="#" class="mask bds_qzone" data-cmd="qzone" title="分享到QQ空间"><p class="mas">QQ空间</p></a>'+
    '<a href="#" class="mask bds_tsina" data-cmd="tsina" title="分享到新浪微博"><p class="mas">新浪微博</p></a>'+
    '<a href="#" class="mask bds_copy" id="bds_copy" data-cmd="" title="分享到复制网址"><p class="mas">复制网址</p></a>'+
    '</div>'+
    '</div>'+
   ' </div>';
shareDiv.innerHTML=shareHtml;
window._bd_share_config={
    "common":{
        "bdSnsKey":{},
        "bdText":"",
        "bdMini":"2",
        "bdMiniList":false,
        "bdPic":"",
        "bdStyle":"1",
        "bdSize":"32"
    },
    "share":{
        "bdSize":32
    }
};
with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
(function($){
    $(".share").on("click",function(e){
        e.stopPropagation();
        if($(".share-con").is(":visible")){
            $(".share-con").slideUp(250);
            $(this).css("color","#fff");
        }else{
            $(".share-con").slideDown(250);
            $(this).css("color","#fff661");
        }
    });
    var myBody=document.body;
    var shareCon=$(".share-con");
    $(myBody).click(function(){
        if(event.target.className.toLowerCase().indexOf("mask")==-1){
            if(shareCon.is(":visible")){
                shareCon.slideUp(250);
                $(this).css("color","#fff");
            }
        }


    })
//    rgbTohex

})(jQuery);
