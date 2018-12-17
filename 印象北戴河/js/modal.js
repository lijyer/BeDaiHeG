(function ($) {
	$.fn.extend({
		"boxhovermodal": function (value) {
			var $childmodal = $(value) || $(".box-hover-modal-m");
			$(this).mouseenter(function (event) {
				event = event || window.event;
				//getMouseWay()
				var wayNum = getMouseWay(this,event);
				if (wayNum == 0) {
					$(this).children($childmodal).css({
						"display": "block",
						"top": "0",
						"left": -$(this).width()
					}).animate({
						"left": "0"
					}, 300);
				}
				else if (wayNum == 1) {
					$(this).children($childmodal).css({
						"display": "block",
						"top": -$(this).height(),
						"left": '0'
					}).animate({
						"top": "0"
					}, 300);
				}
				else if (wayNum == 2) {
					$(this).children($childmodal).css({
						"display": "block",
						"top": "0",
						"left": $(this).width()
					}).animate({
						"left": "0"
					}, 300);
				}
				else if (wayNum == 3) {
					$(this).children($childmodal).css({
						"display": "block",
						"top": $(this).height(),
						"left": 0
					}).animate({
						"top": "0"
					}, 300);
				}
			}).mouseleave(function (event) {
				var wayNum = getMouseWay(this,event);
				if (wayNum == 0) {
					$(this).children($childmodal).animate({
						"left": -$(this).width()
					}, 200);
				}
				else if (wayNum == 1) {
					$(this).children($childmodal).animate({
						"top": -$(this).height()
					}, 200);
				}
				else if (wayNum == 2) {
					$(this).children($childmodal).animate({
						"left": 2 * $(this).width()
					}, 200);
				}
				else if (wayNum == 3) {
					$(this).children($childmodal).animate({
						"top": $(this).height()
					}, 200);
				}
			});

			function getMouseWay(nowEle,event) {
				var mx = event.pageX;
				var my = event.pageY;
				var bl = $(nowEle).offset().left;
				var bt = $(nowEle).offset().top;
				var br = bl + parseInt($(nowEle).width());
				var bb = bt + parseInt($(nowEle).height());
				var ml = Math.abs(mx - bl);
				var mt = Math.abs(my - bt);
				var mr = Math.abs(br - mx);
				var mb = Math.abs(bb - my);
				var bm = [ml, mt, mr, mb];
				var bmMin = Math.min.apply(null, bm);

				var way;
				$.each(bm, function (index, content) {
					if (content == bmMin) {
						way = index;
					}
				});
				return way;
			}


		}
	});
})(jQuery);