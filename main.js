var sw = 0;
var f = 0;



//INPUT--------------------------------------------------------
$('body').keypress(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13' && f == 0) {
		if (sw == 0) {
			f = 1
			$("#textbox").focus();
			$('#Div_Input').css('transform', 'translate(0px, 100px)');
			setTimeout(show, 1000)
		} else if (sw == 1){
			f = 1
			$('#Div_Input').css('transform', 'translate(0px, -30px)');
			setTimeout(hide, 500)
		}
	}
});

$('#textbox').keypress(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13' && f == 0) {
		addData()
	}
});


function show(){
	sw = 1
	f = 0
}

function hide(){
	sw = 0
	f = 0
	$('#textbox').val('')
}


//SORTABLE--------------------------------------------------------
$('#ToDo, #Doing, #Done, #Testing, #Deployed').sortable({
	connectWith: ".connectedSortable",
	receive: function(event, ui) {
        $(ui.item).attr('id', $(this).attr('id') + 'Item')
        console.log($(this))
    }
})


function addData(){
	if ($('#textbox').val() != '') {
		$("#clone").clone(true).appendTo( "#ToDo").attr("class", 'item').attr('id', 'ToDoItem').find( "h1" ).text($('#textbox').val())
	}
}
//MODEL==================================

$("#edit").bind('click', function(){
	$('#title').text($(this).parent().find('#itemText').text())
	$('#where').text($(this).parent().attr('id').replace('Item',''))
	$('#myModal').modal();
})