/****************************************/
/*	Name: LOTTE HOTEL
/*	PART: Javascript
/*	Version: 1.0
/*	Author: Hyun-Ah Park
/****************************************/

$(function(){
	
	/*
		Part : Drag
	*/
	//Main offer
	$(".wrap_offers>ul:eq(0)").sortable().disableSelection();
	
	var $thumbLst = $(".thumb_lst>ul");

	//accommodation img thumbnail
	$thumbLst.sortable({
		items: '> li:not(.noimg)',
		update: function(event, ui) {
			$(".thumb_lst>ul>li").each(function(i){
				var index = i+1;
				if(index < 10){
					$(".thumb_lst>ul>li").eq(i).find('em').text('0'+index);
				}else{
					$(".thumb_lst>ul>li").eq(i).find('em').text(index);
				} //end if
			});
		}
	}).disableSelection();

	//accommodation Amenities
	var $amenitiesBoxLst = $('.amenities_box .box_list ul');
	/*$amenitiesBoxLst.sortable({
		axis: "y"
	}).disableSelection();*/

	$amenitiesBoxLst.sortable({
		axis:'y',
		revert: 50,
		start: function(event, ui){
				ui.item.addClass('on');
			},
		stop: function(event, ui){
				ui.item.removeClass('on');
			}
	}).disableSelection();
	
	// LIST SORT
	var $lstSortBox = $('.sort_box ul');	
	/*$amenitiesBoxLst.sortable({
		axis: "y"
	}).disableSelection();*/

	$lstSortBox.sortable({
		axis:'y',
		revert: 50,
		start: function(event, ui){
				ui.item.addClass('on');
			},
		stop: function(event, ui){
				ui.item.removeClass('on');
			}
	}).disableSelection();
	
	
	/*
		Part : SORT
		Author: Woong-Choi
	*/

	

}); //end function

function dragInit(){
	var $lstMvb = $('.btn_updown > a');
	var $ulSort = $('.ui-resort');

	$lstMvb.click(function(){
		var $mov = $(this).closest('li');
		var $movOn = $ulSort.find('li');
		
		switch($(this).attr('class'))
		{
			case('btn_up'):
				var $movPerv = $(this).closest('li').prev();
				$movPerv.before($mov);
				$movOn.removeClass('on');
				$mov.addClass('on');
			break;
			case('btn_dn'):
				var $movNext = $(this).closest('li').next();
				$movNext.after($mov);
				$movOn.removeClass('on');
				$mov.addClass('on');
			break;
			case('btn_fst'):
				$ulSort.children('li:first').before($mov);
				$movOn.removeClass('on');
				$mov.addClass('on');
			break;
			case('btn_lst'):
				$('.ui-sortable li:last').after($mov);
				$movOn.removeClass('on');
				$mov.addClass('on');
			break;

		}
	});
}