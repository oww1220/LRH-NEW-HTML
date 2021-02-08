$(function(){


    var mypageHeader = `
	<div class="myInfos-area">
		<div class="box-between">
			<h3 class="txt">
				<strong class="name">김롯데님</strong>
				<span>일반등급</span>
			</h3>
			<div class="btns">
				<a href="#" class="btn-goLink arrow-r">운전면허증</a>
				<a href="#" class="btn-goLink arrow-r">결제카드</a>
			</div>
		</div>
		<ul class="item-list">
			<li>	
				<span class="icon myPannel01"></span>
				<p>L.POINT</p>
				<a href="#" class="underline">12,300</a>
			</li>
			<li>	
				<span class="icon myPannel02"></span>
				<p>렌터카 포인트</p>
				<a href="#" class="underline">469,100</a>
			</li>
			<li>	
				<span class="icon myPannel03"></span>
				<p>렌터카 쿠폰</p>
				<a href="#" class="underline">2장</a>
			</li>
			<li>	
				<span class="icon myPannel04"></span>
				<p>멤버쉽 쿠폰</p>
				<a href="#" class="underline">2장</a>
			</li>
			<li>	
				<span class="icon myPannel05"></span>
				<p>내차팔기 상담</p>
				<a href="#" class="underline">1건</a>
			</li>
			<li>	
				<span class="icon myPannel06"></span>
				<p>렌터카 상담</p>
				<a href="#" class="underline">1건</a>
			</li>
		</ul>
	</div>
	`;
	
	var mypageLnb = `
	<ul>
		<li>
			<a href="#">단기렌터카 예약</a>
		</li>
		<li>
			<a href="#">월간단기렌터카 예약</a>
		</li>
		<li>
			<a href="#">기사포함단기렌터카 예약 </a>

		</li>
		<li>
			<a href="#">장기렌터카 계약 </a>

		</li>
		<li>
			<a href="#">렌터카 상담 </a>

		</li>
		<li>
			<a href="#">내차 팔기 상담 </a>

		</li>
		<li>
			<a href="#">포인트</a>
			<ul>
				<li>
					<a href="#">사용내역 </a>
				</li>
				<li>
					<a href="#">포인트 전환 신청 </a>
				</li>
			</ul>
		</li>
		<li>
			<a href="#">할인쿠폰 및 무료이용권 </a>
			<ul>
				<li>
					<a href="#">할인쿠폰 </a>
				</li>
				<li>
					<a href="#">무료이용권 </a>
				</li>
			</ul>
		</li>
		<li>
			<a href="#">신차장 친구추천 활동</a>
		</li>
		<li>
			<a href="#">결제카드</a>
		</li>
		<li>
			<a href="#">운전면허증</a>
			<ul>
				<li>
					<a href="#">국내</a>										
				</li>
				<li><a href="#">국제</a></li>
			</ul>
		</li>
		<li>
			<a href="#">내의 부과 정보</a>
			<ul>
				<li>
					<a href="#">나의 관심 차종</a>
				</li>
				<li>
					<a href="#">나의 찜 차량</a>
				</li>
				<li>
					<a href="#">나의 단골 지점</a>
				</li>
			</ul>
		</li>
		<li>
			<a href="#">고객센터</a>
		</li>
		<li>
			<a href="#">회원</a>
			<ul>
				<li>
					<a href="#">회원정보수정</a>
				</li>
				<li>
					<button class="layer-mypage-open" data-layer="layer-password-reenter-info">비밀번호 변경</button>
				</li>
				<li>
					<a href="#">회원탈퇴</a>
				</li>
			</ul>
		</li>
		<li>
			<a href="#">롯데그룹사 임직원 인증</a>
		</li>
	</ul>
    `;

    

    $(".mypage-header").html(mypageHeader);
	$(".mypage-header .mypage-header").unwrap();
	
	$(".mypage-lnb").html(mypageLnb);
    $(".mypage-lnb .mypage-lnb").unwrap();


});