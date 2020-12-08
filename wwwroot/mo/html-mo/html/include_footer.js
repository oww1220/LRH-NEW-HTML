$(function(){


    var footer = `
        <!--footer 컴포넌트-->
        <footer class="footer">
            <div class="inner">
                <div class="footer-bn">
                    <img src="../../../resources-mo/images/icons/ico-foot-bn.png" alt="bn">
                </div>
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
                <div class="footer-sns">
                    <p>롯데렌터카 공식 SNS 채널</p>
                    <ul class="list-type-col5">
                        <li><a href="#"><i class="icon foot-sns01">카카오</i></a></li>
                        <li><a href="#"><i class="icon foot-sns02">페이스북</i></a></li>
                        <li><a href="#"><i class="icon foot-sns03">인스타그램</i></a></li>
                        <li><a href="#"><i class="icon foot-sns04">유튜브</i></a></li>
                        <li><a href="#"><i class="icon foot-sns05">네이버포스트</i></a></li>
                        <li><a href="#"><i class="icon foot-sns06">네이버블로그</i></a></li>
                    </ul>
                </div>
                <div class="footer-app">
                    <p>추천APP서비스</p>
                    <ul class="list-type-col4">
                        <li><a href="#"><i class="icon app01">신차장 다이렉트</i></a></li>
                        <li><a href="#"><i class="icon app02">롯데렌터카 신차장 멤버십</i></a></li>
                        <li><a href="#"><i class="icon app03">MYOMEE</i></a></li>
                        <li><a href="#"><i class="icon app04">그린카</i></a></li>
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

        

        <!--fixedRight 컴포넌트-->
        <div class="fixedRight">
            <button type="button" class="btn btn-goTop">탑으로</button>
        </div>
        <!--//fixedRight 컴포넌트-->
    `;

    $(".footer").html(footer);
    $(".footer .footer").unwrap();

});