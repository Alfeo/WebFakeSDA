$(document).ready(function()
{
	$("#but1").click(function()
	{
		$("#page1").fadeTo("fast", 1, function() {});
		$("#page2").fadeTo("fast", 0, function() {});
		$("#page3").fadeTo("fast", 0, function() {});
		$("#page4").fadeTo("fast", 0, function() {});
		$("#page5").fadeTo("fast", 0, function() {});
	});

	$("#but2").click(function()
	{
		$("#page1").fadeTo("fast", 0, function() {});
		$("#page2").fadeTo("fast", 1, function() {});
		$("#page3").fadeTo("fast", 0, function() {});
		$("#page4").fadeTo("fast", 0, function() {});
		$("#page5").fadeTo("fast", 0, function() {});
	});
	
	$(".presimg").click(function()
	{
		$("#page1").fadeTo("fast", 0, function() {});
		$("#page2").fadeTo("fast", 1, function() {});
		$("#page3").fadeTo("fast", 0, function() {});
		$("#page4").fadeTo("fast", 0, function() {});
		$("#page5").fadeTo("fast", 0, function() {});
	});

	$("#but3").click(function()
	{
		$("#page1").fadeTo("fast", 0, function() {});
		$("#page2").fadeTo("fast", 0, function() {});
		$("#page3").fadeTo("fast", 1, function() {});
		$("#page4").fadeTo("fast", 0, function() {});
		$("#page5").fadeTo("fast", 0, function() {});
	});

	$("#but4").click(function()
	{
		$("#page1").fadeTo("fast", 0, function() {});
		$("#page2").fadeTo("fast", 0, function() {});
		$("#page3").fadeTo("fast", 0, function() {});
		$("#page4").fadeTo("fast", 1, function() {});
		$("#page5").fadeTo("fast", 0, function() {});
	});

	$("#but5").click(function()
	{
		$("#page1").fadeTo("fast", 0, function() {});
		$("#page2").fadeTo("fast", 0, function() {});
		$("#page3").fadeTo("fast", 0, function() {});
		$("#page4").fadeTo("fast", 0, function() {});
		$("#page5").fadeTo("fast", 1, function() {});
	});
});
