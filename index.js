const form = document.querySelector('#contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const subject = document.querySelector('#subject').value;
  const message = document.querySelector('#message').value;

  const data = {
    name,
    email,
    subject,
    message,
  };

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'taolamoureux@icloud.com');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));
});
