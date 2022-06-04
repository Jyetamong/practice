$(function(){
    let wW = $(window).width();
    let wH = $(window).height();
    const hH = $("#y-hd").height();
    const pfT = $(".portfolio-container").offset().top - wH;
    let scTop;
    let astroHeight = $(this).height() - 200;
    let astromaxW = $(this).width() - 200;

    $('.load').hide();
    $(".copy-wrap").addClass("show");

    $(window).resize(function(){
        wW = $(window).width();
        wH = $(window).height();
    });


    // 우주인 애니메이션
    $(document).mousemove(function(e){
        let mouseX = e.pageX;
        let mouseY = e.pageY;
        if (scTop > pfT && mouseY < astroHeight && mouseX < astromaxW) {
            $(".astro").css({"opacity": "1", "top": mouseY + "px", "left": mouseX + "px"});
        }
    });


    // scrollTop 애니메이션
    $(".subject, .pf-img, .pf-desc, .intro img, .intro-desc, .skill li, .my-info ul li, .mail-form").addClass("ani");
    $(".ani").each(function(){
        let trg = $(this);
        let trgOffsetMin = trg.offset().top - wH ;
        let trgOffsetMax = trg.offset().top + trg.innerHeight() - hH;
        $(window).resize(function(){
            trgOffsetMin = trg.offset().top - wH ;
            trgOffsetMax = trg.offset().top + trg.innerHeight() - hH;
        });
        $(window).scroll(function(){
            scTop = $(window).scrollTop();
            if(scTop > trgOffsetMin && scTop < trgOffsetMax){
                trg.addClass("show");
            } else if (wW > 768 && scTop > trgOffsetMax) {
                trg.removeClass("show")
            }
        });
    });


    // pf-img hover시 보더
    $(".pf-img").each(function(){
        $(this).hover(function(){
            $(this).find(".drawborder-top").stop().animate({width: 100 + "%"},100);
            $(this).find(".drawborder-right").stop().delay(300).animate({height: 100 + "%"},100);
            $(this).find(".drawborder-bottom").stop().delay(600).animate({width: 100 + "%"},100);
            $(this).find(".drawborder-left").stop().delay(900).animate({height: 100 + "%"},100);
        },function() {
            $(this).find(".drawborder-top").stop().delay(900).animate({width: 0},100);
            $(this).find(".drawborder-right").stop().delay(600).animate({height: 0},100);
            $(this).find(".drawborder-bottom").stop().delay(300).animate({width: 0},100);
            $(this).find(".drawborder-left").stop().animate({height: 0},100);
        });
    });  


    // top-btn 액션
    $(window).scroll(function(){
        scTop = $(window).scrollTop();
            if (scTop > hH) {$(".top-btn").fadeIn();} else {$(".top-btn").fadeOut();}
            if (scTop < hH) {$(".space-ship").removeClass("launch");}
    });
    $(".top-btn").click(function(){
        $(this).find(".space-ship").addClass("launch");
        $("html,body").animate({scrollTop: 0}, 800);
    });


    //포트폴리오 리스트 개수를 gnb a pf-count에 삽입
    $(".pf-count").text($(".pf-list ol li").length);
    //gnb토글
    $(".gnb-toggle").click(function(){
        $(this).toggleClass("active");
        $("#y-nav").toggleClass("active");
        if ($(".gnb-toggle").hasClass("active")) {
            $("body").css("overflow","hidden");
        } else {
            $("body").css("overflow","");
        }
    });


    // swiper init
    const mswiper = new Swiper('.marquee-swiper', {
        loop: true,
        slidesPerView: 'auto',
        allowTouchMove: false,
        speed: 15000,
        simulateTouch: false,
        autoplay: {
            delay: 0,
          },
    });
});