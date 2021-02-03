$(function(){


    var header = `
	<!--header 컴포넌트-->
	<header class="header">

		<!--해더상단-->
		<div class="header-top">
			<div class="inner">
				<a href="#container" class="skip_nav">본문 바로가기</a>
			</div>
		</div>
		<!--//해더상단-->

		<!--해더네비-->
		<nav class="header-nav">
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
							<button type="button" class="btn draw-btn draw-btn-all" data-target="draw-cont-06" data-on="true" data-siblings="true"><i class="icon draw">전체메뉴</i></button>
						</li>
					</ul>
				</div>
			</div>

			<!--- 드롭다운 메뉴 추가-->
			<div class="draw-toggle-wrap draw-toggle-wrap-s">
				<!-- 헤더 2뎁스 메뉴 -->
				<div class="draw-toggle-area">
					<!-- //헤더 2뎁스 메뉴 - 단기렌터카 예약 -->
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
					<!-- //헤더 2뎁스 메뉴 - 단기렌터카 예약 -->
	
					<!-- 헤더 2뎁스 메뉴 - 단기렌터카 안내 -->
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
					<!-- //헤더 2뎁스 메뉴 - 단기렌터카 안내 -->
				</div>
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
						</ul>
					</div>
				</div>
				<!-- //헤더 전체 메뉴 -->
			</div>
			<!--- 드롭다운 메뉴 추가-->	
			
			
		</nav>
		<!--//해더네비-->


	</header>
	<!--//header 컴포넌트-->


		<div class="bg-dimmed-h">딤(Dim)처리 배경</div>
    `;

    

    $(".header").html(header);
    $(".header .header").unwrap();


});