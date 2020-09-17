/****************************************/
/*	Name: 애드캡슐
/*	PART: Javascript
/*	Version: 1.0
/*	Author: Hyun-Ah Park
/****************************************/
$(function(){
/* TREE MENU */
/*
		Part : treeMenu */
	

	var $treeMenu = $('.treeMenu');
	var $treeMenuLi = $treeMenu.find('>li');
	var $treeMenuA = $treeMenuLi.find('>a'); 
	var $treeSmenu = $('.treeSmenu');
	var $treeSmenuLi = $treeSmenu.find('>li');
	var $treeSmenu1Depth = $treeSmenuLi.find('>a');
	var $treeSmenu2Depth = $treeSmenu1Depth.next().find('>li>a');
	var $treeSmenu2 = $('.treeSmenu2');
	var $treeSmenu2Li = $treeSmenu2.find('>li')
	var $treeSmenu2A = $treeSmenu2Li.find('>a');  //our hotels
	var $treeSmenu2Sub = $treeSmenu2A.next();
	var $treeSmenu2SubA = $treeSmenu2Sub.find('>li>a');
	var $treeSmenu3Sub = $treeSmenu2SubA.next();
	var $treeSmenu3SubA = $treeSmenu3Sub.find('>li>a');
	
	//Default Setting
	$treeSmenu1Depth.next().hide();
	$treeSmenu2.hide();
	$treeSmenu2Sub.hide();
	$treeSmenu2SubA.next().hide();
	$treeSmenu3SubA.next().hide();
	
	// 처음에 모두 닫아주기
	$('.treeMenu > li > a').next().hide();
	//on 클래스가 붙을경우 처음 시작할때 열어서 보여주기
	if($treeMenu.find('li').is('.on')){
		$treeMenu.find('li.on > a').next().show();
	} //end if
	
	

	
	// 자식리스트가 없는 경우 클래스 nolist 추가
	for(var i = 0 ; i < $('.treeMenu li').length; i ++)
	{
		if($('.treeMenu li').eq(i).find('ul').length == 0)
		{
			$('.treeMenu li').eq(i).addClass('noList')
		}	
	}
		

	$treeMenuA.on('click', function(){
		var $thisParent = $(this).parent();
		//console.log($(this))
		if($thisParent.is('.on')){
			$thisParent.removeClass('on');
			$(this).next().hide();
		}else{
			$thisParent.addClass('on');
			$(this).next().show();
		}//end if
		
	}); //end click
	
	//1Depth
	$treeSmenu1Depth.on('click', function(){
		var $thisParent = $(this).parent();
		
		if($thisParent.is('.on')){
			$thisParent.removeClass('on');
			$(this).next().hide();
		}else{
			//$treeSmenuLi.removeClass('on'); /*4.8 최웅수정*/
			//$treeSmenu1Depth.removeClass('on'); /*4.8 최웅수정*/
			$thisParent.addClass('on');
			
			//$treeSmenu1Depth.next().hide();
			$(this).next().show();
		}//end if
	}); //end click

	//2Depth
	$treeSmenu2Depth.on('click', function(){
		var $thisParent = $(this).parent();
		
		if($thisParent.is('.on')){
			$thisParent.removeClass('on');
			$(this).next().hide();
		}else{
			//$treeSmenu1Depth.next().find('>li').removeClass('on'); /*4.8 최웅수정*/
			$thisParent.addClass('on');
			
			//$treeSmenu2.hide();
			$(this).next().show();
		}//end if
		
	}); //end click

	//3Depth
	$treeSmenu2A.on('click', function(){
		var $thisParent = $(this).parent();

		if($thisParent.is('.on')){
			$thisParent.removeClass('on');
			$(this).next().hide();
		}else{
			//$treeSmenu2Li.removeClass('on');/*4.8 최웅수정*/
			$thisParent.addClass('on');
			//$treeSmenu2Sub.hide();
			$(this).next().show();
		}//end if
	});//end click

	//4Depth
	$treeSmenu2SubA.on('click', function(){
		var $thisParent = $(this).parent();

		if($thisParent.is('.on')){
			$thisParent.removeClass('on');
			$(this).next().hide();
		}else{
			//$treeSmenu2Sub.find('>li').removeClass('on');/*4.8 최웅수정*/
			$thisParent.addClass('on');
			//$treeSmenu3Sub.hide();
			$(this).next().show();
		}//end if
	});//end click

	//5Depth
	$treeSmenu3SubA.on('click', function(){
		var $thisParent = $(this).parent();

		if($thisParent.is('.on')){
			$thisParent.removeClass('on');
			$(this).next().hide();
		}else{
			//$treeSmenu3Sub.find('>li').removeClass('on');/*4.8 최웅수정*/
			$thisParent.addClass('on');
			//$treeSmenu3Sub.find('>li>a').next().hide();
			$(this).next().show();
		}//end if
	}); //end click

	//6Depth
	$treeSmenu3Sub.find('>li>a').next().find('>li>a').on('click', function(){
		var $thisParent = $(this).parent();
		if($thisParent.is('.on')){
			//$thisParent.removeClass('on'); /*4.8 최웅수정*/
			$(this).next().hide();
		}else{
			//$treeSmenu3Sub.find('>li>a').next().find('>li').removeClass('on'); /*4.8 최웅수정*/
			$thisParent.addClass('on');
		}//end if
	}); //end click
}); //end function