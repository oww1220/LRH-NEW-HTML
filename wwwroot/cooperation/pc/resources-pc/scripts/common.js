
$(function(){

    /* 래디 콜백 전역 변수*/
    var $BODY = $('body'),
        TOUCH_CLICK = ('ontouchstart' in window) ? 'touchstart' : 'click',
        LAYER_PARENT = '.layer-wrap',
        LAYER_DIM = '.bg-dimmed',   
        stickyScrollObj = null;

    /*래디 콜백 전역 함수*/
    var iscrollReset = function(show, layer){
        MUI.IScrollSingle.iscrollDestroy();
        show();
        MUI.IScrollSingle.iscrollConstructor(layer + ' .layer-iscroll');
    };

    //모달 팝업 공통 닫기
    if($('.layer-popup').length) {
        MUI.layer.closeClick('.layer-popup-close', LAYER_DIM, LAYER_PARENT, true, function(hide){
            //console.log('close');
            MUI.IScrollSingle.iscrollDestroy();
            hide();
        });
    }

     //bg-dimmed 클릭시 열린 레이어 들 닫기
     MUI.layer.closeClick(LAYER_DIM, LAYER_DIM, LAYER_PARENT, true, function(hide){
        //console.log('close');
        MUI.IScrollSingle.iscrollDestroy();
        hide();
    });


    //편도예약 레이어 팝업
    if($('.layer-cdw').length) {
        MUI.layer.openClick('.layer-cdw-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
           
           if(MUI.slide.LayerSwiper) MUI.slide.LayerSwiper.destroy();
           show();

        });
    }

     // 자차손해 면책 제도 (CDW) 레이어팝업
     if($('.layer-one-way').length) {
        MUI.layer.openClick('.layer-one-way-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
           
           if(MUI.slide.LayerSwiper) MUI.slide.LayerSwiper.destroy();
           show();

        });
    }

    // 내비게이션 옵션 레이어팝업
    if($('.layer-nav').length) {
        MUI.layer.openClick('.layer-nav-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
           
           if(MUI.slide.LayerSwiper) MUI.slide.LayerSwiper.destroy();
           show();

        });
    }

    // 유모차 대여 서비스 안내
    if($('.layer-stroller').length) {
        MUI.layer.openClick('.layer-stroller-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
           
           if(MUI.slide.LayerSwiper) MUI.slide.LayerSwiper.destroy();
           show();

        });
    }

    //전동킥보드 대여 서비스 안내
    if($('.layer-kickboard').length) {
        MUI.layer.openClick('.layer-kickboard-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
           
           if(MUI.slide.LayerSwiper) MUI.slide.LayerSwiper.destroy();
           show();

        });
    }

    //카시트 대여 서비스 안내
    if($('.layer-carseat').length) {
        MUI.layer.openClick('.layer-carseat-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
           
           if(MUI.slide.LayerSwiper) MUI.slide.LayerSwiper.destroy();
           show();

        });
    }

    // 제휴사 전용 예약 페이지 탭
    if($('.cooperation-container .cooperationTab').length){
        MUI.event.taps('.cooperation-container .cooperationTab', false, function(swap){
            swap();
        });
    }


    // 제휴사 예약 - 차량 종류 선택 슬라이드
    if($('.car-select-slide-wrap .car-select-slide-cont').length) { 
        if($('.secondhand-wrap .car-select-slide-cont').children('.swiper-wrapper').children('.swiper-slide').get().length > 1) {
            MUI.slide.init('.secondhand-wrap .car-select-slide-cont','swiper', {
            loop: true,
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 32,
            //spaceBetween: 30,
            navigation: {
                nextEl: '.btn-paging-next',
                prevEl: '.btn-paging-prev',
            },
            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: '.secondhand-wrap .swiper-pagination',
                type: 'fraction',
            },
        });
        }
    }

});


/*헤더 GNB 마우스 오버시 메뉴 보이기, 슬라이드 작동*/
$(function(){
    var target = $('.header .draw-btn');
    t=0;

    $('.header .draw-btn-s').each(function(i){
		$(this).on({
			mouseenter:	function(){
                if(t==0){
                    $('.header .specials-view-list').slick({
                        infinite: true,
                        swipeToSlide: true,
                        speed: 300,
                        autoplay: true,
                        dots: true,
                        arrows: false,
                        customPagin:0,
                        adaptiveHeight: true,
                    });
                    $('.layer-gnb-bn .slick-track').width('4000px');
                    $('.layer-gnb-bn .slick-slide').width('1760px');
                    t=1;
                }
                $('.draw-toggle-wrap-s').slideDown(400);
                $('.draw-toggle-cont').eq(i).fadeIn(400);
                $('.bg-dimmed-h').css('display','block');
               
            },
            focusin:	function(){
                if(t==0){
                    $('.header .specials-view-list').slick({
                        infinite: true,
                        swipeToSlide: true,
                        speed: 300,
                        autoplay: true,
                        dots: true,
                        arrows: false,
                        customPagin:0,
                        adaptiveHeight: true,
                    });
                    $('.layer-gnb-bn .slick-track').width('4000px');
                    $('.layer-gnb-bn .slick-slide').width('1760px');
                    t=1;
                }
                $('.draw-toggle-wrap-s').fadeIn(400);
                $('.draw-toggle-cont').eq(i).fadeIn(400);
                $('.bg-dimmed-h').css('display','block');
                t=1;
            },
            focusout: function(){
                $('.draw-toggle-wrap-s').fadeOut(400);
                $('.draw-toggle-cont').eq(i).fadeOut(400);
                $('.bg-dimmed-h').css('display','none');
            }
        });	
        
    });

    $('.header .draw-btn').each(function(i){
        target.not($(this)).on({
			mouseenter:	function(){
                if(i!=5){
                    $('.draw-toggle-cont').eq(i).fadeOut(400);
                    $('.draw-toggle-wrap-all').fadeOut(400);
                    $('.draw-toggle-wrap-all').slideUp(400);
                }else{
                    return false;
                }
            },
            focusin:	function(){
                if(i!=5){
                    $('.draw-toggle-cont').eq(i).fadeOut(400);
                    $('.draw-toggle-wrap-all').fadeOut(400)
                    $('.draw-toggle-wrap-all').slideUp(400);;
                }else{
                    return false;
                }               
            },
        });
    });

    $('.header .draw-btn-all').on({
        mouseenter:	function(){
            $('.draw-toggle-wrap-all').slideDown(400);
            $('.draw-toggle-cont').fadeIn(400);
            $('.bg-dimmed-h').css('display','block');
        },
        focusin:	function(){
            $('.draw-toggle-wrap-all').slideDown(400);
            $('.draw-toggle-cont').fadeIn(400);
            $('.bg-dimmed-h').css('display','block');
        },
        focusout:	function(){
            $('.draw-toggle-wrap-all').slideUp(400);
            $('.draw-toggle-cont').fadeOut(400);
            $('.bg-dimmed-h').css('display','none');
        }
    });

    $('.bg-dimmed-h').on({
        mouseenter: function(){
            $('.draw-toggle-wrap, .draw-toggle-wrap-all').slideUp(400);
            $('.draw-toggle-wrap, .draw-toggle-wrap-all').fadeOut(400);
            $('.bg-dimmed-h').css('display','none');
        },
    });

    //*영문 gnb 설정*/
    $('.eng-header-nav .draw-btn-e').on({
        mouseenter:	function(){
            $('.draw-toggle-wrap-s').slideDown(400);
            $('.draw-toggle-cont').fadeIn(400);
            $('.bg-dimmed-h').css('display','block');
            $('.draw-toggle-wrap-all').slideUp(400);
        },
        focusin:	function(){
            $('.draw-toggle-wrap-s').slideDown(400);
            $('.draw-toggle-cont').fadeIn(400);
            $('.bg-dimmed-h').css('display','block');
            $('.draw-toggle-wrap-all').slideUp(400);
        },
    });

    $('.eng-header-nav .draw-btn-all-e').on({
        mouseenter:	function(){
            $('.draw-toggle-wrap-all').slideDown(400);
            $('.draw-toggle-cont').fadeIn(400);
            $('.bg-dimmed-h').css('display','block');
            $('.draw-toggle-wrap-s').fadeOut(400);
        },
        focusin:	function(){
            $('.draw-toggle-wrap-all').slideDown(400);
            $('.draw-toggle-cont').fadeIn(400);
            $('.bg-dimmed-h').css('display','block');
            $('.draw-toggle-wrap-s').fadeOut(400);
        },
    });


});





