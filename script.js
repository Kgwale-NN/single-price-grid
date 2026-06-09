
window.onload = function() {

  var card = document.getElementById('card');

  setTimeout(function() {
    card.style.opacity = '1';
  }, 100);

};


var signUpBtn = document.getElementById('signUpBtn');
var successMsg = document.getElementById('successMsg');

if (signUpBtn) {
  signUpBtn.addEventListener('click', function() {
    signUpBtn.style.display = 'none';
    successMsg.style.display = 'block';
  });
}


var sendBtn = document.getElementById('sendBtn');
var contactMsg = document.getElementById('contactMsg');

if (sendBtn) {
  sendBtn.addEventListener('click', function() {

    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var message = document.getElementById('messageInput').value;

    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields before sending.');
    } else {
      sendBtn.style.display = 'none';
      contactMsg.style.display = 'block';
    }

  });
}