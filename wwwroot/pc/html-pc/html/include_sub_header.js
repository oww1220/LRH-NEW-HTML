$(function(){


    var header = `
	<!--header 컴포넌트 1-->
	<header class="header">

	<!--해더상단-->
	<div class="header-top">
		<div class="inner">
			<a href="#container" class="skip_nav">본문 바로가기</a>
			<ul class="extra-menu">
				<li><a href="#none">예약확인</a></li>
				<li><a href="#none">자료제출</a></li>
				<li><a href="#none">실시간예약</a></li>
			</ul>
		</div>
	</div>
	<!--//해더상단-->

	<!--해더네비-->
	<nav class="header-nav">
		<div class="inner">
			<div class="nav-wrap">
				<h1><a href="#none"><img src="../../../resources-pc/images/common/logo-header.png" alt="LOTTE rental"/></a></h1>
				<ul>
					<li>
						<a href="#" class="draw-btn" data-target="draw-cont-01" data-on="true" data-siblings="true">단기렌터카</a>
					</li>
					<li>
						<a href="#" class="draw-btn" data-target="draw-cont-02" data-on="true" data-siblings="true">신차장기렌터카 </a>
					</li>
					<li>
						<a href="#" class="draw-btn" data-target="draw-cont-03" data-on="true" data-siblings="true">중고차 렌터카</a>
					</li>
					<li>
						<a href="#" class="draw-btn" data-target="draw-cont-04" data-on="true" data-siblings="true">#카라이프</a>
					</li>
					<li>
						<a href="#" class="draw-btn" data-target="draw-cont-05" data-on="true" data-siblings="true">고객센터</a>
					</li>
				</ul>
			</div>
			<div class="nav-menu">
				<ul>
					<li>
						<button type="button" class="btn"><i class="icon mypage">마이페이지</i></button>
						<div class="nav-menu-mypage-box">
							<b>예약중</b>
						</div>
					</li>
					<li>
						<button type="button" class="btn draw-btn" data-target="draw-cont-06" data-on="true" data-siblings="true"><i class="icon draw">전체메뉴</i></button>
					</li>
					<li><button type="button" class="btn"><i class="icon global">언어설정</i></button></li>
				</ul>
			</div>
		</div>
		<div class="draw-toggle-cont draw-cont-01">
			<div class="detail-layer-in">
				<div class="layer-gnb-info">
					<div class="layer-gnb-info-top">
						<p><span>김롯데님</span></p>
						<p><b>환영합니다.</b></p>
					</div>
					<ul class="layer-gnb-link">
						<li>
							<button type="button" class="btn">
								<div class="link-btn-align-left">
									<i class="flag point">P</i>포인트
								</div>
								<div class="link-btn-align-right">
									<b>1,800</b><i class="icon next02"></i>
								</div>
							</button>
						</li>
						<li>
							<button type="button" class="btn">
								<div class="link-btn-align-left">
									<i class="flag coupon">C</i>쿠폰
								</div>
								<div class="link-btn-align-right">
									<b>12</b><i class="icon next02"></i>
								</div>
							</button>
						</li>
					</ul>
				</div>
				<ul class="layer-gnb list-type-col4">
					<li>
						<p><a href="#">실시간예약</a></p>
					</li>
					<li>
						<p><a href="#">단기렌터카안내</a></p>
						<div class="layer-gnb-list">
							<ul>
								<li><a href="#">대여 및 요금안내</a></li>
								<li><a href="#">체크인서비스</a></li>
								<li><a href="#">부가서비스안내</a></li>
								<li><a href="#">펫카상품안내</a></li>
								<li><a href="#">보험대차서비스</a></li>
							</ul>
						</div>
					</li>
					<li>
						<p><a href="#">월간렌터카</a></p>
						<div class="layer-gnb-list">
							<ul>
								<li><a href="#">월간렌터카란</a></li>
								<li><a href="#">신청하기</a></li>
							</ul>
						</div>
					</li>
					<li>
						<p><a href="#">기사포함렌터카</a></p>
						<div class="layer-gnb-list">
							<ul>
								<li><a href="#">기사포함렌터카란</a></li>
								<li><a href="#">신청하기</a></li>
							</ul>
						</div>
					</li>
					<li>
						<p><a href="#">해외렌터카</a></p>
					</li>
				</ul>
			</div>
			<div class="layer-gnb-bn">
				<div class="view-slide">
					<ul class="specials-view-list">
						<li>
							<a href="#">
								<div class="img-box">
									<img src="../../../resources-pc/images/@temp-layout-bn01.png" alt="더미1">
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="img-box">
									<img src="../../../resources-pc/images/@temp-layout-bn01.png" alt="더미1">
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="img-box">
									<img src="../../../resources-pc/images/@temp-layout-bn01.png" alt="더미1">
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
	<!--//해더네비-->
	
    `;

    

    $(".header").html(header);
    $(".header .header").unwrap();


});