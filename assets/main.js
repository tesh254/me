$(function(){
	$("#modal").click(function(){
		$(".the_modal").modal('show');
	});
	$(".the_modal").modal({
		closable: true
	});
});