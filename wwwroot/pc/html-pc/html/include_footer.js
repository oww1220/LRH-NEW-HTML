$(function(){


    var footer = `
    <!--footer 컴포넌트-->
	<footer class="footer">
		<div class="inner">

			<div class="footer-link">
				<ul>
					<li>
						<a href="#n" onclick="members.goWithNoAuth('https://www.lotterentacar.net/kor/main/index.do', 'Y')">롯데렌터카</a>					
					</li>
					<li>
						<a href="#n" onclick="members.goWithNoAuth('https://www.lotteautoauction.net/hp/pub/cmm/viewMain.do', 'Y')">오토옥션</a>					
					</li>
					<li>
						<a href="https://www.lotte-autolease.net" target="_blank">오토리스</a>
					</li>
					<li>
						<a href="#n" onclick="members.goWithNoAuth('https://manager.lotterentacar.net/main.do', 'Y')">신차장 멤버십</a>					
					</li>
					<li>
						<a href="http://www.greencar.co.kr" target="_blank">그린카</a>
					</li>
				</ul>
			</div>

			<div class="sitemap">
				<ul>
					<li><a href="https://www.lotterentacar.net/kor/content/183/main.do?mnCd=FN0801" target="_blank">회사소개</a></li>
					<li><a href="https://www.lotterentacar.net/kor/footer/footerPolicyNew.do?mnCd=FN0901" class="txt_point" target="_blank">개인정보처리방침</a></li>
					<li><a href="https://www.lotterentacar.net/kor/content/190/main.do?mnCd=FN0902" class="txt_point" target="_blank">영상정보처리기기 운영관리방침</a></li>
					<li><a href="https://www.lotterentacar.net/kor/footer/footerTermsNew.do?mnCd=FN0903" target="_blank">이용약관</a></li>
					<!-- <li><a href="/kor/footer/companySinmungo.do?mnCd=FN080602" target="_blank" >사이버신문고</a></li> -->
					<li><a href="https://www.lotterentacar.net/kor/recruit/main.do?mnCd=FN0905" target="_blank">인재채용</a></li>
					<li><button type="button">이메일주소무단수집거부</button></li>
					<li><a href="https://www.lotterentacar.net/kor/content/192/main.do?mnCd=FN0908" target="_blank">CONTACT US</a></li>
					<!-- <li><a href="/main/siteMap.do?mnCd=MNCD15">사이트맵</a></li>  -->
				</ul>
				<div class="family">
					<button type="button" class="btn btn-family">FAMILY SITE</button>
				</div>
			</div>

			<div class="site-infos">

				<div class="information">
					<ul class="entrepreneur-info">
						<li>롯데렌탈㈜</li>
						<li>대표이사 김현수</li>
						<li>사업자등록번호 214-87-79183</li>
						<li>
							통신판매업신고번호 : 제2010-경기안양-420호 <a href="http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no=2148779183" target="_blank" onclick="window.open(this.href, '', 'toolbar=no,scrollbars=yes,resizable=no,top=50,left=500,width=750,height=700'); return false;" class="btn_entrepreneur_info">
								[사업자 정보 확인]</a>
						</li>
					</ul>
					<ul class="address">
						<li>경기도 안양시 동안구 전파로 88 신원비젼타워 8층</li>
						<li>서울본사: 서울시 강남구 테헤란로 422 KT타워 6~9층</li>
						<li>대표전화 02-2057-1231(1588-1230) </li>
					</ul>

					<div class="copyright">copyright ⓒ 2017 LOTTE rental co.ltd.All Rights Reserved.</div>
				</div>

				<div class="footer-logo">
					<img src="../../../resources-pc/images/common/logo-footer.png" alt="LOTTE rental"/>
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