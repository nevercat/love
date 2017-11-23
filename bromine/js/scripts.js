// JavaScript Document
$(document).ready(function(){
    	windowHash = window.location.hash;
    	
    	watermarkify();
    	
    	if(windowHash != ""){
        		switch(windowHash){
            			case "#aboutme":{
                				aboutSquare("open");
                				$(".topbar-menu .selected").removeClass("selected");
                				$(".about-menubtn").addClass("selected");
                				break;
                			            }
            			case "#followme":{
                				followSquare("open");
                				$(".topbar-menu .selected").removeClass("selected");
                				$(".follow-menubtn").addClass("selected");
                				break;
                			            }
            			case "#contactme":{
                				contactSquare("open");
                				$(".topbar-menu .selected").removeClass("selected");
                				$(".contact-menubtn").addClass("selected");
                				$.scrollTo( '.square-4', 800, {
                    easing:'easeOutQuad'
                }
                 );
                				break;
                			            }
            			case "#mywork":{
                				myworkSquare("open");
                				$(".topbar-menu .selected").removeClass("selected");
                				$(".work-menubtn").addClass("selected");
                				$.scrollTo( '.square-5', 800, {
                    easing:'easeOutQuad'
                }
                 );
                				break;
                			            }
            		        }
        	    }
    	
    	$(".home-menubtn").click(function(e){
        		aboutSquare();
        		followSquare();
        		blogSquare();
        		contactSquare();
        		myworkSquare();
        		
        		
        		$(".topbar-menu .selected").removeClass("selected");
        		$(".home-menubtn").addClass("selected");
        		window.location.hash = "";
        		e.preventDefault();
        	    });
    	
    	$(".square-1-card,.about-menubtn").click(function(e){
        		aboutSquare("open");
        		
        		followSquare();
        		blogSquare();
        		contactSquare();
        		myworkSquare();
        		
        		
        		$(".topbar-menu .selected").removeClass("selected");
        		$(".about-menubtn").addClass("selected");
        		window.location.hash = "#aboutme";
        		e.preventDefault();
        	    });
    	
    	$(".square-2-card,.follow-menubtn").click(function(e){
        		followSquare("open");
        		
        		aboutSquare();
        		blogSquare();
        		contactSquare();
        		myworkSquare();
        		
        		$(".topbar-menu .selected").removeClass("selected");
        		$(".follow-menubtn").addClass("selected");
        		window.location.hash = "#followme";
        		e.preventDefault();
        	    });
    	
    	$(".square-3-card,.blog-menubtn").click(function(e){
        		blogSquare("open");
        		
        		aboutSquare();
        		followSquare();
        		contactSquare();
        		myworkSquare();
        		
        		$(".topbar-menu .selected").removeClass("selected");
        		$(".blog-menubtn").addClass("selected");
        		window.location.hash = "#blog";
        		//$.scrollTo( '.square-3', 800, {easing:'easeOutQuad'} );
        		e.preventDefault();
        	    });
    	
    	$(".square-4-card,.contact-menubtn").click(function(e){
        		contactSquare("open");
        		
        		aboutSquare();
        		followSquare();
        		blogSquare();
        		myworkSquare();
        		
        		$(".topbar-menu .selected").removeClass("selected");
        		$(".contact-menubtn").addClass("selected");
        		window.location.hash = "#contactme";
        		//$.scrollTo( '.square-4', 800, {easing:'easeOutQuad'} );
        		e.preventDefault();
        	    });
    	
    	$(".square-5-card,.work-menubtn").click(function(e){
        		myworkSquare("open");
        		
        		aboutSquare();
        		followSquare();
        		blogSquare();
        		contactSquare();
        		
        		$(".topbar-menu .selected").removeClass("selected");
        		$(".work-menubtn").addClass("selected");
        		window.location.hash = "#mywork";
        		$.scrollTo( '.square-5', 800, {
            easing:'easeOutQuad'
        }
         );
        		e.preventDefault();
        	    });
    	
    	
    	
    	$('.mywork-thumbnail-container li a').click(function(e){
        		rel = $(this).attr("rel");
        		$('.mywork-bigimg-container img').hide();
        		$('.mywork-bigimg-container img.'+rel).fadeIn();
        		$('.mywork-description-container div').hide();
        		$('.mywork-description-container div.'+rel).fadeIn();
        		$('.mywork-thumbnail-container li a.selected').removeClass("selected");
        		$(this).addClass("selected");
        		e.preventDefault();
        	    });	
    });

function aboutSquare(action){
    	if(action == "open"){
        		$('.square-1').find(".moveablesquare").animate({
            'top':'-244px'
        }
        ,1000,"easeOutQuad");
        	    }
    	else{
        		$('.square-1').find(".moveablesquare").animate({
            'top':'0'
        }
        ,1000,"easeOutQuad");
        	    }
    }

function followSquare(action){
    	if(action == "open"){
        		$('.square-2').find(".moveablesquare").animate({
            'left':'0'
        }
        ,1000,"easeOutQuad");
        	    }
    	else{
        		$('.square-2').find(".moveablesquare").animate({
            'left':'-345px'
        }
        ,1000,"easeOutQuad");
        	    }
    }

function blogSquare(action){
    	if(action == "open"){
        		$('.square-3').find(".moveablesquare").animate({
            'left':'-405'
        }
        ,1000,"easeOutQuad");
        	    }
    	else{
        		$('.square-3').find(".moveablesquare").animate({
            'left':'0'
        }
        ,1000,"easeOutQuad");
        	    }
    }

function contactSquare(action){
    	if(action == "open"){
        		$('.square-4').find(".moveablesquare").animate({
            'top':'0'
        }
        ,1000,"easeOutQuad");
        	    }
    	else{
        		$('.square-4').find(".moveablesquare").animate({
            'top':'-284'
        }
        ,1000,"easeOutQuad");
        	    }
    }

function myworkSquare(action){
    	if(action == "open"){
        		$('.square-5-card').hide();
        	    }
    	else{
        		$('.square-5-card').show();
        	    }
    }

function watermarkify(){
    	$('.watermarkify').each(function(){
        		if($.trim($(this).val()) == ""){
            			$(this).val($(this).attr("title"));
            		        }
        		
        		$(this).focus(function(){
            			if($.trim($(this).val()) == $(this).attr("title")){
                				$(this).val("");
                			            }
            		        });
        		
        		$(this).blur(function(){
            			if($.trim($(this).val()) == ""){
                				$(this).val($(this).attr("title"));
                			            }
            		        });
        		
        	    });
    }
