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
$('#list1, #list2, #list3, #list4, #list5').sortable({
	connectWith: ".connectedSortable"
})



function addData(){
	if ($('#textbox').val() != '') {
		$("#item").clone().appendTo( "#list1").attr("id", 'item').text($('#textbox').val())
	}
}
$('#btn').click(function(){
	$('#myModal').modal();
})

