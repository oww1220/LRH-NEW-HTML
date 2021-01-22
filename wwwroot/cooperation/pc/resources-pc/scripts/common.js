
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

    //예약 취소 안내
    if($('.layer-cancel').length) {
        MUI.layer.openClick('.layer-cancel-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
           
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


    //제휴사 예약 - 차량 종류 선택 슬라이드
    if($('.cooperation-wrap .car-select-slide-cont').length) { 
        if($('.cooperation-wrap .car-select-slide-cont').children('.swiper-wrapper').children('.swiper-slide').get().length > 1) {
            MUI.slide.init('.cooperation-wrap .car-select-slide-cont','swiper', {
            loop: true,
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 32,
            //spaceBetween: 30,
            navigation: {
                nextEl: '.btn-paging-next',
                prevEl: '.btn-paging-prev',
            },
            pagination: {
                el: '.cooperation-wrap .swiper-pagination',
                type: 'fraction',
            },
        });
        }
    }



    //제휴사 예약 - 국내/국제 면허증 탭
    if($('.driver-license-section .detail-radio').length) {
        $('.driver-license-section .detail-tab-wrap-I').hide();
        $('.driver-license-section .detail-radio').on('change', '.detail-radio-box input', function(e){
            if(e.target.value === 'D'){
                $('.driver-license-section .detail-tab-wrap-D').addClass('active');
                $('.driver-license-section .detail-tab-wrap-I').hide();
                $('.driver-license-section .detail-tab-wrap-D').show();
            }
            else{
                $('.driver-license-section .detail-tab-wrap-Y').removeClass('active');
            }
        });
        $('.driver-license-section .detail-radio').on('change', '.detail-radio-box input', function(e){
            if(e.target.value === 'I'){
                $('.driver-license-section .detail-tab-wrap-I').addClass('active');
                $('.driver-license-section .detail-tab-wrap-D').hide();
                $('.driver-license-section .detail-tab-wrap-I').show();
            }
            else{
                $('.driver-license-section .detail-tab-wrap-I').removeClass('active');
            }
        });
    }

    //예약확인 탭
    if($('.reserv-confirm-tab .detail-radio').length) {
        $('.reserv-confirm-tab .detail-tab-wrap-I').hide();
        $('.reserv-confirm-tab .detail-radio').on('change', '.detail-radio-box input', function(e){
            if(e.target.value === 'D'){
                $('.reserv-confirm-tab .detail-tab-wrap-D').addClass('active');
                $('.reserv-confirm-tab .detail-tab-wrap-I').hide();
                $('.reserv-confirm-tab .detail-tab-wrap-D').show();
            }
            else{
                $('.reserv-confirm-tab .detail-tab-wrap-Y').removeClass('active');
            }
        });
        $('.reserv-confirm-tab .detail-radio').on('change', '.detail-radio-box input', function(e){
            if(e.target.value === 'I'){
                $('.reserv-confirm-tab .detail-tab-wrap-I').addClass('active');
                $('.reserv-confirm-tab .detail-tab-wrap-D').hide();
                $('.reserv-confirm-tab .detail-tab-wrap-I').show();
            }
            else{
                $('.driver-license-section .detail-tab-wrap-I').removeClass('active');
            }
        });
    }

    //(공통)약관 동의
    if($('.agreeAccor').length){
        MUI.event.toggle('.agreeAccor .btnToggle', '.agreeAccor .toggleCont', false, function(logic, layer) {
            //console.log('toggle');
            logic();
        });
        $('.btn-provision').on('click', function(){
            if($(this).hasClass('active')){
                $(this).parents('.agree-body-header').next('.agree-body-cont').css('height','150px');
                $(this).text('상세약관보기').removeClass('active');
                $(this).parents('.agree-body-header').find('.btnToggle').removeClass('active');
            }else{
                $(this).parents('.agree-body-header').next('.agree-body-cont').css('height','100vh');
                $(this).text('상세약관닫기').addClass('active');
                $(this).parents('.agree-body-header').find('.btnToggle').addClass('active');
            }
            $('.btn-provision').on('click',function(){
                setTimeout(function(){
                    stickyFixObj.calculate();
                },200);
            });
            $('.btnToggle').on('click',function(){
                setTimeout(function(){
                    stickyFixObj.calculate();
                },200);
            });
        });
    }

    //견적 스티키 
    // if($('.cooperation-wrap .detail-sticky-items').length) {
    //     $(window).on('scroll', function(e) {
    //         var scrollPos = window.scrollY || window.pageYOffset,
    //             $target = $('.detail-sticky-items'),
    //             $parent = $('.lnb-wrap'),
    //             $targetScroll = $target.find('.detail-sticky-iscroll'),
    //             parentBottomPos = $parent.offset().top + $parent.height() - $targetScroll.height(),
    //             targetPos = $target.offset().top;

    //         if(scrollPos >= targetPos) {
    //             if(scrollPos >= parentBottomPos){
    //                 $target.removeClass('fixed');
    //                 $target.find('.detail-sticky').css({top: $parent.height()-$targetScroll.height()});
    //                 if(stickyScrollObj){
    //                     stickyScrollObj.destroy();
    //                     $targetScroll.removeAttr('style'); 
    //                     stickyScrollObj = null;
    //                 }
    //             }
    //             else {
    //                 $target.addClass('fixed');
    //                 $target.find('.detail-sticky').css({top: 0});
    //                 if(stickyScrollObj){
    //                     stickyScrollObj.refresh();
    //                 }
    //                 if(!stickyScrollObj && $targetScroll.height() > $(window).height()) {
    //                     stickyScrollObj = new IScroll('.detail-sticky', { 
    //                         scrollbars: true,
    //                         mouseWheel: true,
    //                         interactiveScrollbars: true,
    //                         shrinkScrollbars: 'scale',
    //                         fadeScrollbars: true,
    //                     });
    //                 }
                    
    //             }
                
    //         }
    //         else{
    //             $target.removeClass('fixed');
    //             if(stickyScrollObj){
    //                 stickyScrollObj.destroy();
    //                 $targetScroll.removeAttr('style'); 
    //                 stickyScrollObj = null;
    //             }
                
    //         }
    //     });
    // }

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





