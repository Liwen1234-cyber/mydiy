/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var seconds = 1000;
	var minutes = seconds * 60;
	var hours = minutes * 60;
	var days = hours * 24;
	var years = days * 365;
	var today = new Date();
	var startYear = 2023;
	var startMonth = 5;
	var startDate = 25;
	var startHour = 18;
	var startMinute = 7;
	var startSecond = 0;
	var todayYear = today.getFullYear();
	var todayMonth = today.getMonth() + 1;
	var todayDate = today.getDate();
	var todayHour = today.getHours();
	var todayMinute = today.getMinutes();
	var todaySecond = today.getSeconds();
	var t1 = Date.UTC(startYear, startMonth, startDate, startHour, startMinute, startSecond);
	var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
	var diff = t2 - t1;
	var diffYears = Math.floor(diff / years);
	var diffDays = Math.floor((diff / days) - diffYears * 365);
	var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
	var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) /
	  minutes);
	var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours -
	  diffMinutes * minutes) / seconds);
	var result = "第 <span class=\"digit\">" + diffDays + "</span> 天 <span class=\"digit\">" + diffHours + "</span> 小时 <span class=\"digit\">" + diffMinutes + "</span> 分钟 <span class=\"digit\">" + diffSeconds + "</span> 秒"; 
	$("#clock").html(result);
}
