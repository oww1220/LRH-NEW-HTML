/****************************************/
/*	Name: 애드캡슐
/*	PART: Javascript
/*	Version: 1.0
/*	Author: Hyun-Ah Park
/*	Modify: KH.SONG, BLUEWEBD™
/****************************************/


$(function(){
	/* 스킵네비게이션 */
	$('.skipMenu > a').click(function( event ){
		var e = window.event || event;

		$($(this).attr('href')).attr('tabindex','0').focus();
		return e.preventDefault();
	});	
	
	
	var $lnbM1 = $('#lnb > ul > li.lDep01');
	var $lnbMA1 = $('#lnb > ul > li.lDep01 > a');
	var $lnbA1 = $('#lnb > ul > li > a');
	var $lnbA2 = $('#lnb > ul > li > ul > li > a');
	var $lnbA3 = $('#lnb > ul > li > ul > li > ul > li > a');

	$('#lnb > ul > li > a.on').next('ul').show();
	$('#lnb > ul > li > ul > li > a.on').next('ul').show();	
//	$('#lnb > ul li').addClass('nodep');
//	$('#lnb > ul li').has('ul').removeClass('nodep');
	$('#lnb > ul li').has('ul').addClass('has');

	$lnbA1.on('click', function(){
		$lnbA1.removeClass('on');
		$(this).addClass('on');
		$lnbA1.next('ul').hide();
		$(this).next('ul').show();
		$lnbM1.addClass('off');
		//return false;
	});
	
	$lnbMA1.on('click', function(){	
		$lnbM1.removeClass('off');
		$lnbMA1.next('ul').hide();
		$(this).next('ul').show();	
		//return false;
	});

	$lnbA2.on('click', function(){
		$lnbA2.removeClass('on');
		$(this).addClass('on');
		$lnbA2.next('ul').hide();
		$(this).next('ul').show();
		$lnbA2.parent('li').removeClass('on');
		$(this).parent('li').addClass('on');
		//return false;
	});

	$lnbA3.on('click', function(){
		$lnbA3.removeClass('on');
		$(this).addClass('on');
		//return false;
	});

	if( $(".lDep02").hasClass('has') )
		$('.lDep02').addClass('on');
	else
		$('.lDep02').removeClass('on');
		

}); //end function

// LNB
function Lnb(fn,sn,tn){
	
	var lnbHTML = '<div id="lnb">' +
					'<ul>' +
					'	<li><a href="main.html">MAINPAGE</a></li>' +
					'	<li><a href="#">게시판</a>' +
					'		<ul>' +
					'			<li><a href="#">공지사항</a>' +
					'				<ul>' +
					'					<li><a href="notice_list.html">목록</a></li>' +
					'					<li><a href="notice_view.html">상세</a></li>' +
					'					<li><a href="notice_write.modify.html">글쓰기/수정</a></li>' +
					'				</ul>' +
					'			</li>' +
					'		</ul>' +
					'	</li>' +
					'	<li><a href="#">이미지 관리</a>' +
					'		<ul>' +
					'			<li><a href="imgPoll_imgsrch.html">공통콘텐츠</a></li>' +
					'			<li><a href="imgDrag.html">이미지 레이아웃 관리</a></li>' +
					'		</ul>' +
					'	</li>' +
					'	<li><a href="#">컨텐츠관리</a>' +
					'		<ul>' +
					'			<li><a href="common.html">공통콘텐츠</a></li>' +
					'			<li><a href="#">정보관리</a>' +
					'				<ul>' +
					'					<li><a href="contentsInfo.html">컨텐츠정보관리</a></li>' +
					'					<li><a href="contactInfo.html">연락처</a></li>' +
					'				</ul>' +
					'			</li>' +
					'		</ul>' +
					'	</li>' +
					'	<li><a href="menu_manager.html">메뉴관리</a></li>' +
					'	<li><a href="#">한국전력 사업소 통합관리자</a>' +
					'		<ul>' +
					'			<li><a href="#">게시판</a>' +
					'				<ul>' +
					'					<li><a href="bodo_write.html">보도자료_글쓰기</a></li>' +
					'					<li><a href="news_write.html">한국전력 사업소 통합소식_글쓰기</a></li>' +
					'					<li><a href="brochure.html">디지털브로셔</a></li>' +
					'					<li><a href="inquiry_contents.html">문의하기 메인컨텐츠관리</a></li>' +
					'					<li><a href="inquiry_modify.html">문의하기 수정</a></li>' +
					'					<li><a href="reactor_modify.html">수차와 원자로 수정</a></li>' +
					'					<li><a href="media_server.html">미디어 서버</a></li>' +
					'					<li><a href="atomic_list.html">원자력발전 리스트</a></li>' +
					'					<li><a href="atomic_register.html">원자력발전 등록하기</a></li>' +
					'					<li><a href="event.html">이벤트 등록</a></li>' +
					'					<li><a href="knowledge_modify.html">지식마당 페이지수정</a></li>' +
					'					<li><a href="media_set.html">미디어 템플릿 설정</a></li>' +
					'					<li><a href="division_register.html">담당부서 등록</a></li>' +
					'					<li><a href="division_list.html">담당부서 목록</a></li>' +
					'					<li><a href="satisfaction.html">만족도조사</a></li>' +
					'					<li><a href="society_set.html">어울리마당 담당부서 설정</a></li>' +
					'				</ul>' +
					'			</li>' +
					'		</ul>' +
					'	</li>' +
					'</ul>' +
					'</div><!-- //lnb end -->';
	//document.write(lnbHTML);
	$('#container').prepend( lnbHTML );
	/*
		document.write 방식에서 jquery prepend 방식으로 수정 - mkpub2705@adcapsule.co.kr
	*/
	
	var $lnbDep = $('#lnb > ul > li');
	
	$lnbDep.eq(fn-1).addClass('lDep01');
	$lnbDep.eq(fn-1).find('>a').addClass('on');
    $('.lDep01').find('ul li').eq(sn-1).addClass('lDep02'); 
	$('.lDep02').find('>a').addClass('on');
	$('.lDep02').find('ul li').eq(tn-1).addClass('lDep03');
	$('.lDep03').find('>a').addClass('on');
	//option값
	//data-case="twoPop" (한팝업에 두개)
	//data-link="start" (기간제한 달력중 시작일 설정 달력 일 경우)
	//data-link="end" (기간제한 달력중 종료일 설정 달력 일 경우)
	//data-max="" (달력 최대값 제한)
	//data-min="" (달력 최소값 제한)
	//data-type="month"
	//data-target="two_pop01" (달력이 생성될 팝업의 위치)
	//data-role="common-ui-layerPop-button" (팝업 열기)

}

/* 달력 */
$(window).on('load', function(){
	try{
		$(".datepicker_wrap").datepicker();
	}catch(e){}
});