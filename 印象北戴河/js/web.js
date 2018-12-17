
$(document).ready(function(){

	$(".nav>li").mouseover(function(e){
		if($(this).children('ul').width()!=null){

			var menu1_p = $(this).offset().left+($(this).width())/2;
			var center = $("body").offset().left+($("body").width())/2;


			var piancha = menu1_p -center;


			var menu2_l_p = ($(this).children('ul').children().length*90)/2;
			$(this).children('ul').css("left",$("body").width()/2-menu2_l_p+piancha);
		}else{
			$(this).children('ul').css('display','none');
		}
	});


	$(".news .tab>ul>li").mouseover(function(){
		var num =$(this).attr("id").substr(1,1);
		$(this).addClass("tabnow");
		$(this).siblings("li").removeClass('tabnow');

		$(".news .newslist:eq("+num+")").css("display",'block');
		$(".news .newslist:eq("+num+")").siblings(".newslist").css("display",'none');

	})


	$(".news .bml .bmtab>li").mouseover(function(){
		var num =$(this).attr("id").substr(1,1);
		$(this).addClass("choose");
		$(this).siblings("li").removeClass('choose');
		$(".news .bml ul.linkpic:eq("+num+")").css("display",'block');
		$(".news .bml ul.linkpic:eq("+num+")").siblings(".linkpic").css("display",'none');
	})


	var SID = setInterval(autochange,3000);
	var TID=null;

	$(".cover .title-font a").html($(".news .pic .imglist a img.now").siblings("span").html());
	$(".cover .title-font a").attr("href",$(".news .pic .imglist a img.now").parent().attr("href"));

		$(".news .pic .bigimg img").attr("src",$(".news .pic .imglist a img.now").attr("src"));
		$(".news .pic .bigimg a").attr("href",$(".news .pic .imglist a img.now").parent().attr("href"));

	$(".news .pic .imglist a").click(function(){

		clearInterval(SID);


		$(".news .pic .bigimg img").attr("src",$(this).children("img").attr("src"));
		$(".news .pic .bigimg a").attr("href",$(this).attr("href"));
		

		$(this).children("img").addClass("now");
		$(this).siblings().children("img").removeClass("now");

		$(".cover .title-font a").html($(this).children("img").siblings("span").html());
		$(".cover .title-font a").attr("href",$(".news .pic .imglist a img.now").parent().attr("href"));
		yc(); 
		return false;
	});


	function yc(){
		SID = setInterval(autochange,3000);
	}




	$(".bbs .list").mouseover(function(){
		$(".bbs .listarea").show();
	});
	$(".bbs .list").mouseout(function(){
		$(".bbs .listarea").hide();
	});
	$(".bbs .listarea").mouseover(function(){
		$(this).show();
	});
	$(".bbs .listarea").mouseleave(function(){
		$(this).hide();
	});

	$(".zsarea img").attr("src",$(".ss a img.now").attr("src"));
	var which=1; 
	var group=1; 
	var change=0; 
	
	var tmp=$(".imgnr span.pic_des").html();
	if($.trim($(".imgnr span.pic_des").html()).length==0){
		change=1;
	}

	if(change){
		$(".imgnr span.pic_des").html($(".ss a img.now").parent().attr("alt"))
	}

	$(".zsarea .arrleft").click(function(){
		var cur,next;
		var tag=true;

		$(".ss a img").each(function(){
			if($(this).hasClass('now')){
				cur = $(this);
			}
		});

		next = cur.parent().prev().children('img');

		do{
			if(!next.attr('src')){

				if(cur.parent().parent().prev().hasClass("group")){
					group--;
					cur.parent().parent().hide();
					cur.removeClass('now');
					cur.parent().parent().prev().show();
					var total = cur.parent().parent().prev().children().length;
					next = cur.parent().parent().prev().children("a:eq("+(total-1)+")").children("img");
					

					var nextGroup=cur.parent().parent().prev();
					var how = 6-nextGroup.children().length;
					if(how>0){
						$tmpImgs = cur.parent().parent().children("a:lt("+how+")");
						nextGroup.append($tmpImgs);
					}
					break;
				}
				alert('');
				return;
			}
			tag=false;
		}while(tag);

		
		next.addClass('now');
		next.parent().siblings().children('img').removeClass('now');
		$(".zsarea img").attr("src",next.attr("src"));
		$(".imgnr .page #which").html(next.attr("id"));


		if(change){
			$(".imgnr span.pic_des").html(next.parent().attr("alt"))
		}

		
	});

	$(".zsarea .arrright").click(function(){
		var cur,next;
		var tag=true;

		$(".ss a img").each(function(){
			if($(this).hasClass('now')){
				cur = $(this);
			}
		});

		next = cur.parent().next().children('img');
if (!window.console || !console.firebug){
    var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];

    window.console = {};
    for (var i = 0; i < names.length; ++i)
        window.console[names[i]] = function() {}
}
		do{
			if(!next.attr('src')){

				if(cur.parent().parent().next().hasClass("group")){
					group++;
					cur.removeClass('now');
					cur.parent().parent().hide();
					cur.parent().parent().next().show();
					next = cur.parent().parent().next().children("a:eq(0)").children("img");
					

					var nextGroup=cur.parent().parent().next();
					var how = 6-nextGroup.children().length;
					console.log(how)
					if(how>0){
						$tmpImgs = cur.parent().parent().children("a:gt("+(6-how-1)+")");
						nextGroup.prepend($tmpImgs);
					}
					break;
				}
				alert('');
				return;
			}
			tag=false;
		}while(tag);

		
		next.addClass('now');
		next.parent().siblings().children('img').removeClass('now');
		$(".zsarea img").attr("src",next.attr("src"));
		which++;
		$(".imgnr .page #which").html(next.attr("id"));

		if(change){
			$(".imgnr span.pic_des").html(next.parent().attr("alt"))
		}
	});

	$(".ss .up img").click(function(){
		if($(this).attr("src").indexOf("left")>0){
			var cur,next;
			var tag=true;

			$(".ss a img").each(function(){
				if($(this).hasClass('now')){
					cur = $(this);
				}
			});

			next = cur.parent().prev().children('img');

			do{
				if(!next.attr('src')){

					if(cur.parent().parent().prev().hasClass("group")){
						group--;
						
						cur.parent().parent().hide();
						cur.removeClass('now');
						cur.parent().parent().prev().show();
						var total = cur.parent().parent().prev().children().length;
					next = cur.parent().parent().prev().children("a:eq("+(total-1)+")").children("img");
					

					var nextGroup=cur.parent().parent().prev();
					var how = 6-nextGroup.children().length;
					if(how>0){
						$tmpImgs = cur.parent().parent().children("a:lt("+how+")");
						nextGroup.append($tmpImgs);
					}
						break;
					}
					alert('');
					return;
				}
				tag=false;
			}while(tag);

			$(".imgnr .page #which").html(next.attr('id'));
			next.addClass('now');
			next.parent().siblings().children('img').removeClass('now');
			$(".zsarea img").attr("src",next.attr("src"));

			//换文字描�?
			if(change){
				$(".imgnr span.pic_des").html(next.parent().attr("alt"))
			}
		}else{
			var cur,next;
			var tag=true;

			$(".ss a img").each(function(){
				if($(this).hasClass('now')){
					cur = $(this);
				}
			});

			next = cur.parent().next().children('img');

			do{
				if(!next.attr('src')){

					if(cur.parent().parent().next().hasClass("group")){
						group++;
						cur.removeClass('now');
						cur.parent().parent().hide();
						cur.parent().parent().next().show();
						next = cur.parent().parent().next().children("a:eq(0)").children("img");

						var nextGroup=cur.parent().parent().next();
						var how = 6-nextGroup.children().length;
						if(how>0){
							$tmpImgs = cur.parent().parent().children("a:gt("+(6-how-1)+")");
							nextGroup.prepend($tmpImgs);
						}
						break;
					}
					alert('');
					return;
				}
				tag=false;
			}while(tag);

			$(".imgnr .page #which").html(next.attr("id"));
			next.addClass('now');
			next.parent().siblings().children('img').removeClass('now');
			$(".zsarea img").attr("src",next.attr("src"));

			if(change){
				$(".imgnr span.pic_des").html(next.parent().attr("alt"))
			}
		}
		return false;
	});


	$(".ss .group a").click(function(){
		$(".zsarea img").attr("src",$(this).children().attr("src"));
		$(this).children('img').addClass("now");
		$(this).siblings().children("img").removeClass("now");

		

		if(change){
			$(".imgnr span.pic_des").html($(this).attr("alt"));

		}
		$(".imgnr .page #which").html($(this).children('img').attr("id"));
		return false;
	});


	$(".bread .return").click(function(){
		window.location.href = $(this).parent().attr("href");
	});


	$(".bread .next").click(function(){
		window.location.href = $(this).parent().attr("href");
	});
	$(".bread a input").mouseover(function(){
		$(this).css("cursor","pointer");
	})

})

function autochange(){

	var thumb = $(".news .pic .imglist a img.now");
	var next = thumb.parent().next().children("img");

		
	if(!next.attr("src")){
		next = $(".news .pic .imglist a:eq(0) img");
	}


	$(".news .pic .bigimg img").attr("src",next.attr("src"));
	$(".news .pic .bigimg a").attr("href",next.parent().attr("href"));


	thumb.removeClass("now");
	next.addClass("now");


	$(".cover .title-font a").html(next.siblings("span").html());

	$(".mybody p span").each(function(){
		if(this.style.fontSize=='large'){
			this.style.fontSize='';
		}
	})
}