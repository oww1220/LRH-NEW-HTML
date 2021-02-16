$(function(){


    var header = `
	<!--header 컴포넌트-->
	<header class="header">

		<!--해더네비-->
		<!-- 개발참조사항 - 메인 gnb 적용에서만 header-nav-line 삭제 해 주세요 -->
		<nav class="header-nav">
			<div class="inner">
				<div class="nav-wrap">
					<h1><a href="#none"><img src="/lrhp/pc/images/common/logo-header.png" alt="대한민국 No1.롯데렌터카"/></a></h1>
					<ul>
						<li>
							<a href="#" class="draw-btn draw-btn-s" data-target="draw-cont-01" data-on="true" data-siblings="true">단기렌터카</a>
						</li>
						<li>
							<a href="#" class="draw-btn draw-btn-s" data-target="draw-cont-02" data-on="true" data-siblings="true">신차 장기렌터카 </a>
						</li>
						<li>
							<a href="#" class="draw-btn draw-btn-s" data-target="draw-cont-03" data-on="true" data-siblings="true">중고차 렌터카</a>
						</li>
						<li>
							<a href="#" class="draw-btn draw-btn-s" data-target="draw-cont-04" data-on="true" data-siblings="true">CAR뮤니티</a>
						</li>
						<li>
							<a href="#" class="draw-btn draw-btn-s" data-target="draw-cont-05" data-on="true" data-siblings="true">고객지원</a>
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
							<ul class="layer-gnb list-type-col4">
								<li>
									<p><a href="#">빠른 예약</a></p>
									<div class="layer-gnb-list">
										<ul>
											<li><a href="#">제주 렌트</a></li>
											<li><a href="#">내륙 렌트</a></li>
										</ul>
									</div>
								</li>
								<li>
									<p><a href="#">단기렌트 서비스 안내</a></p>
									<div class="layer-gnb-list">
										<ul>
											<li><a href="#">대여 및 요금안내</a></li>
											<li><a href="#">체크인서비스</a></li>
											<li><a href="#">부가서비스안내</a></li>
											<li><a href="#">펫카상품안내</a></li>
										</ul>
									</div>
								</li>
								<li>
									<p><a href="#">월간렌터카</a></p>
									<div class="layer-gnb-list">
										<ul>
											<li><a href="#">월간렌트 서비스 안내</a></li>
											<li><a href="#">렌터카 검색</a></li>
											<li><a href="#">상담 신청</a></li>
										</ul>
									</div>
								</li>
								<li>
									<p><a href="#">기사포함렌터카</a></p>
									<div class="layer-gnb-list">
										<ul>
											<li><a href="#">기사포함 서비스 안내</a></li>
											<li><a href="#">렌터카 예약 접수</a></li>
										</ul>
									</div>
								</li>
								<li>
									<p><a href="#">해외렌터카</a></p>
								</li>
								<li>
									<p><a href="#">사고대차 서비스</a></p>
								</li>
							</ul>
						</div>
					</div>
					<!-- //헤더 2뎁스 메뉴 - 렌터카 예약 -->
	
					<!-- 헤더 2뎁스 메뉴 - 신차장 -->
					<div class="draw-toggle-cont draw-cont-02">
						<div class="detail-layer-in">
							<ul class="layer-gnb list-type-col4">
								<li>
									<p><a href="#">신차 특가</a></p>
								</li>
								<li>
									<p><a href="#">다이렉트 견적</a></p>
								</li>
								<li>
									<p><a href="#">장기렌트 서비스 안내</a></p>
									<div class="layer-gnb-list">
										<ul>
											<li><a href="#">개인 장기렌터카</a></li>
											<li><a href="#">법인 장기렌터카</a></li>
											<li><a href="#">전기차 장기렌터카</a></li>
										</ul>
									</div>
								</li>
								<li>
									<p><a href="#">제휴카드 혜택</a></p>
								</li>
								<li>
									<p><a href="#">신차장 멤버십</a></p>
								</li>
								<li>
									<p><a href="#">신차장 친구추천</a></p>
								</li>
							</ul>
						</div>
					</div>
					<!-- //헤더 2뎁스 메뉴 - 신차장 - 로그인 안했을때 -->
	
					<!-- 헤더 2뎁스 메뉴 - 중고차장기 - 로그인 했을때 -->
					<div class="draw-toggle-cont draw-cont-03">
						<div class="detail-layer-in">							
							<ul class="layer-gnb list-type-col4">
								<li>
									<p><a href="#">중고차 장기렌터카</a></p>
									<div class="layer-gnb-list">
										<ul>
											<li><a href="#">중고차렌트 서비스 안내</a></li>
											<li><a href="#">중고차 검색</a></li>
										</ul>
									</div>
								</li>
								<li>
									<p><a href="#">중고차 승계 서비스</a></p>
									<div class="layer-gnb-list">
										<ul>
											<li><a href="#">렌터카 승계 안내</a></li>
											<li><a href="#">승계 차량 검색</a></li>
										</ul>
									</div>
								</li>
								<li>
									<p><a href="#">내 차 팔기 서비스</a></p>
								</li>
							</ul>
						</div>
					</div>
					<!-- //헤더 2뎁스 메뉴 - 중고차장기 - 로그인 했을때 -->
	
					<!-- 헤더 2뎁스 메뉴 - #카라이프 - 로그인 했을때 -->
					<div class="draw-toggle-cont draw-cont-04">
						<div class="detail-layer-in">
							<ul class="layer-gnb list-type-col4">
								<li>
									<p><a href="#">매거진</a></p>
									<!-- <p><a href="#">즐거움을 <span class="SpoqaHanSans_txt SpoqaHanSans_txt_b"><i>#</i>타봥</span></a></p> -->
								</li>
								<li>
									<p><a href="#">이벤트</a></p>
									<div class="layer-gnb-list">
										<ul>
											<li><a href="#">진행중인이벤트</a></li>
											<li><a href="#">당첨자발표</a></li>
										</ul>
									</div>
								</li>
								<li>
									<p><a href="#">제주오토하우스</a></p>
								</li>
							</ul>
						</div>
					</div>
					<!-- //헤더 2뎁스 메뉴 - #카라이프 - 로그인 했을때 -->
	
					<!-- 헤더 2뎁스 메뉴 - 고객지원 - 로그인 했을때 -->
					<div class="draw-toggle-cont draw-cont-05">
						<div class="detail-layer-in">
							<ul class="layer-gnb list-type-col4">
								<li>
									<p><a href="#">공지사항</a></p>
								</li>
								<li>
									<p><a href="#">지점 안내</a></p>
									<div class="layer-gnb-list">
										<ul>
											<li><a href="#">전국지점</a></li>
											<li><a href="#">기사포함</a></li>
											<li><a href="#">해외지점</a></li>
										</ul>
									</div>
								</li>
								<li>
									<p><a href="#">고객센터</a></p>
								</li>
							</ul>
						</div>
					</div>
					<!-- //헤더 2뎁스 메뉴 - 고객지원 - 로그인 했을때 -->
				</div>
				
				<div class="layer-gnb-bn">
					<div class="view-slide">
						<ul class="specials-view-list">
							<li>
								<a href="#">
									<div class="img">
										<img src="/lrhp/pc/images/testbn01.jpg" alt="더미1">
									</div>
								</a>
							</li>
							<li>
								<a href="#">
									<div class="img">
										<img src="/lrhp/pc/images/testbn02.jpg" alt="더미1">
									</div>
								</a>
							</li>
							<li>
								<a href="#">
									<div class="img">
										<img src="/lrhp/pc/images/testbn03.jpg" alt="더미1">
									</div>
								</a>
							</li>
						</ul>
					</div>
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
										<p><a href="#"><b>단기렌터카</b></a></p>
									</li>
									<li>
										<p><a href="#">빠른 예약</a></p>
										<div class="layer-gnb-list">
											<ul>
												<li><a href="#">제주 렌트</a></li>
												<li><a href="#">내륙 렌트</a></li>
											</ul>
										</div>
									</li>
									<li>
										<p><a href="#">단기렌트 서비스 안내</a></p>
										<div class="layer-gnb-list">
											<ul>
												<li><a href="#">대여 및 요금안내</a></li>
												<li><a href="#">체크인서비스</a></li>
												<li><a href="#">부가서비스안내</a></li>
												<li><a href="#">펫카상품안내</a></li>
											</ul>
										</div>
									</li>
									<li>
										<p><a href="#">월간렌터카</a></p>
										<div class="layer-gnb-list">
											<ul>
												<li><a href="#">월간렌트 서비스 안내</a></li>
												<li><a href="#">렌터카 검색</a></li>
												<li><a href="#">상담 신청</a></li>
											</ul>
										</div>
									</li>
									<li>
										<p><a href="#">기사포함렌터카</a></p>
										<div class="layer-gnb-list">
											<ul>
												<li><a href="#">기사포함 서비스 안내</a></li>
												<li><a href="#">렌터카 예약 접수</a></li>
											</ul>
										</div>
									</li>
									<li>
										<p><a href="#">해외렌터카</a></p>
									</li>
									<li>
										<p><a href="#">사고대차 서비스</a></p>
									</li>
								</ul>
							</li>
							<li>
								<ul>
									<li>
										<p><a href="#"><b>신차 장기렌터카</b></a></p>
									</li>
									<li>
										<p><a href="#">신차장 특가</a></p>
									</li>
									<li>
										<p><a href="#">다이렉트 견적</a></p>
									</li>
									<li>
										<p><a href="#">장기렌트 서비스 안내</a></p>
										<div class="layer-gnb-list">
											<ul>
												<li><a href="#">개인 장기렌터카</a></li>
												<li><a href="#">법인 장기렌터카</a></li>
												<li><a href="#">전기차 장기렌터카</a></li>
											</ul>
										</div>
									</li>
									<li>
										<p><a href="#">제휴카드 혜택</a></p>
									</li>
									<li>
										<p><a href="#">신차장 멤버십</a></p>
									</li>
									<li>
										<p><a href="#">신차장 친구추천</a></p>
									</li>
								</ul>
							</li>
							<li>
								<ul>
									<li>
										<p><a href="#"><b>중고차</b></a></p>
									</li>
									<li>
										<p><a href="#">중고차 장기렌터카</a></p>
										<div class="layer-gnb-list">
											<ul>
												<li><a href="#">중고차렌트 서비스 안내</a></li>
												<li><a href="#">중고차 검색</a></li>
											</ul>
										</div>
									</li>
									<li>
										<p><a href="#">중고차 승계 서비스</a></p>
										<div class="layer-gnb-list">
											<ul>
												<li><a href="#">렌터카 승계 안내</a></li>
												<li><a href="#">승계 차량 검색</a></li>
											</ul>
										</div>
									</li>
									<li>
										<p><a href="#">내 차 팔기 서비스</a></p>
									</li>
								</ul>
							</li>
							<li>
								<ul>
									<li>
										<p><a href="#"><b>CAR뮤니티</b></a></p>
									</li>
									<li>
										<p><a href="#">매거진</a></p>
										<!-- <p><a href="#">즐거움을 <span class="SpoqaHanSans_txt SpoqaHanSans_txt_b"><i>#</i>타봥</span></a></p> -->
									</li>
									<li>
										<p><a href="#">이벤트</a></p>
										<div class="layer-gnb-list">
											<ul>
												<li><a href="#">진행중인이벤트</a></li>
												<li><a href="#">당첨자발표</a></li>
											</ul>
										</div>
									</li>
									<li>
										<p><a href="#">제주오토하우스</a></p>
									</li>
								</ul>
							</li>
							<li>
								<ul>
									<li>
										<p><a href="#"><b>고객지원</b></a></p>
									</li>
									<li>
										<p><a href="#">공지사항</a></p>
									</li>
									<li>
										<p><a href="#">지점 안내</a></p>
										<div class="layer-gnb-list">
											<ul>
												<li><a href="#">전국지점</a></li>
												<li><a href="#">기사포함</a></li>
												<li><a href="#">해외지점</a></li>
											</ul>
										</div>
									</li>
									<li>
										<p><a href="#">고객센터</a></p>
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