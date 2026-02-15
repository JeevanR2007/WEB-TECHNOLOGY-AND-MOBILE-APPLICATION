function validateform() {

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let address = document.getElementById("address").value.trim();

    let namepattern = /^[a-zA-Z]+$/;
    let emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let mobilepattern = /^[0-9]{10}$/;

    // First Name validation
    if (!namepattern.test(fname) || fname.length < 6) {
        alert("First Name must contain only alphabets and at least 6 characters long");
        return false;
    }

    // Last Name validation
    if (lname === "" || !namepattern.test(lname)) {
        alert("Last Name must contain only alphabets and cannot be empty");
        return false;
    }

    // Email validation
    if (!emailpattern.test(email)) {
        alert("Please Enter a valid E-Mail ID");
        return false;
    }

    // Mobile validation
    if (!mobilepattern.test(mobile)) {
        alert("Mobile Number must contain exactly 10 digits");
        return false;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // Address validation
    if (address === "") {
        alert("Address cannot be empty");
        return false;
    }

    alert("Form Submitted Successfully");
    return true;
}

