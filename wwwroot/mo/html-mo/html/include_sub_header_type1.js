$(function(){


    var header = `
        <!--header 컴포넌트-->
        <header class="header">
            <div class="header-top sub">
                <h1>월간 렌터카</h1>
                <button type="button" class="btn-prev"><i class="icon prev">이전으로</i></button>
                <button type="button" class="btn-drawer" data-target="drawer" data-on="true" data-sort="none"><i class="icon draw">메뉴열기</i></button>
            </div>
            
        </header>
        <!--//header 컴포넌트-->
    `;


    $(".header").html(header);
    $(".header .header").unwrap();

});