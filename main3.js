
    document.getElementById("myButton").onclick = function () {
        location.href = "www.goggle.com";
    };
	function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
    $("body").addClass("js"); 
 

    $(document).ready(function(){ 
            $("#header").append("<div id='hamburger'>Menu</div>"); 
            $("#hamburger").click(function(event){ 
                $("#hamburger").toggleClass("active"); 
                $("#navigation").toggleClass("active"); 
                $("#close").toggleClass("active"); 
                event.preventDefault(); 
            }); 
            $("body").append("<div id='close'>Close</div>"); 
            $("#close").click(function(event){ 
                $("#hamburger").removeClass("active"); 
                $("#navigation").removeClass("active"); 
                $("#close").removeClass("active"); 
                event.preventDefault(); 
            }); 
            $("#page > ul > li > a").click(function(event){ 
                $("#splash").toggle(); 
                event.preventDefault(); 
            }); 
    }); 

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("The Brochure is sent to your email!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}