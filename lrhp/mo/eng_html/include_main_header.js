$(function(){


    var header = `
        <!--header 컴포넌트-->
        <header class="header">
            <div class="header-top">
                <h1 class="header-logo"><a href="#none"><i class="icon eng-logo">LOTTE rental</i></a></h1>
                <!-- <button type="button" class="btn-push on" data-target="push" data-on="true" data-sort="none">
                     <i class="icon push-alarm">마이페이지</i>
                     <i class="icon push-alarm-on">메세지가 있습니다</i>
                </button> -->
                <button type="button" class="btn-mypage">
                    <i class="icon mypage">마이페이지</i>
                </button>
                <button type="button" class="btn-drawer" data-target="drawer" data-on="true" data-sort="none">
                    <i class="icon draw">메뉴열기</i>
                </button>
            </div>
            <nav class="header-nav eng-header-nav">
                <a href="#" class="active">Reservation</a>
                <a href="#">Car rental</a>
                <a href="#">Location</a>
                <a href="#">FAQ</a>
            </nav>
        </header>
        <!--//header 컴포넌트-->
    `;

    

    $(".header").html(header);
    $(".header .header").unwrap();


});