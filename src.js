document.addEventListener("DOMContentLoaded", function () {

  console.log("test");
  const inputs = document.querySelectorAll(".options input");

  function handleUpdate() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }

  inputs.forEach(input => input.addEventListener("change", handleUpdate));
  inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));

});
