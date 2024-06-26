document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          window.scrollTo({
              top: target.offsetTop,
              behavior: 'smooth'
          });
      }
  });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
  }
  if (!isValidPhoneNumber(phone)) {
      alert('Please enter a valid phone number.');
      return;
  }
  alert('Form submitted successfully!');
});

function isValidEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    fetch('YOUR_WEB_APP_URL', {
      method: 'POST',
      body: JSON.stringify({ EmailID:email, PhoneNumber:phone }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.text())
    .then(data => {
      document.getElementById('response-message').innerText = data;
    })
    .catch(error => console.error('Error:', error));
  });



/*
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (!isValidPhoneNumber(phone)) {
        alert('Please enter a valid phone number.');
        return;
    }
    alert('Form submitted successfully!');
});

function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}
*/
