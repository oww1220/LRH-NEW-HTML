$(function(){


    var footer = `
        <!--footer 컴포넌트-->
        <footer class="footer">
            <div class="inner">
                <div class="footer-center">
                    <ul class="list-type-col2">
                        <li><em>고객센터</em><b><a href="tel:1588-1230">1588-1230</a></b></li>
                        <li>
                            평일 08:30 ~ 20:00<br>
                            단, 사고처리 문의는 24시간 가능
                        </li>
                    </ul>
                </div>
                <div class="footer-topMenu">
                    <ul class="list-type-col3">
                        <li><a href="#none">로그인</a></li>
                        <li><a href="#none">ENGLISH</a></li>
                        <li><a href="#none">1:1 문의</a></li>
                    </ul>
                </div>
                <div class="footer-companyInfo">
                    <div class="chk-agree-list">
                        <div class="chk-agree-top">
                            <h2>롯데렌탈㈜</h2>
                            <button type="button" class="btn-toggle gray agree-toggle-btn" data-target="toggle-cont-001" data-on="true" data-siblings="true"></button>
                        </div>
                        <div class="agree-toggle-cont toggle-cont-001">
                            <ul>
                                <li> 대표이사 : <a href="#">김현수</a> <span>|</span> 사업자 등록번호 : <a href="#">214-87-79183</a></li>
                                <li> 통신판매업 신고 : <a href="#">제2010-경기안양-420호</a></li>
                                <li> 주소 : <a href="#">경기도 안양시 동안구 전파로 88 신원비젼타워 8층</a></li>
                                <li> 서울본사 : <a href="#">서울시 강남구 테헤란로 422 KT타워 6~9층</a></li>
                                <li> 해외 : <a href="#">82-2-797-8000</a> <span>|</span> 보험대차 : <a href="#">1588-4920</a></li>
                                <li> 일반상품렌탈 : <a href="#">1577-5100+1</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-bottomMenu">
                    <ul class="list-type-col3">
                        <li><a href="#"><b>개인정보 처리방침</b></a></li>
                        <li><a href="#"><b>영상정보처리기기 운영관리방침</b></a></li>
                        <li><a href="#">이용약관</a></li>
                    </ul>
                </div>
                <div class="footer-app">
                    <p>추천APP서비스</p>
                    <ul class="list-type-col4">
                        <li class=""><a href="#"><i class="icon app01">신차장 다이렉트</i></a></li>
                        <li class=""><a href="#"><i class="icon app02">롯데렌터카 신차장 멤버십</i></a></li>
                        <li class=""><a href="#"><i class="icon app03">MYOMEE</i></a></li>
                        <li class=""><a href="#"><i class="icon app04">그린카</i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
        <!--//footer 컴포넌트-->

        <!--bg-dimmed 컴포넌트-->
        <div class="bg-dimmed">딤(Dim)처리 배경</div>
        <!--//bg-dimmed 컴포넌트-->

        <!--drawer 컴포넌트-->
        <div class="drawer">

            <div class="drawer-in">

                <!--로그인 전 :logout-state,  로그인 후:login-state-->
                <div class="drawer-top login-state">
                    <!--로그인 전-->
                    <div class="logout-state-box">
                        <p>
                            <b>L.POINT 통합회원 로그인</b>
                            <span>
                                놓치면 안되는 회원혜택!
                                <em>렌터카 최대 60%할인 + 차량관리 혜택 제공! </em>
                            </span>
                        </p>
                        <div class="login-btns">
                            <button type="button" class="btn-link">로그인</button>
                            <button type="button" class="btn-link">예약확인</button>
                        </div>
                        <div class="close-btn">
                            <button type="button" class="btn btn-pannel btn-drawer-close" data-target="drawer" data-on="true" data-sort="none"><i class="icon pannelclose02">패널 닫기</i></button>
                        </div>
                    </div>
                    <!--//로그인 전-->

                    <!--로그인 후-->
                    <div class="login-state-box">
                        <p>
                            <b>김롯데님</b>
                            <span>환영합니다!<em>145,000<span>P</span></em></span>
                        </p>
                        <div class="login-btns">
                            <ul class="list-type-col3">
                                <li>
                                    <a href="#"><em><i class="icon pannel16"></i></em><span>예약내역</span></a>
                                </li>
                                <li>
                                    <a href="#"><em><i class="icon pannel17"></i></em><span>카드관리</span></a>
                                </li>
                                <li>
                                    <a href="#"><em><i class="icon pannel18"></i></em><span>쿠폰</span></a>
                                </li>
                            </ul>
                        </div>
                        <div class="close-btn">
                            <button type="button" class="btn btn-pannel btn-drawer-close" data-target="drawer" data-on="true" data-sort="none"><i class="icon pannelclose02">패널 닫기</i></button>
                        </div>
                    </div>
                    <!--로그인 후-->
                </div>

                <div class="drawer-cont">
                    <div class="drawer-list">
                        <h5><span>주요서비스</span></h5>
                        <ul>
                            <li><a href="#"><i class="icon pannel10"></i><span>실시간예약</span></a></li>
                            <li><a href="#"><i class="icon pannel11"></i><span>신차장특가</span></a></li>	
                            <li><a href="#"><i class="icon pannel12"></i><span>내차팔기</span></a></li>	
                            <li><a href="#"><i class="icon pannel13"></i><span>단기예약확인</span></a></li>			
                            <li><a href="#"><i class="icon pannel14"></i><span>중고차장기</span></a></li>
                            <li><a href="#"><i class="icon pannel15"></i><span>승계렌터카</span></a></li>
                        </ul>
                    </div>
                    <div class="drawer-list drawer-toggle-btn" data-target="drawer-cont-01" data-on="true" data-siblings="true">
                        <h5><span>전체 서비스 보기</span><button type="button" class="btn-toggle gray agree-toggle-btn"></button></h5>
                    </div>
                    <div class="drawer-toggle-cont drawer-cont-01">
                        <div class="drawer-menu-wrap">
                            <!-- 탭 -->
                            <div class="drawer-menu-tab tab-nav tab-normal">
                                <ul>
                                    <li class="drawer-menu-tit active">
                                        <button type="button" class="btn">단기렌터카</button>
                                    </li>
                                    <li class="drawer-menu-tit">
                                        <button type="button" class="btn">신차장기렌터카</button>
                                    </li>
                                    <li class="drawer-menu-tit">
                                        <button type="button" class="btn">중고차</button>
                                    </li>
                                    <li class="drawer-menu-tit">
                                        <button type="button" class="btn">#카라이프</button>
                                    </li>
                                    <li class="drawer-menu-tit">
                                        <button type="button" class="btn">고객지원</button>
                                    </li>
                                </ul>
                            </div>
                            <!-- //탭 -->

                            <!--리스트-->
                            <div class="drawer-menu-list tab-cont tab-normal">
                                <div class="drawer-menu-cont">
                                    <ul>
                                        <li>
                                            <a href="#"><b>실시간예약</b></a>
                                        </li>
                                        <li>
                                            <a href="#"><b>단기렌터카안내</b></a>
                                            <div>
                                                <ul>
                                                    <li><em>- 대여 및 요금안내</em></li>
                                                    <li><em>- 체크인 서비스</em></li>
                                                    <li><em>- 부가서비스안내</em></li>
                                                    <li><em>- 팻카 상품안내</em></li>
                                                    <li><em>- 보험대차 서비스</em></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#"><b>해외렌터카</b></a>
                                        </li>
                                        <li>
                                            <a href="#"><b>월간렌터카</b></a>
                                            <div>
                                                <ul>
                                                    <li><em>- 월간렌터카 안내</em></li>
                                                    <li><em>- 신청하기</em></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#"><b>기사포함렌터카</b></a>
                                            <div>
                                                <ul>
                                                    <li><em>- 기사포함렌터카 안내</em></li>
                                                    <li><em>- 신청하기</em></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="drawer-menu-cont" style="display: none;">
                                    <ul>
                                        <li>
                                            <a href="#"><b>다이렉트 견적</b></a>
                                        </li>
                                        <li>
                                            <a href="#"><b>신차장 특가</b></a>
                                        </li>
                                        <li>
                                            <a href="#"><b>신차장 멤버십</b></a>
                                        </li>
                                        <li>
                                            <a href="#"><b>장기렌터카 안내</b></a>
                                            <div>
                                                <ul>
                                                    <li><em>- 개인 장기렌터카</em></li>
                                                    <li><em>- 법인 장기렌터카</em></li>
                                                    <li><em>- 전기차 장기렌터카</em></li>
                                                    <li><em>- 제휴카드 안내</em></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#"><b>신차장 친구추천</b></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="drawer-menu-cont" style="display: none;">
                                    <ul>
                                        <li>
                                            <a href="#"><b>중고차 장기렌터카</b></a>
                                        </li>
                                        <li>
                                            <a href="#"><b>중고차 승계렌터카</b></a>
                                        </li>
                                        <li>
                                            <a href="#"><b>내 차 팔기 서비스</b></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="drawer-menu-cont" style="display: none;">
                                    <ul>
                                        <li>
                                            <a href="#"><b>즐거움을 #타봥</b></a>
                                        </li>
                                        <li>
                                            <a href="#"><b>제주도 오토하우스</b></a>
                                        </li>
                                        <li>
                                            <a href="#"><b>이벤트</b></a>
                                            <div>
                                                <ul>
                                                    <li><em>- 진행중인이벤트</em></li>
                                                    <li><em>- 당첨자발표</em></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="drawer-menu-cont" style="display: none;">
                                    <ul>
                                        <li>
                                            <a href="#"><b>고객센터</b></a>
                                        </li>
                                        <li>
                                            <a href="#"><b>공지사항/뉴스</b></a>
                                        </li>
                                        <li>
                                            <a href="#"><b>지점 안내</b></a>
                                            <div>
                                                <ul>
                                                    <li><em>- 전국지점안내</em></li>
                                                    <li><em>- 기사포함지점안내</em></li>
                                                    <li><em>- 해외지점안내</em></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!--//리스트-->
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <!--//drawer 컴포넌트-->

        <!--mypage 컴포넌트-->
        <div class="mypage-block">
            <div class="mypage-in">
                <div class="mypage-top">
                    <button type="button" class="btn-prev btn-mypage-close" data-target="mypage-block" data-on="true" data-sort="none"><i class="icon prev-w">이전으로</i></button>
                    <div class="customer-info">
                        <strong>김롯데님 <em>일반회원</em></strong>
                        <ul>
                            <li><button>운전면허증<i class="icon next6"></i></button></li>
                            <li><button>결제카드<i class="icon next6"></i></button></li>
                        </ul>
                    </div>
                    <div class="customer-accumulate">
                        <ul class="list-type-col4">
                            <li>
                                <a href="">
                                    <i class="icon lpoint-w"></i>
                                    <strong>L.POINT</strong>
                                    <b>12,300</b>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="icon rentercar-w"></i>
                                    <strong>렌터카 포인트</strong>
                                    <b>469,100</b>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="icon coupon-w"></i>
                                    <strong>렌터카 쿠폰</strong>
                                    <b>2장</b>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="icon membership-w"></i>
                                    <strong>멤버쉽 쿠폰</strong>
                                    <b>2장</b>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mypage-cont">
                    <div class="my-consulting">
                        <ul class="list-type-col2">
                            <li>
                                <a>
                                    <div>
                                        내차팔기 상담 
                                        <span class="texRed">(1)</span>
                                    </div>
                                    <i class="icon next4"></i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <div>
                                        렌터카 상담 
                                        <span class="texRed">(2)</span>
                                    </div>
                                    <i class="icon next4"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- 데이터가 있는 경우 -->
                    <div class="my-reservation-list">
                        <div class="list-box01">
                            <div class="list-tit">
                                <h2>단기렌트카 예약</h2>
                                <button>전체보기<i class="icon next4"></i></button>
                            </div>
                            <div class="swiper-container swiper-item list-item">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide list-wrap">
                                        <div class="cont-top">
                                            <div>
                                                <em>56너0364</em>
                                                <strong>THE ALL-NEW VELOSTER (G) 1.4</strong>
                                            </div>
                                        </div>
                                        <div class="cont-in">
                                            <ul>
                                                <li>
                                                    <strong>등록일</strong>
                                                    <b>2020.12.12</b>
                                                </li>
                                                <li> 
                                                    <strong>대여기간</strong>
                                                    <b>2020.01.01 10:30 ~ 2020.01.02 6:30</b>
                                                </li>
                                                <li>
                                                    <strong>출발/도착지</strong>
                                                    <b>역삼동/신사동</b>
                                                </li>
                                                <li>
                                                    <strong>예상요금</strong>
                                                    <b>250,000원</b>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="cont-btn">
                                            <ul class="list-type-col2">
                                                <li><button class="btn txt-black">추가 운전자 등록</button></li>
                                                <li><button class="btn txt-black">사전체크인</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="swiper-slide list-wrap">
                                        <div class="cont-top">
                                            <div>
                                                <em>12가4567</em>
                                                <strong>ALL NEW K3 프레스티지(G)</strong>
                                            </div>
                                            <span><i class="flag waiting">결제대기</i></span>
                                        </div>
                                        <div class="cont-in">
                                            <ul>
                                                <li>
                                                    <strong>예약일자</strong>
                                                    <b>2020.10.20</b>
                                                </li>
                                                <li>
                                                    <strong>예약번호</strong>
                                                    <b>123456</b>
                                                </li>
                                                <li>
                                                    <strong>대여일시/지점</strong>
                                                    <b>2020.12.01(월) 10:10 강릉 KTX 예약소</b>
                                                </li>
                                                <li>
                                                    <strong>반납일시/지점</strong>
                                                    <b>2020.12.01(월) 10:10 강릉 KTX 예약소</b>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="cont-btn">
                                            <button class="btn"><i class="icon won"></i>결제하기</button>
                                        </div>
                                    </div>
                                    <div class="swiper-slide list-wrap">
                                        <div class="cont-top">
                                            <div>
                                                <em>12가4567</em>
                                                <strong>ALL NEW K3 프레스티지(G)</strong>
                                            </div>
                                            <span><i class="flag waiting">결제대기</i></span>
                                        </div>
                                        <div class="cont-in">
                                            <ul>
                                                <li>
                                                    <strong>예약일자</strong>
                                                    <b>2020.10.20</b>
                                                </li>
                                                <li>
                                                    <strong>예약번호</strong>
                                                    <b>123456</b>
                                                </li>
                                                <li>
                                                    <strong>대여일시/지점</strong>
                                                    <b>2020.12.01(월) 10:10 강릉 KTX 예약소</b>
                                                </li>
                                                <li>
                                                    <strong>반납일시/지점</strong>
                                                    <b>2020.12.01(월) 10:10 강릉 KTX 예약소</b>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="cont-btn">
                                            <button class="btn"><i class="icon won"></i>결제하기</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-pagination-wrap">
                                    <div class="swiper-pagination cont-slide-pagination"></div>
                                </div>
                            </div>
                        </div>
                        <div class="list-box02">
                            <div class="list-tit">
                                <h2>월간단기렌트카 예약</h2>
                                <button>전체보기<i class="icon next4"></i></button>
                            </div>
                            <div class="list-item">
                                <div class="list-wrap">
                                    <div class="cont-top">
                                        <div>
                                            <em>12가4567<button type="button" class="btn-detail">상세보기</button></em>
                                            <strong>ALL NEW K3 프레스티지(G)</strong>
                                        </div>
                                        <span><i class="flag waiting">결제대기</i></span>
                                    </div>
                                    <div class="cont-in">
                                        <ul>
                                            <li>
                                                <strong>예약일자</strong>
                                                <b>2020.10.20</b>
                                            </li>
                                            <li>
                                                <strong>예약번호</strong>
                                                <b>123456</b>
                                            </li>
                                            <li>
                                                <strong>대여일시/지점</strong>
                                                <b>2020.12.01(월) 10:10 강릉 KTX 예약소</b>
                                            </li>
                                            <li>
                                                <strong>반납일시/지점</strong>
                                                <b>2020.12.01(월) 10:10 강릉 KTX 예약소</b>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="cont-btn">
                                        <button class="btn"><i class="icon won"></i>결제하기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="list-box03">
                            <div class="list-tit">
                                <h2>기사포함단기렌터카 예약</h2>
                                <button>전체보기<i class="icon next4"></i></button>
                            </div>
                            <div class="list-item">
                                <div class="list-wrap">
                                    <div class="cont-top">
                                        <div>
                                            <em>56너0364</em>
                                            <strong>ALL NEW K3 프레스티지(G)</strong>
                                        </div>
                                        <span><i class="flag cancel">예약완료</i></span>
                                    </div>
                                    <div class="cont-in">
                                        <ul>
                                            <li> 
                                                <strong>대여기간</strong>
                                                <b>2020.01.01 10:30 ~ 2020.01.02 6:30</b>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="list-box04">
                            <div class="list-tit">
                                <h2>장기렌터카 계약 <span class="texRed">총 2건</span></h2>
                                <button>전체보기<i class="icon next4"></i></button>
                            </div>
                            <div class="swiper-container swiper-item list-item">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide list-wrap">
                                        <div class="cont-top">
                                            <div>
                                                <em>12가4567</em>
                                                <strong>ALL NEW K3 프레스티지(G)</strong>
                                            </div>
                                            <span><i class="flag waiting">승계중</i></span>
                                        </div>
                                        <div class="cont-in">
                                            <ul>
                                                <li>
                                                    <strong>계약기간</strong>
                                                    <b>2020.01.01~2020.12.12</b>
                                                </li>
                                                <li>
                                                    <strong>정비상품</strong>
                                                    <b>일반형</b>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="cont-btn">
                                            <button class="btn txt-black">승계보기</button>
                                        </div>
                                    </div>
                                    <div class="swiper-slide list-wrap">
                                        <div class="cont-top">
                                            <div>
                                                <em>12가4567</em>
                                                <strong>ALL NEW K3 프레스티지(G)</strong>
                                            </div>
                                            <span><i class="flag waiting">승계중</i></span>
                                        </div>
                                        <div class="cont-in">
                                            <ul>
                                                <li>
                                                    <strong>계약기간</strong>
                                                    <b>2020.01.01~2020.12.12</b>
                                                </li>
                                                <li>
                                                    <strong>정비상품</strong>
                                                    <b>일반형</b>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="cont-btn">
                                            <button class="btn txt-black">승계보기</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-pagination-wrap">
                                    <div class="swiper-pagination cont-slide-pagination"></div>
                                </div>
                            </div>
                            <div class="list-btn">
                                <button type="button" class="btn btn-white">신차장 멤버십에서 혜택 확인하기<i class="icon submit"></i></button>
                            </div>
                        </div>
                        <div class="list-box05">
                            <div class="list-tit">
                                <h2>신차장 다이렉트 견적<span class="texRed">총 3건</span></h2>
                                <button>전체보기<i class="icon next4"></i></button>
                            </div>
                            <div class="swiper-container swiper-item list-item">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide list-wrap">
                                        <div class="cont-top">
                                            <div>
                                                <em>12가4567</em>
                                                <strong>ALL NEW K3 프레스티지(G)</strong>
                                            </div>
                                            <span><i class="flag waiting">심사중</i></span>
                                        </div>
                                        <div class="cont-in">
                                            <ul>
                                                <li>
                                                    <strong>계약기간</strong>
                                                    <b>2020.01.01~2020.12.12</b>
                                                </li>
                                                <li>
                                                    <strong>정비상품</strong>
                                                    <b>일반형</b>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="swiper-slide list-wrap">
                                        <div class="cont-top">
                                            <div>
                                                <em>12가4567</em>
                                                <strong>ALL NEW K3 프레스티지(G)</strong>
                                            </div>
                                            <span><i class="flag waiting">심사중</i></span>
                                        </div>
                                        <div class="cont-in">
                                            <ul>
                                                <li>
                                                    <strong>계약기간</strong>
                                                    <b>2020.01.01~2020.12.12</b>
                                                </li>
                                                <li>
                                                    <strong>정비상품</strong>
                                                    <b>일반형</b>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="swiper-slide list-wrap">
                                        <div class="cont-top">
                                            <div>
                                                <em>12가4567</em>
                                                <strong>ALL NEW K3 프레스티지(G)</strong>
                                            </div>
                                            <span><i class="flag waiting">심사중</i></span>
                                        </div>
                                        <div class="cont-in">
                                            <ul>
                                                <li>
                                                    <strong>계약기간</strong>
                                                    <b>2020.01.01~2020.12.12</b>
                                                </li>
                                                <li>
                                                    <strong>정비상품</strong>
                                                    <b>일반형</b>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-pagination-wrap">
                                    <div class="swiper-pagination cont-slide-pagination"></div>
                                </div>
                            </div>
                            <div class="list-btn">
                                <button type="button" class="btn btn-white">신차장 다이렉트에서 계약하기<i class="icon submit"></i></button>
                            </div>
                        </div>
                    </div>
                    <!-- //데이터가 있는 경우 -->
                    <!-- 데이터가 없는 경우 -->
                    <div class="my-reservation-list dp-none">
                        <img src="" alt=""/>
                    </div>
                    <!-- //데이터가 없는 경우 -->
                </div>
                <div class="mypage-bottom">
                    <div class="my-sitemap"> 
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
                                        <a href="#">비밀번호 변경</a>
                                    </li>
                                    <li>
                                        <a href="#">회원탈퇴</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">로그아웃</a>
                            </li>
                            <li>
                                <a href="#">롯데그룹사 임직원 인증</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!--//mypage 컴포넌트-->

        <!--fixedRight 컴포넌트-->
        <div class="fixedRight">
            <button type="button" class="btn btn-goTop">탑으로</button>
        </div>
        <!--//fixedRight 컴포넌트-->
    `;

    $(".footer").html(footer);
    $(".footer .footer").unwrap();

});