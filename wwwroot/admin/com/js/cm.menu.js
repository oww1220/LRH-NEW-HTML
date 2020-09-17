// TOP MENU
function Header(){
	var headerHTML = '<div id="header">\n' +
						'<p class="txt_logo"><a href="main.html"><img src="../images/com/txt_logo.png" alt="한국전력 사업소 통합로고"/></a></p>\n' +
						'<div>\n' +
						'<p class="txt_admin"><span>한국전력 사업소 통합</span> ADMINISTRATOR</p>\n' +
						'<div>\n' +
						'<p class="txt_view_id">ID: <span>SUPERADMIN_MASTER</span></p>\n' +
						'<a href="#" class="btn_info"><span>MY INFO</span></a>\n' +
						'<a href="login.html"><span>LOGOUT</span></a>\n' +
						'</div>\n' +
						'</div>\n' +
						'<ul class="gnb">\n' +
						'<li class="on"><a href="#">관리자메뉴1</a></li>\n' +
					    '<li><a href="#">관리자메뉴2</a></li>\n' +
					    '<li><a href="#">관리자메뉴3</a></li>\n' +
					    '<li><a href="#">관리자메뉴4</a></li>\n' +
					    '<li><a href="#">관리자메뉴5</a></li>\n' +
					    '<li><a href="#">관리자메뉴6</a></li>\n' +
						'</ul>\n' +
						'</div><!-- //header end -->\n';

	/*
		document.write를 반복적으로 쓰는 것에서 변수에 저장해서 삽입하는 방식으로 수정
		- mkpub2705@adcapsule.co.kr
	*/
	document.write( headerHTML );
	//$('#wrap').prepend( headerHTML );
}




// LAYOUT - 현재 이함수를 이용하는 페이지 또는 js가 없음
function LeftMenuLY(){
	var LeftMenuLYHTML = '<div id="wgLnb">' + 
						'	<div id="lnbArea">' + 
						//'		<h2 class="lnbtit">LNB 타이틀</h2>' + 
						'		<ul id="lnb">' + 
						'			<li><a href="#">레이아웃</a></li>' + 
						'			<li><a href="#">팝업.레이어</a></li>' + 
						'		</ul>' + 
						'	</div>' + 
						'</div><!--// wgLnb div -->' + 
						'<hr />';
	document.write( LeftMenuLYHTML );

}


// GUIDE - 지우거나 수정하지 말것
function LeftMenuTMP(){
	var LeftMenuTMPHTML = '<div id="wgLnb">' + 
							'	<div id="lnbArea">' + 
							//'		<h2 class="lnbtit">LNB 타이틀</h2>' + 
							'		<ul id="lnb">' + 
							'			<li><a href="">lnb 1depth - 01</a>' + 
							'				<ul class="lnb2depth">' + 
							'					<li><a href="">lnb 2depth - 01</a></li>' + 
							'					<li><a href="">lnb 2depth - 02</a></li>' + 
							'					<li><a href="">lnb 2depth - 03</a></li>' + 
							'				</ul>' + 
							'			</li>' + 
							'			<li><a href="#">lnb 1depth - 04</a></li>' + 
							'			<li><a href="#">lnb 1depth - 05</a></li>' + 
							'		</ul>' + 
							'	</div>' + 
							'</div><!--// wgLnb div -->' + 
							'<hr />';
	document.write( LeftMenuTMPHTML );
}

function locationprint(){

	// 제작 : 박시영(major_artist@naver.com)
	// 용도 : 현재 페이지의 위치를 표시
	
	this.makelink = true;
	this.delimiter = ' > ';
	this.home = {
		name : 'Home',
		link : '#'
	}

	var data = [];

	this.add=function(){
		if ( isNaN(arguments[0]) || !arguments[1] )
			return;
		var args = [];
		for( var i = 0; i < arguments.length; i++ )
			args.push( arguments[i] );
		data.push( args );
	}

	this.print=function(){
		var temp,
			args = [];
		for( var i = 0; i < arguments.length; i++ ) {
			if( isNaN( arguments[i] ) )
				return;
			else {
				temp = '';
				for ( var j = 0; j <= i; j++)
					temp += arguments[j];
				args.push( parseInt( temp ) );
			}
		}
		html = (this.makelink) ? '<a href="'+this.home.link+'" class="lc_home">'+this.home.name+'</a>' : this.home.name;
		for( var i = 0, max = args.length; i < max; i++){
			for( var j = 0, jmax = data.length; j < jmax; j++){
				if( args[i] == data[j][0] ) {
					html += this.delimiter;
					if( this.makelink && data[j][2] && i!=(max-1) ){
						html += '<a href="';
						if( data[j][2].indexOf('javascript:')!=-1) html+='#" onclick="'+data[j][2].replace('javascript:','')+'">';
						else{
							html+=data[j][2]+'" ';
							html+=(data[j][3])? 'target="'+data[j][3]+'">' : '>';
						}
						html+=data[j][1]+'</a>';
					}else if(i==(max-1)){
						html+='<span>'+data[j][1]+'</span>';
					}else{
						html+=data[j][1];
					}
				}
			}
		}
		document.write(html);
	}

}
var map=new locationprint();

map.home.name='Home';
map.home.link='/';

//(depthinfo,이름,링크,타켓);
map.add(1,"게시판","#LINK");
map.add(2,"테이블","#LINK");
map.add(3,"폼디자인","#LINK");
map.add(4,"버튼/탭/이미지","#LINK");
map.add(5,"박스/팝업","#LINK");
map.add(6,"자바스크립트","#LINK");

map.add(11,"일반게시판","LINK");
map.add(12,"갤러리게시판(바둑판)","#LINK");
map.add(13,"갤러리게시판(일반형)","#LINK");

map.add(111,"리스트","#LINK");
map.add(112,"내용보기","#LINK");
map.add(113,"글작성","#LINK");

map.add(1111,"가나다라1111","#LINK");
map.add(1112,"가나다라1112","#LINK");
map.add(1113,"가나다라1113","#LINK");

map.add(21,"가나다라21","http://www.naver.com","_blank");
map.add(211,"가나다라211","javascript:alert('aaa')","_blank");
map.add(2114,"가나다라2114");

map.makelink=true;

//map.print();