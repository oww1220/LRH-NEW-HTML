$(function(){
/******************************************************************************
*	용도		:	레이어팝업 js
*	버전		:	1.0
*	참고사항	:	
*	제작		:	w
*******************************************************************************/

var doubleScroll; // mobile 이중스크롤 방지 = false / web = true;

$(window).resize(function(){
	resizeFunc();
});
//레이어팝업 윈도우 리사이즈 될때마다 가운데 정렬 및 창크기 변경
function resizeFunc()
{
	// 반응형 팝업인지 아닌지 구분
		
		if($(".layer_pop").hasClass('mobile'))
		{
			//모바일 적용시 상황에 따라 max-width, min-width 수치조절
			$('.layer_pop_wrap').css({'width':$(window).width()*.9,'max-width':'620px','min-width':'300px','min-height':'400px'})	
			doubleScroll = false;
		}
		else{
			$(".layer_pop_wrap").css({'width':$(".layer_pop").width()});
			doubleScroll = true;
		}
		
	
	if(doubleScroll){
		
		$('.layer_pop_wrap').css({'height':$(window).height()*.8})	
		$('#pop_container').css({'height':($('.layer_pop_wrap').height()) - ($('.pop_header').height())})	
	}

	var layerContH = $('.layer_pop_wrap').outerHeight();
	var layerContW = $('.layer_pop_wrap').outerWidth();

	var marginT = $(window).scrollTop() + ($(window).height() - layerContH) / 2;
	var offsetL = ($(window).width()/2) - (layerContW/2);

		
	$('.overlayerBg').css({'width':$(window).width(),'height':$(window).height(),'opacity':"0.6"})

	if(layerContH < $(window).height())
	{
		$('.layer_pop_wrap').offset({left: offsetL, top:marginT});
	}
	else
	{
		//console.log(layerContH)
		$('.layer_pop_wrap').offset({left: offsetL, top:$(window).scrollTop() + 20});
	}
	
	
}

//레이어 팝업 오픈 이벤트
$(document).on('click','*[data-role=common-ui-layerPop-button]',function(event){
	
	
	event.preventDefault ? event.preventDefault() : event.returnValue = false;
	//**팝업 로드 스크립트
	var href = $(this).attr('href');
	$.fnLayerOepn(href);

}); //end layer_open

jQuery.fnLayerOepn = function(href){
	$('#container').append('<div class="layer_pop_wrap"></div>');
			
		var href = href + ' #pop_wrap';
		//console.log(href);
	
	$('.layer_pop_wrap').load(href,function(){		
		$('.layer_pop_wrap').attr('tabindex', '0');
		
		dd = setTimeout(function(){
			$('.layer_pop_wrap').focus();
		}, 1)
		resizeFunc()

	})//end load
	$('#container').append('<div class="overlayerBg"></div>');

	
	
}

		

//레이어 팝업 클로즈 이벤트
$(document).on("click",".layer_close",function(){

	$('.layer_pop_wrap').remove()
	$('.overlayerBg').remove()
	setTimeout(function(){$(".layer_open").focus()},50);
	return false;
});			

// 레이어 팝업 포커스 이벤트
$(document).on('keydown', '.layer_pop_wrap a', function(event){
	
	var totalPopALen = $('.layer_pop_wrap a').length-1;
	var index = $(this).index();
	var isShift = window.event.shiftKey ? true : false;
	
	
	if(!isShift && event.keyCode == 9){
		
		if($(event.target).is('.layer_pop_wrap a:last')){
			$('.layer_pop_wrap').attr('tabindex', '0').focus();
		}
	}
	
});

$(document).on('keydown', '.layer_pop_wrap', function(event){
	
	var totalPopALen = $('.layer_pop_wrap a').length-1;
	var isShift = window.event.shiftKey ? true : false;

	if((isShift && event.keyCode == 9)){

		if($(event.target).is('.layer_pop_wrap')){
			
			setTimeout(function(){
				$('.layer_pop_wrap a:last').focus();
			}, 100);

		}
		
	}
});


});