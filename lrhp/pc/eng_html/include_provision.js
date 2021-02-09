$(function(){


    var provisionWrap = `

    <section class="provisionWrap eng-provisionWrap">
        <h1>Privacy Policy (requirement)</h1>
        <p>LOTTE Rental (Hereinafter, the “Company”.) values customer information and complies with Act on Promotion of Utilization of Communication Network and Protection of Information, etc. The Company will let you know how and for what purpose your personal information you provided to us is being used and what action is being taken to protect personal information. Company will inform through website board(or individual notice) such information when personal information policy has amended. This policy will be enforced as of 5th Nov 2008</p>
        
        <h2>A. Personal information to be collected</h2>
        <h3>The Company is collecting the user's personal information required for granting membership and providing services via its Web Site, and for other matters, users have discretion to give information.</h3>
        <!-- <p>롯데렌터카는 렌터카 예약서비스 이용</p> -->
        <ul class="agree-list-type1">
            <li>(1) Required<br>
                &lt;For a member&gt;
                <ul class="agree-list-type2">
                    <li>
                        Name (in Korean): Information necessary for identification at the time of car rental reservation and pick-up
                    </li>
                    <li>
                        Date of birth and resident registration number
                    </li><li>
                        Address, phone number, cell phone number, e-mail: mailing of amendment of the Terms and Conditions, notice of car reservation/cancellation, membership card Other information for providing marketing data
                    </li>
                    <li>
                        international driving permit information such as number, class, aptitude test expiry date, and nationality: information necessary for checking eligibility
                    </li>
                    <li>Internet ID and password: for identification of cyber branch users</li>
                </ul>
            </li>
            <li>(2) Optional (information necessary for providing services differentiated for the members) 
                <ul class="agree-list-type2">
                    <li>Date of marriage and other anniversaries</li>
                    <li>Occupation; and name, address, and phone number of the employer company</li>
                </ul>
            </li>
            <li>(3) By clicking button of "I agree." or "I do not agree." to the terms and conditions on the Company's policy handling personal information, users may express whether or not to consent to collection of personal information. Clicking on "I agree." is deemed to be a consent to collection of personal information.</li>
			<li>(4) When a non-member user is using service such as car reservation via the Web Site, the Company will collect 
			the minimum set of information necessary for providing the service sought (reservation or cancellation of car rental, event participation, etc.), such as the name, resident registration number, cell phone number (or landline number), 
			e-mail, etc.</li>
			<li>(5) If a user who desires to use the Company's services (lease agreement, etc.) fails to meet the requirement set 
			forth by the Company (delinquency in payment, bad credit, etc.), the user may provide a guarantor to secure the eligibility of the user.
			In such a case, the Company may collect the basic information (name, resident registration number, cell phone number, landline number, etc.) of the guarantor, which may be utilized to secure the contract between the user and the Company.</li>
			<li>(6) While making reservation via landline phone, the conversation between the user and the Company may be recorded, which will be destroyed into irrecoverable form within 6 months.</li>
        </ul>

        <h3>Purpose of collecting personal information</h3>
        <ul class="agree-list-type1">
            <li>Without a user's consent or a statutory requirement, the Company will not utilize the user's personal information beyond the scope provided by this Article.The personal information we collected is used for the following purposes. 
                <ul class="agree-list-type2">
                    <li>fulfillment of contract on service provision, service fee settlement, car rental reservation, settlement of rental charge, shipping of goods, invoicing, financial services and related identification service, collection of charges, etc.</li>
					<li>membership maintenance: identification related to using membership services, identity certification, prevention of   bad members from using the service in a wrongful manner, prohibition of unauthorized use. confirmation of intention to join the membership, limitation on joining and number of joining, confirmation of age, handling customer issues and requests, notification of relevant matters.</li>
					<li>utilization for marketing and advertisement: development and specialization of new service (product), delivery of   promotional information such as sale events</li>
					<li>Miscellanies</li>
                </ul>
            </li>
        </ul>
        
        <h3>Period for preservation and use of personal information</h3>
        <ul class="agree-list-type1">
            <li>(1) The Company will keep and use the personal information provided by users as long as the user is using the Company's services.</li>        
            <li>(2) Once the member cancels or withdraws from the membership or loses his/he eligibility, or the Company closes its business, the Company will forthwith destroy the personal information it has collected.
                <ul class="agree-list-type2">
                    <li>for information necessary for membership application: upon request for withdrawal from membership or a member’s   losing membership</li>
					<li>if collected for temporary purpose such as survey or event: when such survey or event is finished.</li>
					<li>when the Company closes its business</li>
					<li>other information in possession: when the purposes of colleting and using such information are achieved However, even after the purposes of colleting and using such information are achieved, some information required to be preserved under relevant laws or regulations such as the Commercial Code, Act on Consumer Protection in Electronic Commerce, etc. will be preserved for a certain period until it is destroyed.</li>
					<li>record on withdrawals from contract or contractual offer: 5 years (Act on Consumer Protection in Electronic Commerce)</li>
					<li>record on payment and provision of service or goods: 5 years (Act on Consumer Protection in Electronic Commerce)</li>
					<li>record on handling of customer complaints or disputes: 5 years (Act on Consumer Protection in Electronic Commerce)</li>
					<li>record on collection/processing and utilization of credit information: 3 years (Act on Utilization and Protection of Credit Information)</li>
					<li>international driving permit number: 5 years (processing of fines and penalties for violation of parking and provisions of the Road Traffic Act)</li>
                </ul>
            </li>
        </ul>
        
        <!-- <h2>개인정보 이용 및 보유 기간</h2> -->
        <!-- <ul class="agree-list-type2 mt20">
            <li class="texRed">Copyright of these Terms and Conditions shall belong to the Company.  Any unauthorized copy, reproduction, transmission or any other type of copyright infringement shall be hereby prohibited.</li>
            <li class="texRed">[Opinion] Articles 1 and Article 2 of the Special Provisions shall be relocated to Article 15 (2) and Article 14 (3), respectively.</li>
        </ul> -->
    </section>
 
    `;

    $(".agree-body-cont").html(provisionWrap);
    $(".agree-body-cont .agree-body-cont").unwrap();

});