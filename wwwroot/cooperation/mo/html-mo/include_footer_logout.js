$(function(){


    var footer = `
        <!--footer 컴포넌트-->
        <footer class="footer">
            <div class="inner">
                <div class="footer-bn">
                    <img src="../../resources-mo/images/icons/ico-foot-bn.png" alt="bn">
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
                        <li><a href="#">CONTACT US</a></li>
                        <li><a href="#">계약서 조회</a></li>
                    </ul>
                </div>
                <div class="footer-sns">
                    <p>롯데렌터카 공식 SNS 채널</p>
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

        <!--drawer 컴포넌트-->
        <div class="drawer">

            <div class="drawer-in">

                <!--로그인 전 :logout-state,  로그인 후:login-state-->
                <div class="drawer-top logout-state">
                    <!--로그인 전-->
                    <div class="logout-state-box">
                        <div class="login-btns-ty2">
                            <b><button type="button" class="btn-link">로그인</button> 하고 다양한 혜택 받으세요.</b>
                            <div class="setup-btn">
                                <button type="button" class="btn btn-pannel layer-setup-open" data-layer="layer-setup"><i class="icon login-pannel01">설정</i></button>
                            </div>
                        </div>
                        <div class="login-top-menu">
                            <ul>
                                <li>
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-pannel"><i class="icon login-pannel02"></i>홈</button>
                                    </div>
                                </li>
                                <li>
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-pannel"><i class="icon login-pannel03"></i>공지</button>
                                    </div>
                                </li>
                                <li>
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-pannel"><i class="icon login-pannel04"></i>이벤트</button>
                                    </div>
                                </li>
                                <li>
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-pannel"><i class="icon login-pannel05"></i>비회원 예약확인</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="close-btn">
                            <button type="button" class="btn btn-pannel btn-drawer-close" data-target="drawer" data-on="true" data-sort="none"><i class="icon pannelclose02">패널 닫기</i></button>
                        </div>
                    </div>
                    <!--//로그인 전-->

                    <!--로그인 후-->
                    <div class="login-state-box">
                        <div class="login-btns-ty2">
                            <b><button type="button" class="btn-link">김*데</button>님 환영합니다.</b>
                            <div class="setup-btn">
                                <button type="button" class="btn btn-pannel layer-setup-open" data-layer="layer-setup"><i class="icon login-pannel01">설정</i></button>
                            </div>
                        </div>
                        <div class="login-top-menu">
                            <ul>
                                <li>
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-pannel"><i class="icon login-pannel02"></i>홈</button>
                                    </div>
                                </li>
                                <li>
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-pannel"><i class="icon login-pannel03"></i>공지</button>
                                    </div>
                                </li>
                                <li>
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-pannel"><i class="icon login-pannel04"></i>이벤트</button>
                                    </div>
                                </li>
                                <li>
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-pannel"><i class="icon login-pannel12"></i>마이페이지</button>
                                    </div>
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
                            <li><a href="#"><i class="icon login-pannel06"></i><span>렌터카예약</span></a></li>
                            <li><a href="#"><i class="icon login-pannel07"></i><span>월간렌터카 검색</span></a></li>	
                            <li><a href="#"><i class="icon login-pannel08"></i><span>지점안내</span></a></li>	
                            <li><a href="#"><i class="icon login-pannel09"></i><span>신차장 특가</span></a></li>			
                            <li><a href="#"><i class="icon login-pannel10"></i><span>중고차렌터카 검색</span></a></li>
                            <li><a href="#"><i class="icon login-pannel11"></i><span>승계렌터카 검색</span></a></li>
                        </ul>
                    </div> -->
                    <!-- <div class="drawer-list">
                        <h5><span>전체 서비스 보기</span></h5>
                    </div> -->
                    <div class="drawer-toggle-cont drawer-cont-01">
                        <div class="drawer-menu-wrap">
                            <!-- 탭 -->
                            <div class="drawer-menu-tab tab-nav tab-normal">
                                <ul>
                                    <li class="drawer-menu-tit active">
                                        <button type="button" class="btn">단기 렌터카 예약</button>
                                    </li>
                                    <li class="drawer-menu-tit">
                                        <button type="button" class="btn">단기 렌터카 안내</button>
                                    </li>
                                </ul>
                            </div>
                            <!-- //탭 -->

                            <!--리스트-->
                            <div class="drawer-menu-list tab-cont tab-normal">
                                <div class="drawer-menu-cont">
                                    <ul>
                                        <li>
                                            <div>
                                                <ul>
                                                    <li><em>- 내륙</em></li>
                                                    <li><em>- 제주</em></li>
                                                    <li><em>- 예약확인</em></li>
                                                </ul>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                                <div class="drawer-menu-cont" style="display: none;">
                                    <ul>
                                        <li>
                                           <div>
                                               <ul>
                                                   <li><em>- 대여자격안내</em></li>
                                                   <li><em>- 대여/반납 절차</em></li>
                                                   <li><em>- 대여요금안내</em></li>
                                                   <li><em>- 보험 및 보상</em></li>
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
                        <button type="button" class="btn btn-pannel layer-setup-open" data-layer="layer-setup"><i class="icon push-setup">설정</i></button>
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

        <!--layer-popup 푸시설정 컴포넌트-->
        <div class="layer-wrap layer-popup layer-setup">
            <div class="pop-top">
                <button type="button" class="layer-pop-close layer-setup-close" data-layer="layer-setup"><i class="icon layerclose">닫기 버튼</i></button>  
            </div>
            <div class="pop-inner">
                <div class="pop-scroll">
                    <div class="pop-cont">
                        <div class="pop-tit-wrap">
                            <h4>광고성 알림(PUSH)</h4>
                            <div class="toggle-wrapper">
                                <div class="toggle normal">
                                    <input id="push" type="checkbox">
                                    <label class="toggle-item" for="push"></label>
                                </div>
                            </div>
                        </div>
                        <p class="pop-txt-wrap">
                            롯데렌터카의 맞춤 혜택, 이벤트, 서비스안내 등에
                            대한 알림을 받으실 수 있습니다. 알림 설정에 따라
                            정보수신 동의 및 거부 처리됩니다.
                        </p>
                    </div>
                </div>
            </div>
            <div class="pop-txt-bottom">
                <p>
                    알림이 오지 않을경우, <br>
                    휴대폰 설정>알림에서 설정여부를 확인해주세요.
                </p>
            </div>
        </div>
        <!--//layer-popup 푸시설정 컴포넌트-->

        <!--bg-dimmed 컴포넌트-->
        <div class="bg-dimmed">딤(Dim)처리 배경</div>
        <!--//bg-dimmed 컴포넌트-->
    `;

    $(".footer").html(footer);
    $(".footer .footer").unwrap();

});