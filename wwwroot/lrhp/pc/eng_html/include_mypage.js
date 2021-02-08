$(function(){


    var mypageHeader = `
	<div class="myInfos-area">
		<div class="box-between">
			<h3 class="txt">
				<p class="greeting">Hello</p>
				<strong class="name">kimLOTTE (ID123) <br>kimLOTTE (ID123)kimLOTTE (ID123)kimLOTTE (ID123)kimLOTTE (ID123)kimLOTTE (ID123)</strong>
			</h3>						
			<ul class="item-list">
				<li>	
					<span class="icon myPannel07"></span>
					<div class="txt-box">
						<p>Level</p>
						<span>General</span>
					</div>
				</li>
				<li>	
					<span class="icon myPannel02"></span>
					<div class="txt-box">
						<p>Point</p>
						<span>469,100</span>
					</div>
				</li>
				<li>	
					<span class="icon myPannel05"></span>
					<div class="txt-box">
						<p>Rental records</p>
						<span>2</span>
					</div>
				</li>
			</ul>
		</div>
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