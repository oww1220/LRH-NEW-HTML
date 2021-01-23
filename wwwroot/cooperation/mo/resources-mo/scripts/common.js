/*dom tree 생성이전 시점(프레임)*/
//rem폰트설정
MUI.resize.font();

$(function(){

    /*전역 변수*/
    var $BODY = $('body'),
    TOUCH_CLICK = ('ontouchstart' in window) ? 'touchstart' : 'click',
    LAYER_PARENT = '.layer-wrap',
    LAYER_DIM = '.bg-dimmed';

/* 유틸start-------------------------------------------------*/
   //호스트환경 체크
   MUI.resize.chk($BODY);

   //리사이즈시 rem폰트설정, 호스트환경 체크
   MUI.resize.resize($BODY);

   //해더 상단네비 엑티브시 센터
   if($('.header-nav').length) { MUI.event.navCenter($('.header-nav'), 'active'); }

   //서브네비 엑티브시 센터
   if($('.section-nav').length) { MUI.event.navCenter($('.section-nav'), 'active'); }
   
   //textarea 자동높이 조절
   if($('.textarea.auto-height').length){
       autosize($('.textarea.auto-height textarea'));
   }

   //전체동의 열고 닫기
   if($('.chk-agree-list').length){
       MUI.event.toggle('.chk-agree-list .agree-toggle-btn', '.chk-agree-list .agree-toggle-cont', false, function(logic, layer) {
           //console.log('toggle');
           logic();
       });
   }

   //drawer버튼 열기
   MUI.event.toggle('.btn-drawer', null, true, function(logic, layer) {
       //console.log(11);
       $BODY.addClass("fixed");
       $('.btn-drawer-close').addClass('active');
       logic();
   });

   //drawer버튼 닫기
   MUI.event.toggle('.btn-drawer-close', null, true, function(logic, layer) {
       $BODY.removeClass("fixed");
       $('.btn-drawer').removeClass('active');
       logic();
       $('.drawer').scrollTop(0);
   });


   //햄버거 메뉴 토글
   if($('.drawer .drawer-toggle-btn').length) {
       MUI.event.toggle('.drawer .drawer-toggle-btn', '.drawer .drawer-toggle-cont', true, function(logic, layer) {
           logic();
       });
   }
   $('.drawer .drawer-toggle-btn').click(function(){
       $(this).children("h5").children("span").text($(this).children("h5").children("span").text() == '전체 서비스 보기' ? "전체 서비스 닫기" : "전체 서비스 보기");
   });


   //햄버거 메뉴 상세메뉴 탭전환
   if($('.drawer .tab-normal').length){

       MUI.event.taps('.drawer .tab-normal', false, function(swap){
           swap();
       });
   }


   //gotop
   if($('.fixedRight .btn-goTop').length){
       MUI.event.goTop($('.fixedRight .btn-goTop'));
       MUI.event.topScrollCh($('.fixedRight'));
       $(window).on('scroll', function(){
           MUI.event.topScrollCh($('.fixedRight'));
       });
   }


   //goQuick 열기
   MUI.event.toggle('.fixedRight .btn-goQuick', null, true, function(logic, layer) {
       //console.log(11);
       $BODY.addClass("fixed");
       $('.goQuick-menu-list').addClass('active');
       $('.bg-dimmed').show();
       $('.btn-goQuick').addClass('btn-goQuick-close');
       $('.fixedRight').css('z-index', '51');
       logic();
   });

   //goQuick 닫기
   MUI.event.toggle('.fixedRight .btn-goQuick-close', null, true, function(logic, layer) {
       $BODY.removeClass("fixed");
       $('.goQuick-menu-list').removeClass('active');
       $('.bg-dimmed').hide();
       $('.btn-goQuick').removeClass('btn-goQuick-close');
       $('.fixedRight').css('z-index', '11');
       logic();
   });

   //goQuick 딤드 닫기
   MUI.event.toggle('.fixedRight ~ .bg-dimmed', null, true, function(logic, layer) {
       $('.goQuick-menu-list').removeClass('active');
       $('.btn-goQuick').removeClass('btn-goQuick-close');
       $('.fixedRight').css('z-index', '11');
       logic();
   });

   //push버튼 열기
   MUI.event.toggle('.btn-push', null, true, function(logic, layer) {
       $BODY.addClass("fixed");
       $('.bg-dimmed').show();
       logic();
   });

   //push버튼 닫기
   MUI.event.toggle('.push ~ .bg-dimmed', null, true, function(logic, layer) {
       $BODY.removeClass("fixed");
       $('.push').removeClass('active');
       $('.btn-push').removeClass('active');
       $('.bg-dimmed').hide();
       logic();
   });

   //차트그리기
   if($('.pie-chart').length){
       $('.pie-chart').easyPieChart({
           size:80,
           lineWidth: 7,
           barColor:'#F04040',
           trackColor:'#EBEBEB',
           scaleColor:false,
           onStep: function(from, to, percent) {
               $(this.el).find('.percent span').text(Math.round(percent));
           }
       });
   }

   //하단 퀵메뉴 모션
   if($('.fixedBottom').length) { MUI.event.fixedBottom($('.fixedBottom')); }

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
       keyTarget.on('blur', 'textarea',function(e){
           keyTarget.removeClass('active');
       });
       keyTarget.on('focus', 'textarea',function(e){
           keyTarget.addClass('active');
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

   //tooltip 토글
   if($('.btn-tooltip-box-group').length){
       MUI.event.toggle('.btn-tooltip-box', '.btn-tooltip-box-group .tooltip-box', true, function(logic, layer) {
           //$('.btn-tooltip-box').next('.tooltip-box').addClass('active');
           //$('.btn-tooltip-box').next('.tooltip-box.active').prev('.btn-tooltip-box').addClass('active');
           logic();
       });
       /*
       $('.btn-tooltip-box').focusout(function(){
           var $layer = $('.' + $(this).data('target'));
           $layer.hide();
           $('.tooltip-box').removeClass('active');
           $('.btn-tooltip-box').removeClass('active');
       });*/
   }


/* -------------------------------------------------유틸end*/

    //제휴사 예약 메인 탭
    if($('.coopReserv-list .tab-normal').length){

        MUI.event.taps('.coopReserv-list .tab-normal', false, function(swap){
            swap();
        });
    }

    //대여기간 달력 레이어
    if($('.cooperation-wrap').length){
        MUI.event.toggle('.cooperation-wrap .btn-schedule-toggle', '.cooperation-wrap .schedule-toggle-cont', false, function(logic, layer) {
            //console.log('toggle');
            logic();
        });
    }

     //풀 팝업 공통 닫기
     if($('.layer-full').length) {
        MUI.layer.closeClick('.layer-full-close', LAYER_DIM, LAYER_PARENT, true, function(hide){
            //console.log('close');
            hide();
        });
    }

    if($('.layer-infos').length) {
        MUI.layer.openClick('.layer-infos-open', LAYER_DIM, LAYER_PARENT, true, function(show){
            //console.log('open');
            show();
        });

        //필터 슬라이드 내 슬라이드
        $('.layer-infos .search-item-step5 #slider-price').slider({
            range: true,
            min: 30,							// 최저
            max: 60,						// 최고
            orientation: 'horizontal',		// 바타입 수평
            step: 10,						// 스텝
            values: [30, 60],				// 디폴트 값
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
                $('.layer-infos .search-item-step5 #min_slider_price').val(min);
                $('.layer-infos .search-item-step5 #max_slider_price').val(max);

                $('.layer-infos .search-item-step5 .price-txt span').each(function(idx, item){
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

        // $('.layer-infos .search-item-step5 .price-all').on('click', function(e) {
		// 	$('.layer-infos .search-item-step5 #slider-price').slider('values', [30, 60]);
        // });
        // $('.layer-infos .search-item-step5 .filter-reset-btn').on('click', function(e) {
        //     $('.layer-infos .search-item-step5 #slider-price').slider('values', [30, 60]);
        //     $('.layer-infos .search-item-step5 input').prop('checked', false);
        // });

        //필터 슬라이드 내 슬라이드
        $('.layer-infos .search-item-step6 #slider-price').slider({
            range: true,
            min: 1000,							// 최저
            max: 4000,						// 최고
            orientation: 'horizontal',		// 바타입 수평
            step: 1000,						// 스텝
            values: [1000, 4000],				// 디폴트 값
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
                $('.layer-infos .search-item-step6 #min_slider_price').val(min);
                $('.layer-infos .search-item-step6 #max_slider_price').val(max);

                $('.layer-infos .search-item-step6 .price-txt span').each(function(idx, item){
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
        
        // $('.layer-infos .search-item-step6 .price-all').on('click', function(e) {
		// 	$('.layer-infos .search-item-step6 #slider-price').slider('values', [1000, 4000]);
        // });
        // $('.layer-infos .search-item-step6 .filter-reset-btn').on('click', function(e) {
        //     $('.layer-infos .search-item-step6 #slider-price').slider('values', [1000, 4000]);
        //     $('.layer-infos .search-item-step6 input').prop('checked', false);
        // });

        //필터 슬라이드 내 슬라이드
        $('.layer-infos .search-item-step7 #slider-price').slider({
            range: true,
            min: 10000,							// 최저
            max: 200000,						// 최고
            orientation: 'horizontal',		// 바타입 수평
            step: 10000,						// 스텝
            values: [10000, 200000],				// 디폴트 값
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
                $('.layer-infos .search-item-step7 #min_slider_price').val(min);
                $('.layer-infos .search-item-step7 #max_slider_price').val(max);

                $('.layer-infos .search-item-step7 .price-txt span').each(function(idx, item){
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
        
        // $('.layer-infos .search-item-step7 .price-all').on('click', function(e) {
		// 	$('.layer-infos .search-item-step7 #slider-price').slider('values', [10000, 200000]);
        // });
        // $('.layer-infos .search-item-step7 .filter-reset-btn').on('click', function(e) {
        //     $('.layer-infos .search-item-step7 #slider-price').slider('values', [10000, 200000]);
        //     $('.layer-infos .search-item-step7 input').prop('checked', false);
		// });
    }

    //운전면허정보 - 국내,외
    //면허 국내,외 구분
    if($('.driver-license .detail-radio').length) {
        $('.driver-license .view-N').hide();
        $('.driver-license .detail-radio').on('change', '.detail-radio-box input', function(e){
            if(e.target.value === 'Y'){
                $('.driver-license .view-Y').addClass('active');
                $('.driver-license .view-N').hide();
                $('.driver-license .view-Y').show();
            }
            else{
                $('.driver-license .view-Y').removeClass('active');
            }
        });
        $('.driver-license .detail-radio').on('change', '.detail-radio-box input', function(e){
            if(e.target.value === 'N'){
                $('.driver-license .view-N').addClass('active');
                $('.driver-license .view-Y').hide();
                $('.driver-license .view-N').show();
            }
            else{
                $('.driver-license .view-N').removeClass('active');
            }
        });
    }
    
    //예약확인 탭
    if($('.reserv-confirm .detail-radio').length) {
        $('.reserv-confirm .view-N').hide();
        $('.reserv-confirm .detail-radio').on('change', '.detail-radio-box input', function(e){
            if(e.target.value === 'Y'){
                $('.reserv-confirm .view-Y').addClass('active');
                $('.reserv-confirm .view-N').hide();
                $('.reserv-confirm .view-Y').show();
            }
            else{
                $('.reserv-confirm .view-Y').removeClass('active');
            }
        });
        $('.reserv-confirm .detail-radio').on('change', '.detail-radio-box input', function(e){
            if(e.target.value === 'N'){
                $('.reserv-confirm .view-N').addClass('active');
                $('.reserv-confirm .view-Y').hide();
                $('.reserv-confirm .view-N').show();
            }
            else{
                $('.reserv-confirm .view-N').removeClass('active');
            }
        });
    }
    
});
