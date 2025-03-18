function validateForm() {  // first you define your function
    const name = document.getElementById("fname").value.trim();  // these access the html elements using their ids, trim spaces and assign it to a variable
    const email = document.getElementById("mail").value.trim();
    const experience2 = document.getElementById("experience2").value.trim();
    const checkboxes = document.querySelectorAll('input[name="availability"]'); // the querySelectorAll method is used select all related checkboxes using their similar names
    const interest = document.getElementById("interest").value.trim();
  
  //to check if at least one checkbox is checked
  let isChecked = false;
  checkboxes.forEach(checkboxes => {
    if (checkboxes.checked){
      isChecked = true;
    }
  });
  
  
    if (name === ""){
      alert("Please enter your name.");
      return false;
    }
  
    if (email === "" || !email.includes("@")){
      alert("Please enter your email or include @");
      return false;
    }
  
    if (experience2 === ""){
      alert("Please list the programming languages you are proficient in");
      return false;
    }
  
  if (!isChecked){
    alert("Select your available days");
    return false;
  }
  
  if (interest === ""){
    alert("Please tell us about your interests");
    return false;
  }
  
  alert("Congratulations!!.. Form submitted :)");
    return true;
    
  }
  
  document.getElementById("myForm").addEventListener("submit", 
  function(event){
    if (!validateForm()) {
      event.preventDefault();
    }
  
    });