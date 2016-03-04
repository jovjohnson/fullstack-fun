$(document).ready(init);


function init () {

	$('#submit-email').click(getGravatar);
	$('#submit-sum').click(getSum);
	$('#submit-square').click(getSquare);
	$('#submit-sentence').click(getSentenceObject);
    $('#submit-birthday').click(getBirthday);

}

function getGravatar() {

	var email = $('#email').val();
	
	$.ajax({
		method: 'GET',
		url: `http://localhost:3000/gravatar/${email}`,
		success: function(data) {
			$('#myImage').attr('src', data);
			console.log('here');
		}
	})
}

function getSum () {

	var nums  = $('#sum').val();

	$.ajax({
		method: 'GET',
		url: `http://localhost:3000/sum/${nums}`,
		success: function(data) {
			$('#sumTotal').html(data);
			console.log('ok');
		}
	})

}

function getSquare() {

	var squareIt = $('#square').val();

	$.ajax({
		method: 'GET',
		url: `http://localhost:3000/square/${squareIt}`,
		success: function(data) {
			$('#theSquare').html(data);
			console.log('what up');
		}
	})
}

function getSentenceObject() {

	var aSentence = $('#sentence').val();

	$.ajax({
		method: 'GET',
		url: 'http://localhost:3000/sentence/' + aSentence,
		success: function(data) {
			console.log(aSentence);

			$('#aSentence').html(data);
		}
	})
}

function getBirthday() {

	var bday = $('#birthday').val();

	$.ajax({
		method: 'GET',
		url: 'http://localhost/birthday/' + bday,
		success: function(data) {
			console.log('hello');
		}
	})
}