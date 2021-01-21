$(function(){


    var header = `
	<!--header 컴포넌트 2-->
	<header class="header">

		<!--해더상단-->
		<div class="header-top">
			<div class="inner">
				<a href="#container" class="skip_nav">본문 바로가기</a>
				<h1><a href="#none"><img src="../../../resources-pc/images/common/logo-header.png" alt="LOTTE rental"/></a></h1>
				<ul class="extra-menu">
					<li class="layer-login-open" data-layer="layer-login"><a href="#none">로그인</a></li>
					<li><a href="javascript:fnHpCallLpointScreen('JOIN_MEMBER')" class="lPointAutoChange">회원가입</a></li>							
					<li class="customer">
						<a href="/customer/faq.do?mnCd=MNCD06001">고객센터</a>
						<div class="link" style="display: none;">
							<ul>
								<li><a href="/customer/faq.do?mnCd=MNCD06001">FAQ</a></li>
								<li><a href="/customer/notice.do?mnCd=MNCD06008">공지사항</a></li>
								<li><a href="/customer/consultation.do?mnCd=MNCD06002">일반 문의</a></li>
								<li><a href="/customer/saleconsultation.do?mnCd=MNCD06003">전문상담신청</a></li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!--//해더상단-->

		<!--해더네비-->
		<nav class="header-nav">
			<div class="inner">
				<ul>
					<li>
						<a href="#">프로모션</a>
					</li>
					<li>
						<a href="#">심<b>夜</b>신차</a>
					</li>
					<li>
						<a href="#">특가모아보기</a>
					</li>
					<li>
						<a href="#">이벤트</a>
					</li>
					<li>
						<a href="#">고객후기</a>
					</li>
					<li>
						<a href="#">신차장TV</a>
					</li>
				</ul>
			</div>
		</nav>
		<!--//해더네비-->

	</header>
	<!--//header 컴포넌트-->

	<div class="path-wrap">
        <div class="inner">
            <strong>계약</strong>
            <ul>
                <li>
                    <a href="">HOME</a>
                </li>
                <li>
                    <a href="">계약</a>
                </li>
                <li>
                    <b>계약정보입력</b>
                </li>
            </ul>
        </div>
	</div>
	
    `;

    

    $(".header").html(header);
    $(".header .header").unwrap();


});