document.querySelector('button').addEventListener('click', check)
function check(){

	let question1 = document.quiz.question1.value;
	let question2 = document.quiz.question2.value;
	let question3 = document.quiz.question3.value;
    let question4 = document.quiz.question4.value;
    let question5 = document.quiz.question5.value;


	if (question1 == "structure") {
		alert(true);
}
	else if (question2 == "style") {
		alert(true);
}	
	else if (question3 == "convert-array") {
		alert(true);
	}
    else if (question4 == "string/array") {
		alert(true);
}	
    else if (question5 == "string-lower") {
        alert(true);

    }else{
        alert('finish test')
    }	
    	
}