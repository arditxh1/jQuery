$('#list1, #list2, #list3, #list4, #list5').sortable({
	connectWith: ".connectedSortable"
})

$('#textbox').keypress(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		addData()
	}
});

function addData(){
	$("#item").clone().appendTo( "#list1").attr("id", 'item').text($('#textbox').val())
}



