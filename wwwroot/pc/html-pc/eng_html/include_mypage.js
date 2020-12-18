$(function(){


    var mypageHeader = `
	<div class="myInfos-area">
		<div class="box-between">
			<h3 class="txt">
				<strong class="name">김롯데님</strong>
				<span>일반등급</span>
			</h3>
			<div class="btns">
				<a href="#" class="btn-goLink arrow-r">운전면허증</a>
				<a href="#" class="btn-goLink arrow-r">결제카드</a>
			</div>
		</div>
		<ul class="item-list">
			<li>	
				<span class="icon myPannel01"></span>
				<p>L.POINT</p>
				<a href="#" class="underline">12,300</a>
			</li>
			<li>	
				<span class="icon myPannel02"></span>
				<p>렌터카 포인트</p>
				<a href="#" class="underline">469,100</a>
			</li>
			<li>	
				<span class="icon myPannel03"></span>
				<p>렌터카 쿠폰</p>
				<a href="#" class="underline">2장</a>
			</li>
			<li>	
				<span class="icon myPannel04"></span>
				<p>멤버쉽 쿠폰</p>
				<a href="#" class="underline">2장</a>
			</li>
			<li>	
				<span class="icon myPannel05"></span>
				<p>내차팔기 상담</p>
				<a href="#" class="underline">1건</a>
			</li>
			<li>	
				<span class="icon myPannel06"></span>
				<p>렌터카 상담</p>
				<a href="#" class="underline">1건</a>
			</li>
		</ul>
	</div>
	`;
	
	var mypageLnb = `
	<ul>
		<li>
			<a href="#">My Reservaiton</a>
		</li>
		<li>
			<a href="#">
				Additional Information <br>
				Management
			</a>
			<ul>
				<li>
					<a href="#">My Branch</a>
				</li>
				<li>
					<a href="#">Driver’s License Info</a>
				</li>
			</ul>
		</li>
		<li>
			<a href="#">Point</a>
			<ul>
				<li>
					<a href="#">Check member point</a>
				</li>
			</ul>
		</li>
		<li>
			<a href="#">Modify personal Information </a>
			<ul>
				<li>
					<a href="#">Personal infomaition</a>
				</li>
				<li>
					<a href="#">Withdrawal of membership</a>
				</li>
			</ul>
		</li>
		<li>
			<a href="#">Logout</a>
		</li>
	</ul>
    `;

    

    $(".mypage-header").html(mypageHeader);
	$(".mypage-header .mypage-header").unwrap();
	
	$(".mypage-lnb").html(mypageLnb);
    $(".mypage-lnb .mypage-lnb").unwrap();


});