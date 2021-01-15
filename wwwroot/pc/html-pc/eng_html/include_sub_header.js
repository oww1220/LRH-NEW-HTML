$(function(){


    var header = `
	<!--header 컴포넌트-->
	<header class="header eng-header">

		<!--해더상단-->
		<div class="header-top">
			<div class="inner">
				<a href="#container" class="skip_nav">본문 바로가기</a>
				<ul class="extra-menu">
					<li><a href="#none">Register</a></li>
					<li><a href="#none">My Reservation</a></li>
				</ul>
			</div>
		</div>
		<!--//해더상단-->

		<!--해더네비-->
		<nav class="header-nav header-nav-line eng-header-nav">
			<div class="inner">
				<div class="nav-wrap">
					<h1><a href="#none"><img src="../../../resources-pc/images/common/eng-logo-header.png" alt="LOTTE rental"/></a></h1>
					<ul>
						<li>
							<a href="#" class="draw-btn-e" data-target="draw-cont-01" data-on="true" data-siblings="true">Reservation</a>
						</li>
						<li>
							<a href="#" class="draw-btn-e" data-target="draw-cont-02" data-on="true" data-siblings="true">Car rental </a>
						</li>
						<li>
							<a href="#" class="draw-btn-e" data-target="draw-cont-03" data-on="true" data-siblings="true">Location</a>
						</li>
						<li>
							<a href="#" class="draw-btn-e" data-target="draw-cont-04" data-on="true" data-siblings="true">FAQ</a>
						</li>
					</ul>
				</div>
				<div class="nav-menu">
					<ul>
						<li>
							<button type="button" class="btn"><i class="icon mypage">My page</i></button>
							<!--div class="nav-menu-mypage-box">
								<b>진행중 예약</b>
							</div-->
						</li>
						<li>
							<button type="button" class="btn draw-btn-all draw-btn-all-e" data-target="draw-cont-06" data-on="true" data-siblings="true"><i class="icon draw">전체메뉴</i></button>
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
								<strong>Hello</strong>
								<p>KimLOTTE</p>
							</div>
							<ul class="layer-gnb-link">
								<li>
									<button type="button" class="btn">
										<div class="link-btn-align-left">
											<i class="flag point">P</i>Point
										</div>
										<div class="link-btn-align-right">
											<b>1,800</b><i class="icon next02"></i>
										</div>
									</button>
								</li>
								<li>
									<button type="button" class="btn">
										<div class="link-btn-align-left">
											<i class="flag coupon">L</i>Level
										</div>
										<div class="link-btn-align-right">
											<b>General</b><i class="icon next02"></i>
										</div>
									</button>
								</li>
							</ul>
						</div><!-- 로그인 했을때-->
						<!-- 로그인 안했을때-->
						<div class="layer-gnb-info-top">
							<strong>Welcom to</strong>
							<p>LOTTE rent a car</p>
							<button type="button" class="btn btn-black">Login</button>
						</div><!-- //로그인 안했을때-->
					</div><!-- //로그인 전/후-->
					

					<div class="draw-toggle-cont draw-cont-01">
						<div class="detail-layer-in">
							<ul class="layer-gnb layer-gnb-s list-type-col4">
								<li>
									<p><a href="#">Reservation</a></p>
									<div class="layer-gnb-list">
										<ul>
											<li><a href="#">MainIand</a></li>
											<li><a href="#">Jeju</a></li>
											<li><a href="#">Overseas</a></li>
										</ul>
									</div>
								</li>
								<li>
									<p><a href="#">Car rental</a></p>
									<div class="layer-gnb-list">
										<ul>
											<li><a href="#">Rental Information</a></li>
											<li><a href="#">Jeju Auto House</a></li>
											<li><a href="#">Additional Services</a></li>
											<li><a href="#">Chauffeured Service</a></li>
											<li><a href="#">Driving Tips in Korea</a></li>
										</ul>
									</div>
								</li>
								<li>
									<p><a href="#">Location</a></p>
									<div class="layer-gnb-list">
										<ul>
											<li><a href="#">Branches by Region</a></li>
											<li><a href="#">Branches Offering</a></li>
											<li><a href="#">Chauffeur</a></li>
											<li><a href="#">Overseas Branches</a></li>
										</ul>
									</div>
								</li>
								<li>
									<p><a href="#">FAQ</a></p>
								</li>
							</ul>
						</div>
					</div>
					<!-- //헤더 2뎁스 메뉴 - 렌터카 예약 -->
	
					
				</div>
				
				<div class="layer-gnb-bn layer-gnb-bn-e">
					<div class="gnb-banner">
						<a href="#"><img src="../../../resources-pc/images/@temp-eng-login-bn02.png" alt="Members Benefits"></a>
					</div>
				</div>
			</div>
			<!--- 드롭다운 메뉴 추가-->






			
			<!--- 드롭다운 메뉴 추가, 전체 메뉴는 높이가 다르기 때문에 따로 설정-->
			<div class="draw-toggle-wrap-all draw-toggle-wrap-all-e">
				<!-- 헤더 전체 메뉴 -->
				<div class="draw-toggle-cont-all draw-cont-06">
					<div class="detail-layer-in detail-layer-all-in">
						<ul class="layer-gnb-all">
							<li>
								<ul>
									<li>
										<p><a href="#"><b>Reservation</b></a></p>
										<div class="layer-gnb-list">
											<ul>
												<li><a href="#">Reservation</a></li>
											</ul>
										</div>
									</li>
								</ul>
							</li>
							<li>
								<ul>
									<li>
										<p><a href="#"><b>Car rental</b></a></p>
										<div class="layer-gnb-list">
											<ul>
												<li><a href="#">Rental Information</a></li>
												<li><a href="#">Jeju Auto House</a></li>
												<li><a href="#">Additional Services</a></li>
												<li><a href="#">Chauffeured Service</a></li>
												<li><a href="#">Driving Tips in Korea</a></li>
											</ul>
										</div>
									</li>
								</ul>
							</li>
							<li>
								<ul>
									<li>
										<p><a href="#"><b>Location</b></a></p>
										<div class="layer-gnb-list">
											<ul>
												<li><a href="#">Location</a></li>
											</ul>
										</div>
									</li>
								</ul>
							</li>
							<li>
								<ul>
									<li>
										<p><a href="#"><b>FAQ</b></a></p>
										<div class="layer-gnb-list">
											<ul>
												<li><a href="#">FAQ</a></li>
											</ul>
										</div>
									</li>
								</ul>
							</li>
							<li>
								<ul>
									<li>
										<p><a href="#"><b>Company</b></a></p>
										<div class="layer-gnb-list">
											<ul>
												<li><a href="#">Corpirate profile</a></li>
												<li><a href="#">Contact us</a></li>
											</ul>
										</div>
									</li>
								</ul>
							</li>
							<li>
								<ul>
									<!-- 로그아웃 일시 -->
									<li>
										<p><a href="#">Login</a></p>
									</li>
									<!-- //로그아웃 일시 -->
									<!-- 로그인 일시 -->
									<li style="display:none;">
										<p><a href="#">Logout</a></p>
									</li>
									<!-- //로그인 일시 -->
									<li>
										<div class="layer-gnb-list">
											<ul>
												<li>
													<p><a href="#">My page</a></p>
												</li>
												<li>
													<p><a href="#">Register</a></p>
												</li>
												<li>
													<p><a href="#">My Reservation</a></p>
												</li>
												<li>
													<p><a href="#">Members benefits</a></p>
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