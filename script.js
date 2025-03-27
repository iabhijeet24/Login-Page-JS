const password = document.getElementById("password");
const eye = document.getElementById("image");

eye.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        eye.src = "eye-solid.svg"; 
    } else {
        password.type = "password";
        eye.src = "eye-slash-solid.svg"; 
    }
});