/*dom tree 생성이전 시점(프레임)*/


/*dom tree 생성이후 시점(프레임)*/
$(function(){

    /*전역 변수*/
    var $BODY = $('body'),
        TOUCH_CLICK = ('ontouchstart' in window) ? 'touchstart' : 'click',
        LAYER_PARENT = '.layer-wrap',
        LAYER_DIM = '.bg-dimmed',
        IScrollObj = null;


/* 유틸start-------------------------------------------------*/
//전체동의 열고 닫기
if($('.chk-agree-list').length){
    MUI.event.toggle('.chk-agree-list .agree-toggle-btn', '.chk-agree-list .agree-toggle-cont', false, function(logic, layer) {
        console.log(layer);
        if($(".layer-login").hasClass('active')){
            setTimeout(function(){
                IScrollObj.refresh();
            },500);
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


/* -------------------------------------------------유틸end*/

/* 탭 전환start-------------------------------------------------*/
if($('.layer-login .tab-normal').length){
    MUI.event.taps('.layer-login .tab-normal', false, function(swap){
        if($(".layer-login").hasClass('active')){
            setTimeout(function(){
                IScrollObj.refresh();
            },500);
        }

        swap();
    });
}
/* -------------------------------------------------탭 전환end*/

/* 레이어팝업start-------------------------------------------------*/
    //로그인 레이어팝업
    if($('.layer-login').length) {
        MUI.layer.openClick('.layer-login-open', LAYER_DIM, LAYER_PARENT, true, function(show, layer){
            show();
            //console.log(layer);
            /*아이스크롤 */
            IScrollObj = new IScroll(layer + ' .layer-iscroll', { 
                scrollbars: true,
                mouseWheel: true,
                interactiveScrollbars: true,
                shrinkScrollbars: 'scale',
                fadeScrollbars: true,
            });
        });
        MUI.layer.closeClick('.layer-login-close', LAYER_DIM, LAYER_PARENT, true, function(hide){
            //console.log('close');
            hide();
            if(IScrollObj) {
                IScrollObj.destroy();
                IScrollObj = null;
            }
        });
    }



    //bg-dimmed 클릭시 열린 레이어 들 닫기
    MUI.layer.closeClick(LAYER_DIM, LAYER_DIM, LAYER_PARENT, function(hide){
        //console.log('close');
        hide();
        if(IScrollObj) {
            IScrollObj.destroy();
            IScrollObj = null;
        }
    });
/* -------------------------------------------------레이어팝업end*/

/* 견적start-------------------------------------------------*/
//견적 상단 슬리이더
    if($('.estimate-wrap .detail-view-list').length) {
        MUI.slide.init('.estimate-wrap .detail-view-list','swiper', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        });
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
                targetScroll = $target.find('.detail-sticky-iscroll'),
                parentBottomPos = $parent.offset().top + $parent.height() - $target.find('.detail-sticky').height();
                targetPos = $target.offset().top;


            if(scrollPos >= targetPos) {
                if(scrollPos >= parentBottomPos){
                    $target.removeClass('fixed');
                    $target.find('.detail-sticky').css({top: $parent.height()-$target.find('.detail-sticky').height()});
                    if(IScrollObj) {
                        IScrollObj.destroy();
                        IScrollObj = null;
                        targetScroll.removeAttr('style');
                    }
                }
                else {
                    $target.addClass('fixed');
                    $target.find('.detail-sticky').css({top: 0});
                    if(!IScrollObj ){
                        IScrollObj = new IScroll('.detail-sticky', { 
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
                if(IScrollObj) {
                    IScrollObj.destroy();
                    IScrollObj = null;
                    targetScroll.removeAttr('style');
                }
            }
        });
    }

    //견적 텝이동
    if($('.estimate-wrap .detail-layer-nav').length) {
        MUI.event.goTarget('.menu-link');

        $(window).on('scroll', function(){
            var scrollTop = $(this).scrollTop();
            MUI.event.scrollTaps(scrollTop, $('.estimate-wrap .layer-item'), $('.estimate-wrap .menu-link'));
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
    

/* -------------------------------------------------견적end*/



/* 로그인start-------------------------------------------------*/

/* -------------------------------------------------로그인end*/



/*브라우저 리사이즈*/
if($(".layer-iscroll").length){
    $(window).on("resize",function(){
        IScrollObj.refresh();
    });
}


});


/*브라우저 모든 resources 다운 완료시점(프레임)*/
$(window).on('load', function(){

/* 아이스크롤start-------------------------------------------------*/

    

/* -------------------------------------------------아이스크롤end*/

});