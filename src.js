document.addEventListener("DOMContentLoaded", function () {

  console.log("test");
  const inputs = document.querySelectorAll(".options input");

  function handleUpdate() {
    console.log(this.value);
  }

  inputs.forEach(input => input.addEventListener("change", handleUpdate));
  inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));

});
