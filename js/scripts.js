!function(a,t,e,o){"use strict";var s={init:function(){s.accordionIcons("glyphicon-menu-right","glyphicon-menu-down"),s.whichBootstrap(),s.accessibleNav(),s.callChocolat(),s.browserUpdate(),s.gaTrackEvents(),s.initScrollReveal(),s.scrollToTop(),s.sliders(),s.fouc(),s.callMatchHeight()},accordionIcons:function(a,t){e(".panel a").on("click",function(){e(this).hasClass("collapsed")?(e(".panel a span").removeClass(t).addClass(a),e(this).find("span").removeClass(a).addClass(t)):e(this).find("span").removeClass(t).addClass(a)})},accessibleNav:function(){var a=(e("current_page_item"),'<span class="sr-only">(current)</span>');e(".current_page_item").find("a").append(a)},whichBootstrap:function(){var a=["xs","sm","md","lg"],t=e("<div>");t.appendTo(e("body"));for(var o=a.length-1;o>=0;o--){var s=a[o];if(t.addClass("hidden-"+s),t.is(":hidden"))return t.remove(),s}},callChocolat:function(){e(".chocolat-parent").length&&e(".chocolat-parent").Chocolat()},browserUpdate:function(){function e(){var a=t.createElement("script");a.src="//browser-update.org/update.min.js",t.body.appendChild(a)}try{t.addEventListener("DOMContentLoaded",e,!1)}catch(o){a.attachEvent("onload",e)}},gaTrackEvents:function(){e(".td-track-event").on("click",function(a){var t=e(this);ga("send","event",{eventCategory:t.data("ga-category"),eventAction:t.data("ga-action"),eventLabel:t.data("ga-label")})})},callMatchHeight:function(){var a=e(".match-height"),t=e(".match-height-row");a.length&&a.matchHeight({byRow:!1}),t.length&&t.matchHeight()},initScrollReveal:function(t){a.sr=ScrollReveal({reset:!1});var o=[],s={viewOffsetTop:10,viewFactor:.3,duration:1e3,reset:!1,opacity:0,scale:1};e(".scrollreveal").each(function(){var a=e(this)[0];o.push(a)});for(var r=0;r<o.length;r++)e(o[r]).data("sr-viewOffsetTop")&&(s.top=e(o[r]).data("sr-viewOffsetTop")),e(o[r]).data("sr-viewFactor")&&(s.viewFactor=e(o[r]).data("sr-viewFactor")),e(o[r]).data("sr-duration")&&(s.duration=e(o[r]).data("sr-duration")),e(o[r]).data("sr-reset")&&(s.reset=e(o[r]).data("sr-reset")),e(o[r]).data("sr-opacity")&&(s.opacity=e(o[r]).data("sr-opacity")),e(o[r]).data("sr-scale")&&(s.scale=e(o[r]).data("sr-scale")),sr.reveal(o[r],{viewOffset:{top:s.viewOffsetTop},viewFactor:s.viewFactor,duration:s.duration,reset:s.reset,opacity:s.opacity,scale:s.scale})},scrollToTop:function(){var t=e(".scroll-top--button"),o=700,s=1200,r=300;e(a).scroll(function(){e(this).scrollTop()>r?t.addClass("scroll-top--visible"):t.removeClass("scroll-top--visible scroll-top--fade-out"),e(this).scrollTop()>s&&t.addClass("scroll-top--fade-out")}),t.on("click",function(a){e("body, html").animate({scrollTop:0},o)})},sliders:function(){e(".banner-slider").length&&(e(".banner-slider__images-wrapper").slick({autoplay:!0,autoplaySpeed:7e3,infinite:!0,arrows:!0,dots:!1,asNavFor:".banner-slider__content-wrapper"}),e(".banner-slider__content-wrapper").slick({autoplay:!0,autoplaySpeed:7e3,infinite:!0,arrows:!1,dots:!1,asNavFor:".banner-slider__images-wrapper"}))},fouc:function(){e("html").removeClass("no-js").addClass("js")}};s.init()}(window,document,jQuery);