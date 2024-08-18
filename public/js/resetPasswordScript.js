const form = document.getElementById("resetpassword-form");

const showToast = (message, success = true) => {
  Toastify({
    text: message,
    style: {
      background: success ? "linear-gradient(to right, #00b09b, #96c93d)" : "linear-gradient(to right, #ff5f6d, #ffc371)",
    },
    duration: 3000,
  }).showToast();
};

const handleResponse = (result) => {
  const message =
    result.status === "success" ? "Se ha enviado un correo electrónico con instrucciones para restablecer su contraseña." : `${result.message}`;
  showToast(message, result.status === "success");
};

const handleError = (error) => {
  console.error("Error:", error);
  showToast("Ha ocurrido un error. Por favor, inténtalo de nuevo.", false);
};

const validateFormData = (data) => {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!emailRegex.test(data.get("email"))) {
    showToast("Por favor, introduce un correo electrónico válido.", false);
    return false;
  }
  return true;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const obj = Object.fromEntries(data);

  if (!validateFormData(data)) {
    return;
  }

  fetch("api/sessions/resetpassword", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(handleResponse)
    .catch(handleError);
});