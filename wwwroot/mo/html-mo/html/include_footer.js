$(function(){


    var footer = `
        <!--footer 컴포넌트-->
        <footer class="footer">
            <div class="inner">
                푸터영역
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
                    <div class="drawer-btns">
                        <div class="left">
                            <button type="button" class="btn btn-pannel"><i class="icon home">홈</i></button>
                            <button type="button" class="btn btn-pannel"><i class="icon alarm">알람</i></button>
                        </div>
                        <div class="right">
                            <button type="button" class="btn btn-pannel"><i class="icon setting">세팅</i></button>
                            <button type="button" class="btn btn-pannel btn-drawer-close" data-target="drawer" data-on="true" data-sort="none"><i class="icon pannelclose">패널 닫기</i></button>
                        </div>
                    </div>
                    <!--로그인 전-->
                    <div class="logout-state-box">
                        <p>로그인 해주세요</p>
                        <button type="button" class="btn btn-simple black">로그인</button>
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
                        <h5><i class="icon pannel01" style="background-color:#CFF7EB;"></i><span>신차장 다이렉트란?</span></h5>
                        <ul>
                            <li><a href="#">신차장 다이렉트 소개</a></li>
                            <li><a href="#">All New 신차장장기렌터카</a></li>	
                            <li><a href="#">개인사업자 서비스 안내</a></li>	
                            <li></li>			
                        </ul>
                    </div>
                    <div class="drawer-list">
                        <h5><i class="icon pannel02" style="background-color:#FFE8E2;"></i><span>CAR타르시스</span></h5>
                        <ul>
                            <li><a href="#">VS 게시판</a></li>
                            <li><a href="#">신차장 TV</a></li>	
                            <li><a href="#">블로그/Youtube 컨텐츠</a></li>	
                            <li><a href="#">고객후기</a></li>			
                        </ul>
                    </div>
                    <div class="drawer-list">
                        <h5><i class="icon pannel03" style="background-color:#E8E2FF;"></i><span>견적/계약</span></h5>
                        <ul>
                            <li><a href="#">견적</a></li>
                            <li><a href="#">계약</a></li>			
                        </ul>
                    </div>
                    <div class="drawer-list">
                        <h5><a href=""><i class="icon pannel04" style="background-color:#E5F8D4;"></i><span>기획전</span></a></h5>
                    </div>
                    <div class="drawer-list">
                        <h5><i class="icon pannel05" style="background-color:#CFF7EB;"></i><span>특가상품</span></h5>
                        <ul>
                            <li><a href="#">추천상품</a></li>
                            <li><a href="#">계약BEST</a></li>	
                            <li><a href="#">인기상품</a></li>	
                            <li></li>			
                        </ul>
                    </div>
                    <div class="drawer-list">
                        <h5><i class="icon pannel06" style="background-color:#FFE8E2;"></i><span>혜택 및 이벤트</span></h5>
                        <ul>
                            <li><a href="#">진행중 이벤트</a></li>
                            <li><a href="#">지난 이벤트</a></li>	
                            <li><a href="#">제휴카드 혜택</a></li>	
                            <li><a href="#">당첨자 발표</a></li>			
                        </ul>
                    </div>
                    <div class="drawer-list">
                        <h5><i class="icon pannel07" style="background-color:#E8E2FF;"></i><span>고객센터</span></h5>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">공지사항</a></li>	
                            <li><a href="#">일반문의</a></li>	
                            <li><a href="#">전문상담신청</a></li>			
                        </ul>
                    </div>
                </div>

            </div>

        </div>
        <!--//drawer 컴포넌트-->

        <!--fixedBottom 컴포넌트-->
        <div class="fixedBottom">
            <div class="fixedBottom_in">
                <div class="left">
                    <button type="button"><i class="icon fixedRight01"></i><span>CAR타르시스</span></button>
                    <button type="button"><i class="icon fixedRight02"></i><span>기획전</span></button>
                </div>
                <div class="center">
                    <button type="button" class="btn btn-fixedRight03"><i class="icon fixedRight03"></i><span>견적</span></button>
                </div>
                <div class="right">
                    <button type="button"><i class="icon fixedRight04"></i><span>상담</span></button>
                    <button type="button"><i class="icon fixedRight05"></i><span>마이페이지</span></button>
                </div>
            </div>
        </div>
        <!--//fixedBottom 컴포넌트-->
        <!--fixedRight 컴포넌트-->
        <div class="fixedRight">
            <button type="button" class="btn btn-goWrite">글쓰기</button>
            <button type="button" class="btn btn-goTop">탑으로</button>
        </div>
        <!--//fixedRight 컴포넌트-->
    `;

    $(".footer").html(footer);
    $(".footer .footer").unwrap();

});