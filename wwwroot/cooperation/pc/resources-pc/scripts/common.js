
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

    
    /* 유틸start-------------------------------------------------*/
    //textarea 자동높이 조절
    if($('.textarea.auto-height').length){
        autosize($('.textarea.auto-height textarea'));
    }

    //차트그리기
    if($('.pie-chart').length){
        $('.pie-chart').easyPieChart({
            size:110,
            lineWidth: 7,
            barColor:'#F04040',
            trackColor:'#EBEBEB',
            scaleColor:false,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent span').text(Math.round(percent));
            }
        });
    }

    //댓글쓰기 키업이벤트
    if($('.unit-text-write-wrap').length) {
        var keyTarget = $('.unit-text-write-wrap');
        keyTarget.on('keyup', 'textarea', function(e){
            if(e.target.value) {
                keyTarget.find('button').addClass('active');
            }
            else{
                keyTarget.find('button').removeClass('active');
            }
        });
    }

    //주소검색 키업이벤트
    if($('.layer-address').length) {
        var addressTarget = $('.layer-address .layer-address-top');
        addressTarget.on('keyup', 'input', function(e){
            if(e.target.value) {
                addressTarget.find('button').addClass('active');
            }
            else{
                addressTarget.find('button').removeClass('active');
            }
        });
    }


    //전체동의 열고 닫기
    if($('.chk-agree-list').length){
        MUI.event.toggle('.chk-agree-list .agree-toggle-btn', '.chk-agree-list .agree-toggle-cont', false, function(logic, layer) {
            //console.log(layer);
            if($(".chk-agree-list").is(':visible')){
                MUI.IScrollSingle.iscrollRefresh(500);
            }
            logic();
        });
    }

    //필터 범위 슬라이드
    if($('.section-filter-result').length) {
        $('#slider-price').slider({
            range: true,
            min: 0,							// 최저
            max: 80,						// 최고
            orientation: 'horizontal',		// 바타입 수평
            step: 20,						// 스텝
            values: [0, 80],				// 디폴트 값
            start: function(event, ui) {	// start
            },
            slide: function(event, ui) {	// mouse movement
            },
            stop: function(event, ui) {		// stop
            },
            change: function(event, ui) {
                var min = ui.values[0],
                    max = ui.values[1];

                    console.log(ui, min, max);
                // update form fields
                $('#min_slider_price').val(min);
                $('#max_slider_price').val(max);

                $('.price_box_case .price-txt span').each(function(idx, item){
                    var text = $(item).text(),
                        minTxt = min === 0 ? min + '원' : min + '만원',
                        maxTxt = max + '만원',
                        minRegex = RegExp(minTxt),
                        maxRegex = RegExp(maxTxt);
                    if(minRegex.test(text) || maxRegex.test(text)) {
                        $(item).addClass('active');
                    }
                    else{
                        $(item).removeClass('active');
                    }
                });

            }
        });

        $('.section-filter-result .price-all').on('click', function(e) {
            console.log(11);
            $('#slider-price').slider('values', [0, 80]);
        });
        $('.section-filter-result .filter-reset-btn').on('click', function(e) {
            $('#slider-price').slider('values', [0, 80]);
            $('.section-filter-result input').prop('checked', false);
        });
    }

    //필터 버튼 토글
    MUI.event.toggle('.filter-result-open', null, true, function(logic, layer) {
        logic();
    });

    //tooltip 토글
    if($('.tooltip-box').length){
        MUI.event.toggle('.tooltip-box > button', null, true, function(logic, layer) {
            $('.tooltip-box .layer-tooltip').hide();
            $('.tooltip-box button').removeClass('active');
            logic();
            layer.prev().addClass('active');
        });
        $('.tooltip-box .layer-tooltip-close').on('click', function(){
            //var $layer = $('.' + $(this).data('target'));
            //$layer.hide();
            $('.tooltip-box .layer-tooltip').hide();
            $('.tooltip-box button').removeClass('active');
        });
    }


    //하단 버튼바 있을시 footer padding
    if($('.estimateBottom').length && $('.estimateBottom').is(':visible')){
        $('.footer').css({'padding-bottom': 200});
    }

    //데이트피커
    MUI.event.calander(".datepicker", {
        dateFormat: 'yy-mm-dd',
        showMonthAfterYear: true,
        changeYear: false,
        changeMonth: false,
        showOn: "both",
        buttonText: "날짜선택",
        yearSuffix: '.',
        monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        monthNamesShort: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    },
    function(e){
        //console.log("날짜변경됨");
    });


    //토스트 메시지 
    if($('.toast-message-login').length){
        MUI.event.toastMessage('', 'toast-message-login', 5000);
    }

    if($('.toast-message-sale').length){
        MUI.event.toastMessage('', 'toast-message-sale', 5000);
    }

    //툴팁 공통
    if($('#wrap .tooltipToggle-top').length) {
        MUI.event.toggle('#wrap .tooltipOpenBtn-top', '#wrap .tooltipCont-top', false, function(logic, layer) {
            logic();
        });
    }

    //툴팁
    if($('#wrap .tooltip-layer').length) {
        MUI.event.toggle('#wrap .tooltipOpenBtn', '#wrap .tooltipCont', false, function(logic, layer) {
            logic();

            $('.tooltipClose').on('click', function(){
                $(this).parents('.tooltipCont').fadeOut();            
            });
        });
    }

    //레이어 공통
    if($('.layer-details').length) {
        MUI.layer.openClick('.layer-details-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
            show();
        });
    }


    /* -------------------------------------------------유틸end*/

    
    //gotop
    if($('.fixedRight .btn-goTop').length){
        MUI.event.goTop($('.fixedRight .btn-goTop'));
        MUI.event.topScrollCh($('.fixedRight'));
        $(window).on('scroll', function(){
            MUI.event.topScrollCh($('.fixedRight'));
        });
    }

    /*브라우저 리사이즈*/
    if($(".layer-iscroll").length){
        $(window).on("resize",function(){
            MUI.IScrollSingle.iscrollRefresh(null);
        });
    }

    
    

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

    //메인 배너 레이어팝업
    if($('#wrap').length) {
        MUI.layer.closeClick('.layer-bn-close', LAYER_DIM, LAYER_PARENT, true, function(hide){
            //console.log('close');
            $('.bg-dimmed').css('z-index','50');
            hide();
        });
    }

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

    //제휴사 조회 팝업 레이어
    if($('.layer-business').length) {
        MUI.layer.openClick('.layer-business-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
           
           if(MUI.slide.LayerSwiper) MUI.slide.LayerSwiper.destroy();
           show();

        });
    }

    
    //미결제 시 예약 취소 안내
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
                delay:100000,
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

    //단기렌터카 안내 - 스티키
    if($('.short-container .detail-layer-nav').length) {
        MUI.event.goTarget('.menu-link', $('.short-container .detail-layer-nav').height());

        $(window).on('scroll', function(){
            var scrollTop = $(this).scrollTop();
            MUI.event.scrollTaps(scrollTop, $('.short-container .layer-item'), $('.short-container .detail-layer-nav'));

            var scrollPos = window.scrollY || window.pageYOffset,
                $target = $('.detail-layer-nav-wrap'),
                $parent = $('.detail-layer-items-wrap'),
                stickyPos = $parent.height() - $target.find('.detail-layer-nav').height();
                parentBottomPos = $parent.offset().top + stickyPos;
                targetPos = $target.offset().top;


            if(scrollPos >= targetPos) {            
                if(scrollPos >= parentBottomPos){ 
                    $target.removeClass('fixed');
                    $target.find('.detail-layer-nav').css({top: $parent.height()});
                }
                else{
                    $target.addClass('fixed');
                    $target.find('.detail-layer-nav').css({top: -20});
                }


            }
            else{            
                $target.removeClass('fixed');
            }
        });
    }

    //단기렌터카 상담하기 탭 메뉴
    if($('.short-container .tab-normal').length){
        MUI.event.taps('.short-container .tab-normal', false, function(swap){
            swap();
        });
    }

    //대여및 요금 안내 - 요금안내의 차 종류
    if($('.short-container .rentalFeeTab').length){
        MUI.event.taps('.short-container .rentalFeeTab', false, function(swap){
            swap();
        });
    }
    if($('.short-container .rentalFeeTab2').length){
        MUI.event.taps('.short-container .rentalFeeTab2', false, function(swap){
            swap();
        });
    }

    //대여/반납절차 내륙,제주 탭
    if($('.section-explain05 .tab-normal').length){
        MUI.event.taps('.section-explain05 .tab-normal', false, function(swap){
            swap();
        });
    }

     //대여/반납절차 내륙,제주 탭
     if($('.section-explain06 .tab-normal').length){
        MUI.event.taps('.section-explain06 .tab-normal', false, function(swap){
            swap();
        });
    }

    //견적 스티키
	if($('.section-sticky-lnb').length) {
        (function (){
            var stickyFixObj = MUI.stickyFix.init({
                target: '.detail-sticky-items', 
                parent: '.coop-pay-cont', 
                targetScroll: '.detail-sticky-iscroll', 
                targetItem: '.detail-sticky', 
                navHeight: 0,
                noTargetHeight: '.sticky-view-info',
                parentMinHeight: 1160,
            });
            $(window).on('scroll', function(e) {		
                stickyFixObj.calculate();
            });

        })();
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





