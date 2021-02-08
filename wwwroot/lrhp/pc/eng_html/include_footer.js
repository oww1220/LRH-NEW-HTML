$(function(){


    var footer = `
		<!--footer 컴포넌트-->
		<footer class="footer eng-footer">

			<div class="footer-link">
				<div class="inner">
					<ul>
						<li>
							<a href="#n" onclick="members.goWithNoAuth('https://direct.lotterentacar.net/main/main.do?utm_source=lotterentacar&amp;utm_medium=footer&amp;utm_campaign=FamilySite&amp;utm_content=신차장다이렉트', 'Y');ga('send', 'event', '풋터', 'goToDirect', '신차장다이렉트');">COMPANY</a>
						</li>
						<li>
							<a href="#n" onclick="members.goWithNoAuth('https://manager.lotterentacar.net/main.do', 'Y');ga('send', 'event', '풋터', '패밀리사이트', '신차장_멤버십랜딩');">USER AGREEMENT</a>
						</li>
						<li>
							<a href="#n" onclick="members.goWithNoAuth('https://www.lotteautoauction.net/hp/pub/cmm/viewMain.do', 'Y');ga('send', 'event', '풋터', '패밀리사이트', '오토옥션랜딩');">CONTACT US</a>				
						</li>
						<li>
							<a href="#">SITE MAP</a>
						</li>
					</ul>
				</div>
				
			</div>
			<div class="inner">
				<div class="footer-logo">
					<img src="/lrhp/pc/images/common/logo-footer.png" alt="LOTTE rental"/>
				</div>
				<div class="footer-bottom-menu">
					<div class="footer-infos-wrap">
			
						<div class="site-infos">
			
							<div class="information">
								<ul class="entrepreneur-info">
									<li>
										<ul class="address">
											<li>LOTTE rental co., ltd. | President : Kim, Hyun Soo | Business Registration # : 214-87-79183</li>
											<li>Communication Service # : 2010-Gyeonggi Anyang 420 | Address : 8F Shinwonvision Tower 898. Hogye-dong, Dongan-Gu, Anyang</li>
											<li>Main Contact 1588-1230 | Oversea +82-2-797-8000</li>
											<li>copyright ⓒ 2021 LOTTE rental co., ltd.All Rights Reserved.</li>
										</ul>
									</li>
								</ul>
							</div>
							
						</div>
						<div class="footer-infos-bn">
							<div class="footer-infos-list">
								<div class="detail-view-list-wrap">
									
									<div class="swiper-container detail-view-list">
										<p class="detail-view-list-tit">LOTTE rental Award</p>
										<div class="swiper-wrapper">
											<div class="swiper-slide">
												<img src="/lrhp/pc/images/icons/ico-awarded01.png" alt="한국서비스대상 명예의 전당 2015년 명예의 전당 헌정">
											</div>
											<div class="swiper-slide">
												<img src="/lrhp/pc/images/icons/ico-awarded02.png" alt="2019 국가고객만족도  렌터카부문1위 (5년 연속)">
											</div>
											<div class="swiper-slide">
												<img src="/lrhp/pc/images/icons/ico-awarded03.png" alt="2020 한국산업의 브랜드 파워 1위 (18년 연속)">
											</div>
											<div class="swiper-slide">
												<img src="/lrhp/pc/images/icons/ico-awarded04.png" alt="대한민국 브랜드 스타 (14년 연속)">
											</div>
											<div class="swiper-slide">
												<img src="/lrhp/pc/images/icons/ico-awarded05.png" alt="2019 국가브랜드 경쟁력  지수 1위 (8년 연속)">
											</div>
											<div class="swiper-slide">
												<img src="/lrhp/pc/images/icons/ico-awarded06.png" alt="2019 한국서비스 품질지수 1위 (8년 연속) ">
											</div>
											<div class="swiper-slide">
												<img src="/lrhp/pc/images/icons/ico-awarded07.png" alt="한국산업의 고객만족도 (4년 연속)">
											</div>
											<div class="swiper-slide">
												<img src="/lrhp/pc/images/icons/ico-awarded08.png" alt="2020 대한민국 퍼스트  브랜드 (16년 연속)">
											</div>
											<div class="swiper-slide">
												<img src="/lrhp/pc/images/icons/ico-awarded09.png" alt="2019 프리미엄 브랜드 지수 1위 (11년 연속) ">
											</div>
											<div class="swiper-slide">
												<img src="/lrhp/pc/images/icons/ico-awarded10.png" alt="2019 한국품질만족지수 1위 2013년~2015년, 2019년 수상">
											</div>
										</div>
										<div class="swiper-pagination-wrap">
											<div class="swiper-button-next"></div>
											<div class="swiper-button-prev"></div>
										</div>
									</div>
								</div>
								
							</div>
							<div class="footer-infos-sns">
								<p>LOTTE rental SNS</p>
								<ul>
									<li>
										<a href="#" class="btn btn-foot-sns"><i class="icon snsK">카카오톡</i></a>
									</li>
									<li>
										<a href="#" class="btn btn-foot-sns"><i class="icon snsF">페이스북</i></a>
									</li>
									<li>
										<a href="#" class="btn btn-foot-sns"><i class="icon snsI">인스타그램</i></a>
									</li>
									<!-- <li>
										<a href="#" class="btn btn-foot-sns"><i class="icon snsY">유튜브</i></a>
									</li> -->
									<li>
										<a href="#" class="btn btn-foot-sns"><i class="icon snsP">포스트</i></a>
									</li>
									<li>
										<a href="#" class="btn btn-foot-sns"><i class="icon snsB">블로그</i></a>
									</li>
									<li>
										<a href="#" class="btn btn-foot-sns"><i class="icon snsT">트위터</i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="footer-center-wrap">
						<div class="footer-center-top">
							<p>Customer Service</p>
							<b>
								<a href="tel:1588-1230">1588-1230</a>
							</b>
						</div>
					</div>
				</div>


			</div>
		</footer>
		<!--//footer 컴포넌트-->

	<!--bg-dimmed 컴포넌트-->
	<div class="bg-dimmed">딤(Dim)처리 배경</div>
	<!--//bg-dimmed 컴포넌트-->

	<div class="fixedRight noLauncher">
        <button type="button" class="btn btn-goTop">탑으로</button>
    </div>
    `;

    $(".footer").html(footer);
    $(".footer .footer").unwrap();

});