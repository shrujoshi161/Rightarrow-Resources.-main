/*import email from './email.js';

function sendmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  const serviceID = "service_mv7ie9f";
  const templateID = "template_lejuzas";

  email.send(serviceID, templateID, params)
   .then((result) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(result);
      alert("your message sent successfully");
    })
   .catch((err) => {
      console.log(err);
      alert("Error sending email: " + err.message);
    });
}

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  sendmail();
});*/


export function send(service_mv7ie9, template_lejuzas, params) {
  // Your email sending code here

  email.send(service_mv7ie9, template_lejuzas, params)
   .then((result) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(result);
      alert("your message sent successfully");
    })
   .catch((err) => {
      console.log(err);
      alert("Error sending email: " + err.message);
    });
}

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  sendmail();

});

