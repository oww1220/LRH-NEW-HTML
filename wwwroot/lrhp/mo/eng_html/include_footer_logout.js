$(function(){


    var footer = `
        <!--footer 컴포넌트-->
        <footer class="footer">
            <div class="inner">
                <!-- <div class="footer-bn">
                    <img src="/lrhp/mo/images/icons/ico-foot-bn.png" alt="bn">
                </div> -->
                <div class="footer-center">
                    <ul class="list-type-col2">
                        <li><em>Customer Service</em><b><a href="tel:1588-1230">1588-1230</a></b></li>
                        <li>
                            Weekdays 08:30~20:00<br>
                            Accident handling inquiries<br>
                            are available 24 hours
                        </li>
                    </ul>
                </div>
                <div class="footer-topMenu">
                    <ul class="list-type-col3">
                        <li><a href="#none">LOGIN</a></li>
                        <li><a href="#none">KOREAN</a></li>
                        <li><a href="#none">FAQ</a></li>
                    </ul>
                </div>
                <div class="footer-companyInfo">
                    <div class="chk-agree-list">
                        <div class="chk-agree-top">
                            <h2>LOTTE rental</h2>
                            <button type="button" class="btn-toggle gray agree-toggle-btn" data-target="toggle-cont-001" data-on="true" data-siblings="true"></button>
                        </div>
                        <div class="agree-toggle-cont toggle-cont-001">
                            <ul>
                                <li> Main Contact : <a href="#">1588-1230</a> <span>|</span> Oversea : <a href="#">82-2-797-8000</a></li>
                                <li> LOTTE rental <span>|</span> President : <a href="#">Kim, Hyun Soo</a></li>
                                <li> <a href="#">6~9F, kt Towe, 422, Teheran-ro Gangnam-gu, Seoul</a></li>
                                <li> Business Registration # : <a href="#">214-87-79183</a></li>
                                <li> Communication Service # : <a href="#">2010-Gyungi Anyang 420</a></li>
                                <li> ⓒ LOTTE rental co., ltd.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-bottomMenu">
                    <ul class="list-type-col3">
                        <li><a href="#">COMPANY</a></li>
                        <li><a href="#">USER AGREEMENT</a></li>
                        <li><a href="#">CONTACT US</a></li>
                    </ul>
                </div>
                <div class="footer-sns">
                    <p>LOTTE rental SNS</p>
                    <ul class="list-type-col5">
                        <li><a href="#"><i class="icon foot-sns01">카카오</i></a></li>
                        <li><a href="#"><i class="icon foot-sns02">페이스북</i></a></li>
                        <li><a href="#"><i class="icon foot-sns03">인스타그램</i></a></li>
                        <!-- <li><a href="#"><i class="icon foot-sns04">유튜브</i></a></li> -->
                        <li><a href="#"><i class="icon foot-sns05">네이버포스트</i></a></li>
                        <li><a href="#"><i class="icon foot-sns06">네이버블로그</i></a></li>
                        <li><a href="#"><i class="icon foot-sns07">트위터</i></a></li>
                    </ul>
                </div>
                <!-- <div class="footer-app">
                    <p>추천APP서비스</p>
                    <ul class="list-type-col4">
                        <li><a href="#"><i class="icon app01">신차장 다이렉트</i></a></li>
                        <li><a href="#"><i class="icon app02">롯데렌터카 신차장 멤버십</i></a></li>
                        <li><a href="#"><i class="icon app03">MYOMEE</i></a></li>
                        <li><a href="#"><i class="icon app04">그린카</i></a></li>
                    </ul>
                </div> -->
            </div>
        </footer>
        <!--//footer 컴포넌트-->

        <!--drawer 컴포넌트-->
        <div class="drawer eng-drawer">

            <div class="drawer-in">

                <!--로그인 전 :logout-state,  로그인 후:login-state-->
                <div class="drawer-top logout-state">
                    <!--로그인 전-->
                    <div class="logout-state-box">
                        <p>
                            <b>Welcome to</b>
                            <span>LOTTE Rent-A-Car!</span>
                        </p>
                        <div class="login-btns">
                            <button type="button" class="btn-link">LOGIN</button>
                            <button type="button" class="btn-link">My Reservation</button>
                        </div>
                        <div class="close-btn">
                            <button type="button" class="btn btn-pannel btn-drawer-close" data-target="drawer" data-on="true" data-sort="none"><i class="icon pannelclose02">Pannel Close</i></button>
                        </div>
                    </div>
                    <!--//로그인 전-->

                    <!--로그인 후-->
                    <div class="login-state-box">
                        <p>
                            <b>Hello</b>
                            <span>kimLOTTE<em>(ID123)</em></span>
                        </p>
                        <div class="login-btns">
                            <ul class="list-type-col3">
                                <li>
                                    <a href="">
                                        <i class="icon level"></i>
                                        <strong>Level</strong>
                                        <b>General</b>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="icon rentercar-w"></i>
                                        <strong>Point</strong>
                                        <b>469,100</b>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="icon records"></i>
                                        <strong>Rental records</strong>
                                        <b>2</b>
                                    </a>
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
                    <!-- <div class="drawer-list">
                        <h5><span>주요서비스</span></h5>
                        <ul>
                            <li><a href="#"><i class="icon pannel10"></i><span>실시간예약</span></a></li>
                            <li><a href="#"><i class="icon pannel11"></i><span>이달의특가</span></a></li>	
                            <li><a href="#"><i class="icon pannel12"></i><span>내차팔기</span></a></li>	
                            <li><a href="#"><i class="icon pannel13"></i><span>단기예약확인</span></a></li>			
                            <li><a href="#"><i class="icon pannel14"></i><span>중고차장기</span></a></li>
                            <li><a href="#"><i class="icon pannel15"></i><span>승계렌터카</span></a></li>
                        </ul>
                    </div> -->
                    <div class="drawer-list">
                        <h5><span>All services</span></h5>
                    </div>
                    <div class="drawer-toggle-cont drawer-cont-01">
                        <div class="drawer-menu-wrap">
                            <!-- 탭 -->
                            <div class="drawer-menu-tab tab-nav tab-normal">
                                <ul>
                                    <li class="drawer-menu-tit active">
                                        <button type="button" class="btn">Reservation</button>
                                    </li>
                                    <li class="drawer-menu-tit">
                                        <button type="button" class="btn">Car rental
                                        </button>
                                    </li>
                                    <li class="drawer-menu-tit">
                                        <button type="button" class="btn">Location</button>
                                    </li>
                                    <li class="drawer-menu-tit">
                                        <button type="button" class="btn">FAQ</button>
                                    </li>
                                </ul>
                            </div>
                            <!-- //탭 -->

                            <!--리스트-->
                            <div class="drawer-menu-list tab-cont tab-normal">
                                <div class="drawer-menu-cont">
                                    <ul>
                                        <li>
                                            <a href="#"><b>MainIand</b></a>
                                        </li>
                                        <li>
                                            <a href="#"><b>Jeju</b></a>
                                        </li>
                                        <li>
                                            <a href="#"><b>Overseas</b></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="drawer-menu-cont" style="display: none;">
                                    <ul>
                                        <li>
                                            <a href="#"><b>Rental Information</b></a>
                                        </li>
                                        <li>
                                            <a href="#"><b>Jeju Auto House</b></a>
                                        </li>
                                        <li>
                                            <a href="#"><b>Additional Services</b></a>
                                        </li>
                                        <li>
                                            <a href="#"><b>Chauffeured Service</b></a>
                                        </li>
                                        <li>
                                            <a href="#"><b>Driving Tips in Korea</b></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="drawer-menu-cont" style="display: none;">
                                    <ul>
                                        <li>
                                            <a href="#"><b>Branches by Region</b></a>
                                        </li>
                                        <li>
                                            <a href="#"><b>Branches Offering</b></a>
                                        </li>
                                        <li>
                                            <a href="#"><b>Chauffeur</b></a>
                                        </li>
                                        <li>
                                            <a href="#"><b>Overseas Branches</b></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="drawer-menu-cont" style="display: none;">
                                    <ul>
                                        <li>
                                            <a href="#"><b>FAQ</b></a>
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
                    <a href="#"><span>신차 특가</span><i class="icon goQuick-menu08"></i></a>
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