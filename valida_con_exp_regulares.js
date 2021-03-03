const form = document.querySelector('.the-form');
const user_name = document.getElementById('name');
const zip = document.getElementById('zip');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const submit_btn = document.getElementById('submit-btn');

user_name.addEventListener('keyup', validateName);
zip.addEventListener('keyup', validateZip);
email.addEventListener('keyup', validateEmail);
phone.addEventListener('keyup', validatePhone);

user_name.addEventListener('blur', validateName);
zip.addEventListener('blur', validateZip);
email.addEventListener('blur', validateEmail);
phone.addEventListener('blur', validatePhone);

form.addEventListener('submit', validateForm);

function validateName () {
	const re = /^[a-zA-Z]{2,10}$/;
	return general_validation(user_name,re);
}


function validateZip () {
	const re = /^[0-9]{5}(-[0-9]{4})?$/;
	return general_validation(zip,re);
}


function validateEmail () {
	const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
	return general_validation(email,re);
}


function validatePhone () {
	const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
	return general_validation(phone,re);
}

// makes base validation for an input
function general_validation(input,regex){
	if(!regex.test(input.value)){
		input.classList.add('is-invalid');
        return false;
	}else{
		input.classList.remove('is-invalid');
        return true;
	}
}


const functions_name = [validateName,validateZip,validateEmail,validatePhone];
// fires when submit the form
function validateForm(e){
	e.preventDefault();
	let form_is_not_valid = false; //dont know if form is valid
	// if any of the functions in functions_name returns false then the form is invalid:
	functions_name.forEach(fun => {
		if(!fun()){
			form_is_not_valid = true; //form is invalid
		}
	});
	// test if form is valid to submit
   if(!form_is_not_valid){
       form.submit();
   }
}

submit_btn.disabled = false;
