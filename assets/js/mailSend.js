document.querySelector('.contact-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();
  
    // Gather the form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var minBudget = document.getElementById('minBudget').value;
    var maxBudget = document.getElementById('maxBudget').value;
  
    // Send the form data via email
    fetch('https://nithinbharathi9325@gmail.com/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message,
            minBudget: minBudget,
            maxBudget: maxBudget,
        }),
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => {
      console.error('Error:', error);
    });
  });
  function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;
    var minBudget = document.getElementById('minBudget').value;
    var maxBudget = document.getElementById('maxBudget').value;
    var message = document.getElementById('message').value;
 
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'sendmail.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&phone=' + encodeURIComponent(phone) + '&subject=' + encodeURIComponent(subject) + '&minBudget=' + encodeURIComponent(minBudget) + '&maxBudget=' + encodeURIComponent(maxBudget) + '&message=' + encodeURIComponent(message));
 }
 