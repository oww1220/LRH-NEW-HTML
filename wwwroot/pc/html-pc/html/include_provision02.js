$(function(){


    var provisionWrap02 = `

    <section class="provisionWrap">
        <h1>고유식별정보 수집에 대한 동의(필수)</h1>
        <ul class="agree-list-type1">
            <li><i class="icon chk-on2"></i><strong class="t-highlight">수집하는 고유식별정보 항목 : 운전면허번호</strong></li>
            <li><i class="icon chk-on2"></i>수집 및 이용 목적 : 보험 조건 등 렌터카 대여 조건 확인</li>
            <li><i class="icon chk-on2"></i><strong class="t-highlight">보유 및 이용 기간 : 렌터카 서비스 이용 종료 후 5년간</strong></li>
            <li class="texRed">* 귀하는 동의를 거부할 수 있습니다. 단 동의 거부시 렌터카 서비스 이용이 불가능할 수 있음을 알려 드립니다.</li>
        </ul>
    </section>
 
    `;

    $(".agree-body-cont.toggleCont02").html(provisionWrap02);
    $(".agree-body-cont .agree-body-cont.toggleCont02").unwrap();

});