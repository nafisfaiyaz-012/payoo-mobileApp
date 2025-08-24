/* 
//to use this first disable the login button
 document.getElementById('mobile-number-input').addEventListener('keyup',function(event){
    if(event.target.value === '01701748500'){
        document.getElementById("btn-login").disabled = false;
    }
    else{
        document.getElementById("btn-login").disabled = true;
    }
    
})
*/

//login button functionality
document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();
  //normal showed in the class
  const mobileCheck = "01701748500";
  const pinCheck = "48215";
  const mobileNumberInput = document.getElementById(
    "mobile-number-input"
  ).value;
  const pinInput = document.getElementById("pin-input").value;
  // console.log(mobileNumberInput,pinInput);

  if (mobileCheck === mobileNumberInput && pinCheck === pinInput) {
    window.location.href = "home.html";
  } else {
    alert("Invalid Credentials");
  }
});
