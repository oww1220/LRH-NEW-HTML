/* =========================================================
 * bootstrap-datepicker.js
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

/*****************************************/
/*  Name : 애드캡슐 접근성 달력
/*  PART : JAVASCRIPT
/*  Version : 1.0
/*  Author : 최웅
/*  MODIFY : [애드캡슐 퍼블리싱팀] 최웅
/*****************************************/

var minDate;
var maxDate;
var minDate2;
var maxDate2;
var endDate;
var dataType;
var mc;
var mcPrev;
var dataLink;
var dataCase;
var prevBack;
var nextBack;
var resultOk = false;


function calendarDot(obj){
	 var val = obj;
	 re=/[^0-9]/gi;   // 숫자만 남김.
	 obj=val.replace(re,"");
	 
	 if(obj.length==8){
	  var yyyy = obj.substring(0,4)
	  var mm = obj.substring(4,6)
	  var dd = obj.substring(6)
	  var result = yyyy+"."+mm+"."+dd
	  
	 }
	 /*
	 else if(obj.length == 6){
	  var yyyy = obj.substring(0,4)
	  var mm = "0"+obj.substring(4,5)
	  var dd = "0"+obj.substring(5)
	  
	  var result = yyyy+"."+mm+"."+dd
	  
	 }
	 */
	 
	return result;
}

function calendarDot2(obj){
	 var val = obj;
	 re=/[^0-9]/gi;   // 숫자만 남김.
	 obj=val.replace(re,"");
	 
	 if(obj.length==6){
	  var yyyy = obj.substring(0,4)
	  var mm = obj.substring(4,6)
	  
	  var result = yyyy+"."+mm
	  
	 }
	 /*
	 else if(obj.length == 6){
	  var yyyy = obj.substring(0,4)
	  var mm = "0"+obj.substring(4,5)
	  var dd = "0"+obj.substring(5)
	  
	  var result = yyyy+"."+mm+"."+dd
	  
	 }
	 */
	 
	return result;
}

$(document).ready(function(){
	
	$('.datepicker_wrap').next().click(function(){
		
		dataFunc($(this));

	})


	$('.calendarClose2 a').click(function(){

		$('.calendarClose a').trigger('click');

	})

	$('.lay-datepicker + .lay-close').click(function(){

		$(this).parents('.lay_wrap').find('.cansleBtn a').trigger('click');
		
	})
	
	$('.lay-datepicker .lay-close').click(function(){

		$(this).parents('.lay_wrap').find('.cansleBtn a').trigger('click');
		
	})

	$('#calendar_wrap .btn_cal').click(function(){
		/*
		if(mcPrev ==""){
			$('#'+$(this).parents('.cal_input').find('*[data-link=start]').attr('data-target')).find('td.active a').trigger('click');
		}*/
		resultOk = false;


		if($(this).parents('.cal_input').find('*[data-link=start]').length != 0){
			
			prevBack = $(this).parents('.cal_input').find('*[data-link=start]').prev().val().split('.');
			nextBack = $(this).parents('.cal_input').find('*[data-link=end]').prev().val().split('.');


			startDataType = $(this).parents('.cal_input').find('*[data-link=start]').attr('data-type');
			endDataType = $(this).parents('.cal_input').find('*[data-link=end]').attr('data-type');
			startLength = $(this).parents('.cal_input').find('*[data-link=start]').prev().val().length;
			endLength = $(this).parents('.cal_input').find('*[data-link=end]').prev().val().length;
			startInput = $(this).parents('.cal_input').find('*[data-link=start]').prev();
			endInput = $(this).parents('.cal_input').find('*[data-link=end]').prev();
			
			

			if((startDataType !="month" && startLength ==10) || (startDataType =="month" && startLength==7))
			{
				
				if((endDataType !="month" && endLength==10) || (endDataType =="month" && endLength==7))
				{
					
				}
				else{
					endInput.prop('value', "");
					nextBack = ""
				}
			}else{
				if((startDataType !="month" && startLength==10) || (startDataType =="month" && startLength==7))
				{
					
				}
				else{
					startInput.prop('value', "");
					prevBack = ""
				}
			
			}
			
			if((endDataType !="month" && endLength==10) || (endDataType =="month" && endLength==7)){
				if((startDataType !="month" && startLength==10) || (startDataType =="month" && startLength==7))
				{
					
				}
				else{
					startInput.prop('value', "");
					prevBack = ""
				}
			}else{
				if((endDataType !="month" && endLength==10) || (endDataType =="month" && endLength==7))
				{
					
				}
				else{
					endInput.prop('value', "");
					nextBack = ""
					
				}
			}

		}else{
			prevBack = $(this).prev().val().split('.');

			if((dataType !="month" && $(this).prev().val().length==10) || (dataType =="month" && $(this).prev().val().length==7))
			{
				
			}else{
				$(this).prev().prop('value', "");
				prevBack = ""
				nextBack = ""
				//$(this).prev().focus();
				//return false;
			}
			
			//prevBack = $(this).parents('.cal_input').find('*[data-link=start]').prev().val().split('.');
		}

		
		
	})

	$(window).load(function(){

		$('.datepicker_wrap').each(function(index, value){
			
			if($(value).val()==""){
				//console.log($(value).next().attr('data-target'))
					
				//if($(value).next().attr('data-link')=="end"){
				$('#'+$(value).next().attr('data-target')).find('td.active a').attr('title', '');
				$('#'+$(value).next().attr('data-target')).find('td').removeClass('active');
				//}
			}
		});

	});
		
		
		
		
	


	

});


function dataFunc(e){

	minDate = ""
	maxDate = ""
	minDate2 = ""
	maxDate2 = ""
	endDate = ""
	dataType = ""
	mc = ""
	mc = e;
	mcPrev = mc.prev('input').val();
	dataLink = ""
	dataCase = ""

	

	if(mc.attr('data-min') != null)
	{
		minDate = mc.attr('data-min').split('.');
		

		minDate2 = mc.attr('data-min');
		
	}
	if(mc.attr('data-max') != null)
	{
		
		maxDate = mc.attr('data-max').split('.');

		
		maxDate2 = mc.attr('data-max');
	}
	if(mc.attr('data-end') != null){
		endDate = mc.attr('data-end').split('.');
	}


	if(mc.attr('data-type') != null){
		dataType = mc.attr('data-type');	
		$('#'+mc.attr('data-target')).addClass(dataType);
	}

	if(mc.attr('data-link') != null){
		dataLink = mc.attr('data-link');	
	}

	if(mc.attr('data-case') != null){
		dataCase = mc.attr('data-case');	
		$('#'+mc.attr('data-target')).addClass(dataCase);
	}


	if(dataCase =="open" || dataCase =="twoPop")
	{
		$('#'+mc.attr('data-target')).find('.calendarClose').css('display','none');
		mc.css('display','none');
	}

}


!function( $ ) {

	// Picker object
	//console.log($);
	//alert("asdf");
	
	var Datepicker = function(element, options){
		//alert("fdsa");
		this.element = $(element);
		
		dataFunc(this.element.next());
		
		
		if(dataType !="month"){
		this.format = DPGlobal.parseFormat(options.format||this.element.data('date-format')||'yyyy.mm.dd');
		}
		else if(dataType =="month"){
		this.format = DPGlobal.parseFormat(options.format||this.element.data('date-format')||'yyyy.mm');
		}
//alert("날짜 객체 생성");
		this.picker = $(DPGlobal.template)
							/*.appendTo(this.element.parent())*/
							.appendTo( $('#'+this.element.next().attr('data-target')).find('.lay_wrap .date_wrap'))
							.on({
								click: $.proxy(this.click, this)//,
								//mousedown: $.proxy(this.mousedown, this)
							});
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on') : false;

		if (this.isInput) {
			
			this.element.on({
				focus: $.proxy(this.show, this),
				//blur: $.proxy(this.hide, this),
				keyup: $.proxy(this.update, this)
			});
		} else {
			if (this.component){
				this.component.on('click', $.proxy(this.show, this));
			} else {
				this.element.on('click', $.proxy(this.show, this));
			}
		}

		this.minViewMode = options.minViewMode||this.element.data('date-minviewmode')||0;
		if (typeof this.minViewMode === 'string') {
			switch (this.minViewMode) {
				case 'months':
					this.minViewMode = 1;
					break;
				case 'years':
					this.minViewMode = 2;
					break;
				default:
					this.minViewMode = 0;
					break;
			}
		}
		this.viewMode = options.viewMode||this.element.data('date-viewmode')||0;
		if (typeof this.viewMode === 'string') {
			switch (this.viewMode) {
				case 'months':
					this.viewMode = 1;
					break;
				case 'years':
					this.viewMode = 2;
					break;
				default:
					this.viewMode = 0;
					break;
			}
		}
		this.startViewMode = this.viewMode;
		this.weekStart = options.weekStart||this.element.data('date-weekstart')||0;
		this.weekEnd = this.weekStart === 0 ? 6 : this.weekStart - 1;

		// customize for megabox. (by wooram)
		this.markingDates = options.markingDates;

		this.onRender = options.onRender;
		this.fillDow();
		this.fillMonths();
		this.update();
		this.showMode();
	};

	Datepicker.prototype = {
		constructor: Datepicker,
		setEndDate : function (date) {

			date += '';

			var arrData = [date.substring (0, 4), ((date.substring (4, 6)>>0) - 1), date.substring (6, 8)]
			, resultDate = DPGlobal.formatDate(new Date (arrData[ 0 ], arrData[ 1 ], arrData[ 2 ]), this.format);

			endDate = resultDate.split('.');
		},
		show: function(e) {

			//this.picker.show();
			this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
			this.place();
			$(window).on('resize', $.proxy(this.place, this));
			if (e ) {
				e.stopPropagation();
				e.preventDefault();
			}
			if (!this.isInput) {
			}
			var that = this;
			$(document).on('click', function(ev){
				if ($(ev.target).closest('.datepicker').length == 0) {
					that.hide();
				}
			});



			this.element.trigger({
				type: 'show',
				date: this.date
			});
		},

		hide: function(){
			$(window).off('resize', this.place);
			this.viewMode = this.startViewMode;
			this.showMode();
			if (!this.isInput) {
				$(document).off('mousedown', this.hide);
			}
			//this.set();
			this.element.trigger({
				type: 'hide',
				date: this.date
			});
		},

		set: function() {

			var formated = DPGlobal.formatDate(this.date, this.format);
			

			if (!this.isInput) {
				if (this.component){
					this.element.find('input').prop('value', formated);
				}
				this.element.data('date', formated);
			} else {
				this.element.prop('value', formated);
			}
		

		},

		setValue: function(newDate) {
			if (typeof newDate === 'string') {
				console.log('sss');
				this.date = DPGlobal.parseDate(newDate, this.format);
			} else {
				console.log(2222);
				this.date = new Date(newDate);
			}
			this.set();
			this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
			this.fill();
		},

		place: function(){
			var offset = this.component ? this.component.offset() : this.element.offset();
			this.picker.css({
				top: offset.top + this.height,
				left: offset.left
			});
		},

		update: function(newDate){
			
			

			dataType = this.element.next().attr('data-type');
			dataLink = this.element.next().attr('data-link');
			
			minDate2 = this.element.next().attr('data-min');
			maxDate2 = this.element.next().attr('data-max');




			if(dataType != 'month')
			{
				valueDate = calendarDot(this.element.prop('value'));
			}
			else if(dataType == 'month'){
				valueDate = calendarDot2(this.element.prop('value'));
			}
			
			this.element.prop('value', valueDate);

			valueAry = this.element.prop('value').split('.');

			if(valueAry[0] != ""){
				
				
				if(dataType != 'month')
				{
					this.date = new Date(valueAry[0], valueAry[1] - 1, valueAry[2],0,0,0,0);
					this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);

					
				}
				else if(dataType == 'month'){			
					
					this.date = new Date(valueAry[0], valueAry[1],0,0,0,0);
					
					this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0, 0, 0, 0);
					
				}
			
			}
			
			if(dataType != 'month')
			{
				var formated = DPGlobal.formatDate(new Date(valueAry[0], valueAry[1] - 1, valueAry[2],0,0,0,0), this.format);
			}else if(dataType == 'month'){	
			
				var formated = DPGlobal.formatDate(new Date(valueAry[0], valueAry[1],0,0,0,0), this.format);
				
			}


			if((dataType !="month" && this.element.prop('value').length==10) || (dataType =="month" && this.element.prop('value').length==7))
			{
				
				if(dataLink != ''){
								
					if(dataLink=='start'){

						if(this.element.parents('.cal_input').find('*[data-link=end]').prev().val() != '')
						{
							if(formated > this.element.parents('.cal_input').find('*[data-link=end]').prev().val()){
								alert("종료일 이후 기간은 선택할 수 없습니다.")
								this.element.prop('value', "");
								valueAry = ""
								
							}
						}

					}else if(dataLink=='end'){
						if(this.element.parents('.cal_input').find('*[data-link=start]').prev().val() != '')
						{
							if(formated < this.element.parents('.cal_input').find('*[data-link=start]').prev().val()){
								alert("시작일 이전 기간은 선택할 수 없습니다.")
								this.element.prop('value', "");
								valueAry = ""
								
							}
						}
					}
				}

				
				if(minDate2 != '' || maxDate2 != ''){
							
					if(formated > maxDate2){
						
						alert("제한 기간 이외는 선택할 수 없습니다.")
						this.element.prop('value', "");
						valueAry = ""
						
					}
			
					if(formated < minDate2){
						
						alert("제한 기간 이외는 선택할 수 없습니다.")
						this.element.prop('value', "");
						valueAry = ""
						
					}

					

				}
				

				

			}

			if(valueAry == ""){
				
				
				this.date = DPGlobal.parseDate(
				typeof newDate === 'string' ? newDate : (this.isInput ? this.element.prop('value') : this.element.data('date')),
				this.format
				);

				this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);	
				this.fill();
			}else{
				
				if((dataType !="month" && this.element.prop('value').length==10) || (dataType =="month" && this.element.prop('value').length==7))
				{

				this.fill();

				}
			}

			
		},


		updateMarking:function(markingDates) {
			this.markingDates = markingDates;
			this.fill();
		},

		fillDow: function(){
			var dowCnt = this.weekStart;
			var html = '<ul>';
			while (dowCnt < this.weekStart + 7) {
				html += '<li class="dow">'+DPGlobal.dates.daysMin[(dowCnt++)%7]+'</li>';
			}
			html += '</ul>';
			this.picker.find('.datepicker-days .weeks').append(html);
		},

		fillMonths: function(){
			var html = '';
			var i = 0
			while (i < 12) {
				html += '<span class="month">'+DPGlobal.dates.monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').append(html);
		},

		fill: function() {


			dataFunc($('*[data-target='+ this.picker.parents('.lay-datepicker').attr('id') +']'));

			if(!this.picker.parents('.lay-datepicker').hasClass('month')){
			
			var d = new Date(this.viewDate),
				year = d.getFullYear(),
				month = d.getMonth(),
				currentDate = this.date.valueOf();

			
			
			this.picker.find('.datepicker-days .yearDate')
						.text(year+'년 '+DPGlobal.dates.months[month]);

			var prevMonth = new Date(year, month-1, 28,0,0,0,0),
				day = DPGlobal.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());
			prevMonth.setDate(day);
			
			prevMonth.setDate(day - (prevMonth.getDay() - this.weekStart + 7)%7);
			
			var nextMonth = new Date(prevMonth);
			nextMonth.setDate(nextMonth.getDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName,
				prevY,
				prevM,
				prevD;
			while(prevMonth.valueOf() < nextMonth) {
				
				var aTitle = "";
				if (prevMonth.getDay() === this.weekStart) {
					html.push('<tr>');
					
				}
				clsName = this.onRender(prevMonth);
				prevY = prevMonth.getFullYear();
				prevM = prevMonth.getMonth();
				prevD = prevMonth.getDate();
				if ((prevM < month &&  prevY === year) ||  prevY < year) {
					clsName += ' old';
				} else if ((prevM > month && prevY === year) || prevY > year) {
					clsName += ' new';
				}

				if (prevMonth.valueOf() === currentDate) {
					clsName += ' active';
					//aTitle = "선택됨~2_1";
					aTitle = "선택됨";
				}
								

				/* 기간제한 달력일 경우 disabled */

				if(prevY < minDate[0] || prevY > maxDate[0]){	
					clsName += ' disabled';
					aTitle = "선택할수 없음";

				}else if(prevM < minDate[1] -1 || prevM > maxDate[1] -1){	
					if(prevY < minDate[0] || prevY > maxDate[0]-1){	
						clsName += ' disabled';
						aTitle = "선택할수 없음";		
					}
				}

				

				if (typeof this.markingDates !== 'undefined') {
					for (var i=0; i < this.markingDates.length; i++) {
						var arrDate=this.markingDates[i].split('-');
						var markingDate = new Date(Number(arrDate[0]),Number(arrDate[1])-1,Number(arrDate[2]));
						if (prevM === (markingDate.getMonth()) && prevMonth.getDate() === markingDate.getDate()) {
							clsName += ' c_mint';

							if (prevMonth.valueOf() === currentDate) {
								aTitle = '선택됨';
								clsName += ' active';
							}else{
								aTitle = '선택 가능일';
							}
							
						}
					}
					
				}
				
				html.push('<td class="day '+clsName+'"><a href="javascript:void(0);" title="' + aTitle + '">'+prevMonth.getDate() + '</a></td>');
				if (prevMonth.getDay() === this.weekEnd) {
					html.push('</tr>');
				}
				prevMonth.setDate(prevMonth.getDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
			var currentYear = this.date.getFullYear();

			var months = this.picker.find('.datepicker-months')
						.find('th:eq(2)')
							.text(year)
							.end()
						.find('span').removeClass('active');
			if (currentYear === year) {
				months.eq(this.date.getMonth()).addClass('active');
			}

			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(2)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			for (var i = -1; i < 11; i++) {
				html += '<span class="year'+(i === -1 || i === 10 ? ' old' : '')+(currentYear === year ? ' active' : '')+'">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);

			}
			else{ // 월달력 일 경우
				
				this.picker.find('.datepicker-days').addClass('month');

				var d = new Date(this.viewDate),
				year = d.getFullYear(),
				month = d.getMonth();
				
				var prevMonth = new Date(year, month, 28,0,0,0,0),
				day = DPGlobal.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());
				prevMonth.setDate(day);

				
				var clsName,
				prevY,
				prevM,
				prevD;


				prevY = prevMonth.getFullYear();
				prevM = prevMonth.getMonth();
				prevD = prevMonth.getDate();


				this.picker.find('.datepicker-days.month .yearDate')
						.text(year+'년 ');
				var html = '<tr>';

				/* 기간제한 달력일 경우 disabled */
				
				for(var i = 1 ; i<= 12 ; i++){

					if(minDate[0] == null || maxDate[0] == null){

						
						if(month == i-1){
							html += '<td class="active"><a href="#" title="선택됨">'+i+'월</a>';
						}
						else{
							html += '<td><a href="#">'+i+'월</a>';
						}
					}else{

					if(prevY < minDate[0] || prevY > maxDate[0] ){	
						html += '<td class="disabled"><a href="#" title="선택할수 없음">'+i+'월</a>';
					}	
					else{
						//console.log(month +":"+(Number(maxDate[1]) -1))
						if(i < (Number(minDate[1]))){
							//console.log((prevY-1)+":"+(maxDate[0]))
							if(prevY-1 < minDate[0]){	
								html += '<td class="disabled"><a href="#" title="선택할수 없음">'+i+'월</a>';
							}
							else{
							
								if(month == i-1){
									html += '<td class="active"><a href="#" title="선택됨">'+i+'월</a>';
								}
								else{
									html += '<td><a href="#">'+i+'월</a>';
								}
							}
							
						}
						else if(i > (Number(maxDate[1]))){
							//console.log((prevY-1)+":"+(maxDate[0]))
							if(prevY+1 > maxDate[0]){
								html += '<td class="disabled"><a href="#" title="선택할수 없음">'+i+'월</a>';
							}
							else{
							
								if(month == i-1){
									html += '<td class="active"><a href="#" title="선택됨">'+i+'월</a>';
								}
								else{
									html += '<td><a href="#">'+i+'월</a>';
								}
							}
							
						}
						else{
							
							if(month == i-1){
								html += '<td class="active"><a href="#" title="선택됨">'+i+'월</a>';
							}
							else{
								html += '<td><a href="#">'+i+'월</a>';
							}
							
						}

					}
					}

					if(i % 3 == 0 && i != 12){
						html += '</tr><tr>';
					}
					
				}
				html += '</tr>';


				this.picker.find('.datepicker-days.month table tbody').html(html);
				
			}

		},


		click: function(e) {

			e.stopPropagation();
			e.preventDefault();
			//alert(e.target)
			var target = $(e.target).parents('span, td, th, p, li');
			if (target.length === 1) {
				switch(target[0].nodeName.toLowerCase()) {
					
					case 'p':
						switch(target[0].className) {
							case 'switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
/*
								this.viewDate['set'+DPGlobal.modes[this.viewMode].navFnc].call(
									this.viewDate,
									this.viewDate['get'+DPGlobal.modes[this.viewMode].navFnc].call(this.viewDate) +
									DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1)
								);*/

								// day = parseInt(this.picker.parents('.lay-datepicker').find('td.active a').text());
								
								 month = parseInt(this.picker.parents('.lay-datepicker').find('.yearDate').text().slice(5, 8))- 1;
								
								
								if (target.hasClass('prev')){
									month = month - 1;
								} else if (target.hasClass('next')){
									month = month + 1;
									
								}
							
								 year = parseInt(this.picker.parents('.lay-datepicker').find('.yearDate').text().slice(0, 4));
								
								this.viewDate.setFullYear(year);
								this.viewDate.setMonth(month);
								
								
								this.fill();
								//this.set();
								break;
							case 'prev2':
							case 'next2':
								

								//year = this.viewDate.getUTCFullYear();
								
								//alert(year)
								//this.viewDate['get'+DPGlobal.modes[this.viewMode].navFnc].call(this.viewDate)
								if(this.picker.parents('.lay-datepicker').hasClass('month')){

									// month = parseInt($('#'+mc.attr('data-target')).find('td.active a').text().slice(-0, -1));
							
									 year = parseInt(this.picker.parents('.lay-datepicker').find('.yearDate').text().slice(-0, -2));
							
									//year = this.viewDate.getFullYear();
									month = this.viewDate.getMonth() + 1;

									if (target.hasClass('prev2')){
											year -= 1;
									}
									else if (target.hasClass('next2')){
											year += 1;
									}
									this.date = new Date(year, month,0,0,0,0);
									this.element.trigger({
										type: 'changeDate',
										date: this.date
										//viewMode: DPGlobal.modes[this.viewMode].clsName
									});
									
									this.viewDate.setFullYear(year);

									this.fill();
									
									if(mcPrev == ''){
										//alert(mcPrev +":"+year +"."+ month )
										$('#'+mc.attr('data-target')).find('td.active a').attr('title', '');
										$('#'+mc.attr('data-target')).find('td').removeClass('active');	
									}
									

									if(month < 10){
										mmm = "0"+month;
									}else{
										mmm = month;
									}
									
								
									if(mcPrev != year +"."+ mmm){
										
										$('#'+mc.attr('data-target')).find('td.active a').attr('title', '');
										$('#'+mc.attr('data-target')).find('td').removeClass('active');	
									}
									

									
								}
								else{
									//year = this.viewDate.getFullYear();
									//month = this.viewDate.getMonth() + 1;

									 month = parseInt($('#'+mc.attr('data-target')).find('td.active a').text().slice(-0, -1));
							
									 year = parseInt(this.picker.parents('.lay-datepicker').find('.yearDate').text().slice(-0, -2));

									if (target.hasClass('prev2')){
											year -= 1;
									}
									else if (target.hasClass('next2')){
											year += 1;
									}

									this.viewDate.setFullYear(year);
									this.fill();
								
								}		
								//this.set();
								break;

							case 'calendarClose btn_confirm':

								
								resultOk = true;
								this.picker.parents('.layer_pop_wrap').find('*[data-role=common-ui-layerPop-close]').trigger('click')
				
								
								break;

							case 'cansleBtn btn_confirm':
								
							
							if(!resultOk){
								if((prevBack !="" && nextBack !="") || (prevBack !="" && dataLink =="")){

									if($('*[data-target='+ this.picker.parents('.lay-datepicker').attr('id') +']').attr('data-type')=="month"){
											
										
								
											if($('*[data-target='+ this.picker.parents('.lay-datepicker').attr('id') +']').attr('data-link') == 'start'){
											
												this.date = new Date(prevBack[0], prevBack[1],0,0,0,0);
												this.viewDate = new Date(prevBack[0], prevBack[1],0,0,0,0);

											
											}
											else if($('*[data-target='+ this.picker.parents('.lay-datepicker').attr('id') +']').attr('data-link') == 'end'){
												this.date = new Date(nextBack[0], nextBack[1],0,0,0,0);
												this.viewDate = new Date(nextBack[0], nextBack[1],0,0,0,0);

											}else{
												this.date = new Date(prevBack[0], prevBack[1],0,0,0,0);
												this.viewDate = new Date(prevBack[0], prevBack[1],0,0,0,0);
											}
											this.fill();
											this.set();
											

										
								
									}
									else{
										
										
											
											if($('*[data-target='+ this.picker.parents('.lay-datepicker').attr('id') +']').attr('data-link') == 'start'){
												this.date = new Date(prevBack[0], prevBack[1] - 1, prevBack[2],0,0,0,0);
												this.viewDate = new Date(prevBack[0], prevBack[1] - 1, prevBack[2],0,0,0,0);
											
											}
											else if($('*[data-target='+ this.picker.parents('.lay-datepicker').attr('id') +']').attr('data-link') == 'end'){
												this.date = new Date(nextBack[0], nextBack[1] - 1, nextBack[2],0,0,0,0);
												this.viewDate = new Date(nextBack[0], nextBack[1] - 1, nextBack[2],0,0,0,0);
											
											}else{
												this.date = new Date(prevBack[0], prevBack[1] - 1, prevBack[2],0,0,0,0);
												this.viewDate = new Date(prevBack[0], prevBack[1] - 1, prevBack[2],0,0,0,0);
											}
										
											this.fill();
											this.set();
											

										

										
									}
								}
								else{

									if(prevBack !="" && nextBack !=""){
										
										if(dataType ="twoPop"){
											$('#'+mc.attr('data-target')).parents('.lay_wrap').find('td.active a').attr('title', '');
											$('#'+mc.attr('data-target')).parents('.lay_wrap').find('td').removeClass('active');
											mc.parents('.cal_input').find('input').prop('value', "");
										}else{
											$('#'+mc.attr('data-target')).find('td.active a').attr('title', '');
											$('#'+mc.attr('data-target')).find('td').removeClass('active');
											mc.prev('input').prop('value', "");
										}
										

									}
									
									else if(prevBack =="" && nextBack ==""){
										
										if(dataType ="twoPop"){
											$('#'+mc.attr('data-target')).parents('.lay_wrap').find('td.active a').attr('title', '');
											$('#'+mc.attr('data-target')).parents('.lay_wrap').find('td').removeClass('active');
											mc.parents('.cal_input').find('input').prop('value', "");
										}else{
											$('#'+mc.attr('data-target')).find('td.active a').attr('title', '');
											$('#'+mc.attr('data-target')).find('td').removeClass('active');
											mc.prev('input').prop('value', "");
										}
										

									}
									
									
								}
							}

								//resultOk = false;

								break;
						}
						break;
					case 'span':
						if (target.is('.month')) {
							var month = target.parent().find('span').index(target);
							this.viewDate.setMonth(month);
						} else {
							var year = parseInt(target.text(), 10)||0;
							this.viewDate.setFullYear(year);
						}
						if (this.viewMode !== 0) {
							this.date = new Date(this.viewDate);
							this.element.trigger({
								type: 'changeDate',
								date: this.date,
								viewMode: DPGlobal.modes[this.viewMode].clsName
							});
						}
						this.showMode(-1);
						this.fill();
						this.set();
						break;
					case 'td':

						dataFunc($('*[data-target='+ this.picker.parents('.lay-datepicker').attr('id') +']'));
						
						tdMc = this.picker.parents('.lay-datepicker');
						
						if(this.picker.parents('.lay-datepicker').hasClass('month')){
						
							if (!target.is('.disabled')){
								
							
							//var day = parseInt(target.text(), 10)||1;
							var month = e.target.innerHTML.slice(-0, -1);
							
							var year = this.picker.parents('.lay-datepicker').find('.yearDate').text().slice(-0, -2);
							
							
						
							var formated = DPGlobal.formatDate(new Date(year, month,0,0,0,0), this.format);

							if(dataLink != ''){
							
								if(dataLink=='start'){

									if(mc.parents('.cal_input').find('*[data-link=end]').prev().val() != '')
									{
										if(formated > mc.parents('.cal_input').find('*[data-link=end]').prev().val()){
											alert("종료일 이후 기간은 선택할 수 없습니다.")
											return false;
										}
									}

								}else if(dataLink=='end'){
									if(mc.parents('.cal_input').find('*[data-link=start]').prev().val() != '')
									{
										if(formated < mc.parents('.cal_input').find('*[data-link=start]').prev().val()){
											alert("시작일 이전 기간은 선택할 수 없습니다.")
											return false;
										}
									}
								}
							}

							this.date = new Date(year, month,0,0,0,0);
							this.viewDate = new Date(year, month,0,0,0,0);

							if(month < 10){
								mmm = "0"+(Number(month));
							}else{
								mmm = Number(month);
							}
							
							mcPrev = year +"."+ mmm

							this.fill();
							//this.set();
							this.element.trigger({
								type: 'changeDate',
								date: this.date
							});

							setTimeout(function(){
								tdMc.find('td.active a').focus();
							}, 100);

							}
							
						}else{
							if (target.is('.day') && !target.is('.disabled')){
								var day = parseInt(target.text(), 10)||1;
								//var month = this.viewDate.getMonth();
								var month = parseInt(this.picker.parents('.lay-datepicker').find('.yearDate').text().slice(5, 8))- 1;

								if (target.is('.old')) {
									month -= 1;
								} else if (target.is('.new')) {
									month += 1;
								}
								//var year = this.viewDate.getFullYear();
								
								
								var year = parseInt(this.picker.parents('.lay-datepicker').find('.yearDate').text().slice(0, 4));
								

								var formated = DPGlobal.formatDate(new Date(year, month, day,0,0,0,0), this.format);

								if(dataLink != ''){
							
									if(dataLink=='start'){

										if(mc.parents('.cal_input').find('*[data-link=end]').prev().val() != '')
										{
											if(formated > mc.parents('.cal_input').find('*[data-link=end]').prev().val()){
												alert("종료일 이후 기간은 선택할 수 없습니다.")
												return false;
											}
										}

									}else if(dataLink=='end'){
										if(mc.parents('.cal_input').find('*[data-link=start]').prev().val() != '')
										{
											if(formated < mc.parents('.cal_input').find('*[data-link=start]').prev().val()){
												alert("시작일 이전 기간은 선택할 수 없습니다.")
												return false;
											}
										}
									}
								}

								this.date = new Date(year, month, day,0,0,0,0);
								this.viewDate = new Date(year, month, day,0,0,0,0);
								//this.viewDate = new Date(year, month, Math.min(28, day),0,0,0,0);

								
								
								this.fill();
								//this.set();
								this.element.trigger({
									type: 'changeDate',
									date: this.date,
									viewMode: DPGlobal.modes[this.viewMode].clsName
								});

								setTimeout(function(){
									//$('.datepicker td.active a').focus();
									tdMc.find('td.active a').focus();
								}, 100);

									//this.focus();
							}
						}

						this.set();
						
						break;

				}
			}
		},

		mousedown: function(e){
			e.stopPropagation();
			e.preventDefault();
		},

		showMode: function(dir) {
			if (dir) {
				this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + dir));
			}
			this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
		}
	};

	$.fn.datepicker = function ( option, val ) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data) {
				$this.data('datepicker', (data = new Datepicker(this, $.extend({}, $.fn.datepicker.defaults,options))));
			}
			if (typeof option === 'string') data[option](val);
		});
	};

	$.fn.datepicker.defaults = {
		onRender: function(date) {
			return '';
		}
	};
	$.fn.datepicker.Constructor = Datepicker;

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		dates:{
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
			monthsShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
		},
		isLeapYear: function (year) {
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
		},
		getDaysInMonth: function (year, month) {
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
		},
		parseFormat: function(format){
			var separator = format.match(/[.\/\-\s].*?/),
				parts = format.split(/\W+/);
			if (!separator || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separator: separator, parts: parts};
		},
		parseDate: function(date, format) {
			var parts = date.split(format.separator),
				date = new Date(),
				val;

			date.setHours(0);
			date.setMinutes(0);
			date.setSeconds(0);
			date.setMilliseconds(0);
			
			/*
			if(dataType=="month"){
				format.parts.length = format.parts.length - 1
			}
			*/
			if (parts.length === format.parts.length) {
				var year = date.getFullYear(), day = date.getDate(), month = date.getMonth();
				for (var i=0, cnt = format.parts.length; i < cnt; i++) {
					val = parseInt(parts[i], 10)||1;
					switch(format.parts[i]) {
						case 'dd':
						case 'd':
							day = val;
							date.setDate(val);
							break;
						case 'mm':
						case 'm':
							month = val - 1;
							date.setMonth(val - 1);
							break;
						case 'yy':
							year = 2000 + val;
							date.setFullYear(2000 + val);
							break;
						case 'yyyy':
							year = val;
							date.setFullYear(val);
							break;
					}
				}
				date = new Date(year, month, day, 0 ,0 ,0);
				
			}
			return date;
		},
		formatDate: function(date, format){
			var val = {
				d: date.getDate(),
				m: date.getMonth() + 1,
				yy: date.getFullYear().toString().substring(2),
				yyyy: date.getFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			var date = [];
			for (var i=0, cnt = format.parts.length; i < cnt; i++) {
				date.push(val[format.parts[i]]);
			}
			return date.join(format.separator);
		},

		headTemplate:
							'<div class="controlDiv">'+
							'<p class="prev2"><a href="javascript:void(0);" class="fa fa-chevron-left2 a_block prev_y" title="이전년도 보기"><span class="hide">이전년도</span></a></p>'+
							'<p class="prev"><a href="javascript:void(0);" class="fa fa-chevron-left a_block prev_m" title="이전달 보기"><span class="hide">이전달</span></a></p>'+
							'<p class="yearDate"></p>'+
							'<p class="next"><a href="javascript:void(0);" class="fa fa-chevron-right a_block next_m" title="다음달 보기"><span class="hide">다음달</span></a></p>'+
							'<p class="next2"><a href="javascript:void(0);" class="fa fa-chevron-right2 a_block next_y" title="다음년도 보기"><span class="hide">다음년도</span></a></p>'+
							'</div>' +
							'<div class="weeks"></div>',
	
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
	};
	
	
	DPGlobal.template = '<div class="datepicker dropdown-menu">'+
							'<div class="datepicker-days">'+
								DPGlobal.headTemplate+
								'<table class=" table-condensed" cellpadding="0" cellspacing="0">'+
								'<caption><strong>날짜선택 달력</strong></caption>' +

									'<tbody></tbody>'+
								'</table>'+
								'<p class="calendarClose btn_confirm"><a href="javascript:void(0);" class="btn default">확인</a></p>'+
								'<p class="cansleBtn btn_confirm"><a href="javascript:void(0); btn deny">취소</a></p>'+	
							'</div>'+
						'</div>';

}( window.jQuery );
