let fireBase = "https://flutters-5fb55-default-rtdb.firebaseio.com/";
let jsonEX = ".json";
let current = new Date();
let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
let cTime = current.getHours() + ":" + current.getMinutes();
let currentDate = cDate + ' ' + cTime;
console.log(dateTime);
function checkCurrentUser() {
    if (localStorage.getItem("myUser") === null) {
        window.location.replace("signin.html");
    } else {
         myUser = JSON.parse(localStorage.getItem("myUser"))
    }
}
// checkCurrentUser();
function loadPosts() {
    fetch(`${fireBase}/Posts${jsonEX}`, {
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let userSpreadData = {...data};
            console.log(userSpreadData);
            Object.keys(data).forEach((user) => {
                if (user.email == myUser) {
                    let userPost = `
                <section class="profile_pic">
                  <picture><img src="account-icon.png" alt="userpicture" /></picture>
                </section>
                <section class="ss">
                  <section class="user_info">
                    <span><h2></h2></span>
                    <span><p>${user}</p><button class="edit" id="signin" onclick="patchData()">
                    Next
                  </button> </span>
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
                    let node = document.createElement("article", { className: "card" });
                    node.innerHTML = userPost;
                    document.getElementById("main").appendChild(node);
                } else {
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
                    let node = document.createElement("article", { className: "card" });
                    node.innerHTML = userPost;
                    document.getElementById("main").appendChild(node);
                }
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
    fetch(`${fireBase}/Users${jsonEX}`, {
        method: "POST",
        body: JSON.stringify(createUser)
    })
        .then((res) => res.json())
        .then(() => {
            document.getElementById("message").value = "";
            console.log("Verify succeeded");
        })
        .then(() => {window.location.href = 'signin.html';})
        .catch((err) => console.log(err));
};
function patchData() {
    let messageText = document.getElementById("message").value;
    let username = localStorage.getItem("myUser");
    fetch(`${fireBase}/Posts${jsonEX}`, {
        method: "PATCH",
        body: JSON.stringify({
            datePosted: currentDate,
            postedBy: username,
            dob: userdob,
            message: messageText,
        })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};