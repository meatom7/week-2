let fireBase = "https://flutters-5fb55-default-rtdb.firebaseio.com/";
let jsonEX = ".json";

function createCurrentUser() {
    if (verifyUser() == true) {
        // let username = document.getElementById("username").value;
        // let usernumber = document.getElementById("usernumber").value;
        let useremail = document.getElementById("useremail").value;
        // let userdob = document.getElementById("userdob").value;
        let myUser = [];


        if (localStorage.getItem("myUser") !== null) {
            myUser = JSON.parse(localStorage.getItem("myUser"))
        } else {
            myUser.push({
                // username: username,
                // userdob: userdob,
                useremail: useremail,
                // usernumber: usernumber,
    
            });}


        localStorage.setItem("myUser", JSON.stringify(myUser));
        console.log("Verify succeeded");
        window.location.href = 'index.html';
    }

    else {
        console.log("Verify failed")
    };
};
function checkCurrentUser() {
    if (localStorage.getItem("myUser") === null) {
        window.location.replace("signin.html");
    } else {
         myUser = JSON.parse(localStorage.getItem("myUser"))
    }
}
// checkCurrentUser();

function deleteData() {
    fetch('${fireBase}/da${jsonEX}', {
        method: "DELETE",
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}
function getData() {
    fetch(`${fireBase}${jsonEX}`, {
        method: "GET",
    })
        .then((res) => res.json())
        .then((data) => {
            let userSpreadData = [data]
            let myUserEmail = document.getElementById("useremail").value
            if (Object.values(data).indexOf(myUserEmail) > -1) {
                console.log("Approved", data);
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
                },)();}
            else {
                console.log("user not found");
                document.getElementById("useremail").style.color = "red";
                document.getElementById("useremail").style.border = "solid";
                document.getElementById("useremail").value = "try again"; 
                console.log(Object.values(data));
                console.log(myUserEmail);
            };
        },)
        .catch((err) => console.log(err));
};
function patchData() {
    fetch('${fireBase}${jsonEX}', {
        method: "PATCH",
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            dob: userdob,
            message: [{
                id: 1,
                time: currentDate,
                post: post,
            },
            ],
        })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};
function postData() {

};

function verifyUser() {
    // let username = document.getElementById("username").value;
    // let usernumber = document.getElementById("usernumber").value;
    let useremail = document.getElementById("useremail").value;
    // let userdob = document.getElementById("userdob").value;
    // if (username == "") {
    // alert("Name is required");
    // return false;
    // } 
    // if (userdob == "") {
    // alert("birthday is required")
    // return false;
    // }
    // if (usernumber == "") {
    // alert("phone number is required")
    // return false;
    // }
    if (useremail == "") {
        alert("Email is required")
        return false;
    } else if (!useremail.includes("@")) {
        alert("Invalid email address")
        return false;
    }
    return true;
}
function createNewPost() {
    if (verifyUser === true) {
        let createMessage 
    }
}
function getDatas() {
    fetch(`${fireBase}${jsonEX}`)
        .then((res) => {
            console.log("resolved!", res);
            res.json().then((data) => console.log("JSON Done", data));
        }).then((data) => {
            console.log(data);
        })
    .catch((err) => {
        console.log(err);
    })

};
function gettingData(){
axios.get(`${fireBase}${jsonEX}`)
    .then((res) => {
    console.log("Responsed: ", res);
})
    .catch((e) => {
        console.log("errors", e);
    })
}
function loadPosts() {
    fetch(`${fireBase}/Users${jsonEX}`, {
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let userSpreadData = { ...data };
            console.log(userSpreadData);
                Object.keys(data).forEach((user) => {
                    let userPost = `
                <section class="profile_pic">
                  <picture><img src="account-icon.png" alt="userpicture" /></picture>
                </section>
                <section class="ss">
                  <section class="user_info">
                    <span><h2></h2></span>
                    <span><p></p>${user} </span>
                  </section>
                  <section class="content">
                    <p></p>
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
                    let node = document.createElement("article", {className:"card"});
                    node.innerHTML = userPost;
                    document.getElementById("main").appendChild(node);
                } )();
        },)
        .catch((err) => console.log(err));
};
loadPosts();
function createPost() {
    let messageText = document.getElementById("message").value;
    let userPost = `
    <section class="profile_pic">
      <picture><img src="account-icon.png" alt="userpicture" /></picture>
    </section>
    <section class="ss">
      <section class="user_info">
        <span><h2></h2></span>
        <span><p></p>username </span>
      </section>
      <section class="content">
        <p>${messageText}</p>
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
    let node = document.createElement("article", {className:"card"});
    node.innerHTML = userPost;
    document.getElementById("main").appendChild(node);
}