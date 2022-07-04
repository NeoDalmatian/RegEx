const inputs = document.querySelectorAll("input"); //this is HTML collection

const patterns = {
  telephone:/^\d{11}$/
};

//we cant use inputs.addEvent because up above is HTML collection
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    console.log(e.target.attributes.name.value);
  });
});