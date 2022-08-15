import axios from "axios";

const email = document.getElementById("email");
const name = document.getElementById("name");
const buttonRegister = document.getElementById("register-button");

buttonRegister.addEventListener("click", handleWithNewSubscription);

function handleWithNewSubscription() {
  if (email.value === "" || name.value === "") {
    Toastify({
      text: "Por favor, preencha todos os campos",
      duration: 1500,
      style: {
        background: "linear-gradient(to right, #f00, #f00353)",
      },
    }).showToast();

    return;
  }

  axios
    .post("http://localhost:3000/subscriptions", {
      name: name.value,
      email: email.value,
    })
    .then((response) => {
      Toastify({
        text: `${response.data.msg}`,
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #0a202c, #0a102c)",
        },
      }).showToast();

      name.value = "";
      email.value = "";
    });
}
