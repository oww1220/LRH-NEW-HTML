$(function(){


    var footer = `
        <!--footer 컴포넌트-->
        <footer class="footer">
            <div class="inner">
                푸터영역
            </div>
        </footer>
        <!--//footer 컴포넌트-->

        <!--drawer 컴포넌트-->
        <div class="drawer">

            <div class="drawer-in">

                <!--로그인 전 :logout-state,  로그인 후:login-state-->
                <div class="drawer-top logout-state">
                    <!-- <div class="drawer-btns">
                        <div class="left">
                            <button type="button" class="btn btn-pannel"><i class="icon home">홈</i></button>
                            <button type="button" class="btn btn-pannel"><i class="icon alarm">알람</i></button>
                        </div>
                        <div class="right">
                            <button type="button" class="btn btn-pannel"><i class="icon setting">세팅</i></button>
                            <button type="button" class="btn btn-pannel btn-drawer-close" data-target="drawer" data-on="true" data-sort="none"><i class="icon pannelclose">패널 닫기</i></button>
                        </div>
                    </div> -->
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
                        <div class="login-top">
                            <strong>홍길동님</strong>
                            <button type="button" class="btn-link">마이페이지</button>
                        </div>
                        <div class="login-btns">
                            <ul class="list-type-col2">
                                <li>
                                    <div class="inner">
                                        <button type="button" class="btn btn-simple mid"><span>견적보관함</span><b>2</b></button>
                                    </div>
                                </li>
                                <li>
                                    <div class="inner">
                                        <button type="button" class="btn btn-simple mid"><span>쿠폰함</span><b>4</b></button>
                                    </div>
                                </li>
                            </ul>
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

        <!--push 컴포넌트-->
        <div class="push">

            <div class="push-in">

                <div class="push-top">
                    <p>
                        <b>알림</b>
                    </p>
                    <div class="setup-btn">
                        <button type="button" class="btn btn-pannel"><i class="icon push-setup">설정</i></button>
                    </div>
                </div>

                <div class="push-cont">
                    <div class="push-list">
                        <h5>총 <b>3</b>건</h5>
                        <ul>
                            <li><a href="#"><span>2020년 여름 올 뉴 아반떼 이벤트</span></a></li>
                            <li><a href="#"><span>제주도 파도 바람소리를 느껴보세요</span></a></li>
                            <li><a href="#"><span>퀴즈퀴즈 응모하고 엘포인트 타보자!<br>퀴즈퀴즈 응모하고 엘포인트 타보자!</span></a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
        <!--//push 컴포넌트-->

        <!--fixedRight 컴포넌트-->
        <div class="fixedRight">
            <ul class="goQuick-menu-list">
                <li>
                    <a href="#"><span>제주예약</span><i class="icon goQuick-menu10"></i></a>
                </li>
                <li>
                    <a href="#"><span>내륙예약</span><i class="icon goQuick-menu09"></i></a>
                </li>
                <li>
                    <a href="#"><span>신차장특가</span><i class="icon goQuick-menu08"></i></a>
                </li>
                <li>
                    <a href="#"><span>중고차특가</span><i class="icon goQuick-menu07"></i></a>
                </li>
                <li>
                    <a href="#"><span>공지사항</span><i class="icon goQuick-menu06"></i></a>
                </li>
                <li>
                    <a href="#"><span>사전체크인</span><i class="icon goQuick-menu05"></i></a>
                </li>
                <li>
                    <a href="#"><span>예약정보확인</span><i class="icon goQuick-menu04"></i></a>
                </li>
                <li>
                    <a href="#"><span>#즐거움을 타봥</span><i class="icon goQuick-menu03"></i></a>
                </li>
                <li>
                    <a href="#"><span>추가운전자등록</span><i class="icon goQuick-menu02"></i></a>
                </li>
                <li>
                    <a href="#"><span>반납일/지점변경</span><i class="icon goQuick-menu01"></i></a>
                </li>
            </ul>
            <button type="button" class="btn btn-goQuick">퀵메뉴</button>
            <button type="button" class="btn btn-goTop">탑으로</button>
        </div>
        <!--//fixedRight 컴포넌트-->

        <!--bg-dimmed 컴포넌트-->
        <div class="bg-dimmed">딤(Dim)처리 배경</div>
        <!--//bg-dimmed 컴포넌트-->
    `;

    $(".footer").html(footer);
    $(".footer .footer").unwrap();

});