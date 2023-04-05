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
function getData() {
    fetch(`${fireBase} ${jsonEX}`,)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let userSpreadData = { ...data };
            let myUserEmail = document.getElementById("useremail").value;
            if (userSpreadData.find(myUserEmail) !== undefined) {
                createCurrentUser();
                Object.keys(userSpreadData).forEach((user) => {
                    let userPost = `
                <section class="profile_pic">
                  <picture><img src="account-icon.png" alt="userpicture" /></picture>
                </section>
                <section class="ss">
                  <section class="user_info">
                    <span><h2>${firstName}</h2></span>
                    <span><p>${username}</p> </span>
                  </section>
                  <section class="content">
                    <p>${text}</p>
                    <section>
                      <a href="" class="ctn"><img src="${userImg}" alt="filler" /></a>
                    </section>
                  </section>
                  <section class="reactions">
                    <ul>
                      <li>
                        <a name="" id="" class="btn btn-icon" href="#" role="button"
                          ><img src="chat.png" alt=""
                        /></a>
                      </li>
                      <li>
                        <a name="" id="" class="btn btn-icon" href="#" role="button"
                          ><img src="glass.png" alt=""
                        /></a>
                      </li>
                      <li>
                        <a name="" id="" class="btn btn-icon" href="#" role="button"
                          ><img src="Vector-like.png" alt=""
                        /></a>
                      </li>
                      <li>
                        <a name="" id="" class="btn btn-icon" href="#" role="button"
                          ><img src="Vector-upload.png" alt=""
                        /></a>
                      </li>
                    </ul>
                  </section>
                </section>`;
                    let newArticle = document.createElement("article", { className: "card" });
                    newArticle.innerHTML = userPost
                    document.querySelector("main").appendChild(userPost)
                }(), );
            } else if (userSpreadData.find(myUserEmail) == undefined) {console.log("user not found");}
        },)
        .catch((err) => console.log(err));
};