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
        alert("Password correct! Click 'Ok' to Redirect!!");
        window.location.href = "https://docs.google.com/spreadsheets/d/1JBNarkBVl-tyftruLqZCUSxSLDuly5Yji35RXukBD9o/edit?gid=0#gid=0";
    } else {
        alert("Incorrect password. Please try again.");
    }
}


