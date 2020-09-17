/*****************************************/
/*	Name: mobile layerPopup
/*	PART: Javascript
/*	Version: 1.0
/*****************************************/
var href;

function resizeFunc()
{

	if($(href).hasClass('full') == true){
		// ky.Cho 결함 수정 : 여러개 팝업 존재시 하얀화면 처리되어 임시 처리
		$(href).parents('.layer_pop_wrap').css({'width':'100%','height':'100%','max-width':'none'});
		//$('.layer_pop_wrap:visible').css({'width':'100%','height':'100%','max-width':'none'});

		var layerContH = $(href).parents('.layer_pop_wrap').outerHeight();
		var layerContW = $(href).parents('.layer_pop_wrap').outerWidth();

		$('.overlayerBg').css({'width':'100%','height':$(window).height(),'opacity':"0.6"});

		$(href).parents('.layer_pop_wrap').offset({left: 0, top:0});
		$('body').css({'overflow-y':''})
		//$('#calendar_wrap').css({'position':'static','height':$('.layer_pop_wrap').height(),'overflow-y':'hidden'})

		//$('#calendar_wrap').css({'position':'static','height':$(window).height(),'overflow-y':'hidden'})

		//scrollTopMc = $('body').scrollTop();

		//$('body').scrollTop( 0 );
	}else{
		$(href).parents('.layer_pop_wrap').css({'width':'100%','height':'auto','max-width':'640px'});

		$('.overlayerBg').css({'width':'100%','height':$(window).height(),'opacity':"0.6"});

		var layerContH = $(href).parents('.layer_pop_wrap').outerHeight();
		var layerContW = $(href).parents('.layer_pop_wrap').outerWidth();

		var marginT = /*$(window).scrollTop() + */($(window).height() - layerContH) / 2;
		var offsetL = ($(window).width()/2) - (layerContW/2);

		$('.overlayerBg').css({'width':'100%','height':$(window).height(),'opacity':"0.6"});

		if(layerContH < $(window).height())
		{
			$(href).parents('.layer_pop_wrap').offset({left: offsetL, top:marginT});
		}
		else
		{
			$(href).parents('.layer_pop_wrap').offset({left: offsetL, top:$(window).scrollTop() + 20});
		}
	}


}
var clickThis;
var _layerPop = function (target, mc) {
	//alert(target);
	if($('#calendar_wrap').hasClass('chking') == false)
	{
		$('body').append('<div class="overlayerBg"></div>');
		//$('body').append('<div class="overlayerBg">'+target+'</div>');
	}
	else{
		$('#calendar_wrap').append('<div class="overlayerBg"></div>');
		//$('#calendar_wrap').append('<div class="overlayerBg">'+target+'</div>');
		//$('#calendar_wrap').css('width','100%');
	}


	href = '#' + target;
	$(href).parents('.layer_pop_wrap').css({'display':'block'});
 	$(href).css({'display':'block'})
 	if(mc != null)
 	{
 	clickThis = mc;
 	}

	resizeFunc();
	
	/*
	크기조정
	if(target == 'login_pop')
	{
		if($('.total_menu').hasClass('on')){
			$('.total_menu').css('display','none');
		}

		$('#calendar_wrap').css({'position':'static','height':$(window).height(),'overflow-y':'hidden'})
	}else{
		if($('#calendar_wrap').height() > $(window).height()){
			$('#calendar_wrap').css({'position':'static','height':$(window).height(),'overflow-y':'hidden'})
		}else{
			$('#calendar_wrap').css({'position':'static','height':$(window).height(),'overflow-y':'hidden'})
		}

	}
	*/

	$(href).parents('.layer_pop_wrap').attr('tabindex', '0').focus();
	//$('.layer_pop_wrap').find('a').focus();

	$('.overlayerBg').css({'width':'100%','height':$(window).height(),'opacity':"0.6"});
	if($(href).hasClass('full') == true){
		$(href).parents('.layer_pop_wrap').css({'height':$(document).height()})
	}
};

var _layerPopClose = function () {
	if($('.total_menu').hasClass('on')){
		$('.total_menu').css('display','block');
	}

	$('.overlayerBg').remove();
	$(href).parents(".layer_pop_wrap").css({'display':'none','height':'auto'})
	$('.lay-pop').css({'display':'none'})

	$('#calendar_wrap').css({'position':'static','height':'','overflow-y':''})
//alert(scrollTopMc)
	//$('body').animate({scrollTop:scrollTopMc}, 0)

	if($('#calendar_wrap').hasClass('chking tablet2') == false){
		if($('.total_menu').css('display') == 'block')
		{
			$('body').css({'height':$(window).height(),'overflow-y':'hidden'})
		}
	}

	/*로그인 비번키보드 안끄고 클로즈시 비번키보드 없애주기*/
	if(href = '#login_pop') {
		if (typeof mtk != "undefined") {
			try {
				document.body.style.webkitTapHighlightColor = mtk.webkitTapHighlightColor;
				mtk.now.inputObj.disabled = false;
				mtk.now.div.style.display = "none";
				mtk.now = null;
			} catch (e) {
				// ignore
			}
			$('.input_wrap #passwd').removeAttr('disabled');
		}
	}



	setTimeout(function(){try{clickThis.focus(); } catch(err){;}},10);
};


$(function(){

	$(document).on('click', '*[data-role=common-ui-layerPop-button]', function(event){

		clickThis = $(this);
		_layerPop($(this).attr('data-target'));
		
		var idObj = $(this).attr('data-target')
		
		// 클릭한 버튼에 해당하는 레이어 팝업 달력 객체
		var $objCal = $("div[id^="+idObj+"]");
		//alert($("div[id^="+idObj+"]").html());
		
		//alert($(this).prev().attr("id"));
		//alert($(this).prev().attr("id") + " : [" + $(this).prev().val() + "]");
		//if ( $('.datepicker_wrap').val() == '' ) {
		if ( $(this).prev().val() == '' ) {

		
		//alert("before");
		//alert($('.datepicker_wrap').length);
		//alert("$('.datepicker_wrap').val() [" + $('.datepicker_wrap').val() + "]");
		//$('.datepicker_wrap').val()
		//if ( $('.datepicker_wrap').val() == '' ) {

			setTimeout(function(){
				currentDay($objCal);
			}, 10);
		}
		//alert("after");
		
		//customFunc($(this));

	});




	$(window).resize(function(){
		resizeFunc();
	});

	/* close btn */

	$(document).on('click', '*[data-role=common-ui-layerPop-close]', function(){
		_layerPopClose();
		/*
		if($('.total_menu').hasClass('on')){
			$('.total_menu').css('display','block');
		}

		$('.overlayerBg').remove();
		$(href).parents(".layer_pop_wrap").css({'display':'none','height':'auto'})
	 	$('.lay-pop').css({'display':'none'})

		$('#calendar_wrap').css({'position':'static','height':'','overflow-y':''})
//alert(scrollTopMc)
		//$('body').animate({scrollTop:scrollTopMc}, 0)

		if($('#calendar_wrap').hasClass('chking tablet2') == false){
			if($('.total_menu').css('display') == 'block')
			{
				alert()
				$('body').css({'height':$(window).height(),'overflow-y':'hidden'})
			}
		}

		setTimeout(function(){try{clickThis.focus(); } catch(err){;}},10);
		*/
		return false;
	});

	$(document).on('keydown', '.layer_pop_wrap a', function(event){

		var totalPopALen = $(href).find('a').length-1;
		var index = $(this).index();
		var e = window.event || event;
		var isShift = e.shiftKey ? true : false;


		if(!isShift && event.keyCode == 9){ //tab

			if($(event.target).is($(href).find('a:last'))){

				$(href).parents('.layer_pop_wrap').attr('tabindex', '0').focus();
				/*setTimeout(function(){
					$('.layer_pop_wrap').find('a:first').focus();
				}, 100);*/
			}
		}

	});
	/* shift + tab down */
	$(document).on('keydown', '.layer_pop_wrap', function(event){

		var totalPopALen = $(href).find('a').length-1;
		var e = window.event || event;
		var isShift = e.shiftKey ? true : false;

		if((isShift && event.keyCode == 9)){  //shift+tab

			if($(event.target).is('.layer_pop_wrap')){

				setTimeout(function(){
					console.dir(href)
					$(href).find('a:last').focus();
				}, 100);

			}

		}
	});


	function currentDay ($objCal) {
		//alert("currentDay 탔엉~!");
		var d = new Date(),
		
			// 클릭한 버튼에 해당하는 달력 객체로 한정하기 위하여 수정 함.
			// 현재는 달력 10개가 있다면  모든 10개의 객체의 td 안의 날짜에 today를 표시함으로써 다중 선택된 듯한 표시가 되고있어
			// 해당 달력 객체 하나의 td 안의 날짜만을 loop 돌리게 하였다.
			//$el = $('.datepicker .table-condensed td'),
			$el = $objCal.find('.datepicker .table-condensed td'),
			txt = '';

		/*console.log("[RAC_EDU] ::::: $el.length : [" + $el.length + "]");*/
		//alert("오늘날짜를 찍다 : [RAC_EDU] ::::: $el.length : [" + $el.length + "]");
		//alert($el.length);
		
		for ( var i=0; i<$el.length; i+=1 ) {
			txt = parseInt( $el.eq(i).text(), 10);
			if ( txt == d.getDate() && !$el.eq(i).hasClass('old') && !$el.eq(i).hasClass('new') ) {
				console.log($el.eq(i));
				
				//alert("currentDay~! ::: [" + $el.eq(i).text() + "]");
				$el.eq(i).addClass('active');
				//$el.eq(i).find('a').attr('title', '선택됨~here');
				$el.eq(i).find('a').attr('title', '선택됨');
			}
		}
	}

});
