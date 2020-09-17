/****************************************/
/*	Name: 애드캡슐
/*	PART: Javascript
/*	Version: 1.0
/*	Author: 송경환
/****************************************/

$(function(){
	/* Part : Layout */
	/** section 마지막 마진 제거 **/
	$('.content .section:last-child').css({'margin-bottom':'0'});



/*tab*/
var tab_tit = $('.tab_tit li');
var tab_con = $('.tab_con > div');

tab_tit.find('a').eq(0).addClass('on');
tab_con.eq(0).show().siblings().hide();

tab_tit.find('a').click(function(){
	this_idx = $(this).parent().index();
	tab_tit.find('.on').removeClass('on');
	$(this).addClass('on');
	tab_con.eq(this_idx).show().siblings().hide();
	return false;
});


/*content영역 제어*/
$(window).on('load resize', function(){
	if ( $(window).width() > 1024 ) {
		$('.content').width( $(window).width() - $('#lnb').outerWidth(true) - 70);
	} else {
		$('.content').width(783);
	}
});

}); //end function


