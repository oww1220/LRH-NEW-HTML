$(function(){


    var footer = `
    <!--footer 컴포넌트-->
	<footer class="footer">
		
		<div class="footer-link">
			<div class="inner">
				<ul>
					<li>
						<a href="#n" onclick="members.goWithNoAuth('https://direct.lotterentacar.net/main/main.do?utm_source=lotterentacar&utm_medium=footer&utm_campaign=FamilySite&utm_content=신차장다이렉트', 'Y');ga('send', 'event', '풋터', 'goToDirect', '신차장다이렉트');">신차장다이렉트</a>
					</li>
					<li>
						<a href="#n" onclick="members.goWithNoAuth('https://manager.lotterentacar.net/main.do', 'Y');ga('send', 'event', '풋터', '패밀리사이트', '신차장_멤버십랜딩');">신차장멤버십</a>
					</li>
					<li>
						<a href="#n" onclick="members.goWithNoAuth('https://www.lotteautoauction.net/hp/pub/cmm/viewMain.do', 'Y');ga('send', 'event', '풋터', '패밀리사이트', '오토옥션랜딩');">롯데오토옥션</a>				
					</li>
					<li>
						<a href="https://www.lotte-autolease.net" onclick="ga('send', 'event', '풋터', '패밀리사이트', '오토리스랜딩');" target="_blank">롯데오토리스</a>
					</li>
					<li>
						<a href="http://www.greencar.co.kr" onclick="ga('send', 'event', '풋터', '패밀리사이트', '그린카랜딩');" target="_blank">그린카</a>
					</li>
					<li>
						<a href="https://lotterental.com/" onclick="ga('send', 'event', '풋터', '패밀리사이트', '일반랜탈랜딩');" target="_blank">일반렌탈</a>
					</li>
				</ul>
				<div class="family">
					<button type="button" class="btn btn-family family-btn" data-target="family-cont-01" data-on="true" data-siblings="true">FAMILY SITE</button>
					<div class="family-toggle-cont family-cont-01">
						<div class="detail-layer-in">
							<ul class="detail-layer-list-wrap">
								<li>
									<p>식품부문</p>
									<div class="detail-layer-list">
										<ul>
											<li>롯데제과</li>
											<li>롯데유통사업본부</li>
											<li>롯데칠성음료</li>
											<li>롯데칠성음료 주류부문</li>
											<li>롯데아시히주류</li>
											<li>롯데푸드</li>
											<li>롯데리아</li>
										</ul>
									</div>
								</li>
								<li>
									<p>관광부문</p>
									<div class="detail-layer-list">
										<ul>
											<li>롯데호텔</li>
											<li>부산롯데호텔</li>
											<li>롯데면세점</li>
											<li>롯데월드</li>
											<li>롯데물산</li>
											<li>롯데리조트</li>
											<li>롯데제이티비</li>
										</ul>
									</div>
								</li>
								<li>
									<p>금융부문</p>
									<div class="detail-layer-list">
										<ul>
											<li>롯데카드</li>
											<li>롯데손해보험</li>
											<li>롯데캐피탈</li>
											<li>롯데자이언츠</li>
											<li>롯데멤버스</li>
										</ul>
									</div>
								</li>
								<li>
									<p>석유화학/건설/제조 부문</p>
									<div class="detail-layer-list">
										<ul>
											<li>롯데케미칼</li>
											<li>케이피켐텍</li>
											<li>롯데엠알시</li>
											<li>롯데건설</li>
											<li>롯데건설 CM사업본부</li>
											<li>캐논 코리아비즈니스솔루션(주)</li>
											<li>한국후지필름</li>
											<li>롯데알미늄</li>
											<li>롯데기공</li>
										</ul>
									</div>
								</li>
								<li>
									<p>유통부문</p>
									<div class="detail-layer-list">
										<ul>
											<li>롯데백화점</li>
											<li>롯데마트</li>
											<li>롯데슈퍼</li>
											<li>롯데시네마</li>
											<li>롯데홈쇼핑</li>
											<li>코리아세븐</li>
											<li>FRL코리아</li>
											<li>롯데상사</li>
											<li>롯데닷컴</li>
											<li>롯데하이마트</li>
											<li>롭스</li>
										</ul>
									</div>
								</li>
								<li>
									<p>서비스/연구/지원 부문</p>
									<div class="detail-layer-list">
										<ul>
											<li>롯데정보통신</li>
											<li>현대정보기술</li>
											<li>롯데스카이힐C.C</li>
											<li>대홍기획</li>
											<li>롯데자산개발</li>
											<li>롯데로지스틱스</li>
											<li>롯데피에스넷</li>
											<li>마이비</li>
											<li>이비카드</li>
											<li>롯데중앙연구소</li>
											<li>롯데인재개발원</li>
											<li>롯데장학재단</li>
											<li>롯데복지재단</li>
											<li>롯데삼동복지재단</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			
		</div>
		<div class="inner">
			<div class="footer-logo">
				<img src="../../../resources-pc/images/common/logo-footer.png" alt="LOTTE rental"/>
			</div>
			<div class="footer-bottom-menu">
				<div class="footer-infos-wrap">
					<div class="sitemap">
						<ul>
							<li><a href="/kor/content/183/main.do?mnCd=FN0801" target="_blank">회사소개</a></li>
							<li><a href="/kor/footer/footerPolicyNew.do?mnCd=FN0901" class="txt_point">개인정보처리방침</a></li>
							<li><a href="/kor/content/190/main.do?mnCd=FN0902" class="txt_point">영상정보처리기기 운영관리방침</a></li>
							<li><a href="/kor/footer/footerTermsNew.do?mnCd=FN0903">이용약관</a></li>
							<li><a href="#refuse_email" class="refuse_email btn_layer">이메일주소무단수집거부</a></li>
							<li><a href="/kor/content/192/main.do?mnCd=FN0908">찾아오시는길</a></li>
						</ul>
					</div>
		
					<div class="site-infos">
		
						<div class="information">
							<ul class="entrepreneur-info">
								<li>롯데렌탈㈜ 대표이사 김현수</li>
								<li>
									<ul class="address">
										<li>경기도 안양시 동안구 전파로 88 신원비젼타워 8층 / 서울본사: 서울시 강남구 테헤란로 422 KT타워 6~9층</li>
										<li>사업자등록번호 : <a href="http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no=2148779183" target="_blank" onclick="window.open(this.href, '', 'toolbar=no,scrollbars=yes,resizable=no,top=50,left=500,width=750,height=700'); return false;" class="btn_entrepreneur_info">214-87-79183</a> / 통신판매업신고번호 : 제2010-경기안양-420호</li>
										<li>해외 82-2-797-8000 / 보험대차 1588-4920 / 일반상품렌탈 1577-5100+1</li>
									</ul>
								</li>
							</ul>
						</div>
						
					</div>
					<div class="footer-infos-bn">
						<div class="footer-infos-list">
							<div class="detail-view-list-wrap">
								
								<div class="swiper-container detail-view-list">
									<p class="detail-view-list-tit">롯데렌터카 수상 내역</p>
									<div class="swiper-wrapper">
										<div class="swiper-slide">
											<img src="../../../resources-pc/images/icons/ico-awarded01.png" alt="한국서비스대상 명예의 전당 2015년 명예의 전당 헌정">
										</div>
										<div class="swiper-slide">
											<img src="../../../resources-pc/images/icons/ico-awarded02.png" alt="2019 국가고객만족도  렌터카부문1위 (5년 연속)">
										</div>
										<div class="swiper-slide">
											<img src="../../../resources-pc/images/icons/ico-awarded03.png" alt="2020 한국산업의 브랜드 파워 1위 (18년 연속)">
										</div>
										<div class="swiper-slide">
											<img src="../../../resources-pc/images/icons/ico-awarded04.png" alt="대한민국 브랜드 스타 (14년 연속)">
										</div>
										<div class="swiper-slide">
											<img src="../../../resources-pc/images/icons/ico-awarded05.png" alt="2019 국가브랜드 경쟁력  지수 1위 (8년 연속)">
										</div>
										<div class="swiper-slide">
											<img src="../../../resources-pc/images/icons/ico-awarded06.png" alt="2019 한국서비스 품질지수 1위 (8년 연속) ">
										</div>
										<div class="swiper-slide">
											<img src="../../../resources-pc/images/icons/ico-awarded07.png" alt="한국산업의 고객만족도 (4년 연속)">
										</div>
										<div class="swiper-slide">
											<img src="../../../resources-pc/images/icons/ico-awarded08.png" alt="2020 대한민국 퍼스트  브랜드 (16년 연속)">
										</div>
										<div class="swiper-slide">
											<img src="../../../resources-pc/images/icons/ico-awarded09.png" alt="2019 프리미엄 브랜드 지수 1위 (11년 연속) ">
										</div>
										<div class="swiper-slide">
											<img src="../../../resources-pc/images/icons/ico-awarded10.png" alt="2019 한국품질만족지수 1위 2013년~2015년, 2019년 수상">
										</div>
									</div>
									<div class="swiper-pagination-wrap">
										<div class="swiper-button-next"></div>
										<div class="swiper-button-prev"></div>
										<!-- <div class="swiper-button-play">play</div>
    									<div class="swiper-button-pause">stop</div> -->
									</div>
								</div>
							</div>
							
						</div>
						<div class="footer-infos-sns">
							<ul>
								<li>
									<button type="button" class="btn btn-foot-sns"><i class="icon snsB">블로그</i></button>
								</li>
								<li>
									<button type="button" class="btn btn-foot-sns"><i class="icon snsF">페이스북</i></button>
								</li>
								<li>
									<button type="button" class="btn btn-foot-sns"><i class="icon snsI">인스타그램</i></button>
								</li>
								<li>
									<button type="button" class="btn btn-foot-sns"><i class="icon snsY">유튜브</i></button>
								</li>
								<li>
									<button type="button" class="btn btn-foot-sns"><i class="icon snsK">카카오톡</i></button>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="footer-center-wrap">
					<div class="footer-center-top">
						<p>고객센터</p>
						<b>
							<a href="tel:1588-1230">1588-1230</a>
						</b>
					</div>
					<div class="footer-center-info">
						평일 08:30 ~ 20:00<br>
						단, 사고처리 문의는 24시간 가능
					</div>
					<div class="footer-center-btn">
						<button type="button" class="btn btn-simple">1:1 고객센터</button>
					</div>
				</div>
				<div class="footer-app-wrap">
					<p>앱 다운로드</p>
					<ul>
						<li><a href="#" target="_blank"><i class="icon app01">Google Play</i></a></li>
						<li><a href="#" target="_blank"><i class="icon app02">App Store</i></a></li>
					</ul>
				</div>
			</div>


		</div>
	</footer>
	<!--//footer 컴포넌트-->

	<!--bg-dimmed 컴포넌트-->
	<div class="bg-dimmed">딤(Dim)처리 배경</div>
	<!--//bg-dimmed 컴포넌트-->
    `;

    $(".footer").html(footer);
    $(".footer .footer").unwrap();

});