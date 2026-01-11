document.getElementById("enquiryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.getElementById("success").textContent = "";

  let valid = true;

  const name = document.getElementById("name").value;
  if (name === "") {
    document.getElementById("nameError").textContent = "Name required";
    valid = false;
  }

  const email = document.getElementById("email").value;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email required";
    valid = false;
  }

  const mobile = document.getElementById("mobile").value;
  if (!/^\d{10}$/.test(mobile)) {
    document.getElementById("mobileError").textContent = "Enter 10 digit number";
    valid = false;
  }

  const message = document.getElementById("message").value;
  if (message.length < 10) {
    document.getElementById("messageError").textContent = "Min 10 characters";
    valid = false;
  }

  const rating = document.querySelector('input[name="rating"]:checked');
  if (!rating) {
    document.getElementById("ratingError").textContent = "Select rating";
    valid = false;
  }
  if (valid) {
    document.getElementById("success").textContent =
      "Thank you! Your enquiry has been successfully submitted.";
    this.reset();
  }
});
