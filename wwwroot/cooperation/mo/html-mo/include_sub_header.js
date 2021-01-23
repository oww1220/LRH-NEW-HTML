$(function(){


    var header = `
        <!--header 컴포넌트-->
        <header class="header">
            <div class="header-top">
                <h1 class="header-logo"><a href="#none"><i class="icon logo">롯데렌터카</i></a></h1>
                <button type="button" class="btn-mypage">
                    <i class="icon mypage">마이페이지</i>
                </button>
                <button type="button" class="btn-drawer" data-target="drawer" data-on="true" data-sort="none">
                    <i class="icon draw">메뉴열기</i>
                </button>
            </div>
        </header>
        <!--//header 컴포넌트-->
    `;


    $(".header").html(header);
    $(".header .header").unwrap();

});