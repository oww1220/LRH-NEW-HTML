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
	$(".wrap_offers>ul").sortable().disableSelection();
	$(".wrap_banner>ul").sortable().disableSelection();
	$(".row>ul").sortable().disableSelection();
	
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

}); //end function