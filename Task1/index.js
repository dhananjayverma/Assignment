const form = document.querySelector('#survey');
 form.addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var countryCode = document.getElementById("countryCode").value;


  localStorage.setItem('data',email)
  localStorage.setItem('mydata',mobile)

   if (!email || !mobile||!countryCode) {
    alert('All fields are required!');
    return;
  }

  if (!email.includes('@')||email.length < 5) {
    alert('You have entered an invalid email address!');
    return;
  }

 if (mobile.length !== 10) {
    alert('You have entered an invalid mobile number!');
    return;
  }
window.location.href="./thankuPage.html"
 
});































