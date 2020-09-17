var use_like_placeholder = function(){
	var use_placeholder_label = jQuery('.use_placeholder').find('.label')
	var use_placeholder_input = jQuery('.use_placeholder').find('.input_txt')
	use_placeholder_label.click(function(){
		jQuery(this).hide().prev('span').find('.input_txt').focus();
	});
	use_placeholder_input.focus(function(){
		jQuery(this).parent('span').next('.label').hide();
	});
	use_placeholder_input.blur(function(){
		if (jQuery(this).val().length > 0)
		{	jQuery(this).parent('span').next('.label').hide();
			jQuery('.btn_enroll').removeClass('disabled')
		}else{
			jQuery(this).parent('span').next('.label').show();
			jQuery('.btn_enroll').addClass('disabled')
		}
	});
	use_placeholder_input.keyup(function(){
		if(jQuery(this).parent('span').siblings('.btn_enroll').length > 0){
			if (jQuery(this).val().length > 0)
			{
				jQuery('.btn_enroll').removeClass('disabled')
			}else{
				jQuery('.btn_enroll').addClass('disabled')
			}
		}
	});
}


jQuery(document).ready(function(){

});

/**
 * htmlYes(str)
 * ODM용 html 치환
 * @param str
 * @returns
 */
function htmlYes(str) {
	if (str == null || str.trim() == "") {
		str = "";
	}
	// 변환 결과물을 담을 변수
	var cvt = str.trim();
	cvt = cvt.replace(/&amp;/gi  , "&");
	cvt = cvt.replace(/&lt;script/gi, "<script");
	cvt = cvt.replace("&lt;/script", "</script");
	cvt = cvt.replace(/&lt;object/gi, "<object");
	cvt = cvt.replace("&lt;/object", "</object)");
	cvt = cvt.replace(/&lt;applet/gi, "<applet");
	cvt = cvt.replace("&lt;/applet", "</applet");
	cvt = cvt.replace(/&lt;embed/gi, "<embed");
	cvt = cvt.replace(/&lt;embed/gi, "</embed");
	cvt = cvt.replace(/&lt;form/gi, "<form");
	cvt = cvt.replace(/&lt;form/gi, "</form");
	cvt = cvt.replace(/&gt;/gi, ">");
	cvt = cvt.replace(/&lt;/gi, "<");
	cvt = cvt.replace(/&#39;/gi, "\'");
	cvt = cvt.replace(/&#34;/gi, "\"");
	cvt = cvt.replace(/&#47;/gi, "/");
	cvt = cvt.replace(/&#37;/gi, "%");
	cvt = cvt.replace(/&#10;/gi, " ");
	cvt = cvt.replace(/&#10;/gi, "\r");
	cvt = cvt.replace(/&#10;/gi, "\n");
	cvt = cvt.replace(/&#40;/gi, "\\(");
	cvt = cvt.replace(/&#41;/gi, "\\)");
	cvt = cvt.replace(/&#35;/gi, "#");
	cvt = cvt.replace(/&quot;/gi, ""+'"'+"");
	return cvt;
}

/**
 * odmHtmlYes(String)
 * ODM용 html 치환
 * @param str
 * @returns
 */
function odmHtmlYes(str) {
	if (str == null || str.trim() == "") {
		str = "";
	}
	// 변환 결과물을 담을 변수
	var cvt = str.trim();
	cvt = cvt.replace(/&amp;/gi  , "&");
	cvt = cvt.replace(/&lt;script/gi, "<script");
	cvt = cvt.replace("&lt;/script", "</script");
	cvt = cvt.replace(/&lt;object/gi, "<object");
	cvt = cvt.replace("&lt;/object", "</object)");
	cvt = cvt.replace(/&lt;applet/gi, "<applet");
	cvt = cvt.replace("&lt;/applet", "</applet");
	cvt = cvt.replace(/&lt;embed/gi, "<embed");
	cvt = cvt.replace(/&lt;embed/gi, "</embed");
	cvt = cvt.replace(/&lt;form/gi, "<form");
	cvt = cvt.replace(/&lt;form/gi, "</form");
	cvt = cvt.replace(/&gt;/gi, ">");
	cvt = cvt.replace(/&lt;/gi, "<");
	cvt = cvt.replace(/&#39;/gi, "\'");
	cvt = cvt.replace(/&#34;/gi, "\"");
	cvt = cvt.replace(/&#47;/gi, "/");
	cvt = cvt.replace(/&#37;/gi, "%");
	cvt = cvt.replace(/&#10;/gi, " ");
	cvt = cvt.replace(/&#10;/gi, "\r");
	cvt = cvt.replace(/&#10;/gi, "\n");
	cvt = cvt.replace(/&#40;/gi, "\\(");
	cvt = cvt.replace(/&#41;/gi, "\\)");
	cvt = cvt.replace(/&#35;/gi, "#");
	cvt = cvt.replace(/&quot;/gi, ""+'"'+"");
	return cvt;
}
/**
 * odmOnlyNumber(object)
 * odm용 숫자만 입력
 * @param obj
 */
function odmOnlyNumber(obj) {
	obj.value = obj.value.replace(/[^0-9]/g,"");
}