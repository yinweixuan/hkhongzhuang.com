$(function(){
      var arr= new Array();//创建一个数组
        var yl1=$(".yl").html().split(",")[0];
        var yl2=$(".yl").html().split(",")[1];
        var yl3=$(".yl").html().split(",")[2];
        arr=[yl1,yl2,yl3];
        var swiper = new Swiper('.gallery-top .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
             el: '.gallery-thumbs',
             clickable: true,
              renderBullet: function (index, className) {
               return '<li class="'+className+'">'+
                    '<img src="'+arr[index]+'" alt="" class="yulan">'+
                    '<img src="//v3.hkhongzhuang.com/static/images/pc/bofan.png" class="bofan" alt="">'+
                  '</li>';
                }
       },
      navigation: {
        nextEl: '.gallery-top .swiper-button-next',
        prevEl: '.gallery-top .swiper-button-prev',
      },
    });
   $(".t-name p").html($(".t-name p").html().split(",")[0]);
   var honerCon=$(".t-honer").html().split(",");
   var len=$(".t-honer").html().split(",").length;
   $(".t-honer").html("");
   for(var i=0;i<len;i++){
    $(".t-honer").append("<p><span></span>"+honerCon[i]+"</p>");
   }
    var swiper = new Swiper('.swiper-container_art_stu', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //如果为上传缩略图，删掉
    var thLi=$(".gallery-thumbs>li");
    var thLiL=thLi.length;
    for(var i=0;i<thLiL;i++){
 console.log(thLi.eq(i).find(".yulan").attr("src"));
      if(thLi.eq(i).find(".yulan").attr("src").indexOf("uploads")==-1){
              thLi.eq(i).find(".yulan").parent("li").addClass('thHidee');
      }
    }
});
