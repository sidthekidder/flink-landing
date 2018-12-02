$(function() {
	"use strict";
	
	// PreLoader
	$(window).load(function() {
		$(".loader").fadeOut(400);
	});

	// Backstretchs
	$("#services").backstretch("images/3.jpg");
	$(".container_small_header").backstretch("images/3.jpg");
    
});