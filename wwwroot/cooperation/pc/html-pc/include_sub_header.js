$(function(){


    var header = `
	<!--header 컴포넌트-->
	<header class="header">

		<!--해더상단-->
		<div class="header-top">
			<div class="inner">
				<a href="#container" class="skip_nav">본문 바로가기</a>
				<ul class="extra-menu">
					<li><a href="#none">로그아웃</a></li>
					<li><a href="#none">예약확인</a></li>
					<li><a href="#none">자료제출</a></li>
					<li><a href="#none">실시간예약</a></li>
				</ul>
			</div>
		</div>
		<!--//해더상단-->

		<!--해더네비-->
		<!-- 개발참조사항 - 메인 gnb 적용에서만 header-nav-line 삭제 해 주세요 -->
		<nav class="header-nav header-nav-line">
			<div class="inner">
				<div class="nav-wrap">
					<h1><a href="#none"><img src="../../resources-pc/images/common/logo-header.png" alt="대한민국 No1.롯데렌터카"/></a></h1>
					<ul>
					<li>
						<a href="#" class="draw-btn draw-btn-s" data-target="draw-cont-01" data-on="true" data-siblings="true">단기 렌터카 예약</a>
					</li>
					<li>
						<a href="#" class="draw-btn draw-btn-s" data-target="draw-cont-02" data-on="true" data-siblings="true">단기 렌터카 안내</a>
					</li>
					</ul>
				</div>
				<div class="nav-menu">
					<ul>
						<li>
							<button type="button" class="btn"><i class="icon mypage">마이페이지</i></button>
							<!--div class="nav-menu-mypage-box">
								<b>진행중 예약</b>
							</div-->
						</li>
						<li>
							<button type="button" class="btn draw-btn draw-btn-all" data-target="draw-cont-06" data-on="true" data-siblings="true"><i class="icon draw">전체메뉴</i></button>
						</li>
						<li><button type="button" class="btn"><i class="icon global">언어설정</i></button></li>
					</ul>
				</div>
			</div>

			<!--- 드롭다운 메뉴 추가-->
			<div class="draw-toggle-wrap draw-toggle-wrap-s">
				<!-- 헤더 2뎁스 메뉴 - 렌터카 예약 - 로그인 했을때 -->
				<div class="draw-toggle-area">
					<!-- 로그인 전/후-->
					<div class="layer-gnb-info-wrap">
						<!-- 로그인 했을때-->
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
						</div><!-- 로그인 했을때-->
						<!-- 로그인 안했을때-->
						<div class="layer-gnb-info">
							<div class="layer-gnb-info-top">
								<p><span><a href="#">로그인</a></span></p>
								<p><b>해주세요!</b></p>
							</div>
						</div><!-- //로그인 안했을때-->
					</div><!-- //로그인 전/후-->
					

					<!-- //헤더 2뎁스 메뉴 - 렌터카 예약 -->
					<div class="draw-toggle-cont draw-cont-01">
						<div class="detail-layer-in">
							<ul class="layer-gnb list-type-col1">
								<li>
									<!--<p><a href="#">빠른 예약</a></p>-->
									<div class="layer-gnb-list">
										<ul>
											<li><a href="#">내륙</a></li>
											<li><a href="#">제주</a></li>
											<li><a href="#">예약확인</a></li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<!-- //헤더 2뎁스 메뉴 - 렌터카 예약 -->
	
					<!-- 헤더 2뎁스 메뉴 - 신차장 -->
					<div class="draw-toggle-cont draw-cont-02">
						<div class="detail-layer-in">
							<ul class="layer-gnb list-type-col1">
								<li>
									<!--<p><a href="#">장기렌트 서비스 안내</a></p>-->
									<div class="layer-gnb-list">
										<ul>
											<li><a href="#">대여자격안내</a></li>
											<li><a href="#">대여/반납 절차</a></li>
											<li><a href="#">대여요금안내</a></li>
											<li><a href="#">보험 및 보상</a></li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<!-- //헤더 2뎁스 메뉴 - 신차장 - 로그인 안했을때 -->
	
				</div>
				
				<!--div class="layer-gnb-bn">
					<div class="view-slide">
						<ul class="specials-view-list">
							<li>
								<a href="#">
									<div class="img">
										<img src="../../../resources-pc/images/testbn01.jpg" alt="더미1">
									</div>
								</a>
							</li>
							<li>
								<a href="#">
									<div class="img">
										<img src="../../../resources-pc/images/testbn02.jpg" alt="더미1">
									</div>
								</a>
							</li>
							<li>
								<a href="#">
									<div class="img">
										<img src="../../../resources-pc/images/testbn03.jpg" alt="더미1">
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div-->
			</div>
			<!--- 드롭다운 메뉴 추가-->
			
			<!--- 드롭다운 메뉴 추가, 전체 메뉴는 높이가 다르기 때문에 따로 설정-->
			<div class="draw-toggle-wrap-all">
				<!-- 헤더 전체 메뉴 -->
				<div class="draw-toggle-cont-all draw-cont-06">
					<div class="detail-layer-in detail-layer-all-in">
						<ul class="layer-gnb-all">
							<li>
								<ul>
									<li>
										<div class="layer-gnb-list">
											<ul>
												<li><a href="#"></a></li>
												<li><a href="#"></a></li>
												<li><a href="#"></a></li>
											</ul>
										</div>
									</li>
								</ul>
							</li>
							
							<li>
								<ul>
									<li>
										<div class="layer-gnb-list">
											<ul>
												<li><a href="#">내륙</a></li>
												<li><a href="#">제주</a></li>
												<li><a href="#">예약확인</a></li>
											</ul>
										</div>
									</li>
								</ul>
							</li>
							<li>
								<ul>
									<li>
										<div class="layer-gnb-list">
											<ul>
												<li><a href="#">대여자격안내</a></li>
												<li><a href="#">대여/반납 절차</a></li>
												<li><a href="#">대여요금안내</a></li>
												<li><a href="#">보험 및 보상</a></li>
											</ul>
										</div>
									</li>
								</ul>
							</li>
							
							<li>
								<ul>
									<!-- 로그아웃 일시 -->
									<li>
										<p><a href="#">로그인</a></p>
									</li>
									<!-- //로그아웃 일시 -->
									<!-- 로그인 일시 -->
									<li style="display:none;">
										<p><a href="#">로그아웃</a></p>
									</li>
									<!-- //로그인 일시 -->
									<li>
										<div class="layer-gnb-list">
											<ul>
												<li>
													<p><a href="#">마이페이지</a></p>
												</li>
												<li>
													<p><a href="#">회원가입</a></p>
												</li>
												<li>
													<p><a href="#">예약확인</a></p>
												</li>
												<li>
													<p><a href="#">자료제출</a></p>
												</li>
												<li>
													<p><a href="#">롯데렌터카 영문홈페이지</a></p>
												</li>
											</ul>	
										</div>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				<!-- //헤더 전체 메뉴 -->
			</div>
			<!--- 드롭다운 메뉴 추가-->	
			
			
		</nav>
		<!--//해더네비-->


		<div class="bg-dimmed-h">딤(Dim)처리 배경</div>
    `;

    

    $(".header").html(header);
    $(".header .header").unwrap();


});