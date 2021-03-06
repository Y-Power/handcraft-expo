/*
 Copyright (C) 2015  _Y_Power

 The JavaScript code in this page is free software: you can
 redistribute it and/or modify it under the terms of the GNU
 General Public License (GNU GPL) as published by the Free Software
 Foundation, either version 3 of the License, or (at your option)
 any later version.  The code is distributed WITHOUT ANY WARRANTY;
 without even the implied warranty of MERCHANTABILITY or FITNESS
 FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

 As additional permission under GNU GPL version 3 section 7, you
 may distribute non-source (e.g., minimized or compacted) forms of
 that code without the copy of the GNU GPL normally required by
 section 4, provided you include this license notice and a URL
 through which recipients can access the Corresponding Source.
 */

(function (){

    // Handcraft Expo Previewer-portion script

    jQuery(document).ready(function(){
	var box = jQuery('.description-container'),
	    allElse = jQuery('.page-main-content, .post-main-content, .blog-main-content, .blog-title, .page-main-content-2-columns, .page-main-content-transparent, .page-notitle-main-content, .widgets-bar-div, .sidebar-div, .sidebar-button, .widgets-bar-bottom-div, .col-xs-9 .title-show, .col-xs-9 .tagline-show, .post-aside, .post-audio, .post-chat, .post-gallery, .post-quote, .post-status, .post-video, .previousposts, .nextposts, .searches-title, .handcraft-expo-scroll-up-container');

	jQuery('.side-navbar').mouseenter(function(){
	    /* end previous animations */
	    box.finish();
	    box.animate({width: '100%', opacity: '0.9'}, 150, function(){
		box.css({borderRadius: '10px'});
	    });
	    allElse.animate({opacity: '0.2'}, 150);
	}).mouseleave(function(){
	    box.animate({width: '0', opacity: '0'}, 150);
	    box.css({borderRadius: 'none'});
	    allElse.animate({opacity: '1'}, 150);
	});
	var allToggledItems = jQuery("#blog-showcase-container, #previewer-content-1, #previewer-content-2, #previewer-content-3, #previewer-content-4, #previewer-content-5, #previewer-content-6, #previewer-content-7, #previewer-content-8");

	/* get menu links length */
	var HEgetMenuLinksLength = function(){
	    var out = 0;
	    jQuery(".side-navbar a").each(function(){
		out++;
	    });
	    return out;
	};

	/* for each menu item */
	for (i = 0; i < HEgetMenuLinksLength(); i++){
	    HEPreviewerToggle(i);
	}

	/* toggle previewer item on hover */
	function HEPreviewerToggle(item){
	    /* if within previewer's limit */
	    if (item <= 7){
		jQuery(".side-navbar a:eq(" + item + ")").mouseenter(function(){
		    var HEMenuElID = "#previewer-content-" + (item + 1);
		    jQuery(HEMenuElID).fadeIn(800);
		}).mouseleave(function(){
		    allToggledItems.finish().hide(0);
		});
	    }
	    else {
		/* Previewer-portion fallback */
		jQuery(".side-navbar a:eq(" + item + ")").mouseenter(function(){
		    jQuery('body').off('mouseenter', '.side-navbar');
		    allElse.finish().css({opacity: '1'});
		}).mouseleave(function(){
		    allElse.css({opacity: '0.2'});
		});
	    }
	}

    });

})();
