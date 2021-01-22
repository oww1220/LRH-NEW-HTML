
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

    //미결제 시 예약 취소 안내
    if($('.layer-business').length) {
        MUI.layer.openClick('.layer-business-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
           
           if(MUI.slide.LayerSwiper) MUI.slide.LayerSwiper.destroy();
           show();

        });
    }

    //제휴사 조회 팝업 레이어
    if($('.layer-paycancel').length) {
        MUI.layer.openClick('.layer-paycancel-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
           
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
            autoplay:{
                delay:10000,
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


});


/*헤더 GNB 마우스 오버시 메뉴 보이기, 슬라이드 작동*/
$(function(){
    
    (function($) {
        var slideUpFlag = true,
            slideDownFlag = true,
            idx = 0,
            $slickTarget = $('.header .specials-view-list'),
            $headerDrawBt = $('.header .nav-wrap .draw-btn'),
            $headerDrawBtEn = $('.header .nav-wrap .draw-btn-e'),
            $headerDrawBtAll = $('.header .draw-btn-all'),
            $headerDrawBtAllEn = $('.header .draw-btn-all-e'),
            $parent = $('.header-nav'),
            $hoverTarget = $('.header .nav-wrap li'),
            $contTarget = $('.draw-toggle-cont'),
            $drawToggleNormal = $('.draw-toggle-wrap'),
            $drawToggleAll = $('.draw-toggle-wrap-all'),
            $bgDim = $('.bg-dimmed-h');

        $slickTarget.slick({
            infinite: true,
            swipeToSlide: true,
            speed: 300,
            autoplay: true,
            dots: true,
            arrows: false,
            customPagin:0,
            adaptiveHeight: true,
        });

        $headerDrawBt.on({
            mouseenter:	function(){
                idx = $headerDrawBt.index(this);
                $contTarget.hide().eq(idx).show();
                $hoverTarget.removeClass('hover');
                $(this).parents('li').addClass('hover');
                
                if(slideDownFlag){
                    $drawToggleNormal.slideDown(400, 'linear', function(){
                        setTimeout(function(){
                            slideDownFlag = true;
                        },1000)
                        $slickTarget.slick('setPosition');
                    });
                    $drawToggleAll.hide();
                    $bgDim.show();
                }
            },

        });
        
        $headerDrawBtAll.on({
            mouseenter:	function(){
                if(slideDownFlag){
                    $drawToggleAll.slideDown(400, 'linear', function(){
                        slideDownFlag = true;
                    });
                    $drawToggleNormal.hide();
                    $hoverTarget.removeClass('hover');
                    $bgDim.show();
                }
                //console.log('mouseenter');
            },
            
        });

        $parent.on({
            mouseleave:	function(){
                if(slideUpFlag) {
                    slideUpFlag = false;
                    $drawToggleNormal.slideUp(400, 'linear', function(){
                        setTimeout(function(){
                            slideUpFlag = true;
                        },1000)
                    });
                    $drawToggleAll.slideUp(400, 'linear', function(){
                        setTimeout(function(){
                            slideUpFlag = true;
                        },1000)
                    });

                    $hoverTarget.removeClass('hover');
                    $bgDim.hide();
                }
                //console.log('mouseleave');
            },
        });

        //*영문 gnb 설정*/
        $headerDrawBtEn.on({
            mouseenter:	function(){
                //idx = $headerDrawBtEn.index(this);
                $contTarget.show();
                $hoverTarget.removeClass('hover');
                $(this).parents('li').addClass('hover');
                
                if(slideDownFlag){
                    $drawToggleNormal.slideDown(400, 'linear', function(){
                        setTimeout(function(){
                            slideDownFlag = true;
                        },1000)
                    });
                    $drawToggleAll.hide();
                    $bgDim.show();
                }
            },

        });

        $headerDrawBtAllEn.on({
            mouseenter:	function(){
                if(slideDownFlag){
                    $drawToggleAll.slideDown(400, 'linear', function(){
                        slideDownFlag = true;
                        console.log(111);
                    });
                    $drawToggleNormal.hide();
                    $hoverTarget.removeClass('hover');
                    $bgDim.show();
                }
                //console.log('mouseenter');
            },
            
        });

    })($);



});





