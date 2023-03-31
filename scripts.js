function verifyUser() {
    let username = document.getElementById("username").value;
    let usernumber = document.getElementById("usernumber").value;
    let useremail = document.getElementById("useremail").value;
    let userdob = document.getElementById("userdob").value;
    if (username == "") {
    alert("Name is required");
    return false;
    } 
    if (userdob == "") {
    alert("birthday is required")
    return false;
    }
    if (usernumber == "") {
    alert("phone number is required")
    return false;
    }
    if (useremail == "") {
        alert("Email is required")
        return false;
    } else if (!useremail.includes("@")) {
        alert("Invalid email address")
        return false;
    }
    return true;
}

let sign = document.getElementById("signin");
let userBase = [];
function createUser() {
    if (verifyUser() == true) {
        let username = document.getElementById("username").value;
        let usernumber = document.getElementById("usernumber").value;
        let useremail = document.getElementById("useremail").value;
        let userdob = document.getElementById("userdob").value;


        if (localStorage.getItem("userBase") !== null) {
            userBase = JSON.parse(localStorage.getItem("userBase"))
        }

        userBase.push({
            username: username,
            userdob: userdob,
            useremail: useremail,
            usernumber: usernumber,

        });

        localStorage.setItem("userBase", JSON.stringify(userBase));
        document.getElementById("username").value = "";
        document.getElementById("userdob").value = "";
        document.getElementById("useremail").value = "";
        document.getElementById("usernumber").value = "";
        console.log("Verify succeeded");
        window.location.href = 'signin.html'
    }

    else {
        console.log("Verify failed")
    };
};