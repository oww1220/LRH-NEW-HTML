/*dom tree 생성이전 시점(프레임)*/


/*dom tree 생성이후 시점(프레임)*/
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

// 타겟영역을 제외하고 클릭했을 시 툴팁 숨김처리.
if($('#wrap .tooltip-layer').length) {
    $('body').on('click', function(e){
        var $tgPoint = $(e.target);
        var $tooltipArea = $tgPoint.parents('.tooltip-layer').hasClass('active'); 

        if($tgPoint.siblings('label').hasClass('carInfoTooltipBtn')){ //input + label 구조일 경우의 툴팁 버튼            
            var $tooltipCallBtn = $tgPoint.siblings('label').hasClass('carInfoTooltipBtn');         
            //console.log('1');
        }else if($tgPoint.hasClass('carInfoTooltipBtn')){ //클래스 carInfoTooltipBtn 버튼
            var $tooltipCallBtn = $tgPoint.hasClass('carInfoTooltipBtn');            
            //console.log('2');
        }if($tgPoint.hasClass('tooltipOpenBtn')){ //클래스 tooltipOpenBtn 버튼
            var $tooltipCallBtn = $tgPoint.hasClass('tooltipOpenBtn');
            //console.log('3');
        }

        if (!$tooltipCallBtn && !$tooltipArea) {
            $('.carInfoTooltipBtn').removeClass('active');
            $('.carInfoTooltipCont').hide().removeClass('active');
            $('.tooltipCont').hide().removeClass('active');
        }
    });
}




//레이어 공통
if($('.layer-details').length) {
    MUI.layer.openClick('.layer-details-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
        show();
    });
}


/* -------------------------------------------------유틸end*/

/* 탭 전환start-------------------------------------------------*/
if($('.layer-login .tab-normal').length){
    MUI.event.taps('.layer-login .tab-normal', false, function(swap){
        setTimeout(function(){
            if($('.layer-login-ty01').hasClass('active')){
                MUI.layer.calculate('.layer-login-ty01');
            }
            else if($('.layer-login-ty02').hasClass('active')){
                MUI.layer.calculate('.layer-login-ty02');
            }
            //MUI.IScrollSingle.iscrollRefresh(500);
        },0);
        swap();
        
    });
}


if($('.layer-carSelect .tab-carSelect').length){
    MUI.event.taps('.layer-carSelect .tab-carSelect', false, function(swap){
        setTimeout(function(){
            if($('.layer-carSelect').hasClass('active')){
                MUI.layer.calculate('.layer-carSelect');
            }
        },0);
        swap();
        
    });
}


//특가상품 하단 탭
if($('.specials-list .tab-normal').length){

    MUI.event.taps('.specials-list .tab-normal', false, function(swap){
        swap();
    });
}

//로그인 화면 탭
if($('.login-wrap .tab-normal').length){

    MUI.event.taps('.login-wrap .tab-normal', false, function(swap){
        swap();
    });
}

//로그인 견적화면 메뉴 라디오버튼 선택
if($('.login-wrap .detail-radio').length) {
    $('.login-wrap .detail-radio').on('change', '.detail-radio-box input', function(e){
        if(e.target.value === 'P'){
            $('.login-wrap .detail-tab-wrap-P').addClass('active');
        }
        else{
            $('.login-wrap .detail-tab-wrap-P').removeClass('active');
        }
    });
    $('.login-wrap .detail-radio').on('change', '.detail-radio-box input', function(e){
        if(e.target.value === 'L'){
            $('.login-wrap .detail-tab-wrap-L').addClass('active');
        }
        else{
            $('.login-wrap .detail-tab-wrap-L').removeClass('active');
        }
    });
}

//카라이프 탭 메뉴
if($('.carLife-container .tab-normal').length){
    MUI.event.taps('.carLife-container .tab-normal', false, function(swap){
        swap();
    });
}

//회사소개 탭 메뉴
if($('.footerMenu-container .contTab').length){
    MUI.event.taps('.footerMenu-container .contTab', false, function(swap){
        swap();
    });
}

//탭 공통
if($('#wrap .tabControl').length){
    MUI.event.taps('#wrap .tabControl', false, function(swap){
        swap();
    });
}
//탭 안의 탭 공통
if($('#wrap .tabContInnerTab').length){
    MUI.event.taps('#wrap .tabContInnerTab', false, function(swap){
        swap();
    });
}
//토글 공통
if($('#wrap .toggleOpenBtn').length) {
    MUI.event.toggle('#wrap .toggleOpenBtn', '#wrap .toggleContArea', false, function(logic, layer) {
        logic();
    });
}

//20210115 - 탭 공통으로 빼기위해 중복되는 소스 주석 처리
// //신차장기렌터카 - 제휴카드 안내 
// if($('.affiliateCard-container .tabControl').length){
//     MUI.event.taps('.affiliateCard-container .tabControl', false, function(swap){
//         swap();
//     });
// }
// //단기렌터카 - 부가서비스 안내
// if($('.additional-container .tabControl').length){
//     MUI.event.taps('.additional-container .tabControl', false, function(swap){
//         swap();
//     });
// }

/* -------------------------------------------------탭 전환end*/


/* 레이어팝업start-------------------------------------------------*/
    //본인인증 슬라이드 팝업
    if($('.layer-certification').length) {
        MUI.layer.openClick('.layer-certification-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
            //console.log('open');
            iscrollReset(show, layer);
        });
    }

    //슬라이드 팝업 공통 닫기
    if($('.layer-slide').length) {
        MUI.layer.closeClick('.layer-slide-close', LAYER_DIM, LAYER_PARENT, true, function(hide){
            //console.log('close');
            MUI.IScrollSingle.iscrollDestroy();
            hide();
        });
    }

    //고객후기 모달 팝업
    if($('.layer-review-write-detail').length) {
        MUI.layer.openClick('.layer-review-write-detail-open', LAYER_DIM, LAYER_PARENT, false, function(show){
            if(MUI.slide.LayerSwiper) MUI.slide.LayerSwiper.destroy();
        
            //console.log('open');
            show();
            //고객후기 레이어팝업 상단 슬리이더
            $('.layer-review-write-detail .detail-view-list .swiper-pagination-wrap').hide();      
            if($('.layer-review-write-detail .detail-view-list .swiper-slide').length >= 2) {

                setTimeout(function(){
                    $('.layer-review-write-detail .detail-view-list .swiper-pagination-wrap').show();
                    MUI.slide.LayerSwiper = MUI.slide.init('.layer-review-write-detail .detail-view-list','swiper', {
                        loop: true,
                        autoHeight:true,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    });
                    MUI.slide.LayerSwiper.on('slideChange', function() { 
                        setTimeout(function(){
                            MUI.layer.calculate('.layer-review-write-detail');
                        },200);
                    });
                },0);
                
            }
            
        });
    }

    //후기작성 모달 팝업
    if($('.layer-review-write-default').length) {
        MUI.layer.openClick('.layer-review-write-default-open', LAYER_DIM, LAYER_PARENT, false, function(show){
            //console.log('open');
            show();
        });
    }

    //차량선택 모달 팝업
    if($('.layer-carSelect').length) {
        MUI.layer.openClick('.layer-carSelect-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
            //console.log('open');
            //iscrollReset(show, layer);
            show();
        });
    }

    //프로모션 모달 팝업
    if($('.layer-promotion').length) {
        MUI.layer.openClick('.layer-promotion-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
            //console.log('open');
            //iscrollReset(show, layer);
            show();
        });
    }


    //운전면허 모달 팝업
    if($('.layer-license').length) {
        MUI.layer.openClick('.layer-license-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
            //console.log('open');
            //iscrollReset(show, layer);
            show();
        });
    }

    //제휴카드 혜택안내 모달 팝업
    if($('.layer-cards').length) {
        MUI.layer.openClick('.layer-cards-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
            //console.log('open');
            //iscrollReset(show, layer);
            show();
        });
    }

    //안내문구 공통 모달 팝업
    if($('.layer-infos').length) {
        MUI.layer.openClick('.layer-infos-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
            //console.log('open');
            //iscrollReset(show, layer);
            show();
        });
    }

    //대여 차량 상세
    if($('.layer-carDetail-info').length) {
        MUI.layer.openClick('.layer-carDetail-info-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
            show();
        });
    }
    //주소찾기 모달 팝업
    if($('.layer-address').length) {
        MUI.layer.openClick('.layer-address-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
            //console.log('open');
            //iscrollReset(show, layer);
            show();
        });
    }

    //친구추천 url 만들기 팝업
    if($('.layer-makeUrl').length) {
        MUI.layer.openClick('.layer-makeUrl-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
            show();
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

    //로그인 레이어팝업
    if($('.layer-login').length) {
        MUI.layer.openClick('.layer-login-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
            //iscrollReset(show, layer);
            show();
        });
        MUI.layer.closeClick('.layer-login-close', LAYER_DIM, LAYER_PARENT, true, function(hide){
            //console.log('close');
            //MUI.IScrollSingle.iscrollDestroy();
            hide();
        });
    }

    //가격 상세 정보
    if($('.layer-priceDetail-info').length) {
        MUI.layer.openClick('.layer-priceDetail-info-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
            show();
        });
    }
    //차량 성능 검사
    if($('.layer-carInspection-info').length) {
        MUI.layer.openClick('.layer-carInspection-info-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
            show();
        });
    }    

    //할부 계산기
    if($('.layer-calculator').length) {
        MUI.layer.openClick('.layer-calculator-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
            show();
        });
    } 
    
    //차량 옵션
    if($('.layer-carOption-info').length) {
        MUI.layer.openClick('.layer-carOption-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
            show();
        });
    }
    //정비 이력
    if($('.layer-carRepair-info').length) {
        MUI.layer.openClick('.layer-carRepair-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
            show();
        });
    }
    //차량 상세
    if($('.layer-registCarDetail-info').length) {
        MUI.layer.openClick('.layer-registCarDetail-info-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
            show();
        });
    } 

    //마이페이지 공통 모달 팝업
    if($('.layer-mypage').length) {
        MUI.layer.openClick('.layer-mypage-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
            //console.log('open');
            //iscrollReset(show, layer);
            show();
        });
    }

    //마이페이지 지점안내레이어 및 슬라이드
    if($('.layer-sel-branch').length) {
        MUI.layer.openClick('.layer-sel-branch-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
           
           if(MUI.slide.LayerSwiper) MUI.slide.LayerSwiper.destroy();
           show();

           MUI.slide.LayerSwiper = MUI.slide.init('.selBranchSwiper','swiper', {
                loop: true,
                autoHeight:true,
                pagination: {
                    el: '.selBranchSwiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.selBranchSwiper-button-next',
                    prevEl: '.selBranchSwiper-button-prev',
                },
           });
        });
    }
    
    //bg-dimmed 클릭시 열린 레이어 들 닫기
    MUI.layer.closeClick(LAYER_DIM, LAYER_DIM, LAYER_PARENT, true, function(hide){
        //console.log('close');
        MUI.IScrollSingle.iscrollDestroy();
        hide();
    });
/* -------------------------------------------------레이어팝업end*/


/* 견적start-------------------------------------------------*/
    //견적 상단 슬리이더
    if($('.estimate-wrap .detail-view-list').length) {
        $('.estimate-wrap .detail-view-list-wrap .swiper-pagination-wrap').hide();      
        if($('.estimate-wrap .detail-view-list .swiper-slide').length >= 2) {
            $('.estimate-wrap .detail-view-list-wrap .swiper-pagination-wrap').show();
            MUI.slide.init('.estimate-wrap .detail-view-list','swiper', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                effect: 'flip',
            });
        }
        
    }

    //견적 스티키 
    if($('.estimate-wrap .detail-layer-nav').length) {
        $(window).on('scroll', function(e) {
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
                    $target.find('.detail-layer-nav').css({top: 0});
                }
            }
            else{
                $target.removeClass('fixed');
            }
        });
    }

    //견적 스티키 2
    if($('.estimate-wrap .detail-sticky-items').length) {
        $(window).on('scroll', function(e) {
            var scrollPos = window.scrollY || window.pageYOffset,
                $target = $('.detail-sticky-items'),
                $parent = $('.detail-layer-items-wrap'),
                $targetScroll = $target.find('.detail-sticky-iscroll'),
                parentBottomPos = $parent.offset().top + $parent.height() - $targetScroll.height(),
                targetPos = $target.offset().top;

            if(scrollPos >= targetPos) {
                if(scrollPos >= parentBottomPos){
                    $target.removeClass('fixed');
                    $target.find('.detail-sticky').css({top: $parent.height()-$targetScroll.height()});
                    if(stickyScrollObj){
                        stickyScrollObj.destroy();
                        $targetScroll.removeAttr('style'); 
                        stickyScrollObj = null;
                    }
                }
                else {
                    $target.addClass('fixed');
                    $target.find('.detail-sticky').css({top: 0});
                    if(stickyScrollObj){
                        stickyScrollObj.refresh();
                    }
                    if(!stickyScrollObj && $targetScroll.height() > $(window).height()) {
                        stickyScrollObj = new IScroll('.detail-sticky', { 
                            scrollbars: true,
                            mouseWheel: true,
                            interactiveScrollbars: true,
                            shrinkScrollbars: 'scale',
                            fadeScrollbars: true,
                        });
                    }
                    
                }
                
            }
            else{
                $target.removeClass('fixed');
                if(stickyScrollObj){
                    stickyScrollObj.destroy();
                    $targetScroll.removeAttr('style'); 
                    stickyScrollObj = null;
                }
                
            }
        });
    }

    //견적 텝이동
    if($('.estimate-wrap .detail-layer-nav').length) {
        MUI.event.goTarget('.menu-link', $('.estimate-wrap .detail-layer-nav').height());

        $(window).on('scroll', function(){
            var scrollTop = $(this).scrollTop();
            MUI.event.scrollTaps(scrollTop, $('.estimate-wrap .layer-item'), $('.estimate-wrap .detail-layer-nav'));
        });
    }
    
    //견적 step1 라디오버튼 선택
    if($('.estimate-wrap .item-step1').length) {
        $('.estimate-wrap .item-step1').on('change', '.radio-box input', function(e){
            if(e.target.value === 'E'){
                $('.estimate-wrap .electric').addClass('active');
            }
            else{
                $('.estimate-wrap .electric').removeClass('active');
            }
        });
    }

    //견적 step2 모델 선택
    if($('.estimate-wrap .item-step2').length) {
        MUI.event.toggle('.item-step2 .model-toggle-btn', '.item-step2 .model-toggle-cont', false, function(logic, layer) {
            //console.log('toggle');
            $('.estimate-wrap .item-step2 input').prop('checked', false);
            logic();
        });
    }

    //견적 step6 계약조건 선택
    if($('.estimate-wrap .item-step6').length) {
        MUI.event.toggle('.item-step6 .model-toggle-btn', '.item-step6 .model-toggle-cont', true, function(logic, layer) {
            //console.log('toggle');
            logic();
        });
    }

    //견적 기본정보 토글
    if($('.summary-table-wrap .summary-toggle-btn').length) {
        MUI.event.toggle('.summary-table-wrap .summary-toggle-btn', '.summary-table-wrap .summary-toggle-cont', true, function(logic, layer) {
            logic();
        });
    }
    
    //견적 슬라이드 레이어 선택
    if($('.layer-certification').length){
        $('.radio-box2 input').on('change',function(e){
            //console.log($(this).data('type'));
            if($(this).data('type') === 'business') {
                $('.layer-certification .radio-depth').addClass('active');
            }
            else{
                $('.layer-certification .radio-depth').removeClass('active');
            }
            MUI.IScrollSingle.iscrollRefresh(500);
        }); 
    }    

/* -------------------------------------------------견적end*/

/* 기획전start-------------------------------------------------*/
    //기획전 상단 슬라이더
    if($('.exhibition-wrap .exhibition-view-list').length) {
        MUI.slide.init($('.exhibition-wrap .exhibition-view-list'), 'slick', {
				slidesToScroll: 1, 
				infinite: true,
				autoplay: false,
                arrows: true,
                slidesToShow: 1,
                centerMode: true,
                variableWidth: true,
                dots: true,

        });
    }

    //기획전 스틱키
    if($('.exhibition-wrap .exhibition-detail-middle').length) {

        MUI.event.goTarget('.exhibition-detail-middle .menu-link', $('.exhibition-wrap .exhibition-detail-middle').height());

        var $target = $('.exhibition-wrap .exhibition-detail-middle'),
            targetHeight = $target.outerHeight();
            targetTop = $target.offset().top;

        $target.css({height: targetHeight});
        $(window).on('scroll', function(){
            var scrollTop = $(window).scrollTop();
            MUI.event.scrollTaps(scrollTop, $('.exhibition-wrap .exbit-section'), $('.exhibition-wrap .exhibition-detail-middle'));
            if(scrollTop >= targetTop) {
                $target.addClass('sticky');
            }
            else{
                $target.removeClass('sticky');
                $target.find('.menu-link').removeClass('active');
            }
        });
    }
/* -------------------------------------------------기획전end*/

/* 특가상품start-------------------------------------------------*/
    //특가상품 상단 슬라이더
    if($('.specials-wrap .specials-view-list').length) {
        MUI.slide.init($('.specials-wrap .specials-view-list'), 'slick', {
				slidesToScroll: 1, 
				infinite: true,
				autoplay: false,
                arrows: true,
                slidesToShow: 3,
                centerMode: true,
                variableWidth: true,
                dots: true,

        });
    }

/* -------------------------------------------------특가상품end*/

/* 계약start-------------------------------------------------*/
    //계약화면 메뉴 라디오버튼 선택
    if($('.contract-wrap .menu-radio-box').length) {
        $('.contract-wrap .menu-radio-box').on('change', '.radio-box input', function(e){
            if(e.target.value === 'N'){
                $('.contract-wrap .detail-layer-normal').addClass('active');
            }
            else{
                $('.contract-wrap .detail-layer-normal').removeClass('active');
            }
        });
        $('.contract-wrap .menu-radio-box').on('change', '.radio-box input', function(e){
            if(e.target.value === 'I'){
                $('.contract-wrap .detail-layer-integrated').addClass('active');
            }
            else{
                $('.contract-wrap .detail-layer-integrated').removeClass('active');
            }
        });
    }

    //계약 기본정보 토글
    if($('.contract-wrap .contract-toggle-btn').length) {
        MUI.event.toggle('.contract-wrap .contract-toggle-btn', '.contract-wrap .contract-toggle-cont', true, function(logic, layer) {
            logic();
        });
    }
/* -------------------------------------------------계약end*/

/* 카타르시스start-------------------------------------------------*/
    
    if($('.click-star').length) {
        $('.click-star .star').click(function(e){
            $(this).parents().children('.star').removeClass('active');
            $(this).addClass('active').prevAll('.star').addClass('active');
            return false;
        });
    }
/* -------------------------------------------------카타르시스end*/

/* 로그인start-------------------------------------------------*/

/* -------------------------------------------------로그인end*/



/* 회원가입 start-------------------------------------------------*/

//통합회원가입 정보입력 토글
if($('.driver-license-accor').length){
    MUI.event.toggle('.driver-license-accor .btn-driver-license', '.driver-license-accor .driver-license-cont', false, function(logic, layer) {
        //console.log('toggle');
        logic();
    });
}

/* -------------------------------------------------회원가입 end*/



/* 고객센터start-------------------------------------------------*/
//고객센터 키업이벤트
if($('.sticky-search-wrap').length) {
    var addressTarget = $('.sticky-search-wrap .sticky-search');
    addressTarget.on('keyup', 'input', function(e){
        if(e.target.value) {
            addressTarget.find('button').addClass('active');
        }
        else{
            addressTarget.find('button').removeClass('active');
        }
    });
}
//고객센터 열고 닫기
if($('.customer-list').length){
    MUI.event.toggle('.customer-list .customer-toggle-btn', '.customer-list .customer-toggle-cont', false, function(logic, layer) {
        //console.log('toggle');
        logic();
    });
}

//전국지점안내 + 영문 location 페이지
if($('.branch-office-section').length){
    MUI.event.toggle('.accorSpotBtn', '.accorSpotCont', false, function(logic, layer, target) {
        if(MUI.slide.LayerSwiper) MUI.slide.LayerSwiper.destroy();

        logic();

        var activeBtn = $(target + '.active').selector;
        var activeDiv = layer.selector;
        var activeSlide = $(activeDiv + ' .swiper-slide');
        
        //선택된 영역 효과
        if($(target).hasClass('active')){
            $(activeBtn).closest('.row').addClass('on');
            $(activeBtn).closest('.row').siblings('.row').removeClass('on');
        }else{
            $('.tbl-type-list .row').removeClass('on');            
        }
        

        //슬라이드
        if(activeSlide.length > 1){
         
            var autoplayFlag = true;    
            var activeSwiper = $(activeDiv + ' .branchesSwiper');

            $('.branchesSwiper-controls').show();   
            MUI.slide.LayerSwiper = MUI.slide.init(activeSwiper,'swiper', {
                loop: true,				
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.branchesSwiper .branchesSwiper-pagination',
                    clickable: true,
                },                            
            });
           
            $('.branchesSwiper .btnAutoplay').removeClass('stop');            
            $(activeDiv).find($('.branchesSwiper .btnAutoplay')).on('click',function(){                
                if(autoplayFlag == true){
                    $(this).addClass('stop');
                    MUI.slide.LayerSwiper.autoplay.stop();                                        
                    autoplayFlag = false;
                }else{
                    $(this).removeClass('stop');                    
                    MUI.slide.LayerSwiper.autoplay.start();                    
                    autoplayFlag = true;
                }
            });
        }else{
            $('.branchesSwiper-controls').hide();
        }   

        //탭
        if($(activeDiv + ' .trafficTab .tabs > li').length > 1){                        
            MUI.event.taps(activeDiv + ' .trafficTab', false, function(swap){
                swap();                
            });
        }
    });
}

if($('.branchOfferingTab').length){
    MUI.event.taps('.branchOfferingTab', false, function(swap){
        swap();
    });
}


//기사포함지점안내 리스트
if($('.branchDriverTab').length){
    MUI.event.taps('.branchDriverTab', false, function(swap){
        swap();
    });
}

//기사포함지점안내 해외 리스트
if($('.branchAbroadTab').length){
    MUI.event.taps('.branchAbroadTab', false, function(swap){
        swap();
    });
}


/* -------------------------------------------------고객센터end*/

/* 중고차장기렌터카start-------------------------------------------------*/
//상담 희망 일시 달력 버튼
if($('.schedule-accor').length){
    MUI.event.toggle('.btn-schedule-toggle', '.schedule-toggle-cont', false, function(logic, layer) {
        //console.log('toggle');
        logic();
    });
}

//약관 동의
if($('.agreeAccor').length){
    MUI.event.toggle('.agreeBtn', '.agreeToggleCont', false, function(logic, layer) {
        //console.log('toggle');
        logic();
    });
}

//중고차 장기렌터카 - 차량 검색
if($('.secondhand-container .filterAccor').length) {
    MUI.event.toggle('.filterAccor .filterToggleBtn', '.filterAccor .filterToggleCon', false, function(logic, layer) {
        //console.log('toggle');
        //$('.secondhand-container .filterAccor input').prop('checked', false);
        logic();
    });
}
//중고차 목록 - 보기모드
if($('.secondhand-container').length){
    var listViewFlag = true;    

    $('.sort-section .listViewBtn').on('click', function(){        
        if(listViewFlag){
            $('.listViewDefault').removeClass('listViewDefault').addClass('listViewActive');  
            $('.result-cont').children('.grid-col').removeClass('col3').addClass('col2');

            listViewFlag = false;
        }else{
            $('.listViewActive').removeClass('listViewActive').addClass('listViewDefault');         
            $('.result-cont').children('.grid-col').removeClass('col2').addClass('col3');

            listViewFlag = true;            
        }
    });
}

//차량 상세 - 상단 슬라이드
if($('.secondhand-container .carDetailSlide').length) {
    $('.carDetailSlide .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.carDetailSlide .slider-nav'
    });
    $('.carDetailSlide .slider-nav').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        asNavFor: '.carDetailSlide .slider-for',
        dots: true,
        centerMode: true,
        centerPadding: '40px',
        focusOnSelect: true
    });
}

//차량 상세 - 아코디언
if($('.secondhand-container .carInfoAccor').length) {
    MUI.event.toggle('.carInfoAccor .carInfoToggleBtn', '.carInfoAccor .carInfoToggleCon', false, function(logic, layer) {
        //console.log('toggle');
        //$('.secondhand-container .filterAccor input').prop('checked', false);
        logic();
    });
}

//차량옵션 툴팁
if($('.secondhand-container .carInfoTooltipCont').length) {
    MUI.event.toggle('.secondhand-container .carInfoTooltipBtn', '.secondhand-container .carInfoTooltipCont', false, function(logic, layer) {
        logic();

        $('.tooltipClose').on('click', function(){
            $(this).parents('.carInfoTooltipCont').fadeOut();            
        });
    });
}

//상담하기 - 월 대여료
if($('.secondhand-container .carInfoAccor').length) {
    MUI.event.toggle('.carInfoAccor .priceSelectBtn', '.carInfoAccor .priceSelectCont', false, function(logic, layer) {
        logic();
    });
}
// //승계 > 승계진행 툴팁
// if($('.secondhand-container .tooltip-layer').length) {
//     MUI.event.toggle('.tooltipOpenBtn', '.tooltipCont', false, function(logic, layer) {
//         logic();

//         $('.tooltipClose').on('click', function(){
//             $(this).parents('.tooltipCont').fadeOut();            
//         });
//     });
// }

//승계 > 상담 툴팁, 마이페이지 > 상담 툴팁
if($('#wrap .tooltipToggle').length) {
    MUI.event.toggle('.tooltipToggle .tooltipOpenBtn', '.tooltipToggle .tooltipCont', false, function(logic, layer) {
        logic();
    });
}



//필터 슬라이드
if($('.secondhand-container .car-detail-sticky-wrap #slider-price').length) {

    //필터 슬라이드 내 슬라이드
    $('#slider-price').slider({
        range: true,
        min: 0,							// 최저
        max: 60,						// 최고
        orientation: 'horizontal',		// 바타입 수평
        step: 12,						// 스텝
        values: [12, 60],				// 디폴트 값
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
        }
    });
}

//상담신청 - 차량 선택
if($('.registerTab').length){
    MUI.event.taps('.registerTab', false, function(swap){
        swap();
    });
}

//사진추가
if($('.secondhand-container .imgUpload-section').length){
    MUI.event.toggle('.imgUploadOpen', '.imgUploadCont', false, function(logic, layer) {
        //console.log('toggle');
        logic();
    });
}

//차량상세 레이어 토글
if($('.layer-registCarDetail-info').length){
    MUI.event.toggle('.layer-registCarDetail-info .toggleBtn', '.layer-registCarDetail-info .toggleCont', false, function(logic, layer) {
        //console.log('toggle');
        logic();
    });
}

//중고차 상세 롤링 01
if($('#secondhand-slide').length) {
    (function(){
        var subTopSlideThumbs = MUI.slide.init('#secondhand-slide .detail-slide-gallery-thumbs','swiper', {
            spaceBetween: 10,
            slidesPerView: 10,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            scrollbar: {
                el: '#secondhand-slide .swiper-scrollbar',
                hide: false,
                dragSize: 50,
                draggable: true,
            },
        });				
        var subTopSlide = MUI.slide.init('#secondhand-slide .detail-slide-gallery-top', 'swiper', {
            spaceBetween: 10,
            autoHeight:true,
            navigation: {
                nextEl: '.zoom-swiper-button-next',
                prevEl: '.zoom-swiper-button-prev',
             },
            thumbs: {
                swiper: subTopSlideThumbs,
            },
            pagination: {
                el: '#secondhand-slide .swiper-pagination',
                type: 'fraction',
            },
        });
        $('#secondhand-slide .detail-slide-gallery-thumbs').on('click', '.swiper-slide', function() {
            //console.log($(this).attr('data-link'));
            var idx = $(this).attr('data-link') - 1;
            subTopSlide.slideTo(idx);
        });	
    
    
        //20210111 : 차량 슬라이드 이미지 줌, 줌아웃
        var zoomFlag = true;
        function zoomSwiperDestroy(){
            if(MUI.slide.LayerSwiper) {
                subTopSlideThumbs.destroy();
                subTopSlide.destroy();
            }
        }
        function zoomSwiperUpdate(){
            subTopSlideThumbs.update();
            subTopSlide.update();
        }
        
        $('.zoomBtn').on('click', function(){
            if(zoomFlag == true){
                $(this).addClass('zoomOut');
                zoomSwiperDestroy();
                
                $('#secondhand-slide').addClass('zoomMode');
                $('html, body').css('overflow','hidden');
                zoomSwiperUpdate();
                MUI.IScrollSingle.iscrollRefresh(500);
                zoomFlag = false;
            }else{
                $(this).removeClass('zoomOut');
                zoomSwiperDestroy()
                
                $('#secondhand-slide').removeClass('zoomMode');
                $('html, body').css('overflow','auto');
                zoomSwiperUpdate();
                zoomFlag = true;
            }
        });
        
    })();
}

/* -------------------------------------------------중고차장기렌터카end*/


/* 카라이프start-------------------------------------------------*/

//타방 슬라이드
if($('.tabwang-swiper-section .carLife-tabwang-swiper').length) {
    MUI.slide.init('.tabwang-swiper-section .carLife-tabwang-swiper','swiper', {
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        //spaceBetween: 30,
        spaceBetween: 0,
        navigation: {
            nextEl: '.tabwang-swiper-button-next',
            prevEl: '.tabwang-swiper-button-prev',
         },
        // autoplay: {
        //     delay: 3000,
        // },
    });
}
/* -------------------------------------------------카라이프end*/


/* 단기렌터카 start-------------------------------------------------*/

//차량검색
// if($('.short-filter-accor').length){
    
//     MUI.event.toggle('.btn-short-filter-toggle', '.short-filter-toggle-cont', false, function(logic, layer) {
//         //console.log('toggle');
//         logic();
//     });
// }
// if($('.short-filter-accor2').length){
    
//     MUI.event.toggle('.btn-short-filter-toggle2', '.short-filter-toggle-cont2', false, function(logic, layer) {
//         //console.log('toggle');
//         logic();
//     });
// }

//중고차 장기렌터카 - 차량 검색
if($('.short-container .filterAccor').length) {
    MUI.event.toggle('.filterAccor .filterToggleBtn', '.filterAccor .filterToggleCon', false, function(logic, layer) {
        logic();
    });
}

//단기렌터카 상담하기 탭 메뉴
if($('.short-container .tab-normal').length){
    MUI.event.taps('.short-container .tab-normal', false, function(swap){
        swap();
    });
}

/*
if($('.short-agree-accor').length){
    MUI.event.toggle('.btn-short-agree-toggle', '.short-agree-toggle-cont', false, function(logic, layer) {
        //console.log('toggle');
        logic();
    });
}
if($('.short-agree-accor').length){
    MUI.event.toggle('.btn-short-agree-toggle2', '.short-agree-toggle-cont2', false, function(logic, layer) {
        //console.log('toggle');
        logic();
    });
}

if($('.short-agree-accor').length){
    MUI.event.toggle('.btn-short-agree-toggle3', '.short-agree-toggle-cont3', false, function(logic, layer) {
        //console.log('toggle');
        logic();
    });
}
*/

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

//단기렌터카 실시간 예약 - 약관,결제/lnb 
/*
if($('.section-sticky-lnb').length) {
    $(window).on('scroll', function(e) {
        var scrollPos = window.scrollY || window.pageYOffset,
            $target = $('.detail-sticky-items'),
            $parent = $('.realTime-cont'),
            $targetScroll = $target.find('.detail-sticky-iscroll'),
            parentBottomPos = $parent.offset().top + $parent.height() - $targetScroll.height(),
            _navHeight = 0,
            targetPos = $target.offset().top;
            $noTarget = $('.sticky-view-info');


        if(scrollPos >= targetPos) {
            if(scrollPos >= parentBottomPos + _navHeight){
                $target.find('.detail-sticky').scrollTop(0);
                $target.removeClass('fixed');
                $target.find('.detail-sticky').css({top: $parent.height()-$targetScroll.height()-$noTarget.height() + _navHeight});
                if(stickyScrollObj){
                }
            }
            else {
                $target.addClass('fixed');
                $target.find('.detail-sticky').css({top: _navHeight});
                if(stickyScrollObj){
                }
                if(!stickyScrollObj && $targetScroll.height() > $(window).height()) {
                }
            }
        }
        else{
            $target.find('.detail-sticky').scrollTop(0);
            $target.removeClass('fixed');
            if(stickyScrollObj){
            }
        }
    });
}
*/


//단기렌터카 실시간 예약 - 결제/나의등록카드
if($('.short-container .detail-radio').length) {
    $('.short-container .detail-radio').on('change', '.detail-radio-box input', function(e){
        if(e.target.value === 'P'){
            $('.short-container .detail-tab-wrap-P').addClass('active');
        }
        else{
            $('.short-container .detail-tab-wrap-P').removeClass('active');
        }
    });
    $('.short-container .detail-radio').on('change', '.detail-radio-box input', function(e){
        if(e.target.value === 'L'){
            $('.short-container .detail-tab-wrap-L').addClass('active');
        }
        else{
            $('.short-container .detail-tab-wrap-L').removeClass('active');
        }
    });
    $('.short-container .detail-radio').on('change', '.detail-radio-box input', function(e){
        if(e.target.value === 'D'){
            $('.short-container .detail-tab-wrap-D').addClass('active');
        }
        else{
            $('.short-container .detail-tab-wrap-D').removeClass('active');
        }
    });
}


//단기렌터카 실시간 예약 - 사전체크인/예약자정보
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

//단기렌터카 > 실시간 예약/사전체크인/추가운전자 등록, 
//마이페이지 > 단기렌터카/이용중관리/추가운전자 등록

    //추가 운전자 구분
    if($('.form2 .detail-radio').length) {
        $('.form2 .detail-tab-wrap-2').hide();
        $('.form2 .detail-radio').on('change', '.detail-radio-box input', function(e){
            if(e.target.value === '1'){
                $('.form2 .detail-tab-wrap-1').addClass('active');
                $('.form2 .detail-tab-wrap-2').hide();
                $('.form2 .detail-tab-wrap-1').show();
            }
            else{
                $('.form2 .detail-tab-wrap-1').removeClass('active');
            }
        });
        $('.form2 .detail-radio').on('change', '.detail-radio-box input', function(e){
            if(e.target.value === '2'){
                $('.form2 .detail-tab-wrap-2').addClass('active');
                $('.form2 .detail-tab-wrap-1').hide();
                $('.form2 .detail-tab-wrap-2').show();
            }
            else{
                $('.form2 .detail-tab-wrap-2').removeClass('active');
            }
        });
    }
    if($('.form2 .detail-radio').length) {
        $('.form2 .detail-tab-wrap-4').hide();
        $('.form2 .detail-radio').on('change', '.detail-radio-box input', function(e){
            if(e.target.value === '3'){
                $('.form2 .detail-tab-wrap-3').addClass('active');
                $('.form2 .detail-tab-wrap-4').hide();
                $('.form2 .detail-tab-wrap-3').show();
            }
            else{
                $('.form2 .detail-tab-wrap-3').removeClass('active');
            }
        });
        $('.form2 .detail-radio').on('change', '.detail-radio-box input', function(e){
            if(e.target.value === '4'){
                $('.form2 .detail-tab-wrap-4').addClass('active');
                $('.form2 .detail-tab-wrap-3').hide();
                $('.form2 .detail-tab-wrap-4').show();
            }
            else{
                $('.form2 .detail-tab-wrap-4').removeClass('active');
            }
        });
    }

    //면허 국내,외 구분
    if($('.form2 .detail-radio').length) {
        $('.form2 .detail-tab-wrap-2-2').hide();
        $('.form2 .detail-radio').on('change', '.detail-radio-box input', function(e){
            if(e.target.value === '2-1'){
                $('.form2 .detail-tab-wrap-2-1').addClass('active');
                $('.form2 .detail-tab-wrap-2-2').hide();
                $('.form2 .detail-tab-wrap-2-1').show();
            }
            else{
                $('.form2 .detail-tab-wrap-2-1').removeClass('active');
            }
        });
        $('.form2 .detail-radio').on('change', '.detail-radio-box input', function(e){
            if(e.target.value === '2-2'){
                $('.form2 .detail-tab-wrap-2-2').addClass('active');
                $('.form2 .detail-tab-wrap-2-1').hide();
                $('.form2 .detail-tab-wrap-2-2').show();
            }
            else{
                $('.form2 .detail-tab-wrap-2-2').removeClass('active');
            }
        });
    }
    if($('.form2 .detail-radio').length) {
        $('.form2 .detail-tab-wrap-4-2').hide();
        $('.form2 .detail-radio').on('change', '.detail-radio-box input', function(e){
            if(e.target.value === '4-1'){
                $('.form2 .detail-tab-wrap-4-1').addClass('active');
                $('.form2 .detail-tab-wrap-4-2').hide();
                $('.form2 .detail-tab-wrap-4-1').show();
            }
            else{
                $('.form2 .detail-tab-wrap-4-1').removeClass('active');
            }
        });
        $('.form2 .detail-radio').on('change', '.detail-radio-box input', function(e){
            if(e.target.value === '4-2'){
                $('.form2 .detail-tab-wrap-4-2').addClass('active');
                $('.form2 .detail-tab-wrap-4-1').hide();
                $('.form2 .detail-tab-wrap-4-2').show();
            }
            else{
                $('.form2 .detail-tab-wrap-4-2').removeClass('active');
            }
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

//대여및 요금 안내 - 요금안내의 차 종류(모바일)
if($('.shor-wrap .rentalFeeTab').length){
    MUI.event.taps('.shor-wrap .rentalFeeTab', false, function(swap){
        swap();
    });
}
if($('.shor-wrap .rentalFeeTab2').length){
    MUI.event.taps('.shor-wrap .rentalFeeTab2', false, function(swap){
        swap();
    });
}


/* -------------------------------------------------단기렌터카 end*/

/* 신차장장기렌터카 start-------------------------------------------------*/
//이달의 특가
if($('.longTerm-container .longTermSpecialTab').length){
    MUI.event.taps('.longTerm-container .longTermSpecialTab', false, function(swap){
        swap();
    });
}
//신차장 멤버십 탭 메뉴
if($('.longTerm-container .longTermBenefitTab').length){
    MUI.event.taps('.longTerm-container .longTermBenefitTab', false, function(swap){
        swap();

        //신차장기렌터카 멤버십 - 스티키    
        MUI.event.goTarget('.menu-link', $('.longTerm-container .detail-layer-nav').height() + 20);

        $(window).on('scroll', function(e) {
            var scrollTop = $(this).scrollTop();
            MUI.event.scrollTaps(scrollTop, $('.longTerm-container .layer-item'), $('.longTerm-container .detail-layer-nav'), 20);

            var scrollPos = window.scrollY || window.pageYOffset,
                $target = $('.detail-layer-nav-wrap'), 
                $parent = $('.detail-layer-items-wrap'),
                stickyPos = $parent.height() - $target.find('.detail-layer-nav').height(); 
                parentBottomPos = $parent.offset().top + stickyPos;
                targetPos = $target.offset().top;

            if(scrollPos >= targetPos) {
                //console.log(stickyPos);
                
                if(scrollPos >= parentBottomPos){ 
                    $target.removeClass('fixed');
                    $target.find('.detail-layer-nav').css({top: $parent.height()});
                }
                else{                    
                    $target.addClass('fixed');
                    $target.find('.detail-layer-nav').css({top: 0});
                }
            }
            else{
                $target.removeClass('fixed');
            }
        });
    
    });
}

//대여 및 요금안내
if($('.fare-section .fareTab').length){
    MUI.event.taps('.fare-section .fareTab', false, function(swap){
        swap();
    });
}
if($('.fare-section .inlandFareTab').length){
    MUI.event.taps('.fare-section .inlandFareTab', false, function(swap){
        swap();
    });
}

//신차장 다이렉트
if($('.longTerm-container .estimateSwiper').length) {
    
    MUI.slide.LayerSwiper = MUI.slide.init('.estimateSwiper','swiper', {
        loop: true,
        autoHeight:true,
        autoplay: true,
        autoplaySpeed: 3000,
        pagination: {
            el: '.estimateSwiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.estimateSwiper-button-next',
            prevEl: '.estimateSwiper-button-prev',
        },
    });
    
}

//QNA 아코디언
if($('.qnaAccor').length){
    MUI.event.toggle('.qnaAccor .btn-toggle-wide', '.qnaAccor .accor-cont', false, function(logic, layer) {
        //console.log('toggle');
        logic();
    });
}



/* -------------------------------------------------신차장장기렌터카 end*/


/* 마이페이지start-------------------------------------------------*/
if($('.mypage-container .pointTransitionTab').length){
    MUI.event.taps('.mypage-container .pointTransitionTab', false, function(swap){
        swap();
    });
}

//마이페이지 - 단기렌터카/이용중 관리
if($('.mypage-container .tab-normal').length){

    MUI.event.taps('.mypage-container .tab-normal', false, function(swap){
        swap();
    });
}

if($('.mypage-container .schedule-toggle-cont').length) {
    MUI.event.toggle('.mypage-container .btn-schedule-toggle', '.mypage-container .schedule-toggle-cont', true, function(logic, layer) {
        logic();
    });
}
if($('.mypage-container .indicator-toggle-cont').length) {
    MUI.event.toggle('.mypage-container .btn-indicator-toggle', '.mypage-container .indicator-toggle-cont', true, function(logic, layer) {
        logic();
    });
}

/* 마이페이지end-------------------------------------------------*/

/* 메인start-------------------------------------------------*/

    //메인예약 - 다른지점반납 열고 닫기
    $(".shor-branch-toggle-btn").click(function(){
        $(".shor-main-list-branch").toggle();
      });

    if($('.direct-section .direct-slide-wrap').length) {
        MUI.slide.init($('.direct-section .direct-slide-wrap'), 'slick', {
				slidesToScroll: 1, 
				infinite: true,
				autoplay: true,
                arrows: false,
                slidesToShow: 3,
                centerMode: false,
                variableWidth: true,
                dots: true,
                autoplaySpeed: 3000,
        });
    }
    // 배너
    if($('.banner-wrap .banner-slide-list').length) {
        MUI.slide.init($('.banner-wrap .banner-slide-list'), 'slick', {
				slidesToScroll: 1, 
				infinite: true,
				autoplay: true,
                arrows: false,
                slidesToShow: 1,
                centerMode: false,
                variableWidth: true,
                dots: true,
                autoplaySpeed: 3000,
        });
    }
    // 메인- 중고차 슬라이드
    if($('.secondhand-wrap .secondhand-slide-cont').length) { 
        if($('.secondhand-wrap .secondhand-slide-cont').children('.swiper-wrapper').children('.swiper-slide').get().length > 4) {
            MUI.slide.init('.secondhand-wrap .secondhand-slide-cont','swiper', {
            loop: true,
            slidesPerView: 4,
            centeredSlides: false,
            spaceBetween: 40,
            //spaceBetween: 30,
            navigation: {
                nextEl: '.secondhand-wrap .btn-paging-next',
                prevEl: '.secondhand-wrap .btn-paging-prev',
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

    // 메인- 핫딜 슬라이드
    if($('.hotdeal-slide-wrap .hotdeal-slide-cont').length) {
        if($('.hotdeal-slide-wrap .hotdeal-slide-cont').children('.swiper-wrapper').children('.swiper-slide').get().length > 2) {
            MUI.slide.init('.hotdeal-slide-wrap .hotdeal-slide-cont','swiper', {
                loop: true,
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 100,
                //spaceBetween: 30,
                navigation: {
                    nextEl: '.hotdeal-slide-wrap .btn-paging-next',
                    prevEl: '.hotdeal-slide-wrap .btn-paging-prev',
                 },
                 autoplay: {
                     delay: 3000,
                 },
                 pagination: {
                    el: '.hotdeal-slide-wrap .swiper-pagination',
                    type: 'fraction',
                  },
            });
        }
    }

    //메인 배너 레이어팝업
    if($('#wrap').length) {
        MUI.layer.closeClick('.layer-bn-close', LAYER_DIM, LAYER_PARENT, true, function(hide){
            //console.log('close');
            $('.bg-dimmed').css('z-index','50');
            hide();
        });
    }

/* 메인end-------------------------------------------------*/

/* 실시간예약 메인start-------------------------------------------------*/

    if($('.short-main-wrap .shortAction').length){
        MUI.event.taps('.short-main-wrap .shortAction', false, function(swap){
            swap();
        });
    }

/* 실시간예약 메인end-------------------------------------------------*/

    //푸터 슬라이더
    if($('.footer .detail-view-list').length) {
        MUI.slide.init('.footer .detail-view-list','swiper', {
            loop: true,
            autoHeight:true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 3000,
            },
        });
        // $(".swiper-button-pause").click(function(){
        //     slide.autoplay.stop();
        // });
        // $(".swiper-button-play").click(function(){
        //     slide.autoplay.play();
        // });
    }
    

    //푸터 패밀리사이트 토글
    if($('.footer .family-btn').length) {
        MUI.event.toggle('.footer .family-btn', '.footer .family-toggle-cont', true, function(logic, layer) {
            logic();
        });
    }

    //푸터 이메일수집동의 모달 팝업
    if($('.layer-refuse-email').length) {
        MUI.layer.openClick('.layer-refuse-email-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
            //console.log('open');
            show();
        });
    }


    //헤더 전체메뉴 토글
    //if($('.header .draw-btn').length) {
        // MUI.event.toggle('.header .draw-btn', '.header .draw-toggle-cont', true, function(logic, layer) {
        //    logic();
        // });
        // $('.header .draw-btn').on('focusin mouseenter', function(){
        //     $('.draw-toggle-cont').show();
        //     $('.header .draw-btn').addClass('hover');
        // });
        // $('.header .draw-btn').on('focusout mouseleave', function(){
        //     $('.draw-toggle-cont').hide(); 
        //     $('.header .draw-btn').removeClass('hover');
        // });
   // }

   /*
    $('.header .draw-btn').click(function(e){
        if($('.header .specials-view-list').length) {
            MUI.slide.init($('.header .specials-view-list'), 'slick', {
                infinite: true,
                swipeToSlide: true,
                speed: 300,
                autoplay: true,
                dots: true,
                arrows: false,
                customPagin:0,
                adaptiveHeight: true,
            });
        }
        $('.layer-gnb-bn .slick-track').width('4000px');
        $('.layer-gnb-bn .slick-slide').width('1760px');
    });

    $('.header .draw-btn').mouseenter(function(e){
        if($('.header .specials-view-list').length) {
            MUI.slide.init($('.header .specials-view-list'), 'slick', {
                infinite: true,
                swipeToSlide: true,
                speed: 300,
                autoplay: true,
                dots: true,
                arrows: false,
                customPagin:0,
                adaptiveHeight: true,
            });
        }
        $('.layer-gnb-bn .slick-track').width('4000px');
        $('.layer-gnb-bn .slick-slide').width('1760px');
    });
    */
   

    //로딩효과
    if($(".progress-container").length) {
        var inputs = $(".progress-container").find($("label") );

        for(var i =0 ; i< inputs.length; i ++){ 
            var index = i +1;
            var time = ((inputs.length)-i ) * 100;
            $(".progress-container label:nth-child("+ index+")").css( "-webkit-animation", "anim 3.5s "+time+"ms infinite ease-in-out" );
            $(".progress-container label:nth-child("+index+")").css( "-animation", "anim 3.5s "+time+"ms infinite ease-in-out" );
        }
    }

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

//메인 슬라이드 수정
if($('.main-visual-list .main-slide-wrap').length) {
    MUI.slide.init($('.main-visual-list .main-slide-wrap'), 'slick', {
            slidesToScroll: 1, 
            infinite: true,
            autoplay: true,
            arrows: false,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: false,
            dots: false,
            autoplaySpeed: 3000,
            pauseOnHover: false,
    });

    var slideIdx = $(".main-img-wrap.slick-slide").length;  //슬라이드 갯수
    var slideIdxR = $(".main-img-wrap.slick-slide").length - 2;  //실제 보여지는 슬라이드 갯수
    var slideW = $('.main-img-wrap.slick-slide').outerWidth();  //슬라이드 한개의 넓이
    var slideAllW = slideW * slideIdxR;  //실제 슬라이드 총 넓이
    var result = slideW/slideAllW * 100;  //슬라이드 넓이 한개를 백분율로 환산
    
    $('.loading-ani').css('width',result);
    $('.main-visual-pager .num-2').text(slideIdxR);
    
    $('.main-visual-list .main-slide-wrap').on('afterChange',function(){
        var curIdx = $(".slick-active").attr("data-slick-index"); //슬라이드 갯수
        var currentSlide = $('.main-visual-list .main-slide-wrap').slick('slickCurrentSlide');//현재 슬라이드 번호
        curIdx = parseInt(curIdx);
        $(".loading-ani").animate({
           "width": (result * (currentSlide+1))+"%"
        },300);

        $('.main-visual-pager .num-1').text(currentSlide+1);
        $('.main-visual-pager .num-2').text(slideIdxR);

    });

    $('.main-visual-pager .play').hide();

    $('.main-visual-pager .play').click(function() {
        $('.main-visual-list .main-slide-wrap').slick('slickPlay');
        $(this).hide();
        $('.main-visual-pager .stop').show();
    });
    
    $('.main-visual-pager .stop').click(function() {
        $('.main-visual-list .main-slide-wrap').slick('slickPause');
        $(this).hide();
        $('.main-visual-pager .play').show();
    });

    $('.main-visual-pager .num.num-1').click(function() {
        $('.main-visual-list .main-slide-wrap').slick('slickPrev');
    });
    $('.main-visual-pager .num.num-2').click(function() {
        $('.main-visual-list .main-slide-wrap').slick('slickNext');
    });



    /*
    $('.header .draw-btn-s').each(function(i){
		$(this).on({

        });
    });
    */

}




});


/*브라우저 모든 resources 다운 완료시점(프레임)*/
$(window).on('load', function(){


});

/*헤더 GNB 마우스 오버시 메뉴 보이기, 슬라이드 작동*/
$(function(){
    //var target = $('.header .draw-btn');
    //t = 0;
    /*
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
    

    
    $('.header .nav-wrap .draw-btn').each(function(i){
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
    */

    (function($) {
        var slideUpFlag = true,
            slideDownFlag = true,
            idx = 0,
            speed = 200,
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
            pauseOnHover: false,
        });

        $headerDrawBt.on({
            mouseenter:	function(){
                idx = $headerDrawBt.index(this);
                $contTarget.hide().eq(idx).show();
                $hoverTarget.removeClass('hover');
                $(this).parents('li').addClass('hover');
                
                if(slideDownFlag){
                    $drawToggleNormal.slideDown(speed, 'linear', function(){
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
                    $drawToggleAll.slideDown(speed, 'linear', function(){
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
                    $drawToggleNormal.slideUp(speed, 'linear', function(){
                        setTimeout(function(){
                            slideUpFlag = true;
                        },1000)
                    });
                    $drawToggleAll.slideUp(speed, 'linear', function(){
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
                    $drawToggleNormal.slideDown(speed, 'linear', function(){
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
                    $drawToggleAll.slideDown(speed, 'linear', function(){
                        slideDownFlag = true;
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
