const init = function () {
  if (document.forms.length === 0) return;

  document.getElementById("submit").addEventListener("click", submit);
};

const submit = function (e) {
  e.preventDefault();
  e.stopPropagation();

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (!lastName || !lastName || !email || !message) return;

  let body = JSON.stringify({
    subject: `Apiech: New Message from ${firstName} ${lastName}`,
    firstName,
    lastName,
    email,
    message,
  });

  let status = document.getElementById("status");

  status.textContent = "Sending message, please stand by...";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  };

  fetch(`https://apiech.herokuapp.com/api/v1/mail/message`, options)
    .then((res) => res.json() || res)
    .then((data) => {
      if (data.success) {
        status.textContent = "Message sent successfully. Thank you!";
        status.classList.add("text-green-500");
        document.getElementById(document.forms[0].id).reset();
        return;
      }

      status.textContent =
        "An error occurred while trying to send message. Please try again later.";
      status.classList.add("text-red-500");
    })
    .catch(() => {
      status.textContent =
        "An error occurred while trying to send message. Please try again later.";

      status.classList.add("text-red-500");
    });
};

document.addEventListener("DOMContentLoaded", init);
