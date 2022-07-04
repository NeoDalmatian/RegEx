const inputs = document.querySelectorAll("input"); //this is HTML collection

const patterns = {
  telephone:/^\d{11}$/
};

//validation function
function validate(field, regex){
  if(regex.test(field.value)){
    field.className = "valid" //it gives class="valid"
  }else{
    field.className = "invalid" //it gives class="invalid"
  }
}

//we cant use inputs.addEvent because up above is HTML collection
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    //console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value])
  });
});