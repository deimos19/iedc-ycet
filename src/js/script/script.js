const scrollContainer = document.getElementById("scrollContainer");

function scrollLeft() {
    scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
}
function checkPassword() {
    const password = document.getElementById('downloadPassword').value;
    const correctPassword = "1234"; // Change this to your actual password
    if (password === correctPassword) {
        alert("Password correct! Download starting...");
        // Implement actual download logic here
    } else {
        alert("Incorrect password. Please try again.");
    }
}

// function submitForm(event) {
//     event.preventDefault(); // Prevent default form submission

//     const formData = {
//         name: document.getElementById("name").value,
//         branch: document.getElementById("branch").value,
//         semester: document.getElementById("semester").value,
//         phone: document.getElementById("phone").value,
//         email: document.getElementById("email").value,
//         iedcRole: document.getElementById("iedcRole").value
//     };

//     const scriptURL = "https://script.google.com/macros/s/AKfycbw_8-XoNRv5ELxRCQRn6Gz979GOLP6H-4Asz4PHtSttvke_HLwda-3GKVhXM4ltPkWR/exec";

//     fetch(scriptURL, {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: { "Content-Type": "application/json" }
//     })
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById("responseMessage").textContent = "✅ Registration Successful!";
//         document.getElementById("responseMessage").className = "text-success";
//         document.querySelector("form").reset(); // Reset form after submission
//     })
//     .catch(error => {
//         document.getElementById("responseMessage").textContent = "❌ Error submitting form. Try again!";
//         document.getElementById("responseMessage").className = "text-danger";
//     });
// }

const scriptURL = 'https://script.google.com/macros/s/AKfycbw_8-XoNRv5ELxRCQRn6Gz979GOLP6H-4Asz4PHtSttvke_HLwda-3GKVhXM4ltPkWR/exec'

const form = document.forms['reg-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

