/*
*
* Copyright (c) 2012 Waverim Xie
*
*/

$(document).ready(function () {
    //浏览器判断
    var browser = navigator.appName;
    var b_version = navigator.appVersion;
    var version = b_version.split(";");
    if (version[1] != undefined) {
        var trim_Version = version[1].replace(/[ ]/g, "");
        if ((browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0") || (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0")) {
            $("body").append($('<div class="pa w" style="height: 30px;background: #FFD42A;top:0;line-height:30px;"><div class="mm" style="width:900px;">您正在使用IE6或IE7内核的浏览器，为了您更高的浏览体验，推荐您使用chrome/FireFox/Opara/IE8/IE9等浏览器来浏览本网站！<span style="cursor: pointer; margin-left: 80px; display: inline-block;" onclick="$(this).parent().parent().fadeOut(500)">X</span></div></div>'));
        }
    }
    
    //点击弹框
    $(".official-file").fancybox({
        'width': '75%',
        'height': '100%',
        'autoScale': false,
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'type': 'iframe'
    });

    //鼠标移动亮度变化
    $(".campus-content-content").mouseover(function () {        
        $(this).find(".dark-float2").css('display', 'block');
		if ((browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0")
			|| (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0") 
			|| (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0")) {
			$(this).find(".dark-float1").css({				
				'background-color': 'transparent',
				'display': 'block'
			});
		}
		else {
			$(this).find(".dark-float1").css({				
				'display': 'block'
			});
		}
    });
    $(".campus-content-content").mouseleave(function () {
        $(this).find(".dark-float1").css('display', 'none');
        $(this).find(".dark-float2").css('display', 'none');
    });
    $(".dark-float1").click(function () {
        $(this).parent().fancybox({
            'width': '75%',
            'height': '100%',
            'autoScale': false,
            'transitionIn': 'elastic',
            'transitionOut': 'elastic',
            'type': 'iframe'
        });
    });    

    $(".welfare-content-content-img").mouseover(function () {
		$(this).find(".wel-float2").css('display', 'block');
		if ((browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0")
			|| (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0") 
			|| (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0")) {
			$(this).find(".wel-float1").css({				
				'background-color': 'transparent',
				'display': 'block'
			});
		}
		else {
			$(this).find(".wel-float1").css({				
				'display': 'block'
			});
		}
    });
    $(".welfare-content-content-img").mouseleave(function () {
        $(this).find(".wel-float1").css('display', 'none');
        $(this).find(".wel-float2").css('display', 'none');
    });
    $(".wel-float1").click(function () {
        $(this).parent().fancybox({
            'titlePosition': 'over'
        });
    });
	
	//画廊
    $("a[rel=wci1]").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });
    $("a[rel=wci2]").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });
    $("a[rel=wci3]").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });
    $("a[rel=wci4]").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });
    $("a[rel=wci5]").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });
    $("a[rel=wci6]").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });
    $("a[rel=wci7]").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });
    $("a[rel=wci8]").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });
    $("a[rel=wci9]").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });

    //跳转页面
    $(".g1").css('top', '100px');
    $(".g2").css('top', '200px');
    $(".goto").mouseover(function () {
        $(this).css({
            'width': '100px',
            'display': 'none'
        })
        if ($(this).hasClass("go-surprise")) {
            $(this).text("猛戳哈，有惊喜喔");
            $(this).css({
                'width': '130px'
            });
        }
		if ($(this).hasClass("go-tongji")) {
            $(this).text("你猜~");
            $(this).css({
                'width': '130px'
            });
        }
        if ($(this).hasClass("go-official")) {
            $(this).text("Love");
        }
        if ($(this).hasClass("go-campus")) {
            $(this).text("I");
        }
        if ($(this).hasClass("go-welfare")) {
            $(this).text("You");
        }
        if ($(this).hasClass("go-index")) {
            $(this).text("GOODBYE");
        }
        if ($(this).hasClass("creative-staff")) {
            $(this).text("返回首页");
           
        }
        $(this).show();
    });
    $(".goto").mouseleave(function () {
        $(this).css({
            'width': '20px',
            'display': 'none'
        })
        $(this).text("");
        $(this).show();
    });
	
});
