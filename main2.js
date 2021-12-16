
function checkForm(form)
  {
    if(form.inputfield.value == "") {
      alert("Error: Input is empty plz enter First Name!");
      form.inputfield.focus();
      return false;
    }
    var re = /^[\w ]+$/;
    if(!re.test(form.inputfield.value)) {
      alert("Error: Input contains invalid characters!");
      form.inputfield.focus();
      return false;
    }
	if(form.inputfield1.value == "") {
      alert("Error: Input is empty plz enter Last Name!");
      form.inputfield1.focus();
      return false;
    }
    var re = /^[\w ]+$/;
    if(!re.test(form.inputfield1.value)) {
      alert("Error: Input contains invalid characters!");
      form.inputfield1.focus();
      return false;
    }
	if(form.checkboxfield.checked) {
      alert("You have successfully signed up");
    } else {
      alert("Plz Confirm before submitting");
    }
    return false;
    
  }
  