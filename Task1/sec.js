const thankYou = document.querySelector('#thank-page');
// thankYou.style.display = 'none';

const emailId = document.querySelector('#email-id');
const mobileNumber = document.querySelector('#mobile-number');

// form.addEventListener('submit', function(event) {
//   thankYou.style.display = 'block';
//   emailId.innerText = email;
//   mobileNumber.innerText = `${countryCode}-${mobile}`;
// });
document.getElementById("email-id").innerHTML=localStorage.getItem("data")
document.getElementById("mobile-number").innerHTML=localStorage.getItem("mydata")

